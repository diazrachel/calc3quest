(function(){const R=String.raw;
const L6=LEVELS.find(l=>l.id==="151"); L6.sec="Stewart 15.1–15.2";
/* ---------- 15.1 rectangles extra ---------- */
addQ("151",[
{src:"hw",d:"e",type:"in",q:R`Evaluate by thinking of it as a volume: \(\iint_R3\,dA\), \(R=\{6\le x\le10,\ -1\le y\le7\}\).`,answers:[96],e:R`A box with base \(4\times8\) and height 3: \(96\).`},
{src:"hw",d:"m",q:R`\(f(x,y)=5x+3x^2y\). Find \(\int_0^2f(x,y)\,dx\).`,o:[R`\(10+8y\)`,R`\(10+4y\)`,R`\(5+6y\)`,R`\(10x+8xy\)`],a:0,e:R`Treat \(y\) as constant: \(\left[\frac52x^2+x^3y\right]_0^2=10+8y\). The answer depends on \(y\) only.`},
{src:"hw",d:"m",q:R`Same \(f=5x+3x^2y\). Find \(\int_0^3f(x,y)\,dy\).`,o:[R`\(15x+\frac{27}2x^2\)`,R`\(15x+9x^2\)`,R`\(5x+\frac{27}2x^2\)`,R`\(15+27x\)`],a:0,e:R`\(\left[5xy+\frac32x^2y^2\right]_0^3=15x+\frac{27}2x^2\).`},
{src:"hw",d:"m",type:"in",q:R`\(\displaystyle\int_0^2\int_1^3(x^2y-2x)\,dy\,dx\)`,answers:[8/3,"8/3"],e:R`Inner: \(x^2\cdot\frac{9-1}2-2x\cdot2=4x^2-4x\). Outer: \(\frac{32}3-8=\frac83\).`},
{src:"hw",d:"m",type:"in",q:R`\(\displaystyle\int_0^1\int_1^8(x+e^{-y})\,dx\,dy\) (decimal)`,answers:[35.9248],tol:0.005,show:R`\(31.5+7(1-e^{-1})\approx35.925\)`,e:R`Inner (in \(x\)): \(\frac{64-1}2+7e^{-y}\). Outer: \(31.5+7(1-e^{-1})\).`},
{src:"hw",d:"m",type:"in",q:R`\(\iint_R\left(2y+\frac{x}{y^2}\right)dA\), \(R=[0,2]\times[1,2]\).`,answers:[7],e:R`In \(y\): \(\left[y^2-\frac xy\right]_1^2=3+\frac x2\). In \(x\): \(6+1=7\).`},
{src:"hw",d:"h",type:"in",q:R`Volume under \(z=3y^2-x^2+3\) above \(R=[-1,1]\times[1,5]\). (decimal OK)`,answers:[269.3333,"808/3"],tol:0.005,show:R`\(\frac{808}3\approx269.33\)`,e:R`Inner (in \(y\), 1 to 5): \(124-4x^2+12=136-4x^2\). Outer: \(272-\frac83=\frac{808}3\).`},
{src:"cb",d:"m",type:"in",q:R`Average value of \(f=x^2y\) over \([0,2]\times[0,3]\).`,answers:[2],e:R`\(\iint=\frac83\cdot\frac92=12\). Area 6. Average \(=\frac{12}6=2\).`},
{src:"cb",d:"m",type:"in",q:R`\(\displaystyle\int_0^{\pi/2}\int_0^{\pi/2}\sin(x+y)\,dy\,dx\)`,answers:[2],e:R`Inner: \(-\cos(x+\frac\pi2)+\cos x=\sin x+\cos x\). Outer: \([-\cos x+\sin x]_0^{\pi/2}=1-(-1)=2\).`},
{src:"cb",d:"m",type:"in",q:R`Estimate \(\iint_R(x+y)\,dA\), \(R=[0,2]\times[0,2]\), with a midpoint Riemann sum using four \(1\times1\) squares.`,answers:[8],e:R`Midpoints \((.5,.5),(1.5,.5),(.5,1.5),(1.5,1.5)\) give 1, 2, 2, 3. Sum × area 1 = 8.`},
{src:"cb",d:"e",type:"in",q:R`Volume under the plane \(z=4-x-y\) over \([0,1]\times[0,1]\).`,answers:[3],e:R`\(\int_0^1\int_0^1(4-x-y)\,dy\,dx=4-\frac12-\frac12=3\).`},
{src:"cb",d:"m",q:R`True or false: \(\iint_R f(x,y)g(x,y)\,dA=\left(\iint_Rf\,dA\right)\left(\iint_Rg\,dA\right)\).`,o:[R`False`,R`True`],a:0,e:R`The product shortcut only works on a rectangle for \(f=g(x)h(y)\), splitting into one-variable integrals.`},
{src:"cb",d:"h",q:R`For \(\iint_{[0,1]\times[0,2]}xe^{xy}\,dA\), which order is easier?`,o:[R`\(dy\) first: \(\int xe^{xy}dy=e^{xy}\)`,R`\(dx\) first`,R`Both are equally easy`,R`Neither works`],a:0,e:R`With \(dy\) first, \(x\) is a constant and the inner integral is just \(e^{xy}\). With \(dx\) first you'd need integration by parts.`},
{src:"cb",d:"h",type:"in",q:R`Evaluate \(\iint_{[0,1]\times[0,2]}xe^{xy}\,dA\). (decimal)`,answers:[2.19453,"(e^2-3)/2"],tol:0.003,show:R`\(\frac{e^2-3}2\approx2.195\)`,e:R`Inner: \(e^{2x}-1\). Outer: \(\frac{e^2-1}2-1=\frac{e^2-3}2\).`}
]);

/* ---------- 15.2 general regions extra ---------- */
const tri=SVG.region({x0:-0.4,x1:2.6,y0:-0.5,y1:4.6,a:0,b:2,lo:x=>0,hi:x=>2*x,labels:[[1.15,2.8,"y = 2x","--sky"],[2.05,-0.25,"2"],[-0.35,4.0,"4"]],label:"triangle under y=2x"});
addQ("151",[
{src:"hw",d:"m",type:"in",q:R`\(\displaystyle\int_0^2\int_0^{y}x^2y\,dx\,dy\)`,answers:[32/15,"32/15"],e:R`Inner: \(\frac{y^3}3\cdot y=\frac{y^4}3\). Outer: \(\frac{32}{15}\).`},
{src:"hw",d:"h",type:"in",q:R`\(\iint_D6y\,dA\), \(D\) between \(y=x\) and \(y=3x-x^2\) for \(0\le x\le2\). (decimal OK)`,answers:[11.2,"56/5"],e:R`\(\int_0^2\int_x^{3x-x^2}6y\,dy\,dx=\int_0^2 3\big[(3x-x^2)^2-x^2\big]dx=\int_0^2(24x^2-18x^3+3x^4)dx=64-72+19.2=11.2\).`},
{src:"hw",d:"m",q:R`\(D\) is enclosed by \(y=x^2\) and \(y=4x\). Express \(D\) as type I.`,o:[R`\(0\le x\le4,\ x^2\le y\le4x\)`,R`\(0\le x\le16,\ x^2\le y\le4x\)`,R`\(0\le x\le4,\ 4x\le y\le x^2\)`,R`\(0\le y\le16,\ x^2\le y\le4x\)`],a:0,e:R`They meet at \(x^2=4x\Rightarrow x=0,4\). Between them \(4x\) is on top.`},
{src:"hw",d:"m",q:R`Same \(D\). Express it as type II.`,o:[R`\(0\le y\le16,\ \frac y4\le x\le\sqrt y\)`,R`\(0\le y\le4,\ \frac y4\le x\le\sqrt y\)`,R`\(0\le y\le16,\ \sqrt y\le x\le\frac y4\)`,R`\(0\le y\le16,\ 4\le x\le\sqrt y\)`],a:0,e:R`Solve for \(x\): \(x=\frac y4\) (left, from the line) and \(x=\sqrt y\) (right, from the parabola). \(y\) goes up to \(4\cdot4=16\).`},
{src:"hw",d:"h",type:"in",q:R`Same \(D\). Evaluate \(\iint_Dxy\,dA\). (decimal OK)`,answers:[170.6667,"512/3"],tol:0.005,show:R`\(\frac{512}3\approx170.67\)`,e:R`\(\int_0^4x\cdot\frac{16x^2-x^4}2dx=\int_0^4(8x^3-\frac{x^5}2)dx=512-\frac{1024}3=\frac{512}3\).`},
{src:"hw",d:"m",type:"in",q:R`Volume of the tetrahedron bounded by the coordinate planes and \(x+2y+z=4\). (decimal OK)`,answers:[5.3333,"16/3"],tol:0.003,show:R`\(\frac{16}3\)`,e:R`\(\int_0^4\int_0^{(4-x)/2}(4-x-2y)\,dy\,dx=\frac{16}3\). Shortcut: intercepts 4, 2, 4, and \(V=\frac16abc=\frac{32}6\).`},
{src:"hw",d:"h",type:"in",q:R`Reverse the order to evaluate \(\displaystyle\int_0^1\int_{\sqrt y}^1\sqrt{x^3+1}\,dx\,dy\). (decimal)`,answers:[0.40632],tol:0.002,show:R`\(\frac29(2\sqrt2-1)\approx0.406\)`,e:R`Region: \(0\le y\le x^2\), \(0\le x\le1\). \(\int_0^1x^2\sqrt{x^3+1}\,dx=\frac29(x^3+1)^{3/2}\Big|_0^1=\frac29(2\sqrt2-1)\).`},
{src:"rev",d:"m",q:R`Set up \(\iint_Rf\,dA\) over the shaded triangle with order \(dy\,dx\).${tri}`,o:[R`\(\int_0^2\int_0^{2x}f\,dy\,dx\)`,R`\(\int_0^4\int_0^{2x}f\,dy\,dx\)`,R`\(\int_0^2\int_{2x}^4f\,dy\,dx\)`,R`\(\int_0^2\int_0^{2}f\,dy\,dx\)`],a:0,e:R`Vertical arrow enters at \(y=0\), exits at \(y=2x\). \(x\) from 0 to 2.`},
{src:"rev",d:"m",q:R`Same triangle, order \(dx\,dy\).`,o:[R`\(\int_0^4\int_{y/2}^{2}f\,dx\,dy\)`,R`\(\int_0^4\int_0^{y/2}f\,dx\,dy\)`,R`\(\int_0^2\int_{y/2}^{2}f\,dx\,dy\)`,R`\(\int_0^4\int_{2y}^{2}f\,dx\,dy\)`],a:0,e:R`Horizontal arrow enters at the line \(x=\frac y2\), exits at \(x=2\). \(y\) from 0 to 4.`},
{src:"rev",d:"m",q:R`\(R\) is bounded by \(y=x^2\), \(y=4\), and \(x=0\) (first quadrant). Order \(dx\,dy\)?`,o:[R`\(\int_0^4\int_0^{\sqrt y}f\,dx\,dy\)`,R`\(\int_0^2\int_{x^2}^{4}f\,dx\,dy\)`,R`\(\int_0^4\int_{\sqrt y}^{2}f\,dx\,dy\)`,R`\(\int_0^2\int_0^{\sqrt y}f\,dx\,dy\)`],a:0,e:R`Region is left of the parabola: \(x\) from 0 to \(\sqrt y\).`},
{src:"rev",d:"m",q:R`Reverse \(\displaystyle\int_0^2\int_{y^2}^{4}f\,dx\,dy\).`,o:[R`\(\int_0^4\int_0^{\sqrt x}f\,dy\,dx\)`,R`\(\int_0^4\int_{\sqrt x}^{2}f\,dy\,dx\)`,R`\(\int_0^2\int_0^{x^2}f\,dy\,dx\)`,R`\(\int_{y^2}^4\int_0^2f\,dy\,dx\)`],a:0,e:R`Region: \(0\le y\le2\), \(y^2\le x\le4\) means \(y\le\sqrt x\). So \(0\le x\le4\), \(0\le y\le\sqrt x\).`},
{src:"rev",d:"h",q:R`Reverse \(\displaystyle\int_{-1}^{1}\int_{x^2}^{1}f\,dy\,dx\).`,o:[R`\(\int_0^1\int_{-\sqrt y}^{\sqrt y}f\,dx\,dy\)`,R`\(\int_{-1}^1\int_0^{\sqrt y}f\,dx\,dy\)`,R`\(\int_0^1\int_0^{\sqrt y}f\,dx\,dy\)`,R`\(\int_0^1\int_{y^2}^{1}f\,dx\,dy\)`],a:0,e:R`Same shape as Review #15: parabola up to a line. Left side \(-\sqrt y\), right side \(\sqrt y\).`},
{src:"cb",d:"h",type:"in",q:R`\(\iint_D(x+2y)\,dA\), \(D\) between \(y=2x^2\) and \(y=1+x^2\). (decimal OK)`,answers:[2.1333,"32/15"],tol:0.003,show:R`\(\frac{32}{15}\)`,e:R`They meet at \(x=\pm1\). \(\int_{-1}^1\big[xy+y^2\big]_{2x^2}^{1+x^2}dx=\int_{-1}^1(x-x^3+1+2x^2-3x^4)\,dx=0+2+\frac43-\frac65=\frac{32}{15}\).`},
{src:"cb",d:"h",type:"in",q:R`Volume under \(z=x^2+y^2\) above the region between \(y=x^2\) and \(y=x\). (decimal OK)`,answers:[0.085714,"3/35"],tol:0.001,show:R`\(\frac3{35}\)`,e:R`\(\int_0^1\int_{x^2}^{x}(x^2+y^2)\,dy\,dx=\int_0^1\left(x^3-x^4+\frac{x^3-x^6}3\right)dx=\frac14-\frac15+\frac1{12}-\frac1{21}=\frac3{35}\).`},
{src:"cb",d:"m",type:"in",q:R`Use a double integral: area between \(y=x^2\) and \(y=2-x^2\). (decimal OK)`,answers:[2.6667,"8/3"],tol:0.003,show:R`\(\frac83\)`,e:R`Meet at \(x=\pm1\). \(\int_{-1}^1(2-2x^2)\,dx=4-\frac43=\frac83\).`},
{src:"cb",d:"h",q:R`Region bounded by \(y=x\), \(y=0\), \(x+y=2\). Which setup uses a <b>single</b> double integral?`,o:[R`\(\int_0^1\int_{y}^{2-y}f\,dx\,dy\)`,R`\(\int_0^2\int_0^{x}f\,dy\,dx\)`,R`\(\int_0^1\int_0^{2-x}f\,dy\,dx\)`,R`\(\int_0^2\int_y^{2}f\,dx\,dy\)`],a:0,e:R`With \(dy\,dx\) the top boundary switches at \(x=1\) (needs two integrals). Horizontal strips go from \(x=y\) to \(x=2-y\) all the way.`},
{src:"cb",d:"m",q:R`True or false: after reversing the order, an outer bound can contain a variable.`,o:[R`False`,R`True`],a:0,e:R`The outer integral's bounds must be numbers, or the answer wouldn't be a number.`},
{src:"cb",d:"m",q:R`\(D\) is the disk \(x^2+y^2\le4\). \(\iint_Dx\,dA=\)?`,o:[R`0, by symmetry`,R`\(4\pi\)`,R`\(2\pi\)`,R`It can't be found without polar`],a:0,e:R`\(x\) is odd and the disk is symmetric about the \(y\)-axis, so positive and negative parts cancel.`},
{src:"cb",d:"h",q:R`Reverse and evaluate \(\displaystyle\int_0^3\int_y^3e^{x^2}\,dx\,dy\).`,o:[R`\(\frac{e^9-1}2\)`,R`\(e^9-1\)`,R`\(\frac{e^9}2\)`,R`\(3e^9\)`],a:0,e:R`Region: \(0\le y\le x\le3\). \(\int_0^3\int_0^x e^{x^2}dy\,dx=\int_0^3xe^{x^2}dx=\frac{e^9-1}2\).`}
]);

/* ---------- Polar (bonus) ---------- */
const ann=SVG.sector({R:2,r0:1,t0:0,t1:Math.PI/2,label:"quarter annulus"});
const half=SVG.sector({R:1,t0:-Math.PI/4,t1:3*Math.PI/4,label:"half disk tilted"});
const disk=SVG.sector({R:10,t0:0,t1:2*Math.PI,label:"disk radius 10"});
LEVELS.push({id:"153",day:6,bonus:true,sec:"Stewart 15.3 · Bonus",name:"Double Integrals in Polar",
lesson:[
{t:"Is this on Test 2?",b:R`
<p>Your 15.3 Polar homework is due <b>Thu Oct 22</b>, the day <i>after</i> the test, and polar isn't on the review sheet. So it probably isn't on Test 2. <b>Ask your professor or check the syllabus.</b></p>
<p>If you have time after Day 6, play this level. It's quick, and it's also good practice for setting up double integrals.</p>`},
{t:"Polar coordinates in 30 seconds",b:R`
<p>\(x=r\cos\theta\), \(y=r\sin\theta\), and \(x^2+y^2=r^2\).</p>
<p>\(r\) is the distance from the origin, \(\theta\) is the angle from the positive \(x\)-axis.</p>
<p><b>Use polar when you see circles</b>: disks, rings (annuli), pie slices, or the expression \(x^2+y^2\).</p>
<div class="ex"><span class="lab">Regions</span><p>Disk radius \(a\): \(0\le r\le a,\ 0\le\theta\le2\pi\).<br>Upper half-disk: \(0\le\theta\le\pi\).<br>Ring between radii 1 and 2: \(1\le r\le2\).<br>First quadrant: \(0\le\theta\le\frac\pi2\).</p></div>`},
{t:"The formula (don't forget the r!)",b:R`
<p>\[\iint_Rf(x,y)\,dA=\int_\alpha^\beta\int_a^b f(r\cos\theta,\,r\sin\theta)\,\mathbf{r}\,dr\,d\theta\]</p>
<p>\(dA=r\,dr\,d\theta\), not \(dr\,d\theta\). A polar "rectangle" gets wider the farther out you go, and the extra \(r\) accounts for that.</p>
<div class="ex"><span class="lab">Example: \(\iint_D(x^2+y^2)\,dA\), \(D\) = unit disk</span>
<p>\(\int_0^{2\pi}\int_0^1r^2\cdot r\,dr\,d\theta=2\pi\cdot\frac14=\frac\pi2\).</p></div>
<div class="ex"><span class="lab">Example: \(\iint_R(3x-y)\,dA\), \(R\) in the first quadrant inside \(x^2+y^2=25\), between \(x=0\) and \(y=x\)</span>
<p>\(y=x\) is \(\theta=\frac\pi4\); \(x=0\) is \(\theta=\frac\pi2\). So \(\frac\pi4\le\theta\le\frac\pi2\), \(0\le r\le5\).</p>
<p>\(\int_{\pi/4}^{\pi/2}\int_0^5(3r\cos\theta-r\sin\theta)\,r\,dr\,d\theta=\frac{125}3\big[3\sin\theta+\cos\theta\big]_{\pi/4}^{\pi/2}=\frac{125}3(3-2\sqrt2)\approx7.15\).</p></div>`},
{t:"Converting a dy dx integral",b:R`
<p>\(\int_0^2\int_0^{\sqrt{4-x^2}}e^{-x^2-y^2}\,dy\,dx\): the region is \(0\le y\le\sqrt{4-x^2}\), \(0\le x\le2\): a quarter disk of radius 2.</p>
<p>\(\int_0^{\pi/2}\int_0^2e^{-r^2}\,r\,dr\,d\theta=\frac\pi2\cdot\frac12(1-e^{-4})\approx0.771\).</p>
<div class="tip"><b>Volume:</b> under \(z=f\) and above the region: integrate \(f\). Between two surfaces: integrate (top − bottom). Find the region by setting them equal.</div>`}
],
quest:[
{src:"hw",d:"e",q:R`Which coordinates and which integral fit this region?${ann}`,o:[R`Polar: \(\int_0^{\pi/2}\int_1^2f(r\cos\theta,r\sin\theta)\,r\,dr\,d\theta\)`,R`Polar: \(\int_0^{\pi/2}\int_0^2f\,r\,dr\,d\theta\)`,R`Rectangular: \(\int_1^2\int_1^2f\,dy\,dx\)`,R`Polar: \(\int_0^{\pi/2}\int_1^2f(r,\theta)\,dr\,d\theta\)`],a:0,e:R`A quarter ring: \(1\le r\le2\), first quadrant. Don't forget the \(r\), and plug in \(r\cos\theta,r\sin\theta\).`},
{src:"hw",d:"m",q:R`Write \(\iint_Rf\,dA\) for this region.${half}`,o:[R`\(\int_{-\pi/4}^{3\pi/4}\int_0^1f(r\cos\theta,r\sin\theta)\,r\,dr\,d\theta\)`,R`\(\int_{-\pi/4}^{3\pi/4}\int_0^1f(r,\theta)\,dr\,d\theta\)`,R`\(\int_{-1}^1\int_{-x}^1f\,dy\,dx\)`,R`\(\int_0^{\pi}\int_0^1f\,r\,dr\,d\theta\)`],a:0,e:R`Half a unit disk, from angle \(-\frac\pi4\) to \(\frac{3\pi}4\) (the side above \(y=-x\)).`},
{src:"hw",d:"m",q:R`Write \(\iint_Rf\,dA\) for this region.${disk}`,o:[R`\(\int_0^{2\pi}\int_0^{10}f(r\cos\theta,r\sin\theta)\,r\,dr\,d\theta\)`,R`\(\int_0^{2\pi}\int_8^{10}f(r\cos\theta,r\sin\theta)\,r\,dr\,d\theta\)`,R`\(\int_0^{2\pi}\int_0^{10}f(r,\theta)\,r\,dr\,d\theta\)`,R`\(\int_{-10}^{10}\int_0^xf\,dy\,dx\)`],a:0,e:R`A full disk of radius 10. The integrand must be written in \(r\) and \(\theta\) through \(x=r\cos\theta,\ y=r\sin\theta\).`},
{src:"hw",d:"h",type:"in",q:R`\(\iint_R(4x-y)\,dA\), \(R\) in the first quadrant inside \(x^2+y^2=16\), between \(x=0\) and \(y=x\). (decimal)`,answers:[9.9087],tol:0.005,show:R`\(\frac{64}3\left(4-\frac{5\sqrt2}2\right)\approx9.909\)`,e:R`\(\frac\pi4\le\theta\le\frac\pi2\), \(0\le r\le4\). \(\frac{64}3\big[4\sin\theta+\cos\theta\big]_{\pi/4}^{\pi/2}=\frac{64}3\left(4-\frac{5\sqrt2}2\right)\).`},
{src:"hw",d:"h",type:"in",q:R`\(\iint_D2x^2y\,dA\), \(D\) = top half of the disk of radius 4 centered at the origin. (decimal OK)`,answers:[273.0667,"4096/15"],tol:0.01,show:R`\(\frac{4096}{15}\approx273.07\)`,e:R`\(\int_0^\pi\int_0^42r^3\cos^2\theta\sin\theta\cdot r\,dr\,d\theta=2\cdot\frac{4^5}5\cdot\frac23=\frac{4096}{15}\).`},
{src:"hw",d:"h",type:"in",q:R`Volume bounded by \(z=10+2x^2+2y^2\) and \(z=16\) in the first octant. (decimal)`,answers:[7.06858,"9pi/4"],tol:0.005,show:R`\(\frac{9\pi}4\approx7.069\)`,e:R`They meet at \(r^2=3\). \(\int_0^{\pi/2}\int_0^{\sqrt3}(6-2r^2)\,r\,dr\,d\theta=\frac\pi2\left[3r^2-\frac{r^4}2\right]_0^{\sqrt3}=\frac\pi2\cdot\frac92\).`},
{src:"hw",d:"m",type:"in",q:R`\(\displaystyle\int_0^2\int_0^{\sqrt{4-x^2}}e^{-x^2-y^2}\,dy\,dx\) (decimal)`,answers:[0.77101],tol:0.002,show:R`\(\frac\pi4(1-e^{-4})\approx0.771\)`,e:R`Quarter disk of radius 2. \(\frac\pi2\cdot\frac12(1-e^{-4})\).`},
{src:"cb",d:"e",type:"in",q:R`Area of the disk of radius 3 using \(\int\int r\,dr\,d\theta\). (decimal OK)`,answers:[28.2743,"9pi"],tol:0.005,show:R`\(9\pi\)`,e:R`\(2\pi\cdot\frac92=9\pi\).`},
{src:"cb",d:"e",q:R`Why is there an extra \(r\) in \(dA=r\,dr\,d\theta\)?`,o:[R`A small polar patch has area about \(r\,\Delta r\,\Delta\theta\); it gets bigger the farther out it is`,R`It cancels the \(\theta\)`,R`It's only needed for full circles`,R`Because \(x=r\)`],a:0,e:R`The arc length of the patch is \(r\Delta\theta\).`},
{src:"cb",d:"m",type:"in",q:R`\(\iint_D\frac{1}{x^2+y^2}\,dA\), \(D\) is the ring \(1\le x^2+y^2\le4\). (decimal)`,answers:[4.35517,"2pi ln2"],tol:0.005,show:R`\(2\pi\ln2\approx4.355\)`,e:R`\(\int_0^{2\pi}\int_1^2\frac1{r^2}\,r\,dr\,d\theta=2\pi\ln2\).`},
{src:"cb",d:"h",q:R`The circle \(x^2+y^2=4y\) in polar is…`,o:[R`\(r=4\sin\theta\)`,R`\(r=4\cos\theta\)`,R`\(r=2\)`,R`\(r^2=4\)`],a:0,e:R`\(r^2=4r\sin\theta\Rightarrow r=4\sin\theta\).`},
{src:"cb",d:"m",type:"in",q:R`\(\iint_D(x^2+y^2)^{3/2}\,dA\), \(D\) = unit disk. (decimal)`,answers:[1.25664,"2pi/5"],tol:0.002,show:R`\(\frac{2\pi}5\)`,e:R`\(\int_0^{2\pi}\int_0^1r^3\cdot r\,dr\,d\theta=\frac{2\pi}5\).`},
{src:"cb",d:"e",q:R`True or false: in polar, \(dA=dr\,d\theta\).`,o:[R`False`,R`True`],a:0,e:R`It's \(r\,dr\,d\theta\).`},
{src:"cb",d:"m",q:R`The region between the circles \(r=2\) and \(r=5\) in the upper half-plane is…`,o:[R`\(0\le\theta\le\pi,\ 2\le r\le5\)`,R`\(0\le\theta\le2\pi,\ 2\le r\le5\)`,R`\(0\le\theta\le\pi,\ 0\le r\le5\)`,R`\(-\frac\pi2\le\theta\le\frac\pi2,\ 2\le r\le5\)`],a:0,e:R`Upper half: angles 0 to \(\pi\).`}
],
boss:[
{tag:"HW-style",q:R`Evaluate \(\iint_R(3x-y)\,dA\), where \(R\) is in the first quadrant, inside \(x^2+y^2=25\), between \(x=0\) and \(y=x\).`,s:[
R`Bounds: \(y=x\) is \(\theta=\frac\pi4\), \(x=0\) is \(\theta=\frac\pi2\). \(0\le r\le5\).`,
R`\(\int_{\pi/4}^{\pi/2}\int_0^5(3r\cos\theta-r\sin\theta)\,r\,dr\,d\theta=\int_{\pi/4}^{\pi/2}(3\cos\theta-\sin\theta)\,d\theta\cdot\frac{125}3\).`,
R`\(\big[3\sin\theta+\cos\theta\big]_{\pi/4}^{\pi/2}=3-\left(\frac{3\sqrt2}2+\frac{\sqrt2}2\right)=3-2\sqrt2\).`,
R`Answer: \(\frac{125}3(3-2\sqrt2)\approx7.15\).`]},
{tag:"HW-style",q:R`Use polar coordinates to find the volume bounded by \(z=10+2x^2+2y^2\) and \(z=16\) in the first octant.`,s:[
R`Top \(z=16\), bottom \(z=10+2r^2\). Height \(6-2r^2\).`,
R`Region: they meet where \(2r^2=6\Rightarrow r=\sqrt3\). First octant: \(0\le\theta\le\frac\pi2\).`,
R`\(\int_0^{\pi/2}\int_0^{\sqrt3}(6-2r^2)\,r\,dr\,d\theta=\frac\pi2\left[3r^2-\frac{r^4}2\right]_0^{\sqrt3}=\frac\pi2\cdot\frac92=\frac{9\pi}4\).`]}
],
vault:R`<ul><li>\(x=r\cos\theta\), \(y=r\sin\theta\), \(x^2+y^2=r^2\), \(dA=r\,dr\,d\theta\).</li><li>Use polar for disks, rings, sectors, or \(x^2+y^2\).</li></ul>`
});
})();
