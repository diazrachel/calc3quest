(function(){const R=String.raw;
const regionSVG=`<svg viewBox="0 0 260 220" width="260" style="max-width:100%;height:auto" role="img" aria-label="Region under y=1, above y=sqrt x, right of x=0">
<line x1="30" y1="190" x2="240" y2="190" stroke="var(--muted)" stroke-width="1.5"/><line x1="30" y1="200" x2="30" y2="15" stroke="var(--muted)" stroke-width="1.5"/>
<path d="M30 190 ${Array.from({length:21},(_,i)=>{const x=i/20;return `L${30+x*180} ${190-Math.sqrt(x)*160}`}).join(" ")} L210 30 L30 30 Z" fill="var(--mint)" fill-opacity=".25" stroke="none"/>
<path d="M30 190 ${Array.from({length:21},(_,i)=>{const x=i/20;return `L${30+x*180} ${190-Math.sqrt(x)*160}`}).join(" ")}" fill="none" stroke="var(--sky)" stroke-width="2.5"/>
<line x1="30" y1="30" x2="225" y2="30" stroke="var(--sun)" stroke-width="2.5"/>
<line x1="30" y1="30" x2="30" y2="190" stroke="var(--pink)" stroke-width="2.5"/>
<text x="150" y="105" fill="var(--sky)" font-size="13" font-family="JetBrains Mono,monospace">y = √x</text>
<text x="150" y="24" fill="var(--sun)" font-size="13" font-family="JetBrains Mono,monospace">y = 1</text>
<text x="36" y="120" fill="var(--pink)" font-size="13" font-family="JetBrains Mono,monospace">x = 0</text>
<text x="80" y="62" fill="var(--fg)" font-size="15" font-family="JetBrains Mono,monospace">R</text>
<text x="206" y="206" fill="var(--muted)" font-size="12" font-family="JetBrains Mono,monospace">1</text>
<text x="16" y="34" fill="var(--muted)" font-size="12" font-family="JetBrains Mono,monospace">1</text>
<text x="242" y="194" fill="var(--muted)" font-size="12" font-family="JetBrains Mono,monospace">x</text>
<text x="25" y="12" fill="var(--muted)" font-size="12" font-family="JetBrains Mono,monospace">y</text></svg>`;
LEVELS.push({id:"151",day:6,sec:"Stewart 15.1–15.3",name:"Double Integrals",
lesson:[
{t:"What a double integral is",b:R`
<p>In Calc 1, \(\int_a^b f(x)\,dx\) adds up thin strips to get <b>area under a curve</b>.</p>
<p>In Calc 3, \(\iint_R f(x,y)\,dA\) adds up thin columns over a region \(R\) to get the <b>volume under the surface</b> \(z=f(x,y)\).</p>
<ul><li>\(dA\) is a tiny piece of area: \(dA=dx\,dy\) or \(dy\,dx\).</li>
<li>If \(f=1\): \(\iint_R1\,dA=\) <b>area of \(R\)</b>.</li></ul>
<p>Formally it's a limit of Riemann sums \(\sum f(x_i^*,y_j^*)\Delta A\), but you compute it with <b>iterated integrals</b>: one integral inside another.</p>`},
{t:"Iterated integrals: inside out",b:R`
<p>Do the <b>inner</b> integral first, treating the other variable as a constant (just like a partial derivative, but backwards). Then do the outer one.</p>
<div class="ex"><span class="lab">Example: \(\int_0^1\int_0^2(x+y)\,dy\,dx\)</span>
<p>Inner (w.r.t. \(y\), \(x\) constant): \(\left[xy+\frac{y^2}2\right]_0^2=2x+2\).</p>
<p>Outer: \(\int_0^1(2x+2)\,dx=[x^2+2x]_0^1=3\).</p></div>
<p><b>Fubini's Theorem:</b> on a <b>rectangle</b> \([a,b]\times[c,d]\), you can integrate in either order and get the same answer.</p>
<div class="tip"><b>Separable shortcut:</b> on a rectangle, if \(f=g(x)h(y)\), then \(\iint f\,dA=\left(\int g\,dx\right)\left(\int h\,dy\right)\).</div>
<div class="trap"><b>Trap:</b> the <b>order of \(dx\,dy\)</b> tells you which bounds go with which. In \(\int\int\ldots\,dx\,dy\), the inner bounds are for \(x\).</div>`,
check:{q:R`\(\int_0^2\int_0^1 xy\,dx\,dy=\)`,o:[R`1`,R`2`,R`\(\frac12\)`,R`4`],a:0,e:R`Separable: \(\int_0^1x\,dx\cdot\int_0^2y\,dy=\frac12\cdot2=1\).`}},
{t:"General regions: Type I and Type II",b:R`
<p>Most regions aren't rectangles. Then the inner bounds are <b>curves</b>, and the outer bounds are <b>numbers</b>.</p>
<p><b>Type I (\(dy\,dx\)): vertical strips.</b> \(x\) goes between two numbers; \(y\) goes from a bottom curve to a top curve.</p>
<p>\[\int_a^b\int_{g_1(x)}^{g_2(x)}f\,dy\,dx\]</p>
<p><b>Type II (\(dx\,dy\)): horizontal strips.</b> \(y\) goes between two numbers; \(x\) goes from a left curve to a right curve (solve the curves for \(x\)!).</p>
<p>\[\int_c^d\int_{h_1(y)}^{h_2(y)}f\,dx\,dy\]</p>
<div class="ex"><span class="lab">Example: region between \(y=x^2\) and \(y=x\)</span>
<p>They meet where \(x^2=x\): \(x=0,1\). Between them, \(x\) is on top.</p>
<p>Type I: \(\int_0^1\int_{x^2}^{x}f\,dy\,dx\).</p>
<p>Type II: solve for \(x\): \(x=y\) (left) and \(x=\sqrt y\) (right). \(\int_0^1\int_{y}^{\sqrt y}f\,dx\,dy\).</p></div>
<div class="tip"><b>The arrow trick:</b> for \(dy\,dx\), draw a vertical arrow through the region bottom to top: where it enters is the lower bound, where it exits is the upper. For \(dx\,dy\), draw the arrow left to right.</div>`},
{t:"Always sketch first (Review #13)",b:R`
<p>Region bounded by \(y=\sqrt x\), \(y=1\), \(x=0\):</p>
${regionSVG}
<p>Shade above the curve \(y=\sqrt x\), below \(y=1\), right of \(x=0\). Corners: \((0,0)\), \((0,1)\), \((1,1)\).</p>
<ul><li>Vertical arrow (\(dy\,dx\)): enters at \(y=\sqrt x\), exits at \(y=1\); \(x\) from 0 to 1.</li>
<li>Horizontal arrow (\(dx\,dy\)): enters at \(x=0\), exits at \(x=y^2\) (from \(y=\sqrt x\)); \(y\) from 0 to 1.</li></ul>`},
{t:"Reversing the order of integration",b:R`
<p>Sometimes the inner integral is impossible (like \(\int e^{y^2}dy\)), but switching order makes it easy. Steps:</p>
<ol><li><b>Read off the region</b> from the current bounds as inequalities.</li>
<li><b>Sketch it.</b></li>
<li><b>Re-describe</b> it with the other strip direction: new outer bounds are numbers, new inner bounds are curves.</li></ol>
<div class="ex"><span class="lab">Example: \(\int_0^1\int_x^1 e^{y^2}\,dy\,dx\)</span>
<p>Region: \(0\le x\le1\), \(x\le y\le1\). A triangle with corners \((0,0),(0,1),(1,1)\).</p>
<p>As horizontal strips: \(0\le y\le1\), \(0\le x\le y\).</p>
<p>\(\int_0^1\int_0^y e^{y^2}\,dx\,dy=\int_0^1ye^{y^2}\,dy=\frac12(e-1)\).</p></div>
<div class="trap"><b>Trap:</b> the new outer bounds must be <b>constants</b>. If an \(x\) shows up in an outer bound of \(dx\), something went wrong.</div>`,
check:{q:R`Reverse \(\int_0^4\int_{\sqrt x}^{2}f\,dy\,dx\).`,o:[R`\(\int_0^2\int_0^{y^2}f\,dx\,dy\)`,R`\(\int_0^2\int_{y^2}^{4}f\,dx\,dy\)`,R`\(\int_0^4\int_0^{y^2}f\,dx\,dy\)`,R`\(\int_{\sqrt x}^2\int_0^4f\,dx\,dy\)`],a:0,e:R`Region: \(\sqrt x\le y\le2\), \(0\le x\le4\). Same as \(0\le y\le2\), \(0\le x\le y^2\).`}},
{t:"How the test asks it (Review #13–15)",b:R`
<p><b>#13</b>: sketch, area integral, set up both orders, evaluate one.</p>
<p><b>#14, #15</b>: reverse the order. You only need the new integral, but a clean sketch with labeled corners shows the work.</p>
<div class="tip"><b>Checklist for every setup:</b> (1) sketch and shade; (2) find intersection points; (3) choose arrow direction; (4) inner bounds = curves, outer bounds = numbers.</div>`}
],
quest:[
{d:"e",type:"in",q:R`\(\int_0^1\int_0^2(x+y)\,dy\,dx\)`,answers:[3],e:R`Inner: \(2x+2\). Outer: \(1+2=3\).`},
{d:"e",type:"in",q:R`\(\int_0^2\int_0^1 xy\,dx\,dy\)`,answers:[1],e:R`\(\frac12\cdot2=1\).`},
{d:"e",type:"in",q:R`\(\iint_R1\,dA\) where \(R=[0,3]\times[0,2]\).`,answers:[6],e:R`Area of a 3 by 2 rectangle.`},
{d:"e",q:R`Fubini's Theorem says that on a rectangle…`,o:[R`the order of integration doesn't change the answer`,R`you must integrate \(dx\) first`,R`the integral equals the area`,R`the integral is always positive`],a:0,e:R`Either order gives the same value (for continuous \(f\)).`},
{d:"m",q:R`Region between \(y=x^2\) and \(y=x\), order \(dy\,dx\):`,o:[R`\(\int_0^1\int_{x^2}^{x}f\,dy\,dx\)`,R`\(\int_0^1\int_{x}^{x^2}f\,dy\,dx\)`,R`\(\int_{x^2}^{x}\int_0^1f\,dy\,dx\)`,R`\(\int_0^1\int_{y}^{\sqrt y}f\,dy\,dx\)`],a:0,e:R`On \([0,1]\), \(x\ge x^2\), so \(y=x\) is on top.`},
{d:"m",q:R`Same region, order \(dx\,dy\):`,o:[R`\(\int_0^1\int_{y}^{\sqrt y}f\,dx\,dy\)`,R`\(\int_0^1\int_{\sqrt y}^{y}f\,dx\,dy\)`,R`\(\int_0^1\int_{y^2}^{y}f\,dx\,dy\)`,R`\(\int_0^1\int_{x^2}^{x}f\,dx\,dy\)`],a:0,e:R`Left curve \(x=y\), right curve \(x=\sqrt y\).`},
{d:"m",type:"in",q:R`Area between \(y=x^2\) and \(y=x\).`,answers:[1/6],tol:0.002,show:R`\(1/6\)`,e:R`\(\int_0^1(x-x^2)\,dx=\frac12-\frac13=\frac16\).`},
{d:"m",type:"in",q:R`\(\int_0^1\int_0^{x}2y\,dy\,dx\)`,answers:[1/3],tol:0.002,show:R`\(1/3\)`,e:R`Inner: \(x^2\). Outer: \(\frac13\).`},
{d:"m",q:R`Reverse \(\int_0^1\int_x^1 f\,dy\,dx\).`,o:[R`\(\int_0^1\int_0^{y}f\,dx\,dy\)`,R`\(\int_0^1\int_y^1f\,dx\,dy\)`,R`\(\int_x^1\int_0^1f\,dx\,dy\)`,R`\(\int_0^1\int_0^1f\,dx\,dy\)`],a:0,e:R`Triangle \(0\le x\le y\le1\).`},
{d:"m",type:"in",q:R`\(\iint_R y\sin x\,dA\), \(R=[0,\frac\pi2]\times[0,1]\).`,answers:[0.5],e:R`Separable: \(\int_0^{\pi/2}\sin x\,dx\cdot\int_0^1y\,dy=1\cdot\frac12\).`},
{d:"h",type:"in",q:R`\(\int_0^1\int_x^1e^{y^2}\,dy\,dx\) (decimal OK). Hint: reverse it.`,answers:[0.85914],tol:0.01,show:R`\(\frac{e-1}{2}\approx0.859\)`,e:R`Reversed: \(\int_0^1\int_0^y e^{y^2}dx\,dy=\int_0^1ye^{y^2}dy=\frac{e-1}2\).`},
{d:"h",q:R`Reverse \(\int_0^1\int_{y^2}^{1}f\,dx\,dy\).`,o:[R`\(\int_0^1\int_0^{\sqrt x}f\,dy\,dx\)`,R`\(\int_0^1\int_{\sqrt x}^1f\,dy\,dx\)`,R`\(\int_0^1\int_{x^2}^1f\,dy\,dx\)`,R`\(\int_0^1\int_0^{x^2}f\,dy\,dx\)`],a:0,e:R`Region: \(y^2\le x\le1\), \(0\le y\le1\). So \(0\le y\le\sqrt x\), \(0\le x\le1\).`},
{d:"h",q:R`Reverse \(\int_0^2\int_{0}^{x^3}f\,dy\,dx\).`,o:[R`\(\int_0^8\int_{\sqrt[3]y}^{2}f\,dx\,dy\)`,R`\(\int_0^8\int_0^{\sqrt[3]y}f\,dx\,dy\)`,R`\(\int_0^2\int_{\sqrt[3]y}^{2}f\,dx\,dy\)`,R`\(\int_0^8\int_{y^3}^{2}f\,dx\,dy\)`],a:0,e:R`Region: \(0\le y\le x^3\), \(0\le x\le2\). \(y\) goes 0 to 8; \(x\) from \(\sqrt[3]y\) (curve) to 2 (line).`}
],
boss:[
{tag:"Review #13a–b",q:R`\(R\) is bounded by \(y=\sqrt x\), \(y=1\), \(x=0\). Consider \(\iint_R(y^2+x)\,dA\). (a) Sketch and shade \(R\). (b) Set up an integral for the area of \(R\).`,s:[
R`(a) ${regionSVG}<br>Corners \((0,0)\), \((0,1)\), \((1,1)\). Shaded above \(y=\sqrt x\), below \(y=1\).`,
R`(b) \(\displaystyle A=\int_0^1\int_0^{y^2}1\,dx\,dy\) (or \(\displaystyle\int_0^1\int_{\sqrt x}^{1}1\,dy\,dx\)).`,
R`If evaluated: \(\int_0^1y^2\,dy=\frac13\).`]},
{tag:"Review #13c–d",q:R`(c) Set up \(\iint_R(y^2+x)\,dA\) with \(dA=dx\,dy\). (d) With \(dA=dy\,dx\).`,s:[
R`(c) Horizontal strips: \(x\) from 0 to \(y^2\), \(y\) from 0 to 1. \(\displaystyle\int_0^1\int_0^{y^2}(y^2+x)\,dx\,dy\).`,
R`(d) Vertical strips: \(y\) from \(\sqrt x\) to 1, \(x\) from 0 to 1. \(\displaystyle\int_0^1\int_{\sqrt x}^{1}(y^2+x)\,dy\,dx\).`]},
{tag:"Review #13e",q:R`Evaluate the double integral (using the \(dx\,dy\) setup).`,s:[
R`Inner: \(\displaystyle\int_0^{y^2}(y^2+x)\,dx=\left[y^2x+\frac{x^2}2\right]_0^{y^2}=y^4+\frac{y^4}2=\frac32y^4\).`,
R`Outer: \(\displaystyle\int_0^1\frac32y^4\,dy=\frac32\cdot\frac15=\frac3{10}\).`,
R`Answer: \(\frac{3}{10}\). (The \(dy\,dx\) order gives the same: \(\frac13+\frac12-\frac8{15}=\frac3{10}\).)`]},
{tag:"Review #14",q:R`Reverse the order of integration of \(\displaystyle\int_0^8\int_{\sqrt[3]y}^{2}e^{3x^2}\,dx\,dy\).`,s:[
R`Region: \(0\le y\le8\) and \(\sqrt[3]y\le x\le2\).`,
R`\(x\ge\sqrt[3]y\) means \(y\le x^3\). Corners: \((0,0)\), \((2,0)\), \((2,8)\). The region is under the curve \(y=x^3\) from \(x=0\) to \(x=2\).`,
R`Vertical strips: \(y\) from 0 to \(x^3\), \(x\) from 0 to 2.`,
R`\(\displaystyle\int_0^2\int_0^{x^3}e^{3x^2}\,dy\,dx\)`]},
{tag:"Review #15",q:R`Reverse the order of integration of \(\displaystyle\int_{-2}^{2}\int_{x^2}^{4}f(x,y)\,dy\,dx\).`,s:[
R`Region: \(-2\le x\le2\) and \(x^2\le y\le4\). Between the parabola \(y=x^2\) and the line \(y=4\).`,
R`Horizontal strips: \(y\) goes from 0 to 4. Solving \(y=x^2\) for \(x\): left side \(x=-\sqrt y\), right side \(x=\sqrt y\).`,
R`\(\displaystyle\int_0^4\int_{-\sqrt y}^{\sqrt y}f(x,y)\,dx\,dy\)`]}
],
vault:R`<ul>
<li>\(\iint_R f\,dA\) = volume under \(f\); \(\iint_R1\,dA\) = area.</li>
<li>Inside out; treat the outer variable as constant. Fubini: rectangle, either order.</li>
<li>Type I \(dy\,dx\): \(\int_a^b\int_{\text{bottom}}^{\text{top}}\). Type II \(dx\,dy\): \(\int_c^d\int_{\text{left}}^{\text{right}}\) (curves solved for \(x\)).</li>
<li>Reverse: write inequalities → sketch → redescribe. Outer bounds are always numbers.</li></ul>`
});
})();
