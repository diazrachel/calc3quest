(function(){const R=String.raw;
addQ("126",[
{src:"rev",d:"m",q:R`For \(z=4-x^2-y^2\): level curves and name?`,o:[R`Circles for \(k<4\), the point \((0,0)\) at \(k=4\), nothing for \(k>4\); circular paraboloid opening down`,R`Circles for every \(k\); cone`,R`Circles for \(k>4\); paraboloid opening up`,R`Hyperbolas; saddle`],a:0,e:R`\(x^2+y^2=4-k\), so you need \(k\le4\). The top of the bowl (upside down) is at height 4.`},
{src:"rev",d:"e",q:R`For \(x=z^2\): free variable and rulings?`,o:[R`Free variable \(y\); rulings parallel to the \(y\)-axis; parabolic cylinder`,R`Free variable \(x\); rulings parallel to the \(x\)-axis`,R`Free variable \(z\); elliptic paraboloid`,R`No free variable; cone`],a:0,e:R`\(y\) is missing.`}
]);
addQ("141",[
{src:"rev",d:"m",q:R`Domain of \(f(x,y)=\ln(5-2x+y)\)?`,o:[R`\(y>2x-5\)`,R`\(y<2x-5\)`,R`\(y\ge2x-5\)`,R`\(y>5-2x\)`],a:0,e:R`\(5-2x+y>0\Rightarrow y>2x-5\).`},
{src:"rev",d:"e",q:R`Range of \(f(x,y)=\ln(5-2x+y)\)?`,o:[R`All real numbers`,R`\((0,\infty)\)`,R`\([0,\infty)\)`,R`\((-\infty,5)\)`],a:0,e:R`The inside takes every positive value.`}
]);
addQ("142",[
{src:"rev",d:"m",q:R`\(\displaystyle\lim_{(x,y)\to(0,0)}\frac{4xy}{x^2+4y^2}\)`,o:[R`DNE: \(y=0\) gives 0, \(x=2y\) gives 1`,R`0`,R`1`,R`4`],a:0,e:R`Along \(x=2y\): \(\frac{8y^2}{8y^2}=1\). (Along \(y=x\) you'd get \(\frac45\), which also works.)`},
{src:"rev",d:"e",type:"in",q:R`\(\displaystyle\lim_{(x,y)\to(1,1)}\frac{x^4-16y^4}{x^2+4y^2}\)`,answers:[-3],e:R`Denominator is 5, not 0, so just plug in: \(\frac{1-16}5=-3\).`},
{src:"rev",d:"m",type:"in",q:R`\(\displaystyle\lim_{(x,y)\to(0,0)}\frac{x^4-16y^4}{x^2+4y^2}\)`,answers:[0],e:R`Factor: \(x^2-4y^2\to0\).`}
]);
addQ("143",[
{src:"rev",d:"e",q:R`Fill in Clairaut's Theorem: if \(f\) is defined on a disk \(D\) containing \((a,b)\) and ____ are continuous on \(D\), then \(f_{xy}(a,b)=f_{yx}(a,b)\).`,o:[R`\(f_{xy}\) and \(f_{yx}\)`,R`\(f_x\) and \(f_y\)`,R`\(f_{xx}\) and \(f_{yy}\)`,R`\(f\)`],a:0,e:R`The mixed partials themselves must be continuous.`},
{src:"rev",d:"e",q:R`\(f=x^2y^3-4y^2\). \(f_x\) and \(f_y\)?`,o:[R`\(2xy^3\) and \(3x^2y^2-8y\)`,R`\(2xy^3-8y\) and \(3x^2y^2\)`,R`\(2xy^3\) and \(3x^2y^2\)`,R`\(2x\) and \(3y^2-8y\)`],a:0,e:R`Constants (with respect to the variable) disappear.`},
{src:"rev",d:"m",q:R`\(f=x^3y^2+ye^x\). Which is \(f_{xy}\) (and \(f_{yx}\))?`,o:[R`\(6x^2y+e^x\)`,R`\(6xy^2+ye^x\)`,R`\(2x^3+e^x\)`,R`\(6x^2y\)`],a:0,e:R`\(f_x=3x^2y^2+ye^x\Rightarrow f_{xy}=6x^2y+e^x\). \(f_y=2x^3y+e^x\Rightarrow f_{yx}=6x^2y+e^x\).`}
]);
addQ("144",[
{src:"rev",d:"m",q:R`\(f=x^2-3y^4\). Linearization at \((2,1)\)?`,o:[R`\(L=4x-12y+5\)`,R`\(L=1+4x-12y\)`,R`\(L=4x-12y-7\)`,R`\(L=1+2(x-2)-12(y-1)\)`],a:0,e:R`\(f(2,1)=1\), \(f_x=4\), \(f_y=-12\). \(1+4(x-2)-12(y-1)=4x-12y+5\).`},
{src:"hw",d:"m",type:"in",q:R`\(f=\ln(x-3y)\). Use the linearization at \((7,2)\) to approximate \(f(6.9,\,2.06)\).`,answers:[-0.28],tol:0.002,e:R`\(f(7,2)=\ln1=0\). \(f_x=\frac1{x-3y}=1\), \(f_y=\frac{-3}{x-3y}=-3\). \(0+(-0.1)-3(0.06)=-0.28\).`},
{src:"hw",d:"m",q:R`Linearization of \(f=xe^{xy}\) at \((1,0)\)?`,o:[R`\(L=x+y\)`,R`\(L=1+x\)`,R`\(L=1+x+y\)`,R`\(L=x\)`],a:0,e:R`\(f=1\). \(f_x=e^{xy}+xye^{xy}=1\). \(f_y=x^2e^{xy}=1\). \(L=1+(x-1)+y\).`},
{src:"cb",d:"e",q:R`True or false: the linearization \(L(x,y)\) and the tangent plane are the same thing.`,o:[R`True: \(L\) is the tangent plane solved for \(z\)`,R`False`],a:0,e:R`Graph of \(z=L(x,y)\) is the tangent plane.`},
{src:"cb",d:"m",q:R`Using the linearization at \((4,1)\), which estimate should be more accurate?`,o:[R`\(f(4.1,\,1.05)\)`,R`\(f(5,\,2)\)`,R`They're equally accurate`,R`Neither can be estimated`],a:0,e:R`Linear approximations get worse the farther you move from the base point.`},
{src:"cb",d:"e",q:R`Tangent plane to \(z=x^2+y^2\) at the origin?`,o:[R`\(z=0\)`,R`\(z=2x+2y\)`,R`\(z=x+y\)`,R`No tangent plane exists`],a:0,e:R`\(f_x=f_y=0\) at the origin, and \(f(0,0)=0\).`}
]);
addQ("145",[
{src:"rev",d:"m",q:R`\(w=f(x,y,z)\), with \(x(s,t)\), \(y(s,t)\), \(z(t)\). \(\frac{\partial w}{\partial s}=\)`,o:[R`\(f_xx_s+f_yy_s\)`,R`\(f_xx_s+f_yy_s+f_z\frac{dz}{dt}\)`,R`\(f_xx_s+f_yy_s+f_zz_s\)`,R`\(f_zz_t\)`],a:0,e:R`\(z\) doesn't depend on \(s\).`},
{src:"hw",d:"m",type:"in",q:R`\(z=x^2+xy+y^2\), \(x=s+t\), \(y=st\). Find \(\frac{\partial z}{\partial s}\) at \((s,t)=(1,2)\).`,answers:[22],e:R`\(x=3,y=2\). \(z_x=2x+y=8\), \(z_y=x+2y=7\). \(x_s=1\), \(y_s=t=2\). \(8+14=22\).`},
{src:"hw",d:"m",q:R`\(z=\sin x\cos y\), \(x=st^2\), \(y=s^2t\). \(\frac{\partial z}{\partial t}=\)`,o:[R`\(2st\cos x\cos y-s^2\sin x\sin y\)`,R`\(t^2\cos x\cos y-2st\sin x\sin y\)`,R`\(\cos x\cos y-\sin x\sin y\)`,R`\(2st\cos x\cos y+s^2\sin x\sin y\)`],a:0,e:R`\(z_x=\cos x\cos y\), \(z_y=-\sin x\sin y\). \(x_t=2st\), \(y_t=s^2\).`},
{src:"rev",d:"m",type:"in",q:R`\(f=x^3+y^2\), \(x=st\), \(y=s+u\). Find \(\frac{\partial f}{\partial s}\) at \(s=1,t=2,u=0\).`,answers:[26],e:R`\(x=2,y=1\). \(f_s=3x^2\cdot t+2y\cdot1=3(4)(2)+2=26\).`},
{src:"cb",d:"h",type:"in",q:R`\(z=f(x,y)\), \(x=g(t)\), \(y=h(t)\). \(g(3)=2\), \(h(3)=7\), \(g'(3)=5\), \(h'(3)=-4\), \(f_x(2,7)=6\), \(f_y(2,7)=-8\). Find \(\frac{dz}{dt}\) at \(t=3\).`,answers:[62],e:R`\(f_x(2,7)g'(3)+f_y(2,7)h'(3)=6(5)+(-8)(-4)=30+32=62\).`}
]);
addQ("146",[
{src:"rev",d:"m",type:"in",q:R`\(f=x^2y\). \(D_{\mathbf u}f(1,2)\) in the direction of \(\langle1,1\rangle\)? (decimal OK)`,answers:[3.53553,"5/sqrt(2)"],tol:0.002,show:R`\(\frac5{\sqrt2}\approx3.536\)`,e:R`\(\nabla f=\langle2xy,x^2\rangle=\langle4,1\rangle\). \(\frac{4+1}{\sqrt2}\).`},
{src:"rev",d:"m",type:"in",q:R`\(f=x^2y\). Maximum rate of change at \((1,2)\)? (decimal OK)`,answers:[4.12311,"sqrt(17)"],tol:0.002,show:R`\(\sqrt{17}\approx4.123\)`,e:R`\(|\langle4,1\rangle|=\sqrt{17}\).`},
{src:"rev",d:"e",q:R`In \(D_{\mathbf u}f=\nabla f\cdot\mathbf u\), the vector \(\mathbf u\) must be…`,o:[R`a unit vector`,R`the gradient`,R`perpendicular to \(\nabla f\)`,R`any nonzero vector`],a:0,e:R`Length 1, so only direction matters.`}
]);
addQ("147",[
{src:"rev",d:"m",q:R`\(f=x^2+xy+y^2-3x\). Critical point and type?`,o:[R`\((2,-1)\), local min, \(f=-3\)`,R`\((2,-1)\), saddle`,R`\((-2,1)\), local min`,R`\((1,1)\), local max`],a:0,e:R`\(2x+y=3\), \(x+2y=0\Rightarrow x=2,y=-1\). \(D=4-1=3>0\), \(f_{xx}=2>0\).`},
{src:"rev",d:"h",q:R`\(f=xy-x^3-y^3\). Classify the critical points.`,o:[R`\((0,0)\) saddle; \((\frac13,\frac13)\) local max`,R`\((0,0)\) local min; \((\frac13,\frac13)\) saddle`,R`\((0,0)\) saddle; \((\frac13,\frac13)\) local min`,R`Both saddles`],a:0,e:R`\(y=3x^2\), \(x=3y^2\Rightarrow x=27x^4\Rightarrow x=0,\frac13\). \(D=36xy-1\): \(-1\) at origin; \(4-1=3\) at \((\frac13,\frac13)\) with \(f_{xx}=-2<0\).`},
{src:"cb",d:"h",q:R`At a critical point, \(D>0\) and \(f_{yy}<0\). What is it?`,o:[R`A local max`,R`A local min`,R`A saddle`,R`Can't tell without \(f_{xx}\)`],a:0,e:R`\(D>0\) means \(f_{xx}f_{yy}>f_{xy}^2\ge0\), so \(f_{xx}\) and \(f_{yy}\) have the same sign. Both negative: max.`}
]);
addQ("151",[
{src:"rev",d:"m",q:R`\(R\) is bounded by \(y=x^3\), \(y=8\), \(x=0\). Which pair of setups is correct?`,o:[R`\(\int_0^8\int_0^{\sqrt[3]y}f\,dx\,dy\) and \(\int_0^2\int_{x^3}^{8}f\,dy\,dx\)`,R`\(\int_0^8\int_{\sqrt[3]y}^{2}f\,dx\,dy\) and \(\int_0^2\int_0^{x^3}f\,dy\,dx\)`,R`\(\int_0^2\int_0^{\sqrt[3]y}f\,dx\,dy\) and \(\int_0^8\int_{x^3}^{8}f\,dy\,dx\)`,R`\(\int_0^8\int_0^{x^3}f\,dx\,dy\) and \(\int_0^2\int_{x^3}^{8}f\,dy\,dx\)`],a:0,e:R`The region is above \(y=x^3\) and below \(y=8\). With horizontal strips, \(x\) runs from 0 to the curve \(x=\sqrt[3]y\).`},
{src:"rev",d:"m",type:"in",q:R`Same region. Evaluate \(\iint_Rx\,dA\).`,answers:[9.6,"48/5"],e:R`\(\int_0^2x(8-x^3)\,dx=16-\frac{32}5=\frac{48}5\).`},
{src:"rev",d:"e",type:"in",q:R`Area of the region bounded by \(y=\sqrt x\), \(y=1\), \(x=0\).`,answers:[1/3,"1/3"],e:R`\(\int_0^1\int_0^{y^2}dx\,dy=\int_0^1y^2dy=\frac13\).`},
{src:"rev",d:"h",q:R`Reverse \(\displaystyle\int_0^1\int_x^{\sqrt x}f\,dy\,dx\).`,o:[R`\(\int_0^1\int_{y^2}^{y}f\,dx\,dy\)`,R`\(\int_0^1\int_y^{y^2}f\,dx\,dy\)`,R`\(\int_0^1\int_{\sqrt y}^{y}f\,dx\,dy\)`,R`\(\int_0^1\int_0^{y}f\,dx\,dy\)`],a:0,e:R`Region between \(y=x\) (below) and \(y=\sqrt x\) (above). Sideways: left curve \(x=y^2\), right curve \(x=y\).`}
]);
})();
