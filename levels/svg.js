/* Small SVG helpers for contour maps and regions. Colors come from page tokens. */
(function(){
const M="JetBrains Mono,monospace";
function frame(x0,x1,y0,y1,W,H,pad){pad=pad??26;const sx=(W-2*pad)/(x1-x0),sy=(H-2*pad)/(y1-y0);
  return {X:x=>pad+(x-x0)*sx,Y:y=>H-pad-(y-y0)*sy,W,H,pad,sx,sy};}
function path(F,fn,t0,t1,n){let d="";for(let i=0;i<=n;i++){const t=t0+(t1-t0)*i/n;const p=fn(t);if(!p||!isFinite(p[0])||!isFinite(p[1])){continue;}d+=(d?"L":"M")+F.X(p[0]).toFixed(1)+" "+F.Y(p[1]).toFixed(1);}return d;}
function open(W,H,label){return `<svg viewBox="0 0 ${W} ${H}" width="${W}" style="max-width:100%;height:auto;display:block" role="img" aria-label="${label||"diagram"}">`;}
function axes(F,x0,x1,y0,y1){return `<line x1="${F.X(x0)}" y1="${F.Y(0)}" x2="${F.X(x1)}" y2="${F.Y(0)}" stroke="var(--line)" stroke-width="1"/><line x1="${F.X(0)}" y1="${F.Y(y0)}" x2="${F.X(0)}" y2="${F.Y(y1)}" stroke="var(--line)" stroke-width="1"/>`;}
function txt(x,y,s,c,size){return `<text x="${x}" y="${y}" fill="var(${c||"--muted"})" font-size="${size||11}" font-family="${M}">${s}</text>`;}
const SVG={};
/* concentric circles; radii in math units, labels shown on the right */
SVG.circles=function(radii,labels,opt){opt=opt||{};const R=Math.max(...radii)*1.15,W=opt.W||220,H=opt.H||220;const F=frame(-R,R,-R,R,W,H,14);
  let s=open(W,H,opt.label||"contour map")+axes(F,-R,R,-R,R);
  radii.forEach((r,i)=>{s+=`<circle cx="${F.X(0)}" cy="${F.Y(0)}" r="${(r*F.sx).toFixed(1)}" fill="none" stroke="var(--sky)" stroke-width="1.8"/>`;
    if(labels) s+=txt(F.X(r*0.866)+2,F.Y(-r*0.5)+10,labels[i],"--sun");});
  if(opt.title) s+=txt(8,16,opt.title,"--fg",13);
  if(opt.pt) {s+=`<circle cx="${F.X(opt.pt[0])}" cy="${F.Y(opt.pt[1])}" r="4.5" fill="var(--pink)"/>`+txt(F.X(opt.pt[0])+7,F.Y(opt.pt[1])+4,opt.ptLabel||"P","--pink",12);}
  return s+"</svg>";};
SVG.pair=function(a,b){return `<div style="display:flex;gap:12px;flex-wrap:wrap">${a}${b}</div>`;};
/* hyperbola contours of x^2 - y^2 = k (saddle) */
SVG.saddle=function(){const W=220,H=220,F=frame(-3,3,-3,3,W,H,14);let s=open(W,H,"saddle contour map")+axes(F,-3,3,-3,3);
  for(const k of [1,4]){for(const sg of [1,-1]){
    s+=`<path d="${path(F,t=>[sg*Math.sqrt(k)*Math.cosh(t),Math.sqrt(k)*Math.sinh(t)],-1.6,1.6,40)}" fill="none" stroke="var(--sky)" stroke-width="1.8"/>`;
    s+=`<path d="${path(F,t=>[Math.sqrt(k)*Math.sinh(t),sg*Math.sqrt(k)*Math.cosh(t)],-1.6,1.6,40)}" fill="none" stroke="var(--pink)" stroke-width="1.8"/>`;}}
  s+=`<path d="M${F.X(-3)} ${F.Y(-3)}L${F.X(3)} ${F.Y(3)}M${F.X(-3)} ${F.Y(3)}L${F.X(3)} ${F.Y(-3)}" stroke="var(--muted)" stroke-dasharray="4 4"/>`;
  s+=txt(F.X(2.2),F.Y(0.25),"+","--sky",14)+txt(F.X(-2.4),F.Y(0.25),"+","--sky",14)+txt(F.X(0.15),F.Y(2.4),"−","--pink",14)+txt(F.X(0.15),F.Y(-2.6),"−","--pink",14);
  return s+"</svg>";};
/* vertical level lines x = c labelled */
SVG.vlines=function(xs,labels,pt){const W=240,H=170,F=frame(0,5,0,3,W,H,16);let s=open(W,H,"level lines");
  xs.forEach((x,i)=>{s+=`<line x1="${F.X(x)}" y1="${F.Y(0)}" x2="${F.X(x)}" y2="${F.Y(3)}" stroke="var(--sky)" stroke-width="1.8"/>`+txt(F.X(x)+3,F.Y(2.8),labels[i],"--sun");});
  if(pt) s+=`<circle cx="${F.X(pt[0])}" cy="${F.Y(pt[1])}" r="4.5" fill="var(--pink)"/>`+txt(F.X(pt[0])+7,F.Y(pt[1])+4,"P","--pink",12);
  return s+"</svg>";};
/* shaded region between y=lo(x) and y=hi(x) for x in [a,b] */
SVG.region=function(o){const W=o.W||240,H=o.H||200,F=frame(o.x0,o.x1,o.y0,o.y1,W,H,22);let s=open(W,H,o.label||"region")+axes(F,o.x0,o.x1,o.y0,o.y1);
  let top="",bot="";const n=40;
  for(let i=0;i<=n;i++){const x=o.a+(o.b-o.a)*i/n;top+=(i?"L":"M")+F.X(x).toFixed(1)+" "+F.Y(o.hi(x)).toFixed(1);}
  for(let i=n;i>=0;i--){const x=o.a+(o.b-o.a)*i/n;bot+="L"+F.X(x).toFixed(1)+" "+F.Y(o.lo(x)).toFixed(1);}
  s+=`<path d="${top}${bot}Z" fill="var(--mint)" fill-opacity=".28" stroke="var(--mint)" stroke-width="1.5"/>`;
  (o.labels||[]).forEach(l=>s+=txt(F.X(l[0]),F.Y(l[1]),l[2],l[3]||"--fg",11));
  return s+"</svg>";};
/* polar sector/annulus */
SVG.sector=function(o){const W=o.W||220,H=o.H||220,R=o.R*1.15,F=frame(-R,R,-R,R,W,H,14);let s=open(W,H,o.label||"polar region")+axes(F,-R,R,-R,R);
  const n=48;let d="";for(let i=0;i<=n;i++){const t=o.t0+(o.t1-o.t0)*i/n;d+=(i?"L":"M")+F.X(o.R*Math.cos(t)).toFixed(1)+" "+F.Y(o.R*Math.sin(t)).toFixed(1);}
  for(let i=n;i>=0;i--){const t=o.t0+(o.t1-o.t0)*i/n,r=o.r0||0;d+="L"+F.X(r*Math.cos(t)).toFixed(1)+" "+F.Y(r*Math.sin(t)).toFixed(1);}
  s+=`<path d="${d}Z" fill="var(--mint)" fill-opacity=".28" stroke="var(--mint)" stroke-width="1.5"/>`;
  (o.ticks||[]).forEach(t=>s+=txt(F.X(t[0]),F.Y(t[1]),t[2]));
  return s+"</svg>";};
window.SVG=SVG;
window.addQ=function(id,qs){const L=LEVELS.find(l=>l.id===id);if(!L){console.warn("no level",id);return;}L.quest=(L.quest||[]).concat(qs);};
})();
