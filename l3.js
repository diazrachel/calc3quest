(function(){const R=String.raw;
/* ===================== 14.4 ===================== */
LEVELS.push({id:"144",day:3,sec:"Stewart 14.4",name:"Tangent Planes & Linear Approximation",
lesson:[
{t:"From tangent line to tangent plane",b:R`
<p>In Calc 1, near a point the curve looks like its <b>tangent line</b>: \(y-y_0=f'(x_0)(x-x_0)\).</p>
<p>In 3D, zoom in on a smooth surface and it looks flat: that flat piece is the <b>tangent plane</b>. It needs two slopes, one in each direction, which are exactly \(f_x\) and \(f_y\).</p>
<p>\[\boxed{z-z_0=f_x(x_0,y_0)(x-x_0)+f_y(x_0,y_0)(y-y_0)}\]</p>
<p>where \(z_0=f(x_0,y_0)\).</p>`},
{t:"Recipe: tangent plane in 4 steps",b:R`
<ol><li>Find \(z_0=f(x_0,y_0)\) (if not given).</li><li>Find \(f_x\) and \(f_y\).</li><li>Plug the point into them to get two numbers.</li><li>Put the numbers in the formula. Simplify if asked.</li></ol>
<div class="ex"><span class="lab">Example: \(z=x^2+y^2\) at \((1,2,5)\)</span>
<p>\(f_x=2x\to2\), \(f_y=2y\to4\).<br>\(z-5=2(x-1)+4(y-2)\), i.e. \(z=2x+4y-5\).</p></div>
<div class="trap"><b>Trap:</b> Plug the point into \(f_x,f_y\) <b>before</b> writing the plane. The plane has only numbers as coefficients, never \(x\)'s inside the slopes.</div>`,
check:{q:R`Tangent plane to \(z=xy\) at \((2,3,6)\)?`,o:[R`\(z-6=3(x-2)+2(y-3)\)`,R`\(z-6=2(x-2)+3(y-3)\)`,R`\(z=y(x-2)+x(y-3)\)`,R`\(z-6=6(x-2)+6(y-3)\)`],a:0,e:R`\(f_x=y=3\), \(f_y=x=2\).`}},
{t:"Linearization = tangent plane as a function",b:R`
<p>The <b>linearization</b> of \(f\) at \((a,b)\) is the tangent plane solved for \(z\):</p>
<p>\[L(x,y)=f(a,b)+f_x(a,b)(x-a)+f_y(a,b)(y-b)\]</p>
<p><b>Linear approximation:</b> for points near \((a,b)\), \(f(x,y)\approx L(x,y)\).</p>
<div class="ex"><span class="lab">Example: approximate \(f(1.1,\,1.9)\) for \(f=x^2y\) using \((1,2)\)</span>
<p>\(f(1,2)=2\). \(f_x=2xy\to4\). \(f_y=x^2\to1\).<br>\(L=2+4(x-1)+1(y-2)\).<br>\(L(1.1,1.9)=2+4(0.1)+1(-0.1)=2.3\). (Actual: 2.299.)</p></div>
<div class="tip"><b>Shortcut:</b> \(f(\text{new})\approx f(\text{old})+f_x\cdot\Delta x+f_y\cdot\Delta y\).</div>`},
{t:"Differentials",b:R`
<p>The <b>total differential</b> estimates the change in \(z\):</p>
<p>\[dz=f_x\,dx+f_y\,dy\]</p>
<div class="ex"><span class="lab">Example</span><p>\(z=x^2y\), at \((2,1)\) with \(dx=0.1\), \(dy=-0.2\): \(dz=2xy\,dx+x^2\,dy=4(0.1)+4(-0.2)=-0.4\).</p></div>
<p>It's the same idea as linearization, just tracking the change instead of the new value.</p>
<p><b>Differentiable</b> (the official word): roughly, \(f\) is differentiable at a point if \(f_x\) and \(f_y\) exist near it and are continuous there. Then the tangent plane is a good approximation.</p>`},
{t:"How the test asks it (Review #8c–e)",b:R`
<p>For \(f(x,y)=x^2-3y^4\), the sheet asks for: (c) the tangent plane at \((4,1,13)\), (d) the linearization at \((4,1)\), (e) the approximation of \(f(4.1,1.05)\).</p>
<p>These three are all the same calculation. Do (c) once and reuse it for (d) and (e). Try it now, then check the Boss tab.</p>`}
],
quest:[
{d:"e",q:R`Tangent plane formula at \((x_0,y_0,z_0)\):`,o:[R`\(z-z_0=f_x(x-x_0)+f_y(y-y_0)\)`,R`\(z=f_x x+f_y y\)`,R`\(z-z_0=f_x(y-y_0)+f_y(x-x_0)\)`,R`\(z-z_0=f(x-x_0)(y-y_0)\)`],a:0,e:R`Each slope goes with its own variable.`},
{d:"e",q:R`Tangent plane to \(z=x^2+y^2\) at \((1,2,5)\)?`,o:[R`\(z=2x+4y-5\)`,R`\(z=2x+4y+5\)`,R`\(z=x+2y\)`,R`\(z=4x+2y-3\)`],a:0,e:R`\(z-5=2(x-1)+4(y-2)\) → \(z=2x+4y-5\).`},
{d:"e",q:R`Linearization of \(f=xy\) at \((2,3)\)?`,o:[R`\(L=6+3(x-2)+2(y-3)\)`,R`\(L=6+2(x-2)+3(y-3)\)`,R`\(L=3x+2y\)`,R`\(L=6+xy\)`],a:0,e:R`\(f=6\), \(f_x=y=3\), \(f_y=x=2\). (Simplified: \(L=3x+2y-6\).)`},
{d:"m",type:"in",q:R`Use linearization of \(f=x^2y\) at \((1,2)\) to approximate \(f(1.1,1.9)\).`,answers:[2.3],tol:0.001,e:R`\(2+4(0.1)+1(-0.1)=2.3\).`},
{d:"m",q:R`Tangent plane to \(z=e^x\cos y\) at \((0,0,1)\)?`,o:[R`\(z=1+x\)`,R`\(z=1+y\)`,R`\(z=1+x+y\)`,R`\(z=x\)`],a:0,e:R`\(f_x=e^x\cos y\to1\), \(f_y=-e^x\sin y\to0\).`},
{d:"m",q:R`Tangent plane to \(z=\ln(x-2y)\) at \((3,1,0)\)?`,o:[R`\(z=x-2y-1\)`,R`\(z=x-2y\)`,R`\(z=x+2y-5\)`,R`\(z=\frac{x}{3}-2y\)`],a:0,e:R`\(f_x=\frac1{x-2y}\to1\), \(f_y=\frac{-2}{x-2y}\to-2\). \(z=(x-3)-2(y-1)\).`},
{d:"m",type:"in",q:R`\(z=x^2y\) at \((2,1)\), \(dx=0.1\), \(dy=-0.2\). Find \(dz\).`,answers:[-0.4],e:R`\(dz=4(0.1)+4(-0.2)=-0.4\).`},
{d:"h",q:R`Tangent plane to \(z=\sqrt{x^2+y^2}\) at \((3,4,5)\)?`,o:[R`\(z=\frac35x+\frac45y\)`,R`\(z=3x+4y-20\)`,R`\(z=5+\frac35x+\frac45y\)`,R`\(z=\frac45x+\frac35y\)`],a:0,e:R`\(f_x=\frac{x}{\sqrt{x^2+y^2}}\to\frac35\), \(f_y\to\frac45\). \(z=5+\frac35(x-3)+\frac45(y-4)=\frac35x+\frac45y\).`},
{d:"h",type:"in",q:R`Approximate \(f(2.02,\,0.97)\) for \(f=x^3y\) using linearization at \((2,1)\).`,answers:[8],tol:0.001,e:R`\(f=8\), \(f_x=3x^2y=12\), \(f_y=x^3=8\). \(8+12(0.02)+8(-0.03)=8+0.24-0.24=8\).`}
],
boss:[
{tag:"Review #8c",q:R`\(f(x,y)=x^2-3y^4\). Find the equation of the tangent plane of \(f\) at \((4,1,13)\).`,s:[
R`Check: \(f(4,1)=16-3=13\). ✓`,
R`\(f_x=2x\to f_x(4,1)=8\). \(f_y=-12y^3\to f_y(4,1)=-12\).`,
R`\(z-13=8(x-4)-12(y-1)\).`,
R`Simplified: \(z=8x-12y-7\).`]},
{tag:"Review #8d",q:R`The linearization of \(f\) at \((4,1)\) is \(L(x,y)=\) ?`,s:[
R`Same numbers solved for \(z\): \(L(x,y)=13+8(x-4)-12(y-1)\) (or \(8x-12y-7\)).`]},
{tag:"Review #8e",q:R`Approximate \(f(4.1,\,1.05)\) by linearization at \((4,1)\).`,s:[
R`\(\Delta x=0.1\), \(\Delta y=0.05\).`,
R`\(L(4.1,1.05)=13+8(0.1)-12(0.05)=13+0.8-0.6\).`,
R`\(f(4.1,1.05)\approx13.2\).`]}
],
vault:R`<ul>
<li>Tangent plane: \(z-z_0=f_x(x_0,y_0)(x-x_0)+f_y(x_0,y_0)(y-y_0)\)</li>
<li>\(L(x,y)=f(a,b)+f_x(a,b)(x-a)+f_y(a,b)(y-b)\), and \(f\approx L\) nearby.</li>
<li>\(dz=f_x\,dx+f_y\,dy\)</li></ul>`
});

/* ===================== 14.5 ===================== */
LEVELS.push({id:"145",day:3,sec:"Stewart 14.5",name:"The Chain Rule",
lesson:[
{t:"Why we need a new chain rule",b:R`
<p>Sometimes \(f\) depends on \(x\) and \(y\), but \(x\) and \(y\) themselves depend on other variables (like time \(t\), or \(s\) and \(t\)). To get how \(f\) changes with those, you add up <b>every route</b> from \(f\) down to that variable.</p>
<p><b>Case 1</b>: \(z=f(x,y)\), \(x=x(t)\), \(y=y(t)\):</p>
<p>\[\frac{dz}{dt}=\frac{\partial z}{\partial x}\frac{dx}{dt}+\frac{\partial z}{\partial y}\frac{dy}{dt}\]</p>
<p><b>Case 2</b>: \(x=x(s,t)\), \(y=y(s,t)\):</p>
<p>\[\frac{\partial z}{\partial s}=\frac{\partial z}{\partial x}\frac{\partial x}{\partial s}+\frac{\partial z}{\partial y}\frac{\partial y}{\partial s}\]</p>`},
{t:"Tree diagrams (always draw one)",b:R`
<p>A tree diagram makes the formula automatic:</p>
<ol><li>Put \(f\) at the top.</li><li>Branch down to its direct inputs (\(x\), \(y\)). Label each branch with \(\frac{\partial f}{\partial x}\), \(\frac{\partial f}{\partial y}\).</li>
<li>From each of those, branch to <b>only the variables it actually depends on</b>. Label with \(\frac{\partial x}{\partial s}\), etc.</li>
<li>To get \(\frac{\partial f}{\partial s}\): find every path from \(f\) to \(s\). <b>Multiply along</b> each path, then <b>add</b> the paths.</li></ol>
<div class="ex"><span class="lab">Review #7 style: \(f(x,y)\), \(x(s,t,u)\), \(y(s,t)\)</span>
<p>\(x\) branches to \(s,t,u\). \(y\) branches to \(s,t\) only.</p>
<p>Paths to \(s\): \(f\to x\to s\) and \(f\to y\to s\). So \(\frac{\partial f}{\partial s}=\frac{\partial f}{\partial x}\frac{\partial x}{\partial s}+\frac{\partial f}{\partial y}\frac{\partial y}{\partial s}\).</p>
<p>Paths to \(u\): only \(f\to x\to u\) (\(y\) doesn't use \(u\)). So \(\frac{\partial f}{\partial u}=\frac{\partial f}{\partial x}\frac{\partial x}{\partial u}\).</p></div>
<div class="tip"><b>Notation:</b> use \(d\) when a variable depends on only one thing; use \(\partial\) when it depends on more than one.</div>`,
check:{q:R`\(f(x,y)\), \(x(s)\), \(y(s,t)\). What is \(\frac{\partial f}{\partial t}\)?`,o:[R`\(\frac{\partial f}{\partial y}\frac{\partial y}{\partial t}\)`,R`\(\frac{\partial f}{\partial x}\frac{dx}{ds}+\frac{\partial f}{\partial y}\frac{\partial y}{\partial t}\)`,R`\(\frac{\partial f}{\partial x}+\frac{\partial f}{\partial y}\)`,R`0`],a:0,e:R`Only \(y\) depends on \(t\), so only one path.`}},
{t:"Worked example, start to finish",b:R`
<div class="ex"><span class="lab">\(z=e^x\sin y\), \(x=st^2\), \(y=s^2t\). Find \(\frac{\partial z}{\partial s}\).</span>
<p><b>1. Outer partials:</b> \(z_x=e^x\sin y\), \(z_y=e^x\cos y\).</p>
<p><b>2. Inner partials:</b> \(x_s=t^2\), \(y_s=2st\).</p>
<p><b>3. Assemble:</b> \(\frac{\partial z}{\partial s}=e^x\sin y\cdot t^2+e^x\cos y\cdot2st\).</p>
<p><b>4. Substitute</b> back if asked: \(=t^2e^{st^2}\sin(s^2t)+2ste^{st^2}\cos(s^2t)\).</p></div>
<div class="tip"><b>Stay organized.</b> Make a little table: list \(f_x, f_y\), then \(x_s, x_t, y_s, y_t\). Then plug in. This is the "showing proper work" the test grades.</div>`},
{t:"Implicit differentiation shortcut",b:R`
<p>If \(F(x,y)=0\) defines \(y\) as a function of \(x\):</p>
<p>\[\frac{dy}{dx}=-\frac{F_x}{F_y}\]</p>
<div class="ex"><span class="lab">Example: \(x^3+y^3=6xy\)</span><p>\(F=x^3+y^3-6xy\). \(F_x=3x^2-6y\), \(F_y=3y^2-6x\). \(\frac{dy}{dx}=-\frac{3x^2-6y}{3y^2-6x}=\frac{2y-x^2}{y^2-2x}\).</p></div>
<p>For \(F(x,y,z)=0\): \(\frac{\partial z}{\partial x}=-\frac{F_x}{F_z}\), \(\frac{\partial z}{\partial y}=-\frac{F_y}{F_z}\).</p>`},
{t:"How the test asks it (Review #7, #16)",b:R`
<p><b>#7</b> is the abstract version: just write the formulas from the tree.</p>
<p><b>#16</b> is the concrete version: \(f=x^2+y\sin y\), \(x=s^2+t^3u\), \(y=6\tan(st)\). Find \(\frac{\partial f}{\partial s}\) and \(\frac{\partial f}{\partial t}\).</p>
<div class="trap"><b>Watch out in #16:</b> \(f_y\) needs the product rule: \(\frac{\partial}{\partial y}(y\sin y)=\sin y+y\cos y\). And \(\frac{d}{dw}\tan w=\sec^2 w\), so \(y_s=6t\sec^2(st)\).</div>`}
],
quest:[
{d:"e",q:R`\(z=f(x,y)\), \(x=x(t)\), \(y=y(t)\). \(\frac{dz}{dt}=\)`,o:[R`\(f_x\frac{dx}{dt}+f_y\frac{dy}{dt}\)`,R`\(f_x+f_y\)`,R`\(f_x\frac{dy}{dt}+f_y\frac{dx}{dt}\)`,R`\(f_x f_y\frac{dx}{dt}\frac{dy}{dt}\)`],a:0,e:R`Multiply along each path, add the paths.`},
{d:"e",q:R`\(f(x,y)\), \(x(s,t)\), \(y(s,t)\). \(\frac{\partial f}{\partial t}=\)`,o:[R`\(f_x x_t+f_y y_t\)`,R`\(f_x x_s+f_y y_s\)`,R`\(f_t\)`,R`\(f_x y_t+f_y x_t\)`],a:0,e:R`Two paths to \(t\): through \(x\) and through \(y\).`},
{d:"e",q:R`\(w=f(x,y,z)\), each of \(x,y,z\) a function of \(t\). How many terms in \(\frac{dw}{dt}\)?`,o:[R`3`,R`1`,R`2`,R`6`],a:0,e:R`One path through each of \(x,y,z\).`},
{d:"m",q:R`\(z=x^2y\), \(x=t^2\), \(y=t^3\). \(\frac{dz}{dt}=\)`,o:[R`\(7t^6\)`,R`\(5t^4\)`,R`\(6t^5\)`,R`\(4t^3+3t^2\)`],a:0,e:R`\(2xy\cdot2t+x^2\cdot3t^2=4t^6+3t^6=7t^6\). (Check: \(z=t^7\).)`},
{d:"m",type:"in",q:R`\(z=x^2+y^2\), \(x=2t\), \(y=t^2\). Find \(\frac{dz}{dt}\) at \(t=1\).`,answers:[12],e:R`\(2x\cdot2+2y\cdot2t=2(2)(2)+2(1)(2)=12\).`},
{d:"m",q:R`\(z=e^x\sin y\), \(x=st^2\), \(y=s^2t\). \(\frac{\partial z}{\partial s}=\)`,o:[R`\(t^2e^x\sin y+2st\,e^x\cos y\)`,R`\(2st\,e^x\sin y+t^2e^x\cos y\)`,R`\(e^x\sin y+e^x\cos y\)`,R`\(t^2e^x\cos y\)`],a:0,e:R`\(z_x x_s+z_y y_s\) with \(x_s=t^2\), \(y_s=2st\).`},
{d:"m",q:R`\(f(x,y)\), \(x(s,t,u)\), \(y(s,t)\). \(\frac{\partial f}{\partial u}=\)`,o:[R`\(\frac{\partial f}{\partial x}\frac{\partial x}{\partial u}\)`,R`\(\frac{\partial f}{\partial x}\frac{\partial x}{\partial u}+\frac{\partial f}{\partial y}\frac{\partial y}{\partial u}\)`,R`\(\frac{\partial f}{\partial y}\frac{\partial y}{\partial u}\)`,R`0`],a:0,e:R`\(y\) doesn't depend on \(u\), so only the \(x\) path counts.`},
{d:"h",q:R`If \(x^3+y^3=6xy\), \(\frac{dy}{dx}=\)`,o:[R`\(\frac{2y-x^2}{y^2-2x}\)`,R`\(\frac{x^2-2y}{y^2-2x}\)`,R`\(-\frac{3x^2}{3y^2}\)`,R`\(\frac{y^2-2x}{2y-x^2}\)`],a:0,e:R`\(-\frac{F_x}{F_y}=-\frac{3x^2-6y}{3y^2-6x}\).`},
{d:"h",q:R`\(f(x,y)\) with \(x=s+t\), \(y=s-t\). Then \(\frac{\partial f}{\partial s}+\frac{\partial f}{\partial t}=\)`,o:[R`\(2f_x\)`,R`\(2f_y\)`,R`\(f_x+f_y\)`,R`0`],a:0,e:R`\(f_s=f_x+f_y\), \(f_t=f_x-f_y\). Sum: \(2f_x\).`},
{d:"h",q:R`\(f=y\sin y\). \(f_y=\)`,o:[R`\(\sin y+y\cos y\)`,R`\(y\cos y\)`,R`\(\cos y\)`,R`\(\sin y-y\cos y\)`],a:0,e:R`Product rule.`}
],
boss:[
{tag:"Review #7",q:R`Consider differentiable \(f(x,y)\), \(x(s,t,u)\), \(y(s,t)\). Find \(\frac{\partial f}{\partial s}\) and \(\frac{\partial f}{\partial u}\).`,s:[
R`Tree: \(f\to x,y\). \(x\to s,t,u\). \(y\to s,t\).`,
R`\(\frac{\partial f}{\partial s}=\frac{\partial f}{\partial x}\frac{\partial x}{\partial s}+\frac{\partial f}{\partial y}\frac{\partial y}{\partial s}\)`,
R`Only \(x\) depends on \(u\): \(\frac{\partial f}{\partial u}=\frac{\partial f}{\partial x}\frac{\partial x}{\partial u}\).`]},
{tag:"Review #16",q:R`\(f(x,y)=x^2+y\sin y\), \(x=s^2+t^3u\), \(y=6\tan(st)\). Find \(\frac{\partial f}{\partial s}\) and \(\frac{\partial f}{\partial t}\).`,s:[
R`Outer: \(f_x=2x\). \(f_y=\sin y+y\cos y\) (product rule).`,
R`Inner: \(x_s=2s\), \(x_t=3t^2u\), \(y_s=6t\sec^2(st)\), \(y_t=6s\sec^2(st)\).`,
R`\(\frac{\partial f}{\partial s}=2x(2s)+(\sin y+y\cos y)\cdot6t\sec^2(st)\)`,
R`\(\frac{\partial f}{\partial t}=2x(3t^2u)+(\sin y+y\cos y)\cdot6s\sec^2(st)\)`,
R`If asked to write in terms of \(s,t,u\): replace \(x\) with \(s^2+t^3u\) and \(y\) with \(6\tan(st)\). E.g. \(\frac{\partial f}{\partial s}=4s(s^2+t^3u)+6t\sec^2(st)\big[\sin(6\tan st)+6\tan(st)\cos(6\tan st)\big]\).`]}
],
vault:R`<ul>
<li>Tree diagram: multiply along each path, add paths.</li>
<li>\(\frac{\partial z}{\partial s}=z_x x_s+z_y y_s\)</li>
<li>Implicit: \(\frac{dy}{dx}=-\frac{F_x}{F_y}\); \(\frac{\partial z}{\partial x}=-\frac{F_x}{F_z}\).</li></ul>`
});
})();
