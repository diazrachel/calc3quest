(function(){const R=String.raw;
/* ===================== 14.2 ===================== */
LEVELS.push({id:"142",day:2,sec:"Stewart 14.2",name:"Limits & Continuity",
lesson:[
{t:"Limits in 2D: every direction counts",b:R`
<p>In Calc 1, \(x\to a\) could only come from the left or the right. In 2D, \((x,y)\to(a,b)\) can come from <b>infinitely many directions and along any curve</b>: straight lines, parabolas, spirals.</p>
<p>The limit \(\displaystyle\lim_{(x,y)\to(a,b)} f(x,y)=L\) exists only if \(f\) gets close to the <b>same</b> \(L\) no matter which path you take.</p>
<div class="tip"><b>Two big moves this section:</b> (1) to show a limit <b>does not exist</b>, find two paths that give different answers. (2) to show a limit <b>does exist</b>, simplify (plug in, factor, conjugate) or squeeze it.</div>`},
{t:"Step 1 always: try plugging in",b:R`
<p>If \(f\) is continuous at the point (no division by zero, no log of 0, etc.), the limit is just \(f(a,b)\).</p>
<div class="ex"><span class="lab">Example</span><p>\(\displaystyle\lim_{(x,y)\to(1,2)}(x^2y+3y)=1\cdot2+6=8\).</p></div>
<p>If plugging in gives \(\frac{0}{0}\), you have work to do. That's the interesting case, and it's what your review sheet tests.</p>`},
{t:"Showing a limit does NOT exist (Two-Path Test)",b:R`
<p>If you find two paths into the point that give <b>different</b> limits, the limit does not exist (DNE).</p>
<p><b>Paths to try at \((0,0)\):</b></p>
<ol><li>\(x\)-axis: set \(y=0\).</li><li>\(y\)-axis: set \(x=0\).</li><li>Any line \(y=mx\). If the answer depends on \(m\), DNE immediately.</li><li>A parabola \(x=y^2\) or \(y=x^2\), when lines all agree but powers are lopsided.</li></ol>
<div class="ex"><span class="lab">Example: \(\displaystyle\lim_{(x,y)\to(0,0)}\frac{x^2-y^2}{x^2+y^2}\)</span>
<p>Along \(y=0\): \(\frac{x^2}{x^2}=1\). Along \(x=0\): \(\frac{-y^2}{y^2}=-1\). Different, so <b>DNE</b>.</p></div>
<div class="ex"><span class="lab">Example: \(\displaystyle\lim_{(x,y)\to(0,0)}\frac{xy^2}{x^2+y^4}\)</span>
<p>Along \(y=mx\): \(\frac{m^2x^3}{x^2+m^4x^4}=\frac{m^2x}{1+m^4x^2}\to0\). Every line gives 0! But along \(x=y^2\): \(\frac{y^4}{y^4+y^4}=\frac12\). Different, so <b>DNE</b>.</p></div>
<div class="trap"><b>Trap:</b> Getting the same value along many paths does <b>not</b> prove the limit exists. Paths can only prove DNE.</div>`,
check:{q:R`Along \(y=mx\), \(\frac{xy}{x^2+y^2}\) becomes \(\frac{m}{1+m^2}\). What can you conclude?`,o:[R`The limit is \(\frac{m}{1+m^2}\)`,R`The limit DNE, since the value depends on the path`,R`The limit is 0`,R`Nothing yet`],a:1,e:R`Different slopes \(m\) give different values (\(m=0\to0\), \(m=1\to\frac12\)), so the limit does not exist.`}},
{t:"Showing a limit DOES exist",b:R`
<p><b>Trick 1: factor and cancel.</b></p>
<div class="ex"><span class="lab">Example</span><p>\(\displaystyle\lim_{(x,y)\to(0,0)}\frac{x^2-y^2}{x-y}=\lim (x+y)=0\) (for \(x\ne y\)).</p></div>
<p><b>Trick 2: conjugate</b> when you see square roots.</p>
<div class="ex"><span class="lab">Example</span><p>\(\displaystyle\frac{x^2+y^2}{\sqrt{x^2+y^2+1}-1}\cdot\frac{\sqrt{x^2+y^2+1}+1}{\sqrt{x^2+y^2+1}+1}=\sqrt{x^2+y^2+1}+1\to2\).</p></div>
<p><b>Trick 3: Squeeze Theorem.</b> Use facts like \(\frac{x^2}{x^2+y^2}\le1\).</p>
<div class="ex"><span class="lab">Example: \(\displaystyle\lim_{(x,y)\to(0,0)}\frac{3x^2y}{x^2+y^2}\)</span><p>\(\left|\frac{3x^2y}{x^2+y^2}\right|=3|y|\cdot\frac{x^2}{x^2+y^2}\le3|y|\to0\). So the limit is 0.</p></div>
<p><b>Trick 4: polar</b>. Put \(x=r\cos\theta,\ y=r\sin\theta\), so \(x^2+y^2=r^2\). If the result \(\to\) a value as \(r\to0\) no matter what \(\theta\) is, that's the limit.</p>
<div class="tip"><b>Quick sense check:</b> if the total degree on top is bigger than on the bottom (like \(x^2y\) over \(x^2+y^2\): 3 vs 2), it often goes to 0. Equal degrees (like \(xy\) over \(x^2+y^2\)) often DNE.</div>`},
{t:"Continuity",b:R`
<p>\(f\) is <b>continuous at \((a,b)\)</b> if \(\displaystyle\lim_{(x,y)\to(a,b)}f(x,y)=f(a,b)\).</p>
<ul><li>Polynomials: continuous everywhere.</li>
<li>Rational functions (polynomial/polynomial): continuous everywhere the denominator \(\ne0\).</li>
<li>Compositions (like \(\ln\), \(e^{\cdot}\), \(\sin\), \(\sqrt{\ }\) of continuous things): continuous on their domain.</li></ul>
<div class="ex"><span class="lab">Example</span><p>Where is \(f(x,y)=\frac{x+y}{x-y}\) continuous? Everywhere except the line \(y=x\).</p></div>`},
{t:"How the test asks it (Review #2, #3)",b:R`
<p>They give you a \(\frac{0}{0}\) limit at \((0,0)\). Your work:</p>
<ol><li>Show plugging in gives \(\frac{0}{0}\).</li>
<li>Try \(y=0\), \(x=0\), and \(y=mx\) (or \(y=x\)). Write each path's limit clearly.</li>
<li>If two differ: write "Since the limits along two different paths are not equal, the limit does not exist."</li>
<li>If they all agree: try to <b>factor</b> or <b>squeeze</b> to prove it.</li></ol>
<div class="tip"><b>Look for factoring first.</b> Differences of squares like \(x^4-4y^4=(x^2-2y^2)(x^2+2y^2)\) are a huge hint.</div>`}
],
quest:[
{d:"e",type:"in",q:R`\(\displaystyle\lim_{(x,y)\to(1,2)}(x^2+3y)\)`,answers:[7],e:R`Polynomial, so plug in: \(1+6=7\).`},
{d:"e",q:R`\(\displaystyle\lim_{(x,y)\to(0,0)}\frac{x^2-y^2}{x^2+y^2}\)`,o:[R`DNE`,R`0`,R`1`,R`\(-1\)`],a:0,e:R`\(x\)-axis gives 1, \(y\)-axis gives \(-1\). Different, so DNE.`},
{d:"e",q:R`To prove a limit does NOT exist, you need…`,o:[R`Two paths that give different values`,R`One path that gives 0`,R`Every line \(y=mx\) to give the same value`,R`To plug in and get \(\frac00\)`],a:0,e:R`Two different path-limits is exactly what proves DNE.`},
{d:"e",type:"in",q:R`\(\displaystyle\lim_{(x,y)\to(1,1)}\frac{x^2-y^2}{x-y}\)`,answers:[2],e:R`Factor: \(\frac{(x-y)(x+y)}{x-y}=x+y\to2\).`},
{d:"m",q:R`\(\displaystyle\lim_{(x,y)\to(0,0)}\frac{xy}{x^2+y^2}\)`,o:[R`DNE`,R`0`,R`\(\frac12\)`,R`1`],a:0,e:R`Along \(y=0\): 0. Along \(y=x\): \(\frac{x^2}{2x^2}=\frac12\). DNE.`},
{d:"m",q:R`\(\displaystyle\lim_{(x,y)\to(0,0)}\frac{x^2y}{x^2+y^2}\)`,o:[R`0`,R`DNE`,R`1`,R`\(\frac12\)`],a:0,e:R`Squeeze: \(\left|\frac{x^2y}{x^2+y^2}\right|\le|y|\to0\).`},
{d:"m",type:"in",q:R`\(\displaystyle\lim_{(x,y)\to(0,0)}\frac{x^2+y^2}{\sqrt{x^2+y^2+1}-1}\)`,answers:[2],e:R`Multiply by the conjugate: the expression becomes \(\sqrt{x^2+y^2+1}+1\to2\).`},
{d:"m",q:R`Every line \(y=mx\) gives limit 0 for some function. What do you know?`,o:[R`Nothing for sure yet; try a curve or prove it with squeeze`,R`The limit is 0`,R`The limit DNE`,R`The function is continuous`],a:0,e:R`Lines agreeing is not proof. A parabola path could still disagree (like \(\frac{xy^2}{x^2+y^4}\)).`},
{d:"m",q:R`Where is \(f(x,y)=\frac{x+y}{x-y}\) continuous?`,o:[R`All \((x,y)\) with \(y\ne x\)`,R`All \((x,y)\)`,R`All \((x,y)\) with \(y\ne -x\)`,R`Only at \((0,0)\)`],a:0,e:R`Rational function: continuous wherever the denominator \(x-y\ne0\).`},
{d:"h",q:R`\(\displaystyle\lim_{(x,y)\to(0,0)}\frac{xy^2}{x^2+y^4}\)`,o:[R`DNE`,R`0`,R`\(\frac12\)`,R`1`],a:0,e:R`Lines \(y=mx\) all give 0, but \(x=y^2\) gives \(\frac{y^4}{2y^4}=\frac12\). DNE.`},
{d:"h",type:"in",q:R`\(\displaystyle\lim_{(x,y)\to(0,0)}\frac{\sin(x^2+y^2)}{x^2+y^2}\)`,answers:[1],e:R`Let \(t=x^2+y^2\to0\). \(\frac{\sin t}{t}\to1\).`},
{d:"h",type:"in",q:R`\(\displaystyle\lim_{(x,y)\to(0,0)}\frac{x^3+y^3}{x+y}\)`,answers:[0],e:R`Sum of cubes: \(\frac{(x+y)(x^2-xy+y^2)}{x+y}=x^2-xy+y^2\to0\).`},
{d:"h",q:R`\(\displaystyle\lim_{(x,y)\to(0,0)}\frac{x^2y}{x^4+y^2}\)`,o:[R`DNE`,R`0`,R`\(\frac12\)`,R`1`],a:0,e:R`Along \(y=mx^2\): \(\frac{mx^4}{x^4+m^2x^4}=\frac{m}{1+m^2}\), which depends on \(m\). DNE.`}
],
boss:[
{tag:"Review #2",q:R`Calculate \(\displaystyle\lim_{(x,y)\to(0,0)}\frac{2xy}{x^2+2y^2}\)`,s:[
R`Plugging in gives \(\frac00\), so test paths.`,
R`Along the \(x\)-axis (\(y=0\)): \(\frac{0}{x^2}=0\to0\).`,
R`Along \(y=x\): \(\frac{2x^2}{x^2+2x^2}=\frac{2x^2}{3x^2}=\frac23\).`,
R`\(0\ne\frac23\). Since two paths give different limits, <b>the limit does not exist</b>.`]},
{tag:"Review #3",q:R`Calculate \(\displaystyle\lim_{(x,y)\to(0,0)}\frac{x^4-4y^4}{x^2+2y^2}\)`,s:[
R`Plugging in gives \(\frac00\). Notice the numerator is a difference of squares.`,
R`\(x^4-4y^4=(x^2)^2-(2y^2)^2=(x^2-2y^2)(x^2+2y^2)\).`,
R`Cancel: \(\frac{(x^2-2y^2)(x^2+2y^2)}{x^2+2y^2}=x^2-2y^2\) for \((x,y)\ne(0,0)\).`,
R`\(\displaystyle\lim_{(x,y)\to(0,0)}(x^2-2y^2)=0\). <b>The limit is 0.</b>`]}
],
vault:R`<ul>
<li>Plug in first. If continuous there, done.</li>
<li>DNE: two paths, different values (\(y=0\), \(x=0\), \(y=mx\), \(x=y^2\)).</li>
<li>Exists: factor/cancel, conjugate, squeeze (\(\frac{x^2}{x^2+y^2}\le1\)), polar.</li>
<li>Same value on many paths ≠ proof.</li></ul>`
});

/* ===================== 14.3 ===================== */
LEVELS.push({id:"143",day:2,sec:"Stewart 14.3",name:"Partial Derivatives",
lesson:[
{t:"One variable at a time",b:R`
<p>A <b>partial derivative</b> asks: how fast does \(f\) change if I move in just <b>one</b> direction?</p>
<ul><li>\(f_x\) (also \(\frac{\partial f}{\partial x}\)): treat \(y\) as a <b>constant number</b> and differentiate with respect to \(x\).</li>
<li>\(f_y\) (also \(\frac{\partial f}{\partial y}\)): treat \(x\) as a constant and differentiate with respect to \(y\).</li></ul>
<p>All your Calc 1 rules (power, product, quotient, chain) work exactly the same.</p>
<div class="ex"><span class="lab">Example: \(f(x,y)=x^3y^2+5y\)</span>
<p>\(f_x=3x^2y^2\) (the \(5y\) is a constant, so it disappears).<br>\(f_y=2x^3y+5\).</p></div>
<div class="tip"><b>Trick:</b> Mentally replace the "frozen" variable with a number like 7. \(x^3\cdot7^2\) → derivative \(3x^2\cdot 7^2\). Then put \(y\) back.</div>`,
check:{q:R`\(f(x,y)=x^2y^3\). What is \(f_y\)?`,o:[R`\(3x^2y^2\)`,R`\(2xy^3\)`,R`\(6xy^2\)`,R`\(x^2y^2\)`],a:0,e:R`Freeze \(x^2\) as a constant: \(x^2\cdot3y^2\).`}},
{t:"Chain rule and friends inside partials",b:R`
<div class="ex"><span class="lab">\(f=e^{xy}\)</span><p>\(f_x=e^{xy}\cdot y\), \(f_y=e^{xy}\cdot x\). (Inside derivative of \(xy\) w.r.t. \(x\) is \(y\).)</p></div>
<div class="ex"><span class="lab">\(f=\sin(x^2y)\)</span><p>\(f_x=\cos(x^2y)\cdot2xy\), \(f_y=\cos(x^2y)\cdot x^2\).</p></div>
<div class="ex"><span class="lab">\(f=\ln(x^2+y^2)\)</span><p>\(f_x=\frac{2x}{x^2+y^2}\), \(f_y=\frac{2y}{x^2+y^2}\).</p></div>
<div class="ex"><span class="lab">\(f=\frac{x}{y}\)</span><p>\(f_x=\frac1y\). \(f_y=x\cdot(-y^{-2})=-\frac{x}{y^2}\).</p></div>
<div class="trap"><b>Trap:</b> \(x^y\) w.r.t. \(y\) is an exponential: \(x^y\ln x\). W.r.t. \(x\) it's a power: \(yx^{y-1}\).</div>`},
{t:"What a partial derivative means",b:R`
<p>\(f_x(a,b)\) is the <b>slope of the surface</b> at \((a,b)\) if you walk in the positive \(x\)-direction (slice with the plane \(y=b\)). \(f_y(a,b)\) is the slope walking in the \(y\)-direction.</p>
<p>It's also a <b>rate of change</b>: units of \(f\) per unit of \(x\).</p>
<p><b>Limit definition</b> (know it exists):</p>
<p>\[f_x(a,b)=\lim_{h\to0}\frac{f(a+h,b)-f(a,b)}{h}\]</p>
<p>Functions of 3 variables work the same: \(f_z\) freezes \(x\) and \(y\).</p>`},
{t:"Second partials and Clairaut's Theorem",b:R`
<p>Take partials of partials:</p>
<ul><li>\(f_{xx}=(f_x)_x\), \(f_{yy}=(f_y)_y\)</li>
<li><b>Mixed</b>: \(f_{xy}=(f_x)_y\) (do \(x\) first, then \(y\)), and \(f_{yx}=(f_y)_x\).</li></ul>
<div class="ex"><span class="lab">\(f=x^3y^2\)</span><p>\(f_x=3x^2y^2\), \(f_y=2x^3y\).<br>\(f_{xx}=6xy^2\), \(f_{yy}=2x^3\), \(f_{xy}=6x^2y\), \(f_{yx}=6x^2y\). The mixed ones match!</p></div>
<div class="tip"><b>Clairaut's Theorem (Review #5):</b> If \(f\) is defined on a disk \(D\) containing \((a,b)\), and \(f_{xy}\) and \(f_{yx}\) are both <b>continuous</b> on \(D\), then \(f_{xy}(a,b)=f_{yx}(a,b)\).</div>
<p>In plain words: for nice functions, the order of mixed partials doesn't matter. Memorize the conditions (disk, continuous) for the fill-in-the-blank part.</p>`,
check:{q:R`Clairaut's Theorem requires that…`,o:[R`\(f_{xy}\) and \(f_{yx}\) are continuous on a disk around the point`,R`\(f\) is a polynomial`,R`\(f_{xx}=f_{yy}\)`,R`\(f_x=f_y\)`],a:0,e:R`The hypothesis is continuity of the mixed partials on a disk containing the point.`}},
{t:"How the test asks it (Review #8a–b)",b:R`
<p>Fill-in-the-blank: just give the partials, simplified. For \(f(x,y)=x^2-3y^4\):</p>
<p>\(f_x(x,y)=\) ? and \(f_y(x,y)=\) ? Try them before peeking in the Boss tab.</p>
<p>These two answers get reused for tangent planes (Day 3) and the gradient (Day 4), so getting them right is worth points three times.</p>`}
],
quest:[
{d:"e",q:R`\(f=x^3y^2\). \(f_x=\)`,o:[R`\(3x^2y^2\)`,R`\(2x^3y\)`,R`\(6x^2y\)`,R`\(3x^2\)`],a:0,e:R`Treat \(y^2\) as a constant.`},
{d:"e",q:R`\(f=x^2-3y^4\). \(f_y=\)`,o:[R`\(-12y^3\)`,R`\(2x-12y^3\)`,R`\(-3y^3\)`,R`\(12y^3\)`],a:0,e:R`\(x^2\) is constant w.r.t. \(y\), and \(\frac{d}{dy}(-3y^4)=-12y^3\).`},
{d:"e",q:R`\(f=e^{xy}\). \(f_x=\)`,o:[R`\(ye^{xy}\)`,R`\(e^{xy}\)`,R`\(xe^{xy}\)`,R`\(xye^{xy}\)`],a:0,e:R`Chain rule: derivative of \(xy\) w.r.t. \(x\) is \(y\).`},
{d:"e",type:"in",q:R`\(f=x^2y+y^3\). Find \(f_x(1,2)\).`,answers:[4],e:R`\(f_x=2xy=2(1)(2)=4\).`},
{d:"m",q:R`\(f=\sin(x^2y)\). \(f_y=\)`,o:[R`\(x^2\cos(x^2y)\)`,R`\(2xy\cos(x^2y)\)`,R`\(\cos(x^2y)\)`,R`\(-x^2\cos(x^2y)\)`],a:0,e:R`Inside derivative w.r.t. \(y\) is \(x^2\).`},
{d:"m",q:R`\(f=\frac{x}{y}\). \(f_y=\)`,o:[R`\(-\frac{x}{y^2}\)`,R`\(\frac1y\)`,R`\(\frac{x}{y^2}\)`,R`\(-\frac1{y^2}\)`],a:0,e:R`\(x\cdot y^{-1}\) → \(-xy^{-2}\).`},
{d:"m",q:R`\(f=\ln(x^2+y^2)\). \(f_x=\)`,o:[R`\(\frac{2x}{x^2+y^2}\)`,R`\(\frac{1}{x^2+y^2}\)`,R`\(\frac{2x+2y}{x^2+y^2}\)`,R`\(\frac{1}{2x}\)`],a:0,e:R`Chain rule with inside \(x^2+y^2\).`},
{d:"m",q:R`\(f=x^3y^2\). \(f_{xy}=\)`,o:[R`\(6x^2y\)`,R`\(6xy^2\)`,R`\(2x^3\)`,R`\(3x^2y^2\)`],a:0,e:R`\(f_x=3x^2y^2\), then w.r.t. \(y\): \(6x^2y\).`},
{d:"m",q:R`\(f=x^4y^3\). \(f_{yy}=\)`,o:[R`\(6x^4y\)`,R`\(3x^4y^2\)`,R`\(12x^3y^2\)`,R`\(12x^2y^3\)`],a:0,e:R`\(f_y=3x^4y^2\), \(f_{yy}=6x^4y\).`},
{d:"m",q:R`\(f(x,y,z)=xyz^2\). \(f_z=\)`,o:[R`\(2xyz\)`,R`\(yz^2\)`,R`\(xz^2\)`,R`\(z^2\)`],a:0,e:R`Freeze \(x\) and \(y\).`},
{d:"h",q:R`\(f=\sqrt{x^2+y^2}\). \(f_x=\)`,o:[R`\(\frac{x}{\sqrt{x^2+y^2}}\)`,R`\(\frac{1}{2\sqrt{x^2+y^2}}\)`,R`\(\frac{2x}{\sqrt{x^2+y^2}}\)`,R`\(\frac{x+y}{\sqrt{x^2+y^2}}\)`],a:0,e:R`\(\frac12(x^2+y^2)^{-1/2}\cdot2x\).`},
{d:"h",q:R`\(f=x^y\). \(f_y=\)`,o:[R`\(x^y\ln x\)`,R`\(yx^{y-1}\)`,R`\(x^y\)`,R`\(\ln x\)`],a:0,e:R`W.r.t. \(y\), the base is constant, so it's exponential.`},
{d:"h",q:R`\(f=xe^{y}+y\sin x\). Which is true?`,o:[R`\(f_{xy}=f_{yx}=e^y+\cos x\)`,R`\(f_{xy}=e^y\), \(f_{yx}=\cos x\)`,R`\(f_{xy}=0\)`,R`\(f_{xy}=xe^y\)`],a:0,e:R`\(f_x=e^y+y\cos x\) → \(f_{xy}=e^y+\cos x\). \(f_y=xe^y+\sin x\) → \(f_{yx}=e^y+\cos x\). Clairaut in action.`}
],
boss:[
{tag:"Review #5",q:R`What is Clairaut's Theorem?`,s:[
R`Suppose \(f\) is defined on a disk \(D\) that contains the point \((a,b)\).`,
R`If the functions \(f_{xy}\) and \(f_{yx}\) are both <b>continuous</b> on \(D\), then \(f_{xy}(a,b)=f_{yx}(a,b)\).`]},
{tag:"Review #8a–b",q:R`For \(f(x,y)=x^2-3y^4\): find \(f_x(x,y)\) and \(f_y(x,y)\).`,s:[
R`\(f_x\): treat \(y\) as constant, so \(-3y^4\) disappears. \(f_x=2x\).`,
R`\(f_y\): treat \(x\) as constant. \(f_y=-12y^3\).`]}
],
vault:R`<ul>
<li>\(f_x\): freeze \(y\). \(f_y\): freeze \(x\).</li>
<li>\(f_x(a,b)=\lim_{h\to0}\frac{f(a+h,b)-f(a,b)}{h}\)</li>
<li>\(f_{xy}=(f_x)_y\). Clairaut: if \(f_{xy},f_{yx}\) continuous on a disk around \((a,b)\), then \(f_{xy}(a,b)=f_{yx}(a,b)\).</li></ul>`
});
})();
