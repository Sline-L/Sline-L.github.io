import type { AstroIntegration } from "astro";
import { close, createIndex } from "pagefind";
import MeiliSearchIndexer from "../../scripts/index-to-meilisearch.mts";
import { navBarSearchConfig } from "../config/index.ts";
import { NavBarSearchMethod } from "../types/config.ts";

/**
 * Astro 集成，用于在构建结束时运行 Search 索引器
 * @returns AstroIntegration
 */
export default function searchIndexer(): AstroIntegration {
	const data: AstroIntegration = {
		name: "search-indexer",
		hooks: {
			"astro:build:done": async () => {
				console.log(
					`${"=".repeat(10)}Running Search Indexer...${"=".repeat(10)}`,
				);
				if (navBarSearchConfig.method === NavBarSearchMethod.MeiliSearch) {
					const meiliSearchConfig = navBarSearchConfig.meiliSearchConfig;
					if (!meiliSearchConfig) {
						process.exit(1);
					}
					const MEILI_MASTER_KEY = process.env.MEILI_MASTER_KEY;
					const indexer = new MeiliSearchIndexer(
						meiliSearchConfig.MEILI_HOST,
						MEILI_MASTER_KEY,
						meiliSearchConfig.INDEX_NAME,
						meiliSearchConfig.CONTENT_DIR,
					);
					await indexer.main();
				} else if (navBarSearchConfig.method === NavBarSearchMethod.PageFind) {
					console.log("Running Pagefind Indexer...");
					const { errors: createErrors, index } = await createIndex({
						excludeSelectors: [
							"span.katex",
							"span.katex-display",
							"[data-pagefind-ignore]",
							".search-panel",
							"#search-panel",
						],
					});
					if (createErrors.length > 0 || !index) {
						throw new Error(
							`Pagefind initialization failed:\n${createErrors.join("\n")}`,
						);
					}
					try {
						const directoryResult = await index.addDirectory({
							path: "dist",
						});
						if (directoryResult.errors.length > 0) {
							throw new Error(directoryResult.errors.join("\n"));
						}

						const writeResult = await index.writeFiles({
							outputPath: "dist/pagefind",
						});
						if (writeResult.errors.length > 0) {
							throw new Error(writeResult.errors.join("\n"));
						}
						console.log(
							`Pagefind indexed ${directoryResult.page_count} page(s).`,
						);
					} finally {
						await close();
					}
				}
				console.log(`${"=".repeat(10)}Search Indexer Done.${"=".repeat(10)}`);
			},
		},
	};
	return data;
}
