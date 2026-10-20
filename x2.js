(function(){const R=String.raw;
/* ---------- 14.2 extra ---------- */
addQ("142",[
{src:"hw",d:"e",q:R`Suppose \(\displaystyle\lim_{(x,y)\to(5,2)}f(x,y)=7\). What can you say about \(f(5,2)\)?`,o:[R`In general, nothing`,R`\(f(5,2)=7\)`,R`\(f(5,2)\) is undefined`,R`\(f(5,2)=\infty\)`],a:0,e:R`A limit says what happens <i>near</i> the point, not <i>at</i> it. \(f(5,2)\) could be anything or undefined.`},
{src:"hw",d:"e",q:R`Same limit (7), but now \(f\) is <b>continuous</b>. What is \(f(5,2)\)?`,o:[R`\(f(5,2)=7\)`,R`Nothing can be said`,R`0`,R`\(f(5,2)\ne7\)`],a:0,e:R`Continuous means the limit equals the value.`},
{src:"hw",d:"e",type:"in",q:R`\(\displaystyle\lim_{(x,y)\to(4,2)}(x^2y^3-6y^2)\)`,answers:[104],e:R`Polynomial, plug in: \(16\cdot8-24=104\).`},
{src:"hw",d:"m",type:"in",q:R`\(\displaystyle\lim_{(x,y)\to(8,-2)}\frac{x^2y+xy^2}{x^2-y^2}\)`,answers:[-1.6,"-8/5"],e:R`Factor: \(\frac{xy(x+y)}{(x-y)(x+y)}=\frac{xy}{x-y}=\frac{-16}{10}=-1.6\). (Plugging straight in also works since the denominator is \(64-4\ne0\).)`},
{src:"hw",d:"m",type:"in",q:R`\(\displaystyle\lim_{(x,y)\to(3,5)}\frac{2x-y}{4x^2-y^2}\)`,answers:[1/11,"1/11"],e:R`Denominator \(36-25=11\ne0\), so plug in: \(\frac{6-5}{11}=\frac1{11}\).`},
{src:"hw",d:"m",type:"in",q:R`\(\displaystyle\lim_{(x,y)\to(1,2)}\frac{2x-y}{4x^2-y^2}\)`,answers:[0.25,"1/4"],e:R`Now plugging in gives \(\frac00\). Factor: \(\frac{2x-y}{(2x-y)(2x+y)}=\frac1{2x+y}\to\frac14\).`},
{src:"hw",d:"m",type:"in",q:R`\(\displaystyle\lim_{(x,y)\to(0,0)}\frac{x^2+y^2}{\sqrt{x^2+y^2+81}-9}\)`,answers:[18],e:R`Multiply by the conjugate: \(\sqrt{x^2+y^2+81}+9\to18\).`},
{src:"hw",d:"m",type:"in",q:R`\(\displaystyle\lim_{(x,y)\to(2,1)}\frac{x^2-4y^2}{x-2y}\)`,answers:[4],e:R`\(\frac{(x-2y)(x+2y)}{x-2y}=x+2y\to4\).`},
{src:"hw",d:"e",q:R`Where is \(f(x,y)=\dfrac{1}{1-x^2-y^2}\) discontinuous?`,o:[R`On the circle \(x^2+y^2=1\)`,R`At the origin`,R`Inside the unit disk`,R`Nowhere`],a:0,e:R`Rational function: discontinuous exactly where the denominator is 0.`},
{src:"hw",d:"m",q:R`Where is \(F(x,y)=\cos\sqrt{1+x-y}\) continuous?`,o:[R`\(\{(x,y)\mid y\le x+1\}\)`,R`\(\{(x,y)\mid y\ge x+1\}\)`,R`\(\{(x,y)\mid y<x+1\}\)`,R`Everywhere`],a:0,e:R`Need \(1+x-y\ge0\Rightarrow y\le x+1\). \(\cos\) and \(\sqrt{}\) are continuous on their domains.`},
{src:"rev",d:"m",q:R`\(\displaystyle\lim_{(x,y)\to(0,0)}\frac{3xy}{2x^2+y^2}\)`,o:[R`DNE: \(y=0\) gives 0, \(y=x\) gives 1`,R`0`,R`1`,R`\(\frac32\)`],a:0,e:R`Along \(y=x\): \(\frac{3x^2}{3x^2}=1\). Along \(y=0\): 0.`},
{src:"rev",d:"m",type:"in",q:R`\(\displaystyle\lim_{(x,y)\to(0,0)}\frac{x^4-9y^4}{x^2+3y^2}\)`,answers:[0],e:R`\(\frac{(x^2-3y^2)(x^2+3y^2)}{x^2+3y^2}=x^2-3y^2\to0\).`},
{src:"rev",d:"m",type:"in",q:R`\(\displaystyle\lim_{(x,y)\to(0,0)}\frac{x^4-y^4}{x^2+y^2}\)`,answers:[0],e:R`Difference of squares: \(x^2-y^2\to0\).`},
{src:"rev",d:"m",q:R`\(\displaystyle\lim_{(x,y)\to(0,0)}\frac{x^2-2y^2}{x^2+y^2}\)`,o:[R`DNE`,R`0`,R`1`,R`\(-2\)`],a:0,e:R`\(x\)-axis: 1. \(y\)-axis: \(-2\).`},
{src:"cb",d:"m",type:"in",q:R`Use polar coordinates: \(\displaystyle\lim_{(x,y)\to(0,0)}\frac{x^3+y^3}{x^2+y^2}\)`,answers:[0],e:R`\(\frac{r^3(\cos^3\theta+\sin^3\theta)}{r^2}=r(\cos^3\theta+\sin^3\theta)\), and \(|\cdot|\le2r\to0\).`},
{src:"cb",d:"m",type:"in",q:R`\(\displaystyle\lim_{(x,y)\to(0,0)}\frac{xy}{\sqrt{x^2+y^2}}\)`,answers:[0],e:R`Polar: \(\frac{r^2\cos\theta\sin\theta}{r}=r\cos\theta\sin\theta\to0\).`},
{src:"cb",d:"h",type:"in",q:R`\(\displaystyle\lim_{(x,y)\to(0,0)}(x^2+y^2)\ln(x^2+y^2)\)`,answers:[0],e:R`Let \(t=x^2+y^2\to0^+\). \(t\ln t\to0\) (L'Hôpital on \(\frac{\ln t}{1/t}\)).`},
{src:"cb",d:"m",q:R`True or false: if the limit along every straight line through the origin is 0, then the limit is 0.`,o:[R`False`,R`True`],a:0,e:R`\(\frac{xy^2}{x^2+y^4}\) is 0 on every line but \(\frac12\) on \(x=y^2\).`},
{src:"cb",d:"h",type:"in",q:R`\(f(x,y)=\dfrac{x^2y^2}{x^2+y^2}\) for \((x,y)\ne(0,0)\), and \(f(0,0)=c\). What \(c\) makes \(f\) continuous everywhere?`,answers:[0],e:R`\(\frac{x^2y^2}{x^2+y^2}\le y^2\to0\), so the limit is 0. Set \(c=0\).`},
{src:"cb",d:"h",type:"in",q:R`\(\displaystyle\lim_{(x,y)\to(0,3)}\frac{\sin(xy)}{x}\)`,answers:[3],e:R`\(\frac{\sin(xy)}{xy}\cdot y\to1\cdot3=3\).`},
{src:"cb",d:"m",q:R`Spot the mistake: "Along \(y=0\) the limit is 0 and along \(x=0\) it's 0, so the limit is 0."`,o:[R`Agreeing paths never prove a limit exists; you need squeeze, factoring, or polar`,R`They should have tried \(y=1\)`,R`Paths can't be used at all`,R`Nothing is wrong`],a:0,e:R`Paths can only prove DNE. To prove a limit exists you need an argument that covers every approach.`},
{src:"cb",d:"m",q:R`\(\displaystyle\lim_{(x,y)\to(0,0)}\frac{xy^2}{x^2+y^2}\)`,o:[R`0`,R`DNE`,R`\(\frac12\)`,R`1`],a:0,e:R`\(\left|\frac{xy^2}{x^2+y^2}\right|\le|x|\to0\).`},
{src:"cb",d:"h",q:R`\(\displaystyle\lim_{(x,y)\to(0,0)}\frac{x^2+\sin^2y}{2x^2+y^2}\)`,o:[R`DNE`,R`\(\frac12\)`,R`1`,R`0`],a:0,e:R`\(y=0\): \(\frac{x^2}{2x^2}=\frac12\). \(x=0\): \(\frac{\sin^2y}{y^2}\to1\).`},
{src:"cb",d:"m",type:"in",q:R`\(\displaystyle\lim_{(x,y)\to(0,0)}e^{-1/(x^2+y^2)}\)`,answers:[0],e:R`The exponent goes to \(-\infty\), so \(e^{(\cdot)}\to0\).`},
{src:"cb",d:"e",q:R`Where is \(f(x,y)=\ln(x+y-1)\) continuous?`,o:[R`\(y>1-x\)`,R`\(y\ge1-x\)`,R`\(y<1-x\)`,R`Everywhere`],a:0,e:R`Its domain: \(x+y-1>0\).`}
]);

/* ---------- 14.3 extra ---------- */
const vl=SVG.vlines([1,2,3,4],["z=1","z=2","z=3","z=4"],[2.5,1.5]);
addQ("143",[
{src:"hw",d:"e",q:R`\(g(x,y)=x^7\sin y\). Find \(g_x\) and \(g_y\).`,o:[R`\(g_x=7x^6\sin y,\ g_y=x^7\cos y\)`,R`\(g_x=7x^6\cos y,\ g_y=x^7\cos y\)`,R`\(g_x=7x^6\sin y,\ g_y=-x^7\cos y\)`,R`\(g_x=x^7\cos y,\ g_y=7x^6\sin y\)`],a:0,e:R`Freeze one variable at a time.`},
{src:"hw",d:"m",q:R`\(z=\ln(x+t^7)\). Find \(\frac{\partial z}{\partial t}\).`,o:[R`\(\dfrac{7t^6}{x+t^7}\)`,R`\(\dfrac1{x+t^7}\)`,R`\(\dfrac{7t^6}{x}\)`,R`\(7t^6\ln(x+t^7)\)`],a:0,e:R`Chain rule: inside derivative w.r.t. \(t\) is \(7t^6\).`},
{src:"hw",d:"m",q:R`\(w=\dfrac{u}{v^4}\). Find \(w_v\).`,o:[R`\(-\dfrac{4u}{v^5}\)`,R`\(\dfrac{1}{v^4}\)`,R`\(-\dfrac{4}{v^5}\)`,R`\(\dfrac{4u}{v^3}\)`],a:0,e:R`\(uv^{-4}\to-4uv^{-5}\).`},
{src:"hw",d:"h",q:R`\(g(x,y)=y(x+x^2y)^6\). Find \(g_x\).`,o:[R`\(6y(x+x^2y)^5(1+2xy)\)`,R`\(6(x+x^2y)^5(1+2xy)\)`,R`\(6y(x+x^2y)^5\)`,R`\((x+x^2y)^6+6x^2y(x+x^2y)^5\)`],a:0,e:R`\(y\) is a constant multiplier. Chain rule on the inside: \(\frac{\partial}{\partial x}(x+x^2y)=1+2xy\). (The last option is \(g_y\).)`},
{src:"hw",d:"h",q:R`Same \(g=y(x+x^2y)^6\). Find \(g_y\).`,o:[R`\((x+x^2y)^6+6x^2y(x+x^2y)^5\)`,R`\(6y(x+x^2y)^5x^2\)`,R`\((x+x^2y)^6\)`,R`\(6x^2(x+x^2y)^5\)`],a:0,e:R`Product rule: (derivative of \(y\))·(…)\(^6\) + \(y\)·\(6(\ldots)^5\cdot x^2\).`},
{src:"hw",d:"m",q:R`\(f(x,y,z)=x^3yz^2+2yz\). Find \(f_z\).`,o:[R`\(2x^3yz+2y\)`,R`\(3x^2yz^2\)`,R`\(x^3z^2+2z\)`,R`\(2x^3yz\)`],a:0,e:R`Freeze \(x\) and \(y\).`},
{src:"hw",d:"m",q:R`\(w=y\tan(x+3z)\). Find \(\frac{\partial w}{\partial z}\).`,o:[R`\(3y\sec^2(x+3z)\)`,R`\(y\sec^2(x+3z)\)`,R`\(\tan(x+3z)\)`,R`\(3\sec^2(x+3z)\)`],a:0,e:R`Chain rule: inner derivative is 3.`},
{src:"hw",d:"m",q:R`Use implicit differentiation: \(x^2+4y^2+7z^2=7\). Find \(\frac{\partial z}{\partial x}\).`,o:[R`\(-\dfrac{x}{7z}\)`,R`\(-\dfrac{2x}{7z}\)`,R`\(\dfrac{x}{7z}\)`,R`\(-\dfrac{4y}{7z}\)`],a:0,e:R`\(2x+14z\,z_x=0\Rightarrow z_x=-\frac{2x}{14z}=-\frac{x}{7z}\). (\(-\frac{4y}{7z}\) is \(z_y\).)`},
{src:"hw",d:"m",q:R`\(f=x^4y-3x^3y^2\). Find \(f_{xy}\).`,o:[R`\(4x^3-18x^2y\)`,R`\(12x^2y-18xy^2\)`,R`\(-6x^3\)`,R`\(4x^3-6x^3y\)`],a:0,e:R`\(f_x=4x^3y-9x^2y^2\), then w.r.t. \(y\): \(4x^3-18x^2y\).`},
{src:"hw",d:"m",q:R`\(f=\ln(ax+by)\). Find \(f_{xy}\).`,o:[R`\(-\dfrac{ab}{(ax+by)^2}\)`,R`\(\dfrac{ab}{(ax+by)^2}\)`,R`\(-\dfrac{a^2}{(ax+by)^2}\)`,R`\(\dfrac{a}{ax+by}\)`],a:0,e:R`\(f_x=\frac a{ax+by}=a(ax+by)^{-1}\). Then \(f_{xy}=-a(ax+by)^{-2}\cdot b\).`},
{src:"hw",d:"h",q:R`\(f=x^8y^5-x^5y^4\). Find \(f_{xxx}\).`,o:[R`\(336x^5y^5-60x^2y^4\)`,R`\(56x^6y^5-20x^3y^4\)`,R`\(336x^5y^5-20x^2y^4\)`,R`\(280x^4y^4-60x^2y^3\)`],a:0,e:R`\(f_x=8x^7y^5-5x^4y^4\), \(f_{xx}=56x^6y^5-20x^3y^4\), \(f_{xxx}=336x^5y^5-60x^2y^4\).`},
{src:"hw",d:"h",q:R`\(f(x,y,z)=5xy^2z^3+\arcsin(x\sqrt z)\). Find \(f_{xzy}\). (Hint: which order is easiest?)`,o:[R`\(30yz^2\)`,R`\(15y^2z^2\)`,R`\(10yz^3\)`,R`0`],a:0,e:R`By Clairaut you can take \(y\) first, which kills the arcsin. \(f_y=10xyz^3\), then \(x\): \(10yz^3\), then \(z\): \(30yz^2\).`},
{src:"hw",d:"m",q:R`Poiseuille: \(R=\dfrac{CL}{r^4}\). Find \(\frac{\partial R}{\partial r}\) and interpret it.`,o:[R`\(-\dfrac{4CL}{r^5}\): how fast resistance changes with radius when length stays fixed`,R`\(\dfrac{C}{r^4}\): how fast resistance changes with length`,R`\(-\dfrac{4C}{r^5}\): rate with respect to length`,R`\(\dfrac{4CL}{r^3}\)`],a:0,e:R`\(CLr^{-4}\to-4CLr^{-5}\). Negative: wider arteries mean less resistance.`},
{src:"rev",d:"e",q:R`\(f(x,y)=x^3-5y^2\). \(f_x\) and \(f_y\)?`,o:[R`\(3x^2\) and \(-10y\)`,R`\(3x^2-10y\) and \(-10y\)`,R`\(3x^2\) and \(-5y\)`,R`\(x^3\) and \(-10y\)`],a:0,e:R`Same pattern as Review #8a–b.`},
{src:"cb",d:"m",q:R`\(T(x,y)\) is temperature (°F) at position \((x,y)\) in miles. \(T_x(2,1)=-3\) means…`,o:[R`Moving east from \((2,1)\), temperature drops about 3°F per mile`,R`The temperature at \((2,1)\) is \(-3\)°F`,R`Moving north, temperature drops 3°F per mile`,R`Temperature drops 3°F every hour`],a:0,e:R`\(T_x\) is the rate in the \(x\) direction with \(y\) fixed, in °F per mile.`},
{src:"cb",d:"m",q:R`A contour map is shown (level lines are vertical). At \(P\), what are the signs of \(f_x\) and \(f_y\)?${vl}`,o:[R`\(f_x>0,\ f_y=0\)`,R`\(f_x=0,\ f_y>0\)`,R`\(f_x<0,\ f_y=0\)`,R`Both positive`],a:0,e:R`Moving right crosses higher and higher levels, so \(f_x>0\). Moving up stays on the same level, so \(f_y=0\).`},
{src:"cb",d:"m",q:R`Which limit equals \(f_y(a,b)\)?`,o:[R`\(\displaystyle\lim_{h\to0}\frac{f(a,b+h)-f(a,b)}{h}\)`,R`\(\displaystyle\lim_{h\to0}\frac{f(a+h,b)-f(a,b)}{h}\)`,R`\(\displaystyle\lim_{h\to0}\frac{f(a+h,b+h)-f(a,b)}{h}\)`,R`\(\displaystyle\lim_{h\to0}\frac{f(a,b+h)-f(a,b)}{b}\)`],a:0,e:R`Only the \(y\) input moves.`},
{src:"cb",d:"h",q:R`True or false: there is a function with \(f_x=y\) and \(f_y=2x\) (both continuous).`,o:[R`False, by Clairaut`,R`True, \(f=xy+x^2\)`,R`True, \(f=2xy\)`],a:0,e:R`\(f_{xy}=1\) but \(f_{yx}=2\). Continuous mixed partials must be equal, so no such \(f\).`},
{src:"cb",d:"m",q:R`Does \(u=x^2-y^2\) satisfy Laplace's equation \(u_{xx}+u_{yy}=0\)?`,o:[R`Yes`,R`No`],a:0,e:R`\(u_{xx}=2\), \(u_{yy}=-2\). Sum is 0.`},
{src:"cb",d:"e",type:"in",q:R`\(f=x^2y^3\). Find \(f_y(2,1)\).`,answers:[12],e:R`\(f_y=3x^2y^2=3\cdot4\cdot1=12\).`},
{src:"cb",d:"h",q:R`\(xyz=\cos(x+y+z)\). Find \(\frac{\partial z}{\partial x}\).`,o:[R`\(-\dfrac{yz+\sin(x+y+z)}{xy+\sin(x+y+z)}\)`,R`\(-\dfrac{yz}{xy}\)`,R`\(\dfrac{yz-\sin(x+y+z)}{xy-\sin(x+y+z)}\)`,R`\(-\dfrac{yz+\cos(x+y+z)}{xy+\cos(x+y+z)}\)`],a:0,e:R`\(F=xyz-\cos(x+y+z)\). \(F_x=yz+\sin(x+y+z)\), \(F_z=xy+\sin(x+y+z)\). \(z_x=-F_x/F_z\).`},
{src:"cb",d:"m",q:R`Ideal gas: \(P=\dfrac{kT}{V}\). \(\frac{\partial P}{\partial V}=\)`,o:[R`\(-\dfrac{kT}{V^2}\)`,R`\(\dfrac{k}{V}\)`,R`\(\dfrac{kT}{V^2}\)`,R`\(-\dfrac{k}{V^2}\)`],a:0,e:R`\(kTV^{-1}\to-kTV^{-2}\).`},
{src:"cb",d:"h",q:R`If \(f_{xx}(a,b)>0\), what does that tell you about the trace of the surface in the plane \(y=b\)?`,o:[R`It is concave up at \(x=a\)`,R`It is increasing at \(x=a\)`,R`It has a max at \(x=a\)`,R`Nothing`],a:0,e:R`\(f_{xx}\) is the second derivative of the \(x\)-slice, which measures concavity.`}
]);
})();
