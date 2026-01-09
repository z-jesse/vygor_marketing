import{j as e,l,m,P as o,R as u,a as n,i as c,b as h,c as p,d as f}from"../chunks/chunk-jtiGasg6.js";/* empty css                      */const i="",w=[{id:"7tDmfXk1yZYfU7vRcPD9L"},{id:"2VUsvnrsc6vlIyswml8aQ",maxWidth:991},{id:"i0AQFBAi8MCTPNt6MoVec",maxWidth:767},{id:"-gexacQEc0uNdIPWSZX_F",maxWidth:479}],g="Frame_924_FwZhwh88oCp3T3_-_ADtJ.svg",b=["Figtree-VariableFont_wght_4SenVgiUAUYTaxGhVZMd5.ttf"],x=[],v=t=>e.jsx("body",{className:"w-element cwu9tw6",children:e.jsxs("div",{className:"w-element",children:[e.jsx(l,{children:e.jsx(m,{children:e.jsx("div",{className:"w-element cygu30m c8dfwdu cqykkfr",children:e.jsxs("div",{className:"w-element c3bgmg3 c1qrs49p",children:[e.jsx("div",{className:"w-element ch289as ceprzsn cq9cy9j",children:e.jsx("a",{href:"/",className:"w-element cdvz54f cb2bonm cc79uqo cc6cbs3 ct4jp1b c13bdzje c1wz92u8 c9ibl5i clwyh1n c1pt4ytt cdf2r2t",children:"Vygor"})}),e.jsxs("div",{className:"w-element ch289as ci1lsmr c18jfsbn",children:[e.jsx("a",{href:"https://www.vygorai.com/login",className:"w-element cdvz54f c1dcwajz cc79uqo cb2bonm c13bdzje clwyh1n c1pt4ytt c1wz92u8 c9ibl5i c1bzdkwm c1vemkct cfchtsu",children:"sign in"}),e.jsx("a",{href:"/showcase",className:"w-element cdvz54f c1dcwajz cc79uqo cb2bonm c13bdzje clwyh1n c1pt4ytt c1wz92u8 c9ibl5i c1bzdkwm c1vemkct cfchtsu",children:"showcase"}),e.jsx("a",{href:"/demo",className:"w-element cdvz54f c1dcwajz cc79uqo cb2bonm c13bdzje clwyh1n c1pt4ytt c1wz92u8 c9ibl5i c1bzdkwm c1vemkct cfchtsu",children:"book a demo"}),e.jsx("a",{href:"/about",className:"w-element cdvz54f c1dcwajz cc79uqo cb2bonm c13bdzje clwyh1n c1pt4ytt c1wz92u8 c9ibl5i c1bzdkwm c1vemkct cfchtsu",children:"about"})]})]})})})}),e.jsxs("div",{className:"w-element",children:[e.jsx(o,{code:`<canvas id="dotMatrix" style="width:100%;height:100%;display:block;position:absolute;top:0;left:0;"></canvas>

<style>
#dotMatrix {
  position: fixed;
  top: calc(-1 * env(safe-area-inset-top));
  bottom: calc(-1 * env(safe-area-inset-bottom));
  width: 100%;
  height: calc(100dvh + env(safe-area-inset-top) + env(safe-area-inset-bottom));
}
</style>

<script>
(function(){
  const canvas = document.getElementById('dotMatrix');
  const ctx = canvas.getContext('2d');

  const spacing = 40;
  const radius = 2;
  const maxShift = 4;
  const attractionSpeed = 0.1;
  const chromaOffset = 2; // offset for chromatic aberration
  let dots = [];
  let mouse = { x:-1000, y:-1000 };

  const msToSec = 0.001;

  function createGrid() {
    dots = [];
    const rect = canvas.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    for (let x = 0; x < width; x += spacing) {
      for (let y = 0; y < height; y += spacing) {
        dots.push({
          x,
          y,
          period: 2000 + Math.random() * 1000,
          offset: Math.random() * Math.PI * 2,
          currentX: x,
          currentY: y
        });
      }
    }
  }

  function resize() {
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
    createGrid();
  }

  new ResizeObserver(resize).observe(canvas);

  window.addEventListener("mousemove", e => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  function draw(time) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    dots.forEach(dot => {
      const t = time * msToSec;
      // Normal pulsing 0 → 0.4
      let alpha = (Math.sin((2 * Math.PI / (dot.period * msToSec)) * t + dot.offset) + 1) / 2;
      alpha *= 0.4;

      const dx = dot.x - mouse.x;
      const dy = dot.y - mouse.y;
      const dist = Math.sqrt(dx*dx + dy*dy);
      const radiusEffect = 100;

      let targetX = dot.x;
      let targetY = dot.y;

      if (dist < radiusEffect) {
        // brighten without affecting pulse
        alpha += (1 - dist / radiusEffect) * 0.8;
        alpha = Math.min(alpha, 1);

        // attraction toward mouse
        const shiftAmount = (1 - dist / radiusEffect) * maxShift;
        targetX = dot.x - dx / dist * shiftAmount;
        targetY = dot.y - dy / dist * shiftAmount;
      }

      // smooth easing
      dot.currentX += (targetX - dot.currentX) * attractionSpeed;
      dot.currentY += (targetY - dot.currentY) * attractionSpeed;

      // draw normal white dot
      ctx.fillStyle = \`rgba(255,255,255,\${alpha})\`;
      ctx.fillRect(dot.currentX - radius/2, dot.currentY - radius/2, radius, radius);

      // chromatic aberration near mouse using company color + complementary color
      if (dist < radiusEffect) {
        const splitX = dx / dist * chromaOffset;
        const splitY = dy / dist * chromaOffset;

        // company color (#CCC395)
        ctx.fillStyle = \`rgba(204,195,149,\${alpha})\`;
        ctx.fillRect(dot.currentX - radius/2 - splitX, dot.currentY - radius/2 - splitY, radius, radius);

        // complementary color (rgb(51,60,106))
        ctx.fillStyle = \`rgba(51,60,106,\${alpha})\`;
        ctx.fillRect(dot.currentX - radius/2 + splitX, dot.currentY - radius/2 + splitY, radius, radius);
      }
    });

    requestAnimationFrame(draw);
  }

  resize();
  requestAnimationFrame(draw);
})();
<\/script>
`,executeScriptOnCanvas:!0,className:"w-html-embed"}),e.jsxs("div",{className:"w-element ch289as c18jfsbn ceprzsn cd2olkx c98ragj c1kccy3i c17hziw0 c86ha57 cyzpbjc c1avragj",children:[e.jsx("p",{className:"w-element cnk4v2h cnh40e7 c1uizmhp cb2bonm c1ti5h7y ctmq2s3 cc79uqo cc6cbs3 ca48rmj c1nktvt0 c341vop c1thn8p3",children:"Vygor"}),e.jsxs("div",{className:"w-element ch289as c1dzbp3y c1gj0qrp cvugz5r ci1lsmr c1ilut8k c1yusizs coaq8zm ccpm1pj c16oy3om",children:[e.jsx("p",{className:"w-element cnk4v2h cnh40e7 ct4jp1b cb2bonm cc79uqo c1u494ep",children:"your studio’s control center, re-imagined"}),e.jsx("p",{id:"gmt",className:"w-element cnk4v2h cnh40e7 c1v12ybg cb2bonm cc79uqo",children:"[gmt]"}),e.jsx("div",{className:"w-element cnjs065 ch289as c1y95tlr cd2olkx c9nj4i6 c14ffqok",children:e.jsx("p",{id:"time",className:"w-element cnk4v2h cnh40e7 c1v12ybg cb2bonm cc79uqo",children:"[time]"})}),e.jsx(o,{executeScriptOnCanvas:!0,code:`<script>
if (!window.__clockSetup) {
  window.__clockSetup = true;
  window.startGlobalClock = function() {
    if (window.__clockInterval) clearInterval(window.__clockInterval);
    const gmt = document.getElementById("gmt");
    const time = document.getElementById("time");
    if (!gmt || !time) return;

    const update = () => {
      const now = new Date();
      const offset = -now.getTimezoneOffset();
      const sign = offset >= 0 ? "+" : "-";
      const abs = Math.abs(offset);
      const hours = Math.floor(abs / 60);
      const minutes = abs % 60;
      gmt.textContent = \`GMT\${sign}\${String(hours).padStart(2, "0")}:\${String(minutes).padStart(2, "0")}\`;
      time.textContent = now.toLocaleTimeString([], {
        hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true
      });
    };
    update();
    window.__clockInterval = setInterval(update, 1000);
  };

  // New universal listeners (Dec 2025)
  document.addEventListener("DOMContentLoaded", window.startGlobalClock);
  document.addEventListener("turbo:render", window.startGlobalClock);        // Turbo 7 / Stimulus
  document.addEventListener("turbo:load", window.startGlobalClock);         // just in case older Turbo
  document.body.addEventListener("htmx:afterSwap", window.startGlobalClock); // HTMX
  document.addEventListener("livewire:navigated", window.startGlobalClock);  // Livewire 3
}

window.startGlobalClock(); // ← run it right now as fallback
<\/script>`,className:"w-html-embed"})]})]})]})]})}),y=({data:t})=>{const{system:r,resources:d,url:a,pageMeta:s}=t;return e.jsxs(u.Provider,{value:{imageLoader:c,assetBaseUrl:n,resources:d,breakpoints:w,onError:console.error},children:[e.jsx(v,{system:r},a),e.jsx(h,{url:a,pageMeta:s,siteName:i,imageLoader:c,assetBaseUrl:n}),e.jsx(p,{children:s.title})]})},j=Object.freeze(Object.defineProperty({__proto__:null,default:y},Symbol.toStringTag,{value:"Module"})),z=({})=>e.jsxs(e.Fragment,{children:[i,e.jsx("link",{rel:"icon",href:c({src:`${n}${g}`,width:144,quality:100,format:"auto"})}),b.map(t=>e.jsx("link",{rel:"preload",href:`${n}${t}`,as:"font",crossOrigin:"anonymous"},t)),x.map(t=>e.jsx("link",{rel:"preload",href:`${n}${t}`,as:"image"},t))]}),S=Object.freeze(Object.defineProperty({__proto__:null,Head:z},Symbol.toStringTag,{value:"Module"})),C={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:f}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/index/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:j}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/index/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:S}}};export{C as configValuesSerialized};
