---
title: Ordinary Differential Equation
date: 2025-10-12
published: 2025-12-08
pinned: false
description: "Introduce some ordinary differential equations"
tags: ["ODE", "Mathematics", "ClassNotes"]
category: ClassNotes
draft: false
---

#### Separable Equation

For a first-order differential equation of separable variables:

$$
M\left( {x} \right)dx + N\left( {y} \right)dy = 0
$$

Intergrate both ends

$$
\int {M\left( x \right)dx}  + \int {N \left( y \right)dy}  = C
$$

#### Homogeneous Equation

For a homogeneous equation

$$
\frac{{dy}}{{dx}} = f\left( {x,y} \right)
$$

$$
f\left( {tx,ty} \right) = f\left( {x,y} \right)
$$

We let $y=xv$ ，$v=v(x)$, so

$$
\frac{{dy}}{{dx}} = v + x\frac{{dv}}{{dx}}
$$

Also, we can solve

$$
\frac{{dx}}{{dy}} = \frac{1}{{f\left( {x,y} \right)}}
$$

Let $x=yu$

$$
\frac{{dx}}{{dy}} = u + y\frac{{du}}{{dy}}
$$

By simplifying, we can have separable equation.

#### Exact Equation

For a equation like

$$
M(x,y)dx+N(x,y)dy=0
$$

If there exists a function that satisfies

$$
dg(x,y)=M(x,y)dx+N(x,y)dy
$$

We call it exact equation.

ps. If $g(x,y)$ exists, it satisfies

$$
\frac{ \partial M(x,y) }{ \partial y } =\frac{ \partial N(x,y) }{ \partial x } 
$$

There exists $g(x, y)$ that satisfie：

$$
\begin{align}
\frac{{\partial g\left( {x,y} \right)}}{{\partial x}} = M\left( {x,y} \right)\\ \frac{{\partial g\left( {x,y} \right)}}{{\partial y}} = N\left( {x,y} \right) \\
\end{align}
$$

For 

$$
M\left( {x,y} \right)dx + N\left( {x,y} \right)dy = 0
$$

Thus

$$
\begin{align}
dg\left( {x,y\left( x \right)} \right)  & = 0 \\   \int {dg\left( {x,y\left( x \right)} \right)}   & = \int {0dx}
\end{align}
$$

We can get

$$
g\left( {x,y} \right) = C
$$

#### Linear Equation

For a first-order equation

$$
y'+p(x)y=q(x)
$$

First

$$
[p(x)y-q(x)]dx+dy=0
$$

We will try to change it to exact equation

$$
I(x)[p(x)y-q(x)]dx+I(x)dy=0
$$

Because

$$
\frac{ \partial I(x)[p(x)y-q(x)] }{ \partial y } =\frac{ \partial I(x) }{ \partial x } 
$$

Let

$$
I\left( x \right) = {e^{\int {p\left( x \right)dx} }}
$$

Muitioy on both sides

$$
I\left( x \right)y' + p\left( x \right)I\left( x \right)y = I\left( x \right)q\left( x \right)
$$

We can discover

$$
I(x)y'+p(x)I(x)y=\frac{d}{dx} (I(x)y(x))
$$

So

$$
\begin{align}
 & \frac{d}{dx} (I(x)y)  =I(x)q(x) \\
 & I(x)y  =\int I(\tau)q(\tau)d\tau+C \\
\end{align}
$$

Finally

$$
y  =\frac{1}{I(x)}\int I(\tau)q(\tau)d\tau+C
$$

#### Bernoulli‍ Equation

For a fitst-order equation

$$
\frac{dy}{dx} + P(x)y = Q(x)y^n

$$

## Second-Order ODE

### Others

#### Euler-Cauchy Equation

For a equation like

$$
ax^2y''+bxy'+cy=0
$$

####  Sturm-Liouville Equation

For a equation like

$$
\frac{d}{dx} \left[ p(x) \frac{dy}{dx} \right] + q(x)y + \lambda r(x)y = 0
$$
