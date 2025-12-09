import{j as e,l as u,m as h,P as p,R as f,a,i as r,b as g}from"../chunks/chunk-CxevWrcR.js";/* empty css                      */const l="Vygor",x=[{id:"7tDmfXk1yZYfU7vRcPD9L"},{id:"2VUsvnrsc6vlIyswml8aQ",maxWidth:991},{id:"i0AQFBAi8MCTPNt6MoVec",maxWidth:767},{id:"-gexacQEc0uNdIPWSZX_F",maxWidth:479}],y="Frame_924_FwZhwh88oCp3T3_-_ADtJ.svg",w=["Figtree-VariableFont_wght_4SenVgiUAUYTaxGhVZMd5.ttf"],b=[],j=c=>e.jsx("body",{className:"w-element cwu9tw6",children:e.jsxs("div",{className:"w-element",children:[e.jsx(u,{children:e.jsx(h,{children:e.jsx("div",{className:"w-element cygu30m c8dfwdu cqykkfr",children:e.jsxs("div",{className:"w-element c3bgmg3 c1qrs49p",children:[e.jsx("div",{className:"w-element ch289as ceprzsn cq9cy9j",children:e.jsx("a",{href:"/",className:"w-element cdvz54f cb2bonm cc79uqo cc6cbs3 ct4jp1b c13bdzje c1wz92u8 c9ibl5i clwyh1n c1pt4ytt cdf2r2t",children:"Vygor"})}),e.jsxs("div",{className:"w-element ch289as ci1lsmr c18jfsbn",children:[e.jsx("a",{href:"https://www.vygorai.com/login",className:"w-element cdvz54f c1dcwajz cc79uqo cb2bonm c13bdzje clwyh1n c1pt4ytt c1wz92u8 c9ibl5i c1bzdkwm c1vemkct cfchtsu",children:"sign in"}),e.jsx("a",{href:"/showcase",className:"w-element cdvz54f c1dcwajz cc79uqo cb2bonm c13bdzje clwyh1n c1pt4ytt c1wz92u8 c9ibl5i c1bzdkwm c1vemkct cfchtsu",children:"showcase"}),e.jsx("a",{href:"/demo",className:"w-element cdvz54f c1dcwajz cc79uqo cb2bonm c13bdzje clwyh1n c1pt4ytt c1wz92u8 c9ibl5i c1bzdkwm c1vemkct cfchtsu",children:"book a demo"}),e.jsx("a",{href:"/about",className:"w-element cdvz54f c1dcwajz cc79uqo cb2bonm c13bdzje clwyh1n c1pt4ytt c1wz92u8 c9ibl5i c1bzdkwm c1vemkct cfchtsu",children:"about"})]})]})})})}),e.jsxs("div",{className:"w-element",children:[e.jsx(p,{code:`<canvas id="dotMatrix" style="width:100%;height:100%;display:block;position:absolute;top:0;left:0;"></canvas>

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
`,executeScriptOnCanvas:!0,className:"w-html-embed"}),e.jsx("div",{className:"w-element c8xclay ch289as c18jfsbn c1y95tlr c1046myg c98ragj c1kccy3i c17hziw0 c86ha57",children:e.jsx("div",{className:"w-element c1dzbp3y c1b60n1g c1vl6gom c17ilj6p cezp27y",children:e.jsxs("p",{className:"w-element cb2bonm cc79uqo",children:["Vygor AI is an applied technology lab building state-of-the-art products & digital infrastructure for the movement economy. Our team consists of researchers and engineers from Stanford, Caltech, Scale AI, Meta, Microsoft and others.","",e.jsx("br",{}),"","",e.jsx("br",{}),"",e.jsx("b",{className:"w-element",children:e.jsx("i",{className:"w-element",children:"vigor. noun: vi-ger. active bodily or mental strength or force; intensify of action or effect"})}),"",e.jsx("br",{}),"","",e.jsx("br",{}),"","hello@vygorai.com"]})})})]})]})}),v=({data:c})=>{const{system:t,resources:s,url:o}=c;return e.jsx(f.Provider,{value:{imageLoader:r,assetBaseUrl:a,resources:s,breakpoints:x,onError:console.error},children:e.jsx(j,{system:t},o)})},z=Object.freeze(Object.defineProperty({__proto__:null,default:v},Symbol.toStringTag,{value:"Module"})),S=({data:c})=>{const{pageMeta:t}=c,{origin:s}=new URL(c.url),o={"@context":"https://schema.org","@type":"WebSite",name:l,url:s};let i=t.socialImageUrl;t.socialImageAssetName&&(i=`${s}${r({src:`${a}/${t.socialImageAssetName}`,format:"raw"})}`);const d=t.custom.some(n=>n.property==="twitter:card");return e.jsxs(e.Fragment,{children:[c.url&&e.jsx("meta",{property:"og:url",content:c.url}),e.jsx("title",{children:t.title}),e.jsx("meta",{property:"og:title",content:t.title}),t.description&&e.jsxs(e.Fragment,{children:[e.jsx("meta",{name:"description",content:t.description}),e.jsx("meta",{property:"og:description",content:t.description})]}),e.jsx("meta",{property:"og:type",content:"website"}),e.jsx("meta",{property:"og:site_name",content:l}),i&&e.jsx("meta",{property:"og:image",content:t.socialImageUrl}),e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(o,null,2)}}),t.excludePageFromSearch&&e.jsx("meta",{name:"robots",content:"noindex, nofollow"}),t.custom.map(({property:n,content:m})=>e.jsx("meta",{property:n,content:m},n)),(t.socialImageAssetName!==void 0||t.socialImageUrl!==void 0)&&d===!1&&e.jsx("meta",{property:"twitter:card",content:"summary_large_image"}),e.jsx("link",{rel:"icon",href:r({src:`${a}${y}`,width:144,quality:100,format:"auto"})}),w.map(n=>e.jsx("link",{rel:"preload",href:`${a}${n}`,as:"font",crossOrigin:"anonymous"},n)),b.map(n=>e.jsx("link",{rel:"preload",href:`${a}${n}`,as:"image"},n))]})},N=Object.freeze(Object.defineProperty({__proto__:null,Head:S},Symbol.toStringTag,{value:"Module"})),_={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:g}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/about/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:z}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/about/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:N}}};export{_ as configValuesSerialized};
