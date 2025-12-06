import{j as e,P as a,l as p,m as g,R as u,a as l,i as r,b as h}from"https://yawr-marketing.vercel.app/assets/chunks/chunk-BnkZGbG_.js";/* empty css                      */const i=void 0,w=[{id:"7tDmfXk1yZYfU7vRcPD9L"},{id:"2VUsvnrsc6vlIyswml8aQ",maxWidth:991},{id:"i0AQFBAi8MCTPNt6MoVec",maxWidth:767},{id:"-gexacQEc0uNdIPWSZX_F",maxWidth:479}],y=void 0,b=["Figtree-VariableFont_wght_4SenVgiUAUYTaxGhVZMd5.ttf"],f=[],x=c=>e.jsxs("body",{className:"w-element cwu9tw6",children:[e.jsx(a,{code:`<style>
  body::-webkit-scrollbar {
    display: none;
  }
</style>
`,className:"w-html-embed"}),e.jsxs("div",{className:"w-element",children:[e.jsx(p,{children:e.jsx(g,{children:e.jsx("div",{className:"w-element cygu30m c8dfwdu cqykkfr",children:e.jsxs("div",{className:"w-element c3bgmg3 c1qrs49p",children:[e.jsx("div",{className:"w-element ch289as ceprzsn cq9cy9j",children:e.jsx("a",{href:"/",className:"w-element cdvz54f cb2bonm cc79uqo cc6cbs3 ct4jp1b c13bdzje c1wz92u8 c9ibl5i clwyh1n c1pt4ytt cdf2r2t",children:"Vygor"})}),e.jsxs("div",{className:"w-element ch289as ci1lsmr c18jfsbn",children:[e.jsx("a",{href:"https://www.vygorai.com/login",className:"w-element cdvz54f c1dcwajz cc79uqo cb2bonm c13bdzje clwyh1n c1pt4ytt c1wz92u8 c9ibl5i c1bzdkwm c1vemkct cfchtsu",children:"sign in"}),e.jsx("a",{href:"/showcase",className:"w-element cdvz54f c1dcwajz cc79uqo cb2bonm c13bdzje clwyh1n c1pt4ytt c1wz92u8 c9ibl5i c1bzdkwm c1vemkct cfchtsu",children:"showcase"}),e.jsx("a",{href:"/demo",className:"w-element cdvz54f c1dcwajz cc79uqo cb2bonm c13bdzje clwyh1n c1pt4ytt c1wz92u8 c9ibl5i c1bzdkwm c1vemkct cfchtsu",children:"book a demo"}),e.jsx("a",{href:"/about",className:"w-element cdvz54f c1dcwajz cc79uqo cb2bonm c13bdzje clwyh1n c1pt4ytt c1wz92u8 c9ibl5i c1bzdkwm c1vemkct cfchtsu",children:"about"})]})]})})})}),e.jsx("div",{className:"w-element cwu9tw6",children:e.jsxs("div",{className:"w-element",children:[e.jsx("div",{id:"bg-scroll",className:"w-element cygu30m c8dfwdu c12cy2w4"}),e.jsx("div",{className:"w-element cygu30m c8dfwdu c1avragj ch289as ci1lsmr cq9cy9j c86ha57",children:e.jsxs("a",{id:"link",target:"_blank",className:"w-element c1t9swzo ckw6vjb c1gssg9l c1dzbp3y crgitn8 c86ha57 c1kccy3i c17hziw0 ch289as c18jfsbn c1gj0qrp c178bejt c1vl6gom c13bdzje cn90vpn c1x86osn c1ya99dd ccujgcq",children:[e.jsx("div",{className:"w-element",children:e.jsx("p",{id:"showcase",className:"w-element cb2bonm cc79uqo",children:"SHOWCASE - XX"})}),e.jsx("div",{className:"w-element",children:e.jsx("h1",{id:"studio",className:"w-element cnk4v2h cnh40e7 ciesopo cb2bonm cc79uqo c1g7uyih czcldgn cedazil c108qlbv cb5xd4w ctf1bj6",children:"STUDIO"})}),e.jsxs("div",{className:"w-element ch289as c1gj0qrp ci1lsmr",children:[e.jsxs("div",{className:"w-element",children:[e.jsx("p",{id:"city",className:"w-element cb2bonm cc79uqo",children:"CITY"}),e.jsx("p",{id:"coordinates",className:"w-element cb2bonm cc79uqo",children:"COORDINATES"})]}),e.jsx("p",{id:"website",className:"w-element cb2bonm cc79uqo c1vemkct",children:"website"})]})]})}),e.jsx("div",{id:"spacer",className:"w-element c1i2nrr1"}),e.jsx(a,{executeScriptOnCanvas:!0,code:`<script>
(function(){
  /* ---------- Config / Data ---------- */
  const sections = [
    { showcase: "SHOWCASE - 01", studio: "Wild Thing<br>Yoga", city: "MIAMI", coordinates: "41.8781°N / 87.6298°W", website: "wildthingyoga.com", image: "https://res.cloudinary.com/drihq534t/image/upload/v1764808327/wildthing_eluqoj.jpg" },
    { showcase: "SHOWCASE - 02", studio: "Coming<br>Soon", city: "NEW YORK CITY", coordinates: "47.6062°N / 122.3321°W", website: "-------------", image: "https://res.cloudinary.com/drihq534t/image/upload/v1764744652/running_kxrlqr.jpg" },
    { showcase: "SHOWCASE - 03", studio: "Coming<br>Soon", city: "NEW YORK CITY", coordinates: "40.7128°N / 74.0060°W", website: "-------------", image: "https://res.cloudinary.com/drihq534t/image/upload/v1764744897/jbrpmzngd1rvjkasjybp_40_zknb6o.webp" }
  ];

  /* ---------- DOM references ---------- */
  const bg = document.getElementById('bg-scroll');
  const spacer = document.getElementById('spacer');
  const showcaseEl = document.getElementById('showcase');
  const studioEl   = document.getElementById('studio');
  const cityEl     = document.getElementById('city');
  const coordsEl   = document.getElementById('coordinates');
  const websiteEl  = document.getElementById('website');
  const linkEl     = document.getElementById('link');

  /* ---------- State ---------- */
  let vh = window.innerHeight;
  const total = sections.length;
  const cycleCount = 2;                 // duplicate image stack -> seamless wrap
  const logicalHeight = vh * total;     // height of single logical cycle
  const spacerMultiplier = 200;         // page scroll length
  let layers = [];
  let ticking = false;
  let lastSectionIndex = -1;

  /* ---------- Build layers ---------- */
  function buildLayers() {
    bg.innerHTML = '';
    layers = [];

    for (let cycle = 0; cycle < cycleCount; cycle++) {
      for (let i = 0; i < total; i++) {
        const s = sections[i];
        const layer = document.createElement('div');

        layer.style.position = 'absolute';
        layer.style.top = '0';
        layer.style.left = '0';
        layer.style.width = '100%';
        layer.style.height = '100%';
        layer.style.backgroundImage = \`url('\${s.image}')\`;
        layer.style.backgroundSize = 'cover';
        layer.style.backgroundPosition = 'center';
        layer.style.backgroundRepeat = 'no-repeat';
        layer.style.willChange = 'transform';
        layer.style.pointerEvents = 'none';

        bg.appendChild(layer);
        layers.push(layer);
      }
    }

    spacer.style.height = \`\${logicalHeight * spacerMultiplier}px\`;
  }

  /* ---------- Helpers ---------- */
  function getLogicalScroll(realScroll) {
    return ((realScroll % logicalHeight) + logicalHeight) % logicalHeight;
  }

  function setCenterContent(idx) {
    const i = ((idx % total) + total) % total;
    const s = sections[i];
    showcaseEl.innerHTML = s.showcase;
    studioEl.innerHTML   = s.studio;
    cityEl.innerHTML     = s.city;
    coordsEl.innerHTML   = s.coordinates;
    websiteEl.innerHTML  = s.website;
    link.href            = "https://" + s.website;

  }

  /* ---------- Render loop ---------- */
  function render(logicalScroll) {
    // center of viewport
    const centerY = logicalScroll + vh/2;
  
    // which section contains the centerY point
    const sectionIndex = Math.floor(centerY / vh) % total;
  
    // update content only when section changes
    if (sectionIndex !== lastSectionIndex) {
      setCenterContent(sectionIndex);
      lastSectionIndex = sectionIndex;
    }
  
    // move all layers as before
    for (let idx = 0; idx < layers.length; idx++) {
      const layerTop = idx * vh;
      const translateY = layerTop - logicalScroll;
      layers[idx].style.transform = \`translateY(\${translateY}px)\`;
    }
  }

  function onScrollRaf() {
    const logical = getLogicalScroll(window.scrollY);
    render(logical);
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(onScrollRaf);
    }
    handleSnap(); // call snap debounce on scroll
  }, { passive: true });

  /* ---------- Resize handling ---------- */
  function onResize() {
    vh = window.innerHeight;
    buildLayers();
    render(getLogicalScroll(window.scrollY));
  }
  window.addEventListener('resize', onResize);

  /* ---------- Init ---------- */
  buildLayers();
  render(getLogicalScroll(window.scrollY));

  /* ---------- Snapping logic ---------- */
  const snapDuration = 1000; // ms
  let isSnapping = false;
  let snapStart = 0;
  let snapEnd = 0;
  let snapFrom = 0;
  let snapTimeout;

  function snapAnimation(timestamp) {
    if (!snapStart) snapStart = timestamp;
    const progress = Math.min((timestamp - snapStart)/snapDuration,1);
    const eased = 1 - Math.pow(1 - progress, 3); // cubic ease-out
    const newPos = snapFrom + (snapEnd - snapFrom) * eased;
    window.scrollTo(0,newPos);
    if (progress<1){
      requestAnimationFrame(snapAnimation);
    } else {
      isSnapping=false;
      snapStart=0;
    }
  }

  function handleSnap(){
    if(isSnapping) return;
    clearTimeout(snapTimeout);
    snapTimeout = setTimeout(()=>{
      const scrollY = window.scrollY;
      const logical = getLogicalScroll(scrollY);
      const nearestSection = Math.round(logical/vh);
      const snapTo = scrollY - (logical - nearestSection*vh);
      isSnapping = true;
      snapStart=0;
      snapFrom = scrollY;
      snapEnd = snapTo;
      requestAnimationFrame(snapAnimation);
    },80);
  }
})();
<\/script>
`,className:"w-html-embed"})]})})]})]}),j=({data:c})=>{const{system:t,resources:o,url:n}=c;return e.jsx(u.Provider,{value:{imageLoader:r,assetBaseUrl:l,resources:o,breakpoints:w,onError:console.error},children:e.jsx(x,{system:t},n)})},v=Object.freeze(Object.defineProperty({__proto__:null,default:j},Symbol.toStringTag,{value:"Module"})),S=({data:c})=>{const{pageMeta:t}=c,{origin:o}=new URL(c.url);let n=t.socialImageUrl;t.socialImageAssetName&&(n=`${o}${r({src:`${l}/${t.socialImageAssetName}`})}`);const d=t.custom.some(s=>s.property==="twitter:card");return e.jsxs(e.Fragment,{children:[c.url&&e.jsx("meta",{property:"og:url",content:c.url}),e.jsx("title",{children:t.title}),e.jsx("meta",{property:"og:title",content:t.title}),t.description&&e.jsxs(e.Fragment,{children:[e.jsx("meta",{name:"description",content:t.description}),e.jsx("meta",{property:"og:description",content:t.description})]}),e.jsx("meta",{property:"og:type",content:"website"}),i,n&&e.jsx("meta",{property:"og:image",content:t.socialImageUrl}),i,t.excludePageFromSearch&&e.jsx("meta",{name:"robots",content:"noindex, nofollow"}),t.custom.map(({property:s,content:m})=>e.jsx("meta",{property:s,content:m},s)),(t.socialImageAssetName!==void 0||t.socialImageUrl!==void 0)&&d===!1&&e.jsx("meta",{property:"twitter:card",content:"summary_large_image"}),y,b.map(s=>e.jsx("link",{rel:"preload",href:`${l}${s}`,as:"font",crossOrigin:"anonymous"},s)),f.map(s=>e.jsx("link",{rel:"preload",href:`${l}${s}`,as:"image"},s))]})},z=Object.freeze(Object.defineProperty({__proto__:null,Head:S},Symbol.toStringTag,{value:"Module"})),k={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:h}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/showcase/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:v}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/showcase/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:z}}};export{k as configValuesSerialized};
