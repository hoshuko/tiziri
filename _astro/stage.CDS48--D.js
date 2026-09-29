import{Color as e,DataTexture as t,LinearSRGBColorSpace as n,Mesh as r,OrthographicCamera as i,PlaneGeometry as a,Scene as o,ShaderMaterial as s,TextureLoader as c,Timer as l,Vector2 as u,Vector4 as d,WebGLRenderer as f}from"./three.module.4gI5Z-_B.js";var p=`
uniform float uTime;
uniform vec2 uRes;        // taille du canevas en pixels CSS
uniform vec2 uSunPos;     // centre de la fenêtre (fraction de l'écran)
uniform vec2 uSunSize;    // largeur / hauteur de la tache de soleil (fraction de la hauteur)
uniform float uSun;       // intensité du soleil 0..1
uniform float uWind;      // agitation du feuillage
uniform float uMirror;    // -1 en arabe (lecture de droite à gauche) : la lumière vient de l'autre côté

vec2 sunCenter() { return vec2(uMirror > 0.0 ? uSunPos.x : 1.0 - uSunPos.x, uSunPos.y); }

float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123); }
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1, 0)), u.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), u.x), u.y);
}
float fbm(vec2 p) {
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 5; i++) { v += a * noise(p); p = p * 2.03 + 17.1; a *= 0.5; }
  return v;
}

// Distance signée à une arche (rectangle surmonté d'un demi-cercle), centrée en bas.
float sdArch(vec2 p, float halfW, float h) {
  vec2 q = vec2(abs(p.x), p.y);
  float body = max(q.x - halfW, max(-q.y, q.y - (h - halfW)));
  float top = length(q - vec2(0.0, h - halfW)) - halfW;
  return q.y > h - halfW ? top : body;
}

// Soleil qui entre par une fenêtre en arc, traverse les feuilles d'un olivier et tombe sur le mur.
float sunlight(vec2 frag) {
  vec2 p = frag / uRes.y;                    // unités : hauteur de l'écran
  vec2 c = sunCenter() * vec2(uRes.x / uRes.y, 1.0);
  vec2 w = p - c;
  w.x -= w.y * 0.42 * uMirror;               // rayons obliques : la tache est cisaillée
  w.y += uSunSize.y * 0.5;
  float d = sdArch(w, uSunSize.x * 0.5, uSunSize.y);
  float pen = 0.012 + 0.03 * clamp(1.0 - w.y / uSunSize.y, 0.0, 1.0); // pénombre plus douce en bas
  float win = 1.0 - smoothstep(-pen, pen, d);
  // Croisillons de la fenêtre.
  float bars = smoothstep(0.004, 0.012, abs(w.x)) * smoothstep(0.004, 0.012, abs(w.y - uSunSize.y * 0.46));
  win *= mix(1.0, bars, 0.85);
  // Feuillage : taches qui respirent avec le vent.
  vec2 lp = p * 7.5 + vec2(uTime * 0.02, 0.0);
  lp += vec2(sin(uTime * 0.7 + p.y * 3.0), cos(uTime * 0.55 + p.x * 2.0)) * 0.06 * uWind;
  float leaves = smoothstep(0.5, 0.6, fbm(lp) * 0.75 + 0.35 * fbm(lp * vec2(3.1, 1.4) - uTime * 0.06));
  float branch = smoothstep(0.03, 0.0, abs(p.y - c.y + 0.35 - 0.18 * sin(p.x * 2.2 + 0.6)) - 0.004);
  float foliage = clamp(1.0 - leaves * 0.78 - branch * 0.6, 0.0, 1.0);
  return win * mix(1.0, foliage, 0.85) * uSun;
}
`,m=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,h=`
${p}
uniform vec3 uWall;
uniform vec3 uWarm;
uniform vec3 uCool;
uniform float uFade;       // 0 = invisible, 1 = décor complet
uniform vec3 uBg;          // couleur sous le décor (fond du site)
varying vec2 vUv;

void main() {
  vec2 frag = vUv * uRes;
  vec2 p = frag / uRes.y;
  // Chaux : grandes nuances + grain fin de l'enduit.
  float big = fbm(p * 1.3 + 3.0);
  float fine = noise(frag * 0.35) * 0.5 + noise(frag * 0.9) * 0.5;
  vec3 wall = uWall * (0.96 + 0.06 * big) * (0.99 + 0.02 * fine);
  // Ombre du mur légèrement froide (le ciel), soleil crème et doré.
  float s = sunlight(frag);
  vec3 shade = wall * mix(vec3(1.0), uCool, 0.14) * 0.965;
  vec3 sunny = mix(wall, uWarm, 0.55) * 1.09;
  vec3 lit = mix(shade, sunny, s);
  // Halo doux autour de la tache de soleil + vignette légère.
  float halo = smoothstep(0.8, 0.0, length((vUv - sunCenter()) * vec2(uRes.x / uRes.y, 1.0)));
  lit += uWarm * 0.035 * halo;
  float vig = smoothstep(1.3, 0.4, length((vUv - 0.5) * vec2(uRes.x / uRes.y, 1.0)));
  lit *= mix(0.93, 1.0, vig);
  gl_FragColor = vec4(mix(uBg, lit, uFade), 1.0);
}
`,g=`
uniform float uTime;
uniform float uSway;       // 0 = immobile (posé à plat), 1 = suspendu
uniform float uSeed;
uniform vec2 uShadowOffset;
uniform float uIsShadow;
varying vec2 vUv;
varying vec2 vFrag;
varying float vFold;

void main() {
  vUv = uv;
  vec3 pos = position;
  float hang = pow(1.0 - uv.y, 1.6);                 // accroché en haut, libre en bas
  float t = uTime * 0.9 + uSeed * 6.28;
  float wave = sin(t + uv.y * 4.0) * 0.6 + sin(t * 1.7 + uv.x * 5.0 + uv.y * 2.0) * 0.4;
  pos.x += wave * 0.011 * hang * uSway;                      // fractions de la taille du plan
  pos.y += sin(uTime * 0.6 + uSeed * 3.0) * 0.004 * (1.0 - uSway * 0.5);
  vFold = cos(t + uv.y * 4.0) * hang * uSway;
  vec4 world = modelMatrix * vec4(pos, 1.0);
  world.xy += uShadowOffset * uIsShadow;
  vFrag = world.xy;
  gl_Position = projectionMatrix * viewMatrix * world;
}
`,_=`
${p}
uniform sampler2D uMap;
uniform sampler2D uMask;
uniform float uUseMask;    // photo brute + masque (métamorphose) ou image déjà détourée
uniform float uCut;        // 0 = photo entière, 1 = vêtement seul (balayage de haut en bas)
uniform float uReveal;     // apparition / disparition par fils de lumière
uniform float uOpacity;
uniform float uLight;      // influence du soleil sur la pièce (faible : la couleur reste fidèle)
uniform float uIsShadow;
uniform float uShadow;     // force de l'ombre portée
uniform float uRadius;     // coins arrondis du cadre « téléphone » (fraction)
uniform vec2 uSize;        // taille du plan en pixels
uniform vec3 uThread;
uniform vec4 uEdgeFade;    // fondu des bords coupés par la photo : haut, droite, bas, gauche (fraction)
varying vec2 vUv;
varying vec2 vFrag;
varying float vFold;

float roundedBox(vec2 uv, vec2 size, float r) {
  vec2 q = abs(uv - 0.5) * size - (0.5 * size - r);
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
}

void main() {
  vec4 tex = texture2D(uMap, vUv, uIsShadow * 3.5);   // texture prémultipliée : pas de liseré du décor d'origine
  float alpha = tex.a;
  tex.rgb /= max(tex.a, 0.0001);
  if (uUseMask > 0.5) {
    float m = texture2D(uMask, vUv, uIsShadow * 3.5).r;
    // Le balayage descend : au-dessus de la ligne le décor s'évapore, le vêtement reste.
    float scan = uCut * 1.2 - 0.1;
    float line = 1.0 - vUv.y;
    float n = noise(vUv * vec2(uSize.x, uSize.y) * 0.08);
    float gone = smoothstep(scan + 0.02, scan - 0.06, line + n * 0.05);
    alpha = mix(1.0, m, gone);
    float edge = smoothstep(0.012, 0.0, abs(line - scan)) * (1.0 - m) * step(0.001, uCut) * step(uCut, 0.999);
    tex.rgb = mix(tex.rgb, uThread, edge * 0.9);
    alpha = max(alpha, edge * 0.9);
    float box = roundedBox(vUv, uSize, uRadius * min(uSize.x, uSize.y));
    alpha *= smoothstep(1.0, -1.0, box);
  }
  // Apparition « tissée » : des fils horizontaux se posent de haut en bas, un liseré doré au front.
  float rowId = floor(vUv.y * uSize.y / 3.0);                       // un fil tous les 3 px
  float jitter = hash(vec2(rowId, 7.0)) * 0.22 + noise(vec2(vUv.x * 4.0, rowId * 0.35)) * 0.1;
  float v = (1.0 - vUv.y) * 0.68 + jitter;                            // 0 en haut … ~1 en bas
  float r = uReveal * 1.08 - 0.04;
  float shown = 1.0 - smoothstep(r - 0.015, r + 0.015, v);
  float thread = smoothstep(0.02, 0.0, abs(v - r)) * step(0.001, uReveal) * step(uReveal, 0.999);
  alpha *= shown;
  // Là où la photo coupait le vêtement, il se fond dans la lumière au lieu d'être tranché net.
  vec4 e = vec4(1.0 - vUv.y, 1.0 - vUv.x, vUv.y, vUv.x);
  for (int i = 0; i < 4; i++) if (uEdgeFade[i] > 0.0) alpha *= smoothstep(0.0, uEdgeFade[i], e[i]);

  if (uIsShadow > 0.5) {
    float s = sunlight(vFrag);
    float strength = uShadow * mix(0.18, 0.55, s);
    gl_FragColor = vec4(vec3(0.0), alpha * strength * uOpacity);   // noir prémultiplié
    return;
  }
  float s = sunlight(vFrag);
  vec3 col = tex.rgb;
  col *= 1.0 + vFold * 0.045;                           // plis qui bougent
  col *= mix(1.0 - 0.06 * uLight, 1.0 + 0.08 * uLight, s); // le soleil passe sur la pièce, sans la teinter
  col = mix(col, uThread, thread * 0.85);
  float a = clamp(alpha + thread * tex.a * 0.9, 0.0, 1.0) * uOpacity;
  gl_FragColor = vec4(col * a, a);
}
`,v=t=>new e(t),y=class{aspect;uniforms;mesh;shadow;x=0;y=0;h=100;reveal=1;opacity=1;cut=0;radius=0;shadowStrength=1;edgeFade=[0,0,0,0];ready;constructor(e,n){this.aspect=n.aspect;let i=new c,o=e=>new Promise((t,n)=>i.load(e,e=>{e.colorSpace=``,e.premultiplyAlpha=!0,e.anisotropy=4,e.needsUpdate=!0,t(e)},void 0,n)),l=new t(new Uint8Array([255,255,255,255]),1,1);l.needsUpdate=!0,this.uniforms={...e.shared,uMap:{value:l},uMask:{value:l},uUseMask:{value:+!!n.mask},uCut:{value:0},uReveal:{value:1},uOpacity:{value:1},uLight:{value:1},uIsShadow:{value:0},uShadow:{value:1},uShadowOffset:{value:new u(0,0)},uRadius:{value:0},uSize:{value:new u(1,1)},uSway:{value:n.sway??1},uSeed:{value:n.seed??Math.random()},uThread:{value:v(`#ffe3b3`)},uEdgeFade:{value:new d(0,0,0,0)}};let f=new a(1,1,20,32),p=new s({uniforms:this.uniforms,vertexShader:g,fragmentShader:_,transparent:!0,premultipliedAlpha:!0,depthTest:!1,depthWrite:!1});this.mesh=new r(f,p),this.mesh.renderOrder=2;let m={...this.uniforms,uIsShadow:{value:1}};this.shadow=new r(f,p.clone()),this.shadow.material.uniforms=m,this.shadow.renderOrder=1,this.ready=Promise.all([o(n.map),n.mask?o(n.mask):Promise.resolve(l)]).then(([e,t])=>{this.uniforms.uMap.value=e,this.uniforms.uMask.value=t,m.uMap.value=e,m.uMask.value=t}),e.scene.add(this.shadow,this.mesh)}get w(){return this.h*this.aspect}sync(e){let t=this.opacity>.001&&this.reveal>.001;if(this.mesh.visible=this.shadow.visible=t,!t)return;this.mesh.position.set(this.x+e.offsetX,e.height-this.y-e.offsetY,0),this.mesh.scale.set(this.w,this.h,1),this.shadow.position.copy(this.mesh.position),this.shadow.scale.copy(this.mesh.scale);let n=this.uniforms;n.uReveal.value=this.reveal,n.uOpacity.value=this.opacity,n.uCut.value=this.cut,n.uRadius.value=this.radius,n.uShadow.value=this.shadowStrength,n.uEdgeFade.value.set(...this.edgeFade),n.uSize.value.set(this.w,this.h),this.shadow.material.uniforms.uShadowOffset.value.set(this.h*.07*e.shared.uMirror.value,-this.h*.045)}},b=class{canvas;renderer;scene=new o;camera=new i(0,1,1,0,-10,10);shared;wallUniforms;layers=[];width=1;height=1;fade=1;offsetX=0;offsetY=0;timer=new l;running=!1;visible=!0;onFrame;constructor(e,t={}){this.canvas=e,this.renderer=new f({canvas:e,antialias:!0,alpha:!1,powerPreference:`high-performance`}),this.renderer.outputColorSpace=n;let i=(navigator.hardwareConcurrency??8)<=4||(navigator.deviceMemory??8)<=3;this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,t.maxDpr??(i?1.25:1.75))),this.shared={uTime:{value:0},uRes:{value:new u(1,1)},uSunPos:{value:new u(.62,.56)},uSunSize:{value:new u(.46,.78)},uSun:{value:1},uWind:{value:1},uMirror:{value:document.documentElement.dir===`rtl`?-1:1}},this.wallUniforms={...this.shared,uWall:{value:v(t.wall??`#f3eadc`)},uWarm:{value:v(`#fff1da`)},uCool:{value:v(`#b8c4cf`)},uFade:{value:1},uBg:{value:v(t.background??`#efe7da`)}};let o=new r(new a(2,2),new s({uniforms:this.wallUniforms,vertexShader:m,fragmentShader:h,depthTest:!1,depthWrite:!1}));o.frustumCulled=!1,o.renderOrder=0,this.scene.add(o),this.fixedSize=t.size,this.fixedSize||new ResizeObserver(()=>this.resize()).observe(e),new IntersectionObserver(([e])=>{this.visible=e.isIntersecting}).observe(e),this.resize()}fixedSize;add(e){let t=new y(this,e);return this.layers.push(t),t}resize(){let e=this.fixedSize??this.canvas.getBoundingClientRect();this.width=Math.max(1,e.width),this.height=Math.max(1,e.height),this.renderer.setSize(this.width,this.height,!1),Object.assign(this.camera,{left:0,right:this.width,top:this.height,bottom:0}),this.camera.updateProjectionMatrix(),this.shared.uRes.value.set(this.width,this.height)}start(){if(this.running)return;this.running=!0;let e=()=>{this.running&&(requestAnimationFrame(e),this.visible&&!document.hidden&&this.frame())};requestAnimationFrame(e)}stop(){this.running=!1}frame(){this.timer.update();let e=this.timer.getElapsed();this.shared.uTime.value=e,this.wallUniforms.uFade.value=this.fade,this.onFrame?.(e);for(let e of this.layers)e.sync(this);this.renderer.render(this.scene,this.camera)}snapshot(e=`image/jpeg`,t=.92){for(let e of this.layers)e.sync(this);return this.renderer.render(this.scene,this.camera),new Promise(n=>this.canvas.toBlob(n,e,t))}};export{b as Stage};