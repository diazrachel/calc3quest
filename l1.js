(function(){const R=String.raw;
/* ===================== 12.6 ===================== */
LEVELS.push({id:"126",day:1,sec:"Stewart 12.6",name:"Cylinders & Quadric Surfaces",
lesson:[
{t:"The big idea: slice it",b:R`
<p>A surface in 3D is hard to picture all at once. The trick for this whole section: <b>slice it with flat planes and look at the 2D curves you get</b>. Those curves are called <b>traces</b>.</p>
<ul><li>Set \(z = k\) → a horizontal slice (looking down from above). In Ch. 14 these are called <b>level curves</b>.</li>
<li>Set \(x = k\) → a slice parallel to the \(yz\)-plane.</li>
<li>Set \(y = k\) → a slice parallel to the \(xz\)-plane.</li></ul>
<p>Each slice gives you a 2D equation you already know from algebra: circle, ellipse, parabola, hyperbola, or line(s). Stack the slices together in your head and you get the surface.</p>
<div class="ex"><span class="lab">Your 2D cheat list</span>
<p>\(x^2+y^2=r^2\) circle · \(\frac{x^2}{a^2}+\frac{y^2}{b^2}=1\) ellipse · \(y=x^2\) parabola · \(x^2-y^2=1\) hyperbola · \(x^2-y^2=0\) two lines \(y=\pm x\)</p></div>`,
check:{q:R`What do you get if you slice \(z = x^2+y^2\) with the plane \(z=4\)?`,o:[R`A parabola`,R`A circle of radius 2`,R`A hyperbola`,R`Two lines`],a:1,e:R`Set \(z=4\): \(x^2+y^2=4\), a circle of radius 2.`}},
{t:"Cylinders: one variable is missing",b:R`
<p>In 3D, if an equation is <b>missing a variable</b>, the surface is a <b>cylinder</b>. The missing variable is the <b>free variable</b>: it can be anything, so the 2D curve just slides along that axis forever.</p>
<ul><li>The lines you see sliding along are called <b>rulings</b>.</li>
<li><b>Rulings are parallel to the axis of the missing variable.</b></li>
<li>The traces perpendicular to that axis are all <b>the same curve</b>, copied over and over.</li></ul>
<div class="ex"><span class="lab">Example</span>
<p>\(x^2 + y^2 = 1\) in 3D. No \(z\)! So \(z\) is free. Every horizontal slice \(z=k\) is the same circle \(x^2+y^2=1\). Rulings parallel to the \(z\)-axis. This is a <b>circular cylinder</b> (a pipe standing up).</p></div>
<div class="ex"><span class="lab">Example</span>
<p>\(z = y^2\). No \(x\), so \(x\) is free. Every slice \(x=k\) is the parabola \(z=y^2\). Rulings parallel to the \(x\)-axis. This is a <b>parabolic cylinder</b> (a half-pipe / taco shell).</p></div>
<div class="tip"><b>Name it after the curve.</b> Circle → circular cylinder. Ellipse → elliptic cylinder. Parabola → parabolic cylinder. Hyperbola → hyperbolic cylinder.</div>`,
check:{q:R`For \(y^2 + 4z^2 = 4\), the rulings are parallel to which axis?`,o:[R`\(x\)-axis`,R`\(y\)-axis`,R`\(z\)-axis`,R`None, it's not a cylinder`],a:0,e:R`\(x\) is missing, so \(x\) is the free variable and rulings run parallel to the \(x\)-axis. Traces \(x=k\) are all the ellipse \(y^2+4z^2=4\): an elliptic cylinder.`}},
{t:"The six quadric surfaces",b:R`
<p>A <b>quadric surface</b> has all three variables, with squared terms. There are six you need to know by name. Shapes are written with \(z\) as the "special" axis, but any variable can play that role.</p>
<div class="tbl"><table><tr><th>Name</th><th>Standard form</th><th>Horizontal traces (\(z=k\))</th><th>Looks like</th></tr>
<tr><td><b>Ellipsoid</b></td><td>\(\frac{x^2}{a^2}+\frac{y^2}{b^2}+\frac{z^2}{c^2}=1\)</td><td>ellipses</td><td>a squished ball</td></tr>
<tr><td><b>Elliptic paraboloid</b></td><td>\(\frac{z}{c}=\frac{x^2}{a^2}+\frac{y^2}{b^2}\)</td><td>ellipses (circles if \(a=b\))</td><td>a bowl</td></tr>
<tr><td><b>Hyperbolic paraboloid</b></td><td>\(\frac{z}{c}=\frac{x^2}{a^2}-\frac{y^2}{b^2}\)</td><td>hyperbolas</td><td>a saddle / Pringle</td></tr>
<tr><td><b>Cone</b></td><td>\(\frac{z^2}{c^2}=\frac{x^2}{a^2}+\frac{y^2}{b^2}\)</td><td>ellipses (point at \(k=0\))</td><td>two ice-cream cones tip to tip</td></tr>
<tr><td><b>Hyperboloid of one sheet</b></td><td>\(\frac{x^2}{a^2}+\frac{y^2}{b^2}-\frac{z^2}{c^2}=1\)</td><td>ellipses, never empty</td><td>a cooling tower / hourglass, one piece</td></tr>
<tr><td><b>Hyperboloid of two sheets</b></td><td>\(-\frac{x^2}{a^2}-\frac{y^2}{b^2}+\frac{z^2}{c^2}=1\)</td><td>ellipses only when \(|k|\ge c\)</td><td>two bowls facing away, gap between</td></tr></table></div>
<p>The variable with the "different" sign (or the one that's not squared) is the axis the surface opens along.</p>`},
{t:"How to identify any quadric fast",b:R`
<p>Run this checklist every time:</p>
<ol>
<li><b>Is a variable missing?</b> → Cylinder. Name it by the 2D curve.</li>
<li><b>Is one variable not squared</b> (just \(z\), not \(z^2\))? → Paraboloid.
<ul><li>squared terms same sign → <b>elliptic paraboloid</b> (bowl)</li><li>opposite signs → <b>hyperbolic paraboloid</b> (saddle)</li></ul></li>
<li><b>All three squared?</b> Move all squared terms to one side.
<ul><li>= 0 (no constant) with mixed signs → <b>cone</b></li>
<li>Otherwise divide to make the right side \(= 1\) and <b>count the minus signs</b>:
0 minus → ellipsoid · 1 minus → <b>hyperboloid of one sheet</b> · 2 minus → <b>hyperboloid of two sheets</b></li></ul></li></ol>
<div class="tip"><b>Memory trick:</b> number of minus signs = number of sheets (when the right side is +1).</div>
<div class="ex"><span class="lab">Example</span>
<p>\(4x^2 - y^2 + 2z^2 + 4 = 0\). All squared, constant present. Move: \(4x^2 - y^2 + 2z^2 = -4\). Divide by \(-4\): \(-x^2 + \frac{y^2}{4} - \frac{z^2}{2} = 1\). Two minus signs → <b>hyperboloid of two sheets</b>, opening along the \(y\)-axis (the positive one).</p></div>
<div class="trap"><b>Trap:</b> Always get the constant to <b>+1</b> before counting. \(x^2+y^2-z^2=-1\) looks like "one minus" but after multiplying by \(-1\) it's \(-x^2-y^2+z^2=1\): two minus → two sheets.</div>`,
check:{q:R`Identify \(x^2 + y^2 - z^2 = 4\).`,o:[R`Cone`,R`Hyperboloid of one sheet`,R`Hyperboloid of two sheets`,R`Ellipsoid`],a:1,e:R`Divide by 4: \(\frac{x^2}{4}+\frac{y^2}{4}-\frac{z^2}{4}=1\). One minus sign → one sheet.`}},
{t:"Worked: cone vs. hyperboloids",b:R`
<p>These three look almost the same, so the test loves them. Look at the horizontal traces \(z=k\):</p>
<div class="ex"><span class="lab">Cone: \(z^2 = x^2+y^2\)</span><p>\(x^2+y^2=k^2\): circles of radius \(|k|\). At \(k=0\) just the point \((0,0)\). Radius grows <i>linearly</i>, so you get straight-line sides.</p></div>
<div class="ex"><span class="lab">One sheet: \(z^2 = x^2+y^2-1\) → \(x^2+y^2 = k^2+1\)</span><p>Radius \(\sqrt{k^2+1}\ge 1\), so <b>every</b> slice is a circle. Narrowest at \(z=0\). One connected piece.</p></div>
<div class="ex"><span class="lab">Two sheets: \(z^2 = x^2+y^2+1\) → \(x^2+y^2 = k^2-1\)</span><p>Needs \(k^2\ge 1\). For \(|k|<1\): <b>no points</b> (empty slice). At \(|k|=1\): a single point. For \(|k|>1\): circles. That empty gap is why there are two sheets.</p></div>
<div class="tip"><b>Test language:</b> "Describe the level curves" = say what shape you get for each value of \(k\), including where it's a point or empty.</div>`},
{t:"How the test asks it (Review #4)",b:R`
<p>Your review sheet asks three things for each surface. Here's the template to answer every one:</p>
<ol><li><b>Cylinder?</b> Describe the <b>traces</b> (the repeated curve). <b>Not a cylinder?</b> Describe the <b>level curves</b> \(z=k\) for different \(k\).</li>
<li><b>If a cylinder:</b> name the free (missing) variable and say the rulings are parallel to that axis.</li>
<li><b>Name the surface.</b></li></ol>
<div class="ex"><span class="lab">Model answer: \(x = z^2\)</span>
<p>(1) Cylinder; every trace \(y=k\) is the parabola \(x=z^2\). (2) Free variable \(y\); rulings parallel to the \(y\)-axis. (3) Parabolic cylinder.</p></div>
<div class="ex"><span class="lab">Model answer: \(z = 4x^2+y^2\)</span>
<p>(1) Level curves \(4x^2+y^2=k\): ellipses for \(k>0\), the point \((0,0)\) for \(k=0\), nothing for \(k<0\). (2) Not a cylinder. (3) Elliptic paraboloid opening upward along the \(z\)-axis.</p></div>
<p>Write full sentences like these. They're quick and they earn the points.</p>`}
],
quest:[
{d:"e",q:R`Name the surface: \(z = x^2 + y^2\)`,o:[R`Elliptic (circular) paraboloid`,"Cone","Hyperbolic paraboloid","Hyperboloid of one sheet"],a:0,e:R`One variable (\(z\)) is not squared, and the squared terms have the same sign → bowl, elliptic paraboloid (circular since the coefficients match).`},
{d:"e",q:R`Name the surface: \(z = y^2 - x^2\)`,o:[R`Hyperbolic paraboloid`,"Elliptic paraboloid","Cone","Hyperbolic cylinder"],a:0,e:R`\(z\) is linear and the squared terms have opposite signs → saddle, hyperbolic paraboloid.`},
{d:"e",q:R`Name the surface: \(x^2 + y^2 = 9\) (in 3D)`,o:[R`Circular cylinder`,"Sphere","Circle","Cone"],a:0,e:R`\(z\) is missing → cylinder. The curve is a circle of radius 3, so circular cylinder with rulings parallel to the \(z\)-axis.`},
{d:"e",q:R`For the cylinder \(z = \sin y\), the rulings are parallel to the…`,o:[R`\(x\)-axis`,R`\(y\)-axis`,R`\(z\)-axis`,R`plane \(y=z\)`],a:0,e:R`\(x\) is missing, so \(x\) is free and the rulings run parallel to the \(x\)-axis.`},
{d:"e",q:R`Name the surface: \(\frac{x^2}{4}+\frac{y^2}{9}+z^2=1\)`,o:[R`Ellipsoid`,"Hyperboloid of one sheet","Elliptic paraboloid","Sphere"],a:0,e:R`All squared, all positive, equals 1 → ellipsoid. (Not a sphere because the denominators differ.)`},
{d:"m",q:R`Name the surface: \(z^2 = 4x^2 + y^2\)`,o:[R`Elliptic cone`,"Elliptic paraboloid","Hyperboloid of two sheets","Ellipsoid"],a:0,e:R`All squared, no constant: \(4x^2+y^2-z^2=0\). Mixed signs and = 0 → cone. Traces \(z=k\) are ellipses.`},
{d:"m",q:R`Name the surface: \(-x^2 - y^2 + z^2 = 1\)`,o:[R`Hyperboloid of two sheets`,"Hyperboloid of one sheet","Cone","Hyperbolic paraboloid"],a:0,e:R`Right side is +1 and there are two minus signs → two sheets, opening along the \(z\)-axis.`},
{d:"m",q:R`Name the surface: \(x^2 - y^2 + z^2 = 1\)`,o:[R`Hyperboloid of one sheet`,"Hyperboloid of two sheets","Cone","Ellipsoid"],a:0,e:R`One minus sign with = 1 → one sheet. The negative variable (\(y\)) is the axis it wraps around.`},
{d:"m",q:R`Name the surface: \(y = x^2 + z^2\)`,o:[R`Circular paraboloid opening along the \(y\)-axis`,R`Circular paraboloid opening along the \(z\)-axis`,"Cone","Parabolic cylinder"],a:0,e:R`\(y\) is the non-squared variable, so it's a paraboloid whose axis is the \(y\)-axis. Traces \(y=k\) are circles \(x^2+z^2=k\).`},
{d:"m",q:R`Describe the traces \(z=k\) of \(z^2 = x^2+y^2+4\).`,o:[R`Empty for \(|k|<2\), a point at \(|k|=2\), circles for \(|k|>2\)`,R`Circles for every \(k\)`,R`Hyperbolas for every \(k\)`,R`Circles of radius \(|k|\)`],a:0,e:R`\(x^2+y^2 = k^2-4\). Needs \(k^2\ge4\). That gap means hyperboloid of two sheets.`},
{d:"m",q:R`Describe the traces \(z=k\) of \(z = x^2 - y^2\).`,o:[R`Hyperbolas for \(k\ne0\); the lines \(y=\pm x\) for \(k=0\)`,"Circles",R`Parabolas for every \(k\)`,"Ellipses"],a:0,e:R`\(x^2-y^2=k\) is a hyperbola unless \(k=0\), where \(x^2=y^2\) gives two crossing lines \(y=\pm x\).`},
{d:"h",q:R`Name the surface: \(4x^2 - y^2 + 2z^2 + 4 = 0\)`,o:[R`Hyperboloid of two sheets`,"Hyperboloid of one sheet","Cone","Ellipsoid"],a:0,e:R`\(4x^2-y^2+2z^2=-4\). Divide by \(-4\): \(-x^2+\frac{y^2}{4}-\frac{z^2}{2}=1\). Two minus signs → two sheets, along the \(y\)-axis.`},
{d:"h",q:R`Name the surface: \(x^2 + 2z^2 - 6x - y + 10 = 0\)`,o:[R`Elliptic paraboloid`,"Hyperbolic paraboloid","Elliptic cone","Ellipsoid"],a:0,e:R`Complete the square: \((x-3)^2 - 9 + 2z^2 - y + 10 = 0\) → \(y-1=(x-3)^2+2z^2\). \(y\) is linear, squares same sign → elliptic paraboloid with vertex \((3,1,0)\), opening along \(+y\).`},
{d:"h",q:R`Which surface has level curves that are circles whose radii grow by the same amount for each step in \(z\) (evenly spaced contours)?`,o:[R`\(z=\sqrt{x^2+y^2}\) (cone)`,R`\(z=x^2+y^2\) (paraboloid)`,R`\(z=x^2-y^2\)`,R`\(x^2+y^2=1\)`],a:0,e:R`For the cone, radius \(=k\), so contours are evenly spaced. For the paraboloid, radius \(=\sqrt{k}\), so contours bunch up as you go out.`}
],
boss:[
{tag:"Review #4a",q:R`For \(z^2 - 2y^2 = 1\): describe the traces or level curves, identify the free variable and rulings (if a cylinder), and name the surface.`,s:[
R`Check for a missing variable: there's no \(x\). So this is a <b>cylinder</b> with free variable \(x\).`,
R`Traces: every slice \(x=k\) gives the same curve \(z^2-2y^2=1\), a <b>hyperbola</b> in the \(yz\)-plane opening up and down along the \(z\)-axis (vertices at \(z=\pm1\)).`,
R`Rulings are <b>parallel to the \(x\)-axis</b> (the missing variable).`,
R`Name: <b>hyperbolic cylinder</b>.`]},
{tag:"Review #4b",q:R`\(z = x^2 + y^2\)`,s:[
R`All three variables appear, so not a cylinder. Describe level curves \(z=k\): \(x^2+y^2=k\).`,
R`\(k>0\): circles of radius \(\sqrt{k}\). \(k=0\): the single point \((0,0)\). \(k<0\): no level curve.`,
R`\(z\) is linear and squares have the same sign → <b>circular (elliptic) paraboloid</b>, a bowl opening up along the \(z\)-axis.`]},
{tag:"Review #4c",q:R`\(z = x^2 - y^2\)`,s:[
R`Not a cylinder. Level curves: \(x^2-y^2=k\).`,
R`\(k>0\): hyperbolas opening left/right (along the \(x\)-axis). \(k<0\): hyperbolas opening up/down (along the \(y\)-axis). \(k=0\): the two lines \(y=\pm x\).`,
R`Name: <b>hyperbolic paraboloid</b> (saddle).`]},
{tag:"Review #4d",q:R`\(z^2 = x^2 + y^2\)`,s:[
R`Not a cylinder. Level curves: \(x^2+y^2=k^2\).`,
R`\(k\ne0\): circles of radius \(|k|\). \(k=0\): the point \((0,0)\).`,
R`Name: <b>(circular) cone</b>, axis along the \(z\)-axis.`]},
{tag:"Review #4e",q:R`\(z^2 = x^2 + y^2 + 10\)`,s:[
R`Not a cylinder. Level curves: \(x^2+y^2=k^2-10\).`,
R`\(|k|<\sqrt{10}\): no points. \(|k|=\sqrt{10}\): the point \((0,0)\). \(|k|>\sqrt{10}\): circles of radius \(\sqrt{k^2-10}\).`,
R`Rewrite as \(-\frac{x^2}{10}-\frac{y^2}{10}+\frac{z^2}{10}=1\): two minus signs.`,
R`Name: <b>hyperboloid of two sheets</b>, along the \(z\)-axis.`]},
{tag:"Review #4f",q:R`\(z^2 = x^2 + y^2 - 10\)`,s:[
R`Not a cylinder. Level curves: \(x^2+y^2=k^2+10\).`,
R`For <b>every</b> \(k\): circles of radius \(\sqrt{k^2+10}\). Smallest (radius \(\sqrt{10}\)) at \(k=0\).`,
R`Rewrite as \(\frac{x^2}{10}+\frac{y^2}{10}-\frac{z^2}{10}=1\): one minus sign.`,
R`Name: <b>hyperboloid of one sheet</b>, around the \(z\)-axis.`]}
],
vault:R`<ul>
<li><b>Missing variable</b> → cylinder; rulings ∥ that variable's axis; traces all the same curve.</li>
<li><b>One variable linear</b> → paraboloid: same signs = elliptic (bowl), opposite = hyperbolic (saddle).</li>
<li><b>All squared, = 0</b> → cone.</li>
<li><b>All squared, = +1</b>: 0 minus = ellipsoid, 1 minus = hyperboloid of one sheet, 2 minus = two sheets.</li>
<li>Level curves: set \(z=k\). Say what happens for each range of \(k\), including point/empty cases.</li></ul>`
});

/* ===================== 14.1 ===================== */
LEVELS.push({id:"141",day:1,sec:"Stewart 14.1",name:"Functions of Several Variables",
lesson:[
{t:"Functions with two inputs",b:R`
<p>A function of two variables \(z=f(x,y)\) takes a point \((x,y)\) in the plane and gives back one number. Think of it as a height above the floor: its graph is a <b>surface</b> in 3D.</p>
<div class="ex"><span class="lab">Example</span><p>\(f(x,y)=x^2+3y\). Then \(f(2,1)=4+3=7\). The point \((2,1,7)\) is on the graph.</p></div>
<ul><li><b>Domain</b>: every \((x,y)\) you're allowed to plug in. It's a <b>region in the plane</b>, so you describe it with an inequality and often sketch it.</li>
<li><b>Range</b>: every output value \(z\) the function actually hits.</li></ul>`},
{t:"Finding the domain: the three rules",b:R`
<p>Same rules as Calc 1, but the answer is a 2D region:</p>
<div class="tbl"><table><tr><th>You see</th><th>Require</th><th>Boundary drawn</th></tr>
<tr><td>\(\ln(\text{stuff})\)</td><td>stuff \(>0\)</td><td>dashed (not included)</td></tr>
<tr><td>\(\sqrt{\text{stuff}}\)</td><td>stuff \(\ge 0\)</td><td>solid (included)</td></tr>
<tr><td>\(\dfrac{\cdot}{\text{stuff}}\)</td><td>stuff \(\ne 0\)</td><td>remove that curve</td></tr></table></div>
<p>Then <b>solve the inequality for \(y\)</b> (if you can) so you know which side of the curve to shade.</p>
<div class="ex"><span class="lab">Example</span><p>\(f(x,y)=\sqrt{x+y}\). Need \(x+y\ge0\) → \(y\ge -x\). Domain: \(\{(x,y)\mid y\ge -x\}\), the line \(y=-x\) (solid) and everything above it.</p></div>
<div class="ex"><span class="lab">Example</span><p>\(g(x,y)=\dfrac{1}{x^2+y^2-9}\). Need \(x^2+y^2\ne9\). Domain: the whole plane except the circle of radius 3.</p></div>
<div class="trap"><b>Trap:</b> When you divide an inequality by a negative number, flip the sign. \(-3y > -2x-1\) becomes \(y < \frac{2x+1}{3}\).</div>`,
check:{q:R`Domain of \(f(x,y)=\ln(y-x^2)\)?`,o:[R`\(y > x^2\): strictly above the parabola`,R`\(y \ge x^2\)`,R`\(y < x^2\)`,R`All \((x,y)\)`],a:0,e:R`Log needs a positive argument: \(y-x^2>0\), so \(y>x^2\). Boundary parabola is dashed.`}},
{t:"Finding the range",b:R`
<p>Ask: <b>what outputs can the outside function produce</b>, given what the inside can be?</p>
<ul><li>If the inside can be <b>any positive number</b>, then \(\ln(\text{inside})\) hits every real number. Range \((-\infty,\infty)\).</li>
<li>\(\sqrt{\text{inside}}\) with inside any value \(\ge0\) → range \([0,\infty)\).</li>
<li>\(x^2+y^2\) → range \([0,\infty)\). \(e^{x^2+y^2}\) → \([1,\infty)\).</li></ul>
<div class="ex"><span class="lab">Example</span><p>\(f(x,y)=\sqrt{9-x^2-y^2}\). Inside goes from 9 (at the origin) down to 0 (on the circle). So outputs go from 3 down to 0. Range: \([0,3]\). (The graph is the top half of a sphere.)</p></div>`},
{t:"Continuity",b:R`
<p>Full detail comes in 14.2, but you need the idea for Review #1:</p>
<ul><li>Polynomials are continuous <b>everywhere</b>.</li>
<li>Combinations of continuous functions (\(\ln\), \(\sqrt{\ }\), \(e^{\cdot}\), \(\sin\), quotients…) are continuous <b>on their domain</b>.</li></ul>
<div class="tip"><b>So for test questions:</b> "For what set of points is \(f\) continuous?" is almost always "on its domain", and you restate the domain inequality.</div>`},
{t:"Level curves and contour maps",b:R`
<p>A <b>level curve</b> is the set of points where \(f(x,y)=k\) for a constant \(k\). It's the horizontal trace from 12.6, drawn flat in the \(xy\)-plane. A <b>contour map</b> draws several level curves with their \(k\) values, like a hiking topographic map.</p>
<div class="ex"><span class="lab">Example</span><p>\(f(x,y)=x^2+4y^2\). Set \(x^2+4y^2=k\): ellipses for \(k>0\), the origin for \(k=0\). Wider ellipses = higher heights.</p></div>
<ul><li><b>Contours close together</b> → surface is <b>steep</b> there.</li>
<li><b>Contours far apart</b> → surface is flat-ish there.</li>
<li>Cone \(z=\sqrt{x^2+y^2}\): evenly spaced circles. Paraboloid \(z=x^2+y^2\): circles get closer together as you move out.</li></ul>`,
check:{q:R`Level curves of \(f(x,y)=y-2x\)?`,o:[R`Parallel lines \(y=2x+k\)`,R`Circles`,R`Parabolas`,R`Hyperbolas`],a:0,e:R`\(y-2x=k\) means \(y=2x+k\): a family of parallel lines with slope 2. The graph is a plane.`}},
{t:"How the test asks it (Review #1)",b:R`
<p>Domain/range/continuity questions want three crisp answers. Template:</p>
<ol><li><b>Domain:</b> write the condition, solve for \(y\), write set notation, and describe the region ("all points below the line…", dashed or solid).</li>
<li><b>Range:</b> say what the outer function can output and why.</li>
<li><b>Continuity:</b> "\(f\) is continuous on its domain, \(\{\ldots\}\)".</li></ol>
<p>The Boss tab has Review #1 worked out. Try it on paper first!</p>`}
],
quest:[
{d:"e",type:"in",q:R`If \(f(x,y)=x^2y-3x\), find \(f(2,-1)\).`,answers:[-10],e:R`\(4\cdot(-1)-6=-10\).`},
{d:"e",q:R`Domain of \(f(x,y)=\sqrt{x-y}\)?`,o:[R`\(y\le x\)`,R`\(y<x\)`,R`\(y\ge x\)`,R`All of \(\mathbb{R}^2\)`],a:0,e:R`Need \(x-y\ge0\) → \(y\le x\): the line \(y=x\) (solid) and below.`},
{d:"e",q:R`Domain of \(f(x,y)=\dfrac{x}{y-1}\)?`,o:[R`All \((x,y)\) with \(y\ne1\)`,R`All \((x,y)\) with \(x\ne0\)`,R`\(y>1\)`,R`All of \(\mathbb{R}^2\)`],a:0,e:R`Only the denominator matters: \(y-1\ne0\). Remove the horizontal line \(y=1\).`},
{d:"e",q:R`Range of \(f(x,y)=x^2+y^2\)?`,o:[R`\([0,\infty)\)`,R`\((-\infty,\infty)\)`,R`\((0,\infty)\)`,R`\([1,\infty)\)`],a:0,e:R`Sum of squares is never negative, and hits 0 at the origin.`},
{d:"m",q:R`Domain of \(f(x,y)=\ln(9-x^2-y^2)\)?`,o:[R`Inside the circle \(x^2+y^2=9\), not including the circle`,"Inside or on the circle","Outside the circle",R`All of \(\mathbb{R}^2\)`],a:0,e:R`\(9-x^2-y^2>0\) → \(x^2+y^2<9\). Open disk, dashed boundary.`},
{d:"m",q:R`Range of \(f(x,y)=\sqrt{16-x^2-y^2}\)?`,o:[R`\([0,4]\)`,R`\([0,16]\)`,R`\([0,\infty)\)`,R`\([-4,4]\)`],a:0,e:R`Inside ranges from 16 down to 0, so the square root ranges from 4 down to 0.`},
{d:"m",q:R`Domain of \(f(x,y)=\ln(x+2y-4)\)?`,o:[R`\(y>\frac{4-x}{2}\)`,R`\(y<\frac{4-x}{2}\)`,R`\(y\ge\frac{4-x}{2}\)`,R`\(y>4-x\)`],a:0,e:R`\(x+2y-4>0\) → \(2y>4-x\) → \(y>\frac{4-x}{2}\). Above a dashed line.`},
{d:"m",q:R`Level curves of \(f(x,y)=x^2-y\)?`,o:[R`Parabolas \(y=x^2-k\)`,"Circles","Lines","Hyperbolas"],a:0,e:R`\(x^2-y=k\) → \(y=x^2-k\): parabolas shifted up or down.`},
{d:"m",q:R`Range of \(f(x,y)=\ln(2x-3y+1)\)?`,o:[R`All real numbers`,R`\((0,\infty)\)`,R`\([0,\infty)\)`,R`\((1,\infty)\)`],a:0,e:R`The inside \(2x-3y+1\) can be any positive number, and ln of all positive numbers covers every real number.`},
{d:"h",q:R`Domain of \(f(x,y)=\dfrac{\sqrt{y-x^2}}{1-x^2}\)?`,o:[R`\(y\ge x^2\) and \(x\ne\pm1\)`,R`\(y>x^2\)`,R`\(y\ge x^2\) and \(x\ne1\)`,R`\(x\ne\pm1\)`],a:0,e:R`Square root: \(y\ge x^2\). Denominator: \(x^2\ne1\), so remove the vertical lines \(x=\pm1\). Both conditions together.`},
{d:"h",q:R`On a contour map, where is the surface steepest?`,o:["Where the level curves are closest together","Where they're farthest apart",R`At the highest \(k\) value`,"At the origin"],a:0,e:R`Close contours mean the height changes a lot over a short distance, so steep.`},
{d:"h",q:R`Range of \(f(x,y)=e^{-(x^2+y^2)}\)?`,o:[R`\((0,1]\)`,R`\([0,1]\)`,R`\((0,\infty)\)`,R`\([1,\infty)\)`],a:0,e:R`Exponent is \(\le0\), so \(e^{(\cdot)}\le1\), with 1 at the origin. It's always positive and gets close to 0 but never reaches it.`}
],
boss:[
{tag:"Review #1",q:R`Find the domain and range of \(f(x,y)=\ln(2x-3y+1)\). For what set of points is \(f\) continuous?`,s:[
R`Log needs a positive argument: \(2x-3y+1>0\).`,
R`Solve for \(y\): \(-3y>-2x-1\). Divide by \(-3\) and <b>flip</b>: \(y<\dfrac{2x+1}{3}\).`,
R`<b>Domain:</b> \(\{(x,y)\mid y<\frac{2x+1}{3}\}\): all points strictly below the line \(y=\frac{2}{3}x+\frac13\) (draw the line dashed).`,
R`<b>Range:</b> \(2x-3y+1\) takes every positive value, and \(\ln\) of all positive numbers is every real number: \((-\infty,\infty)\).`,
R`<b>Continuity:</b> \(\ln\) composed with a polynomial is continuous on its domain, so \(f\) is continuous on \(\{(x,y)\mid 2x-3y+1>0\}\).`]}
],
vault:R`<ul>
<li>Domain: ln → inside \(>0\) (dashed), √ → inside \(\ge0\) (solid), denominator \(\ne0\). Flip inequality when dividing by a negative.</li>
<li>Range: what can the outer function output?</li>
<li>Level curves: \(f(x,y)=k\). Close together = steep.</li>
<li>Continuous on its domain for polynomials, ln, √, exp, trig and their combos.</li></ul>`
});
})();
