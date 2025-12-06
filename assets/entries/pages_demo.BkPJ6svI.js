import{j as e,l as u,m as p,P as r,R as h,a as s,i as d,b as f}from"https://vygor-marketing.vercel.app/assets/chunks/chunk-BnkZGbG_.js";/* empty css                      */const i=void 0,x=[{id:"7tDmfXk1yZYfU7vRcPD9L"},{id:"2VUsvnrsc6vlIyswml8aQ",maxWidth:991},{id:"i0AQFBAi8MCTPNt6MoVec",maxWidth:767},{id:"-gexacQEc0uNdIPWSZX_F",maxWidth:479}],g=void 0,y=["Figtree-VariableFont_wght_4SenVgiUAUYTaxGhVZMd5.ttf"],w=[],v=c=>e.jsx("body",{className:"w-element cwu9tw6",children:e.jsxs("div",{className:"w-element",children:[e.jsx(u,{children:e.jsx(p,{children:e.jsx("div",{className:"w-element cygu30m c8dfwdu cqykkfr",children:e.jsxs("div",{className:"w-element c3bgmg3 c1qrs49p",children:[e.jsx("div",{className:"w-element ch289as ceprzsn cq9cy9j",children:e.jsx("a",{href:"/",className:"w-element cdvz54f cb2bonm cc79uqo cc6cbs3 ct4jp1b c13bdzje c1wz92u8 c9ibl5i clwyh1n c1pt4ytt cdf2r2t",children:"Vygor"})}),e.jsxs("div",{className:"w-element ch289as ci1lsmr c18jfsbn",children:[e.jsx("a",{href:"https://www.vygorai.com/login",className:"w-element cdvz54f c1dcwajz cc79uqo cb2bonm c13bdzje clwyh1n c1pt4ytt c1wz92u8 c9ibl5i c1bzdkwm c1vemkct cfchtsu",children:"sign in"}),e.jsx("a",{href:"/showcase",className:"w-element cdvz54f c1dcwajz cc79uqo cb2bonm c13bdzje clwyh1n c1pt4ytt c1wz92u8 c9ibl5i c1bzdkwm c1vemkct cfchtsu",children:"showcase"}),e.jsx("a",{href:"/demo",className:"w-element cdvz54f c1dcwajz cc79uqo cb2bonm c13bdzje clwyh1n c1pt4ytt c1wz92u8 c9ibl5i c1bzdkwm c1vemkct cfchtsu",children:"book a demo"}),e.jsx("a",{href:"/about",className:"w-element cdvz54f c1dcwajz cc79uqo cb2bonm c13bdzje clwyh1n c1pt4ytt c1wz92u8 c9ibl5i c1bzdkwm c1vemkct cfchtsu",children:"about"})]})]})})})}),e.jsxs("div",{className:"w-element",children:[e.jsx(r,{code:`<canvas id="dotMatrix" style="width:100%;height:100%;display:block;position:absolute;top:0;left:0;"></canvas>

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
`,executeScriptOnCanvas:!0,className:"w-html-embed"}),e.jsx("div",{className:"w-element c8xclay ch289as c18jfsbn c1y95tlr c1046myg c98ragj c1kccy3i c17hziw0 c86ha57",children:e.jsx("div",{className:"w-element c1dzbp3y c1b60n1g c1vl6gom c17ilj6p cezp27y",children:e.jsx(r,{executeScriptOnCanvas:!0,code:'<div data-tf-live="01JVWPFJ9SZ7BVAHZQC8E4A9QM"></div><script src="//embed.typeform.com/next/embed.js"><\/script>',className:"w-html-embed"})})})]})]})}),b=({data:c})=>{const{system:t,resources:o,url:a}=c;return e.jsx(h.Provider,{value:{imageLoader:d,assetBaseUrl:s,resources:o,breakpoints:x,onError:console.error},children:e.jsx(v,{system:t},a)})},j=Object.freeze(Object.defineProperty({__proto__:null,default:b},Symbol.toStringTag,{value:"Module"})),z=({data:c})=>{const{pageMeta:t}=c,{origin:o}=new URL(c.url);let a=t.socialImageUrl;t.socialImageAssetName&&(a=`${o}${d({src:`${s}/${t.socialImageAssetName}`})}`);const l=t.custom.some(n=>n.property==="twitter:card");return e.jsxs(e.Fragment,{children:[c.url&&e.jsx("meta",{property:"og:url",content:c.url}),e.jsx("title",{children:t.title}),e.jsx("meta",{property:"og:title",content:t.title}),t.description&&e.jsxs(e.Fragment,{children:[e.jsx("meta",{name:"description",content:t.description}),e.jsx("meta",{property:"og:description",content:t.description})]}),e.jsx("meta",{property:"og:type",content:"website"}),i,a&&e.jsx("meta",{property:"og:image",content:t.socialImageUrl}),i,t.excludePageFromSearch&&e.jsx("meta",{name:"robots",content:"noindex, nofollow"}),t.custom.map(({property:n,content:m})=>e.jsx("meta",{property:n,content:m},n)),(t.socialImageAssetName!==void 0||t.socialImageUrl!==void 0)&&l===!1&&e.jsx("meta",{property:"twitter:card",content:"summary_large_image"}),g,y.map(n=>e.jsx("link",{rel:"preload",href:`${s}${n}`,as:"font",crossOrigin:"anonymous"},n)),w.map(n=>e.jsx("link",{rel:"preload",href:`${s}${n}`,as:"image"},n))]})},S=Object.freeze(Object.defineProperty({__proto__:null,Head:z},Symbol.toStringTag,{value:"Module"})),P={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:f}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/demo/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:j}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/demo/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:S}}};export{P as configValuesSerialized};
