(function(){const R=String.raw;
LEVELS.push({id:"146",day:4,sec:"Stewart 14.6",name:"Directional Derivatives & the Gradient",
lesson:[
{t:"Slope in ANY direction",b:R`
<p>\(f_x\) is the slope going east. \(f_y\) is the slope going north. But what if you walk northeast, or any other way? That slope is the <b>directional derivative</b> \(D_{\mathbf u}f\).</p>
<p>The direction is given by a <b>unit vector</b> \(\mathbf u=\langle a,b\rangle\) (length 1).</p>
<p><b>Limit definition</b> (Review #6 asks for this):</p>
<p>\[D_{\mathbf u}f(x_0,y_0)=\lim_{h\to0}\frac{f(x_0+ha,\;y_0+hb)-f(x_0,y_0)}{h}\]</p>
<p>It's the same as the \(f_x\) definition, except you step \(h\) along \(\mathbf u\) instead of along the \(x\)-axis.</p>`},
{t:"The gradient vector",b:R`
<p>The <b>gradient</b> packs both partials into one vector:</p>
<p>\[\nabla f(x,y)=\langle f_x,\;f_y\rangle\qquad \nabla f(x,y,z)=\langle f_x,f_y,f_z\rangle\]</p>
<div class="ex"><span class="lab">Example</span><p>\(f=x^2y\): \(\nabla f=\langle 2xy,\;x^2\rangle\). At \((1,3)\): \(\langle6,1\rangle\).</p></div>
<p><b>The fast way</b> to get a directional derivative:</p>
<p>\[D_{\mathbf u}f=\nabla f\cdot\mathbf u=f_x\,a+f_y\,b\]</p>
<p>Also, since \(\mathbf u\) is a unit vector: \(D_{\mathbf u}f=|\nabla f|\cos\theta\), where \(\theta\) is the angle between \(\nabla f\) and \(\mathbf u\). And if the direction is given as an angle \(\theta\): \(\mathbf u=\langle\cos\theta,\sin\theta\rangle\).</p>`,
check:{q:R`\(\nabla f\) for \(f=x^3+xy^2\)?`,o:[R`\(\langle3x^2+y^2,\;2xy\rangle\)`,R`\(\langle3x^2,\;2xy\rangle\)`,R`\(3x^2+y^2+2xy\)`,R`\(\langle 2xy,\;3x^2+y^2\rangle\)`],a:0,e:R`\(f_x=3x^2+y^2\), \(f_y=2xy\). A gradient is a vector, not a number.`}},
{t:"Recipe: directional derivative",b:R`
<ol><li>Find \(\nabla f\) and plug in the point.</li>
<li>Turn the direction into a <b>unit vector</b>: \(\mathbf u=\dfrac{\mathbf v}{|\mathbf v|}\).</li>
<li>Dot product: \(\nabla f\cdot\mathbf u\).</li></ol>
<div class="ex"><span class="lab">Example: \(f=xy\) at \((1,2)\), direction \(\langle1,1\rangle\)</span>
<p>\(\nabla f=\langle y,x\rangle=\langle2,1\rangle\). \(|\langle1,1\rangle|=\sqrt2\), so \(\mathbf u=\langle\frac1{\sqrt2},\frac1{\sqrt2}\rangle\).<br>\(D_{\mathbf u}f=\frac{2}{\sqrt2}+\frac1{\sqrt2}=\frac3{\sqrt2}\approx2.12\).</p></div>
<div class="trap"><b>#1 most common mistake:</b> forgetting to make the direction a unit vector. \(\langle3,4\rangle\) must become \(\langle\frac35,\frac45\rangle\).</div>
<div class="tip"><b>"Toward a point":</b> if the direction is "from \(P\) toward \(Q\)", use \(\mathbf v=Q-P\), then normalize.</div>`},
{t:"Max and min rate of change",b:R`
<p>Because \(D_{\mathbf u}f=|\nabla f|\cos\theta\), and \(\cos\theta\) is biggest (1) when \(\theta=0\):</p>
<ul><li><b>Direction of greatest increase:</b> \(\nabla f\) (point uphill).</li>
<li><b>Greatest value of \(D_{\mathbf u}f\)</b> (max rate of change): \(|\nabla f|\).</li>
<li><b>Direction of greatest decrease:</b> \(-\nabla f\).</li>
<li><b>Least value of \(D_{\mathbf u}f\):</b> \(-|\nabla f|\).</li>
<li><b>Zero change:</b> any direction perpendicular to \(\nabla f\) (along the level curve).</li></ul>
<div class="ex"><span class="lab">Example: \(f=x^2+y^2\) at \((3,4)\)</span><p>\(\nabla f=\langle6,8\rangle\). Max rate \(=\sqrt{36+64}=10\), in direction \(\langle6,8\rangle\). Min rate \(-10\), direction \(\langle-6,-8\rangle\).</p></div>
<div class="tip"><b>Big fact:</b> \(\nabla f\) is always <b>perpendicular to the level curve</b> through that point (and to the level surface in 3D).</div>`,
check:{q:R`At a point, \(\nabla f=\langle-2,5\rangle\). Direction of fastest decrease?`,o:[R`\(\langle2,-5\rangle\)`,R`\(\langle-2,5\rangle\)`,R`\(\langle5,2\rangle\)`,R`\(-\sqrt{29}\)`],a:0,e:R`Fastest decrease is \(-\nabla f\). (\(-\sqrt{29}\) is the min rate, a number, not a direction.)`}},
{t:"Bonus: tangent planes to level surfaces",b:R`
<p>For a surface written as \(F(x,y,z)=k\) (like a sphere), \(\nabla F\) at the point is a <b>normal vector</b> to the tangent plane:</p>
<p>\[F_x(x-x_0)+F_y(y-y_0)+F_z(z-z_0)=0\]</p>
<div class="ex"><span class="lab">Example: \(x^2+y^2+z^2=9\) at \((2,2,1)\)</span><p>\(\nabla F=\langle2x,2y,2z\rangle=\langle4,4,2\rangle\). Plane: \(4(x-2)+4(y-2)+2(z-1)=0\), i.e. \(2x+2y+z=9\).</p></div>`},
{t:"How the test asks it (Review #6, #8f–k)",b:R`
<p>Different wordings, same thing:</p>
<div class="tbl"><table><tr><th>They say</th><th>You compute</th></tr>
<tr><td>"\(D_{\mathbf u}f\) in direction of \(\mathbf v\)" / "rate of change of \(f\) at \(P\) in the direction of \(\mathbf v\)" / "toward the point \(Q\)"</td><td>\(\nabla f\cdot\frac{\mathbf v}{|\mathbf v|}\)</td></tr>
<tr><td>"direction of greatest increase" / "direction of steepest ascent"</td><td>\(\nabla f(P)\)</td></tr>
<tr><td>"greatest value of \(D_{\mathbf u}f\)" / "maximum rate of change"</td><td>\(|\nabla f(P)|\)</td></tr>
<tr><td>"direction of greatest decrease" / "steepest descent"</td><td>\(-\nabla f(P)\)</td></tr>
<tr><td>"least value of \(D_{\mathbf u}f\)" / "minimum rate of change"</td><td>\(-|\nabla f(P)|\)</td></tr></table></div>`}
],
quest:[
{d:"e",q:R`\(\nabla f\) for \(f=x^2y\)?`,o:[R`\(\langle2xy,\;x^2\rangle\)`,R`\(\langle2x,\;y\rangle\)`,R`\(2xy+x^2\)`,R`\(\langle x^2,\;2xy\rangle\)`],a:0,e:R`\(\langle f_x,f_y\rangle\).`},
{d:"e",q:R`Before dotting with \(\nabla f\), the direction \(\langle3,4\rangle\) must become…`,o:[R`\(\langle\frac35,\frac45\rangle\)`,R`\(\langle\frac37,\frac47\rangle\)`,R`\(\langle4,-3\rangle\)`,R`\(\langle3,4\rangle\) (no change)`],a:0,e:R`Divide by length \(\sqrt{9+16}=5\).`},
{d:"e",q:R`The direction of greatest increase of \(f\) at \(P\) is…`,o:[R`\(\nabla f(P)\)`,R`\(-\nabla f(P)\)`,R`\(|\nabla f(P)|\)`,R`perpendicular to \(\nabla f(P)\)`],a:0,e:R`The gradient points uphill.`},
{d:"e",type:"in",q:R`\(f=x^2+y^2\). Maximum rate of change at \((3,4)\)?`,answers:[10],e:R`\(|\langle6,8\rangle|=10\).`},
{d:"m",type:"in",q:R`\(f=xy\), at \((1,2)\), direction \(\langle1,1\rangle\). Find \(D_{\mathbf u}f\) (decimal OK).`,answers:[2.1213,"3/sqrt(2)","3/√2","3sqrt(2)/2","3√2/2"],tol:0.01,show:R`\(3/\sqrt2\approx2.121\)`,e:R`\(\langle2,1\rangle\cdot\langle\frac1{\sqrt2},\frac1{\sqrt2}\rangle=\frac3{\sqrt2}\).`},
{d:"m",type:"in",q:R`\(f=e^x\sin y\) at \((0,\frac\pi2)\), in the direction \(\theta=\frac\pi3\). Find \(D_{\mathbf u}f\).`,answers:[0.5],e:R`\(\nabla f=\langle e^x\sin y,e^x\cos y\rangle=\langle1,0\rangle\). \(\mathbf u=\langle\frac12,\frac{\sqrt3}2\rangle\). Dot: \(\frac12\).`},
{d:"m",q:R`\(D_{\mathbf u}f=0\) when \(\mathbf u\) is…`,o:[R`perpendicular to \(\nabla f\)`,R`parallel to \(\nabla f\)`,R`equal to \(-\nabla f\)`,R`a unit vector`],a:0,e:R`\(\cos90^\circ=0\). These directions run along the level curve.`},
{d:"m",q:R`From \(P(1,1)\) toward \(Q(4,5)\), the unit direction is…`,o:[R`\(\langle\frac35,\frac45\rangle\)`,R`\(\langle\frac45,\frac55\rangle\)`,R`\(\langle3,4\rangle\)`,R`\(\langle\frac4{\sqrt{41}},\frac5{\sqrt{41}}\rangle\)`],a:0,e:R`\(Q-P=\langle3,4\rangle\), length 5.`},
{d:"m",q:R`The gradient at a point is always ___ to the level curve through that point.`,o:[R`perpendicular`,R`parallel`,R`tangent`,R`equal`],a:0,e:R`Moving along a level curve doesn't change \(f\), so that direction has \(D_{\mathbf u}f=0\).`},
{d:"h",type:"in",q:R`\(f=xyz\) at \((1,1,1)\), direction \(\langle1,2,2\rangle\). Find \(D_{\mathbf u}f\).`,answers:[5/3],tol:0.005,show:R`\(5/3\)`,e:R`\(\nabla f=\langle yz,xz,xy\rangle=\langle1,1,1\rangle\). \(\mathbf u=\frac13\langle1,2,2\rangle\). Dot \(=\frac53\).`},
{d:"h",q:R`Tangent plane to \(x^2+y^2+z^2=9\) at \((2,2,1)\)?`,o:[R`\(2x+2y+z=9\)`,R`\(4x+4y+2z=9\)`,R`\(x+y+z=5\)`,R`\(z=1+4(x-2)+4(y-2)\)`],a:0,e:R`Normal \(\nabla F=\langle4,4,2\rangle\). \(4(x-2)+4(y-2)+2(z-1)=0\) → \(2x+2y+z=9\).`},
{d:"h",type:"in",q:R`\(f=x^2-3y^4\) at \((5,1)\). Least value of \(D_{\mathbf u}f\)? (decimal OK)`,answers:[-15.6205,"-2sqrt(61)","-2√61","-sqrt(244)","-√244"],tol:0.01,show:R`\(-2\sqrt{61}\approx-15.62\)`,e:R`\(\nabla f=\langle10,-12\rangle\), \(|\nabla f|=\sqrt{244}=2\sqrt{61}\). Least value is \(-2\sqrt{61}\).`}
],
boss:[
{tag:"Review #6",q:R`What is the limit definition of the directional derivative? What are the other ways to calculate it?`,s:[
R`For a unit vector \(\mathbf u=\langle a,b\rangle\): \(D_{\mathbf u}f(x_0,y_0)=\displaystyle\lim_{h\to0}\frac{f(x_0+ha,\,y_0+hb)-f(x_0,y_0)}{h}\) (if it exists).`,
R`Other ways: \(D_{\mathbf u}f=\nabla f\cdot\mathbf u=f_x\,a+f_y\,b\).`,
R`And \(D_{\mathbf u}f=|\nabla f|\cos\theta\), where \(\theta\) is the angle between \(\nabla f\) and \(\mathbf u\). If \(\mathbf u\) makes angle \(\theta\) with the \(x\)-axis: \(D_{\mathbf u}f=f_x\cos\theta+f_y\sin\theta\).`]},
{tag:"Review #8f",q:R`\(f(x,y)=x^2-3y^4\). \(\nabla f(x,y)=\) ?`,s:[R`\(\nabla f=\langle2x,\;-12y^3\rangle\).`]},
{tag:"Review #8g",q:R`Find \(D_{\mathbf u}f(5,1)\) in the direction of \(\langle3,4\rangle\). How else could this be asked?`,s:[
R`\(\nabla f(5,1)=\langle10,-12\rangle\).`,
R`Unit vector: \(|\langle3,4\rangle|=5\), so \(\mathbf u=\langle\frac35,\frac45\rangle\).`,
R`\(D_{\mathbf u}f(5,1)=10\cdot\frac35+(-12)\cdot\frac45=6-\frac{48}5=-\frac{18}5=-3.6\).`,
R`Other wordings: "the rate of change of \(f\) at \((5,1)\) in the direction of \(\langle3,4\rangle\)", or "the directional derivative at \((5,1)\) toward the point \((8,5)\)" (since \((8,5)-(5,1)=\langle3,4\rangle\)).`]},
{tag:"Review #8h–i",q:R`(h) A vector pointing in the direction of greatest increase of \(f\) at \((5,1)\)? (i) The greatest value of \(D_{\mathbf u}f(5,1)\)? How else could (i) be asked?`,s:[
R`(h) \(\nabla f(5,1)=\langle10,-12\rangle\) (any positive multiple, like \(\langle5,-6\rangle\), also works).`,
R`(i) \(|\nabla f(5,1)|=\sqrt{100+144}=\sqrt{244}=2\sqrt{61}\approx15.62\).`,
R`Also asked as "the maximum rate of change of \(f\) at \((5,1)\)".`]},
{tag:"Review #8j–k",q:R`(j) A vector pointing in the direction of greatest decrease at \((5,1)\)? (k) The least value of \(D_{\mathbf u}f(5,1)\)?`,s:[
R`(j) \(-\nabla f(5,1)=\langle-10,12\rangle\).`,
R`(k) \(-|\nabla f(5,1)|=-2\sqrt{61}\approx-15.62\).`]}
],
vault:R`<ul>
<li>\(D_{\mathbf u}f=\lim_{h\to0}\frac{f(x_0+ha,y_0+hb)-f(x_0,y_0)}{h}\)</li>
<li>\(\nabla f=\langle f_x,f_y\rangle\). \(D_{\mathbf u}f=\nabla f\cdot\mathbf u=|\nabla f|\cos\theta\). <b>\(\mathbf u\) must be unit.</b></li>
<li>Max increase: direction \(\nabla f\), rate \(|\nabla f|\). Max decrease: \(-\nabla f\), rate \(-|\nabla f|\).</li>
<li>\(\nabla f\perp\) level curves. Tangent plane to \(F=k\): \(\nabla F\cdot\langle x-x_0,y-y_0,z-z_0\rangle=0\).</li></ul>`
});
})();
