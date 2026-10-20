(function(){const R=String.raw;
LEVELS.push({id:"fin",day:7,sec:"All sections",name:"Final Boss: Practice Test",final:true,
quest:[],gauntlet:true,
bossIntro:R`A brand-new practice test in the style of Test 2. None of these are on the review sheet. Set a timer for 75 minutes, put your notes away, and work every problem on paper before revealing anything. Then grade yourself and go back to the level for anything you missed.`,
boss:[
{tag:"Fill in · Domain",q:R`Find the domain of \(f(x,y)=\ln(x^2+y^2-4)\) and describe it.`,s:[
R`Need \(x^2+y^2-4>0\), so \(x^2+y^2>4\).`,
R`Domain: all points <b>outside</b> the circle of radius 2 centered at the origin (circle drawn dashed, not included). Range: all real numbers.`]},
{tag:"Free response · Limit",q:R`\(\displaystyle\lim_{(x,y)\to(0,0)}\frac{x^2y}{x^4+y^2}\)`,s:[
R`Plug in: \(\frac00\). Try paths.`,
R`Along \(y=0\): 0. Along \(x=0\): 0. Lines \(y=mx\): \(\frac{mx^3}{x^4+m^2x^2}=\frac{mx}{x^2+m^2}\to0\). All lines agree, so try a curve.`,
R`Along \(y=x^2\): \(\frac{x^4}{x^4+x^4}=\frac12\).`,
R`\(0\ne\frac12\), so the limit <b>does not exist</b>.`]},
{tag:"Free response · Limit",q:R`\(\displaystyle\lim_{(x,y)\to(0,0)}\frac{x^3+y^3}{x+y}\)`,s:[
R`Sum of cubes: \(x^3+y^3=(x+y)(x^2-xy+y^2)\).`,
R`Cancel: \(x^2-xy+y^2\to0\). The limit is <b>0</b>.`]},
{tag:"Fill in · Surfaces",q:R`Name the surface and describe its traces or level curves: \(x^2-y^2+z^2=-4\).`,s:[
R`All three variables, all squared. Divide by \(-4\): \(-\frac{x^2}4+\frac{y^2}4-\frac{z^2}4=1\).`,
R`Two minus signs → <b>hyperboloid of two sheets</b>, opening along the \(y\)-axis.`,
R`Traces \(y=k\): \(x^2+z^2=k^2-4\). Empty for \(|k|<2\), a point at \(|k|=2\), circles for \(|k|>2\).`]},
{tag:"Fill in · Clairaut",q:R`For \(f=x^3y^2+e^{xy}\), verify that \(f_{xy}=f_{yx}\).`,s:[
R`\(f_x=3x^2y^2+ye^{xy}\) → \(f_{xy}=6x^2y+e^{xy}+xye^{xy}\).`,
R`\(f_y=2x^3y+xe^{xy}\) → \(f_{yx}=6x^2y+e^{xy}+xye^{xy}\). Equal, as Clairaut's Theorem predicts.`]},
{tag:"Free response · Tangent plane",q:R`\(f(x,y)=x^2y+y^3\). (a) Tangent plane at \((1,2)\). (b) Use it to approximate \(f(0.9,\,2.1)\).`,s:[
R`\(f(1,2)=2+8=10\). \(f_x=2xy\to4\). \(f_y=x^2+3y^2\to13\).`,
R`(a) \(z-10=4(x-1)+13(y-2)\).`,
R`(b) \(f(0.9,2.1)\approx10+4(-0.1)+13(0.1)=10.9\).`]},
{tag:"Free response · Gradient",q:R`\(f(x,y)=xe^y\) at \((2,0)\). (a) \(\nabla f(2,0)\). (b) \(D_{\mathbf u}f(2,0)\) in the direction of \(\langle1,1\rangle\). (c) Maximum rate of change and its direction.`,s:[
R`(a) \(\nabla f=\langle e^y,xe^y\rangle\), so \(\nabla f(2,0)=\langle1,2\rangle\).`,
R`(b) \(\mathbf u=\langle\frac1{\sqrt2},\frac1{\sqrt2}\rangle\). \(D_{\mathbf u}f=\frac{1+2}{\sqrt2}=\frac3{\sqrt2}\).`,
R`(c) Max rate \(|\langle1,2\rangle|=\sqrt5\), in the direction \(\langle1,2\rangle\).`]},
{tag:"Free response · Chain rule",q:R`\(z=x^2y\), \(x=s\cos t\), \(y=s\sin t\). Find \(\frac{\partial z}{\partial t}\).`,s:[
R`\(z_x=2xy\), \(z_y=x^2\). \(x_t=-s\sin t\), \(y_t=s\cos t\).`,
R`\(\frac{\partial z}{\partial t}=2xy(-s\sin t)+x^2(s\cos t)\).`,
R`In terms of \(s,t\): \(-2s^3\cos t\sin^2t+s^3\cos^3t\).`]},
{tag:"Free response · Max/Min",q:R`Find and classify all critical points of \(f(x,y)=x^3-12x+y^2-4y\).`,s:[
R`\(f_x=3x^2-12=0\Rightarrow x=\pm2\). \(f_y=2y-4=0\Rightarrow y=2\).`,
R`Critical points: \((2,2)\), \((-2,2)\).`,
R`\(f_{xx}=6x\), \(f_{yy}=2\), \(f_{xy}=0\). \(D=12x\).`,
R`\((2,2)\): \(D=24>0\), \(f_{xx}=12>0\) → local min. \((-2,2)\): \(D=-24<0\) → saddle point.`]},
{tag:"Free response · Double integral",q:R`\(R\) is bounded by \(y=x^2\) and \(y=2x\). Set up \(\iint_R x\,dA\) both ways and evaluate.`,s:[
R`Intersections: \(x^2=2x\Rightarrow x=0,2\). On \([0,2]\), \(2x\ge x^2\).`,
R`\(dy\,dx\): \(\int_0^2\int_{x^2}^{2x}x\,dy\,dx\). \(dx\,dy\): \(\int_0^4\int_{y/2}^{\sqrt y}x\,dx\,dy\).`,
R`Evaluate: \(\int_0^2x(2x-x^2)\,dx=\int_0^2(2x^2-x^3)\,dx=\frac{16}3-4=\frac43\).`]},
{tag:"Free response · Reverse order",q:R`Reverse the order and evaluate \(\displaystyle\int_0^1\int_y^1\sin(x^2)\,dx\,dy\).`,s:[
R`Region: \(0\le y\le1\), \(y\le x\le1\). Triangle with corners \((0,0),(1,0),(1,1)\).`,
R`Vertical strips: \(0\le y\le x\), \(0\le x\le1\). \(\int_0^1\int_0^x\sin(x^2)\,dy\,dx=\int_0^1x\sin(x^2)\,dx\).`,
R`\(u=x^2\): \(\frac12\int_0^1\sin u\,du=\frac{1-\cos1}{2}\approx0.230\).`]}
]
});
})();
