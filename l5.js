(function(){const R=String.raw;
LEVELS.push({id:"147",day:5,sec:"Stewart 14.7",name:"Maximum & Minimum Values",
lesson:[
{t:"Peaks, pits, and saddles",b:R`
<p>A <b>local max</b> is a hilltop: higher than everything nearby. A <b>local min</b> is a valley bottom. At both, the tangent plane is <b>flat</b> (horizontal), so both slopes are zero.</p>
<p>A <b>saddle point</b> also has a flat tangent plane, but it goes up in one direction and down in another, like the middle of a Pringle (\(z=x^2-y^2\) at the origin). Not a max, not a min.</p>
<div class="tip"><b>Plan for every problem:</b> (1) find critical points, (2) classify each one with the Second Derivative Test.</div>`},
{t:"Step 1: finding critical points",b:R`
<p>\((a,b)\) is a <b>critical point</b> if</p>
<p>\[f_x(a,b)=0\ \text{ and }\ f_y(a,b)=0\]</p>
<p>(or if one of the partials doesn't exist there). Solve the two equations <b>at the same time</b>.</p>
<div class="ex"><span class="lab">Example: \(f=x^2+y^2-2x+4y\)</span><p>\(f_x=2x-2=0\to x=1\). \(f_y=2y+4=0\to y=-2\). Critical point \((1,-2)\).</p></div>
<div class="ex"><span class="lab">Harder: \(f=x^3+y^3-3xy\)</span><p>\(f_x=3x^2-3y=0\to y=x^2\). \(f_y=3y^2-3x=0\to x=y^2\).<br>Substitute: \(x=(x^2)^2=x^4\) → \(x^4-x=0\) → \(x(x^3-1)=0\) → \(x=0\) or \(x=1\).<br>Then \(y=x^2\): points \((0,0)\) and \((1,1)\).</p></div>
<div class="trap"><b>Trap:</b> Never divide both sides by a variable (like \(x\)) to cancel it. You'll lose the solution \(x=0\). <b>Factor</b> instead.</div>`,
check:{q:R`If \(f_y=y(y+x)=0\), what are the cases?`,o:[R`\(y=0\) or \(y=-x\)`,R`\(y=-x\) only`,R`\(y=0\) only`,R`\(x=0\) or \(y=0\)`],a:0,e:R`Zero product: either factor can be zero.`}},
{t:"Step 2: the Second Derivative Test",b:R`
<p>At each critical point, compute</p>
<p>\[D=f_{xx}f_{yy}-\big(f_{xy}\big)^2\]</p>
<div class="tbl"><table><tr><th>Result</th><th>Conclusion</th></tr>
<tr><td>\(D>0\) and \(f_{xx}>0\)</td><td><b>local minimum</b> (concave up, a bowl)</td></tr>
<tr><td>\(D>0\) and \(f_{xx}<0\)</td><td><b>local maximum</b> (concave down, a dome)</td></tr>
<tr><td>\(D<0\)</td><td><b>saddle point</b></td></tr>
<tr><td>\(D=0\)</td><td>test is <b>inconclusive</b> (could be anything)</td></tr></table></div>
<p>The second partials need to be continuous near the point (fine for every function you'll see on the test).</p>
<div class="tip"><b>Memory trick:</b> \(D\) is the determinant of \(\begin{vmatrix}f_{xx}&f_{xy}\\f_{xy}&f_{yy}\end{vmatrix}\). Positive \(D\) means "max or min, ask \(f_{xx}\)". Negative \(D\) means saddle. \(f_{xx}>0\) is "smile" = min.</div>`,
check:{q:R`At a critical point, \(f_{xx}=-3\), \(f_{yy}=-2\), \(f_{xy}=4\). Classify.`,o:[R`Saddle point`,R`Local max`,R`Local min`,R`Inconclusive`],a:0,e:R`\(D=6-16=-10<0\): saddle. (Don't look at \(f_{xx}\) when \(D<0\).)`}},
{t:"Full worked example",b:R`
<div class="ex"><span class="lab">Classify the critical points of \(f=x^3+y^3-3xy\)</span>
<p>Critical points (from before): \((0,0)\), \((1,1)\).</p>
<p>Second partials: \(f_{xx}=6x\), \(f_{yy}=6y\), \(f_{xy}=-3\).<br>\(D=36xy-9\).</p>
<p>\((0,0)\): \(D=-9<0\) → <b>saddle point</b>.</p>
<p>\((1,1)\): \(D=36-9=27>0\), \(f_{xx}=6>0\) → <b>local min</b>, value \(f(1,1)=1+1-3=-1\).</p></div>
<p>Write it exactly like this on the test: a line for each point with \(D\), the sign of \(f_{xx}\), and the conclusion. That's what "showing proper work" means here.</p>`},
{t:"How the test asks it (Review #9–12)",b:R`
<p>#9 and #10 are definitions (fill-in-the-blank material). #11 and #12 are full problems.</p>
<p>Make a habit of a table at the end:</p>
<div class="tbl"><table><tr><th>Point</th><th>\(f_{xx}\)</th><th>\(D\)</th><th>Type</th></tr><tr><td>…</td><td>…</td><td>…</td><td>…</td></tr></table></div>
<div class="trap"><b>#12 heads-up:</b> \(f_{xx}\) turns out to be 0 there. That's fine: \(D\) can still be negative, and negative \(D\) means saddle regardless of \(f_{xx}\).</div>`}
],
quest:[
{d:"e",q:R`To find critical points of \(f(x,y)\)…`,o:[R`Solve \(f_x=0\) and \(f_y=0\) together (also check where they don't exist)`,R`Set \(f=0\)`,R`Set \(D=0\)`,R`Set \(f_{xx}=0\)`],a:0,e:R`Both first partials are zero (or undefined).`},
{d:"e",q:R`\(D>0\), \(f_{xx}>0\) at a critical point means…`,o:[R`local min`,R`local max`,R`saddle point`,R`inconclusive`],a:0,e:R`Concave up, bowl.`},
{d:"e",q:R`\(D<0\) at a critical point means…`,o:[R`saddle point`,R`local max`,R`local min`,R`inconclusive`],a:0,e:R`Negative \(D\) is always a saddle.`},
{d:"e",q:R`Critical point of \(f=x^2+y^2-2x+4y\)?`,o:[R`\((1,-2)\)`,R`\((-1,2)\)`,R`\((2,-4)\)`,R`\((0,0)\)`],a:0,e:R`\(2x-2=0\), \(2y+4=0\).`},
{d:"m",q:R`\(f_{xx}=2\), \(f_{yy}=8\), \(f_{xy}=3\). Classify.`,o:[R`local min`,R`local max`,R`saddle`,R`inconclusive`],a:0,e:R`\(D=16-9=7>0\), \(f_{xx}>0\).`},
{d:"m",q:R`\(f=4-x^2-y^2\) at \((0,0)\)?`,o:[R`local max`,R`local min`,R`saddle`,R`inconclusive`],a:0,e:R`\(f_{xx}=-2\), \(f_{yy}=-2\), \(f_{xy}=0\). \(D=4>0\), \(f_{xx}<0\).`},
{d:"m",q:R`\(f=x^3-3x+y^2\). Classify its critical points.`,o:[R`\((1,0)\) local min, \((-1,0)\) saddle`,R`\((1,0)\) saddle, \((-1,0)\) local min`,R`both local mins`,R`\((1,0)\) local max, \((-1,0)\) saddle`],a:0,e:R`\(f_x=3x^2-3\to x=\pm1\), \(f_y=2y\to y=0\). \(D=6x\cdot2-0=12x\). At \(x=1\): 12>0, \(f_{xx}=6>0\) min. At \(x=-1\): \(-12\) saddle.`},
{d:"m",q:R`\(f=x^3+y^3-3xy\). Critical points?`,o:[R`\((0,0)\) and \((1,1)\)`,R`\((1,1)\) only`,R`\((0,0)\) only`,R`\((1,1)\) and \((-1,-1)\)`],a:0,e:R`\(y=x^2\), \(x=y^2\) → \(x^4=x\) → \(x=0,1\).`},
{d:"h",type:"in",q:R`\(f=xy-x^2-y^2-2x-2y+4\) has one critical point, a local max. What is the max value?`,answers:[8],e:R`\(f_x=y-2x-2=0\), \(f_y=x-2y-2=0\) → \((-2,-2)\). \(D=4-1=3>0\), \(f_{xx}=-2<0\). \(f(-2,-2)=4-4-4+4+4+4=8\).`},
{d:"h",q:R`\(f=x^4+y^4\) at \((0,0)\): what does the Second Derivative Test say?`,o:[R`Inconclusive (\(D=0\)), even though it's actually a min`,R`Local min`,R`Saddle`,R`Local max`],a:0,e:R`All second partials are 0 at the origin, so \(D=0\). You'd need another argument (it's clearly a min since \(f\ge0\)).`},
{d:"h",q:R`If \(f_x=3x^2-3y\) and \(f_y=3y^2-3x\), which step loses a solution?`,o:[R`Dividing \(x^4=x\) by \(x\) to get \(x^3=1\)`,R`Substituting \(y=x^2\)`,R`Setting \(f_x=0\)`,R`Factoring \(x(x^3-1)=0\)`],a:0,e:R`Dividing by \(x\) throws away \(x=0\). Factor instead.`}
],
boss:[
{tag:"Review #9",q:R`How do you find the critical points of a function \(f=f(x,y)\)?`,s:[
R`Find \(f_x\) and \(f_y\).`,
R`Solve the system \(f_x=0\) and \(f_y=0\) simultaneously. Also include points in the domain where \(f_x\) or \(f_y\) does not exist.`]},
{tag:"Review #10",q:R`What is the Second (Partial) Derivative Test? When is it a local min, local max, saddle? When is it inconclusive?`,s:[
R`Suppose the second partials are continuous near a critical point \((a,b)\). Let \(D=f_{xx}(a,b)f_{yy}(a,b)-[f_{xy}(a,b)]^2\).`,
R`\(D>0\) and \(f_{xx}(a,b)>0\): local min. \(D>0\) and \(f_{xx}(a,b)<0\): local max.`,
R`\(D<0\): saddle point. \(D=0\): the test is inconclusive.`]},
{tag:"Review #11",q:R`Identify the critical points of \(h(x,y)=\frac{x^4}{4}-xy+\frac{y^2}{2}\), then classify them with the Second Derivative Test.`,s:[
R`\(h_x=x^3-y\), \(h_y=-x+y\).`,
R`\(h_y=0\Rightarrow y=x\). Substitute into \(h_x=0\): \(x^3-x=0\Rightarrow x(x-1)(x+1)=0\Rightarrow x=0,1,-1\).`,
R`Critical points: \((0,0)\), \((1,1)\), \((-1,-1)\).`,
R`\(h_{xx}=3x^2\), \(h_{yy}=1\), \(h_{xy}=-1\). \(D=3x^2(1)-(-1)^2=3x^2-1\).`,
R`\((0,0)\): \(D=-1<0\) → <b>saddle point</b>.`,
R`\((1,1)\): \(D=2>0\), \(h_{xx}=3>0\) → <b>local min</b> (\(h=-\frac14\)). \((-1,-1)\): \(D=2>0\), \(h_{xx}=3>0\) → <b>local min</b> (\(h=-\frac14\)).`]},
{tag:"Review #12",q:R`Identify the critical points of \(g(x,y)=\frac13y^3+\frac12xy^2-x\), then classify them.`,s:[
R`\(g_x=\frac12y^2-1\), \(g_y=y^2+xy=y(y+x)\).`,
R`\(g_x=0\Rightarrow y^2=2\Rightarrow y=\pm\sqrt2\).`,
R`\(g_y=0\Rightarrow y=0\) or \(x=-y\). \(y=0\) fails \(g_x=0\), so \(x=-y\).`,
R`Critical points: \((-\sqrt2,\sqrt2)\) and \((\sqrt2,-\sqrt2)\).`,
R`\(g_{xx}=0\), \(g_{yy}=2y+x\), \(g_{xy}=y\). \(D=0\cdot(2y+x)-y^2=-y^2\).`,
R`At both points \(D=-2<0\) → <b>both are saddle points</b>.`]}
],
vault:R`<ul>
<li>Critical points: \(f_x=0\) and \(f_y=0\) (or undefined). Factor, don't divide.</li>
<li>\(D=f_{xx}f_{yy}-f_{xy}^2\)</li>
<li>\(D>0,f_{xx}>0\): min · \(D>0,f_{xx}<0\): max · \(D<0\): saddle · \(D=0\): inconclusive</li></ul>`
});
})();
