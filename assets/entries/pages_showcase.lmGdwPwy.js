import{j as e,P as a,l as p,m as u,R as h,a as n,i,b as g}from"../chunks/chunk-Dq6NRhse.js";/* empty css                      */const r="",w=[{id:"7tDmfXk1yZYfU7vRcPD9L"},{id:"2VUsvnrsc6vlIyswml8aQ",maxWidth:991},{id:"i0AQFBAi8MCTPNt6MoVec",maxWidth:767},{id:"-gexacQEc0uNdIPWSZX_F",maxWidth:479}],y="Frame_924_FwZhwh88oCp3T3_-_ADtJ.svg",b=["Figtree-VariableFont_wght_4SenVgiUAUYTaxGhVZMd5.ttf"],f=[],j=s=>e.jsxs("body",{className:"w-element cwu9tw6",children:[e.jsx(a,{code:`<style>
  body::-webkit-scrollbar {
    display: none;
  }
</style>
`,className:"w-html-embed"}),e.jsxs("div",{className:"w-element",children:[e.jsx(p,{children:e.jsx(u,{children:e.jsx("div",{className:"w-element cygu30m c8dfwdu cqykkfr",children:e.jsxs("div",{className:"w-element c3bgmg3 c1qrs49p",children:[e.jsx("div",{className:"w-element ch289as ceprzsn cq9cy9j",children:e.jsx("a",{href:"/",className:"w-element cdvz54f cb2bonm cc79uqo cc6cbs3 ct4jp1b c13bdzje c1wz92u8 c9ibl5i clwyh1n c1pt4ytt cdf2r2t",children:"Vygor"})}),e.jsxs("div",{className:"w-element ch289as ci1lsmr c18jfsbn",children:[e.jsx("a",{href:"https://www.vygorai.com/login",className:"w-element cdvz54f c1dcwajz cc79uqo cb2bonm c13bdzje clwyh1n c1pt4ytt c1wz92u8 c9ibl5i c1bzdkwm c1vemkct cfchtsu",children:"sign in"}),e.jsx("a",{href:"/showcase",className:"w-element cdvz54f c1dcwajz cc79uqo cb2bonm c13bdzje clwyh1n c1pt4ytt c1wz92u8 c9ibl5i c1bzdkwm c1vemkct cfchtsu",children:"showcase"}),e.jsx("a",{href:"/demo",className:"w-element cdvz54f c1dcwajz cc79uqo cb2bonm c13bdzje clwyh1n c1pt4ytt c1wz92u8 c9ibl5i c1bzdkwm c1vemkct cfchtsu",children:"book a demo"}),e.jsx("a",{href:"/about",className:"w-element cdvz54f c1dcwajz cc79uqo cb2bonm c13bdzje clwyh1n c1pt4ytt c1wz92u8 c9ibl5i c1bzdkwm c1vemkct cfchtsu",children:"about"})]})]})})})}),e.jsx("div",{className:"w-element cwu9tw6",children:e.jsxs("div",{className:"w-element",children:[e.jsx("div",{id:"bg-scroll",className:"w-element cygu30m c8dfwdu c12cy2w4 cca80jp c1qc5jie"}),e.jsx("div",{className:"w-element cygu30m c8dfwdu c1avragj ch289as ci1lsmr cq9cy9j c86ha57",children:e.jsxs("a",{id:"link",target:"_blank",className:"w-element c1t9swzo ckw6vjb c1gssg9l c1dzbp3y crgitn8 c86ha57 c1kccy3i c17hziw0 ch289as c18jfsbn c1gj0qrp c178bejt c1vl6gom c13bdzje cn90vpn c1x86osn c1ya99dd ccujgcq",children:[e.jsx("div",{className:"w-element",children:e.jsx("p",{id:"showcase",className:"w-element cb2bonm cc79uqo",children:"SHOWCASE - XX"})}),e.jsx("div",{className:"w-element",children:e.jsx("h1",{id:"studio",className:"w-element cnk4v2h cnh40e7 ciesopo cb2bonm cc79uqo c1g7uyih czcldgn cedazil c108qlbv cb5xd4w ctf1bj6",children:"STUDIO"})}),e.jsxs("div",{className:"w-element ch289as c1gj0qrp ci1lsmr",children:[e.jsxs("div",{className:"w-element",children:[e.jsx("p",{id:"city",className:"w-element cb2bonm cc79uqo",children:"CITY"}),e.jsx("p",{id:"coordinates",className:"w-element cb2bonm cc79uqo",children:"COORDINATES"})]}),e.jsx("p",{id:"website",className:"w-element cb2bonm cc79uqo c1vemkct",children:"website"})]})]})}),e.jsx("div",{id:"spacer",className:"w-element ch289as c18jfsbn c1u8hbvl c1xkcjkq coa1jh0"}),e.jsx(a,{executeScriptOnCanvas:!0,code:`<style>
  html {
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
    height: 100%;
    overflow-y: scroll;
    margin: 0;
  }
  .snap-section {
    height: 100vh;
    scroll-snap-align: center;
    flex-shrink: 0;
  }
</style>
<script>
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
  const studioEl = document.getElementById('studio');
  const cityEl = document.getElementById('city');
  const coordsEl = document.getElementById('coordinates');
  const websiteEl = document.getElementById('website');
  const linkEl = document.getElementById('link');
  /* ---------- State ---------- */
  let vh = window.innerHeight;
  const total = sections.length;
  const cycleCount = 2; // for seamless visual loop
  const snapMultiplier = 200; // LOWER = faster progression (20–50 feels great)
  let wrapper;
  let ticking = false;
  let lastSectionIndex = -1;
  /* ---------- Build background layers ---------- */
  function buildBackground() {
    bg.innerHTML = '';
   
    wrapper = document.createElement('div');
    wrapper.style.position = 'absolute';
    wrapper.style.top = '0';
    wrapper.style.left = '0';
    wrapper.style.width = '100%';
    wrapper.style.height = \`\${total * cycleCount * 100}vh\`;
    wrapper.style.willChange = 'transform';
    bg.appendChild(wrapper);
    for (let cycle = 0; cycle < cycleCount; cycle++) {
      for (let i = 0; i < total; i++) {
        const layer = document.createElement('div');
        layer.style.position = 'absolute';
        layer.style.top = \`\${(cycle * total + i) * 100}vh\`;
        layer.style.left = '0';
        layer.style.width = '100%';
        layer.style.height = '100vh';
        layer.style.backgroundImage = \`url('\${sections[i].image}')\`;
        layer.style.backgroundSize = 'cover';
        layer.style.backgroundPosition = 'center';
        layer.style.backgroundRepeat = 'no-repeat';
        layer.style.pointerEvents = 'none';
        wrapper.appendChild(layer);
      }
    }
  }
  /* ---------- Build CSS snap points ---------- */
  function buildSnapPoints() {
    spacer.innerHTML = '';
    const totalSnaps = total * snapMultiplier;
    for (let i = 0; i < totalSnaps; i++) {
      const section = document.createElement('div');
      section.className = 'snap-section';
      spacer.appendChild(section);
    }
  }
  /* ---------- Helpers ---------- */
  function getLogicalScroll() {
    // Convert real scroll to position within one logical cycle
    const cycleHeight = vh * total;
    return ((window.scrollY % cycleHeight) + cycleHeight) % cycleHeight;
  }
  function setCenterContent(idx) {
    const i = ((idx % total) + total) % total;
    const s = sections[i];
    showcaseEl.innerHTML = s.showcase;
    studioEl.innerHTML = s.studio;
    cityEl.innerHTML = s.city;
    coordsEl.innerHTML = s.coordinates;
    websiteEl.innerHTML = s.website;
    if (s.website === "-------------") {
      linkEl.removeAttribute('href');
      linkEl.style.pointerEvents = 'none';
    } else {
      linkEl.href = "https://" + s.website;
      linkEl.style.pointerEvents = 'auto';
    }
  }
  /* ---------- Render ---------- */
  function render() {
    const logicalScroll = getLogicalScroll();
    const centerY = logicalScroll + vh / 2;
    const sectionIndex = Math.floor(centerY / vh) % total;
    if (sectionIndex !== lastSectionIndex) {
      setCenterContent(sectionIndex);
      lastSectionIndex = sectionIndex;
    }
    // Single transform — super smooth on mobile & desktop
    wrapper.style.transform = \`translate3d(0, \${-logicalScroll}px, 0)\`;
  }
  function onScroll() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(() => {
        render();
        ticking = false;
      });
    }
  }
  /* ---------- Resize ---------- */
  function onResize() {
    vh = window.innerHeight;
    buildBackground();
    buildSnapPoints();
    render();
  }
  /* ---------- Init ---------- */
  buildBackground();
  buildSnapPoints();
  render();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onResize);
})();
<\/script>`,className:"w-html-embed"})]})})]})]}),v=({data:s})=>{const{system:t,resources:o,url:l}=s;return e.jsx(h.Provider,{value:{imageLoader:i,assetBaseUrl:n,resources:o,breakpoints:w,onError:console.error},children:e.jsx(j,{system:t},l)})},x=Object.freeze(Object.defineProperty({__proto__:null,default:v},Symbol.toStringTag,{value:"Module"})),S=({data:s})=>{const{pageMeta:t}=s,{origin:o}=new URL(s.url);let l=t.socialImageUrl;t.socialImageAssetName&&(l=`${o}${i({src:`${n}/${t.socialImageAssetName}`,format:"raw"})}`);const d=t.custom.some(c=>c.property==="twitter:card");return e.jsxs(e.Fragment,{children:[s.url&&e.jsx("meta",{property:"og:url",content:s.url}),e.jsx("title",{children:t.title}),e.jsx("meta",{property:"og:title",content:t.title}),t.description&&e.jsxs(e.Fragment,{children:[e.jsx("meta",{name:"description",content:t.description}),e.jsx("meta",{property:"og:description",content:t.description})]}),e.jsx("meta",{property:"og:type",content:"website"}),r,l&&e.jsx("meta",{property:"og:image",content:t.socialImageUrl}),r,t.excludePageFromSearch&&e.jsx("meta",{name:"robots",content:"noindex, nofollow"}),t.custom.map(({property:c,content:m})=>e.jsx("meta",{property:c,content:m},c)),(t.socialImageAssetName!==void 0||t.socialImageUrl!==void 0)&&d===!1&&e.jsx("meta",{property:"twitter:card",content:"summary_large_image"}),e.jsx("link",{rel:"icon",href:i({src:`${n}${y}`,width:144,quality:100,format:"auto"})}),b.map(c=>e.jsx("link",{rel:"preload",href:`${n}${c}`,as:"font",crossOrigin:"anonymous"},c)),f.map(c=>e.jsx("link",{rel:"preload",href:`${n}${c}`,as:"image"},c))]})},k=Object.freeze(Object.defineProperty({__proto__:null,Head:S},Symbol.toStringTag,{value:"Module"})),N={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:g}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/showcase/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:x}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/showcase/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:k}}};export{N as configValuesSerialized};
