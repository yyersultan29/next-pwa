if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const p=e||("document"in self?document.currentScript.src:"")||location.href;if(s[p])return;let n={};const l=e=>a(e,p),r={module:{uri:p},exports:n,require:l};s[p]=Promise.all(i.map((e=>r[e]||l(e)))).then((e=>(c(...e),n)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"9498ef2e01a15d05c1861767de5c3de2"},{url:"/_next/static/cDFxrcM9o3ARh1LVTaYPj/_buildManifest.js",revision:"bf848f962ec707944117bd614b5cde11"},{url:"/_next/static/cDFxrcM9o3ARh1LVTaYPj/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/4bd1b696-20882bf820444624.js",revision:"cDFxrcM9o3ARh1LVTaYPj"},{url:"/_next/static/chunks/517-03da3b76e13269b5.js",revision:"cDFxrcM9o3ARh1LVTaYPj"},{url:"/_next/static/chunks/970-d7f94df6675bf585.js",revision:"cDFxrcM9o3ARh1LVTaYPj"},{url:"/_next/static/chunks/app/_not-found/page-0043d75de3bc49f5.js",revision:"cDFxrcM9o3ARh1LVTaYPj"},{url:"/_next/static/chunks/app/layout-cd466a70332bfdd7.js",revision:"cDFxrcM9o3ARh1LVTaYPj"},{url:"/_next/static/chunks/app/page-a10375cf1cb2f690.js",revision:"cDFxrcM9o3ARh1LVTaYPj"},{url:"/_next/static/chunks/framework-6b27c2b7aa38af2d.js",revision:"cDFxrcM9o3ARh1LVTaYPj"},{url:"/_next/static/chunks/main-app-82ef7517b72c71ac.js",revision:"cDFxrcM9o3ARh1LVTaYPj"},{url:"/_next/static/chunks/main-c05ffb54497aa169.js",revision:"cDFxrcM9o3ARh1LVTaYPj"},{url:"/_next/static/chunks/pages/_app-d23763e3e6c904ff.js",revision:"cDFxrcM9o3ARh1LVTaYPj"},{url:"/_next/static/chunks/pages/_error-9b7125ad1a1e68fa.js",revision:"cDFxrcM9o3ARh1LVTaYPj"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-05cc406d6a87b1a9.js",revision:"cDFxrcM9o3ARh1LVTaYPj"},{url:"/_next/static/css/05e4ebe658c1b3a7.css",revision:"05e4ebe658c1b3a7"},{url:"/_next/static/media/569ce4b8f30dc480-s.p.woff2",revision:"ef6cefb32024deac234e82f932a95cbd"},{url:"/_next/static/media/747892c23ea88013-s.woff2",revision:"a0761690ccf4441ace5cec893b82d4ab"},{url:"/_next/static/media/93f479601ee12b01-s.p.woff2",revision:"da83d5f06d825c5ae65b7cca706cb312"},{url:"/_next/static/media/ba015fad6dcf6784-s.woff2",revision:"8ea4f719af3312a055caf09f34c89a77"},{url:"/file.svg",revision:"d09f95206c3fa0bb9bd9fefabfd0ea71"},{url:"/globe.svg",revision:"2aaafa6a49b6563925fe440891e32717"},{url:"/icon512_maskable.png",revision:"65e488aaf3571550ffd7c061b4143d3e"},{url:"/icon512_rounded.png",revision:"67a90587246b29ae06668619cbe48357"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/splash/apple-splash-1125-2436.jpg",revision:"8e4bc868faaa4de0c3375e0cc92b4d11"},{url:"/splash/apple-splash-1136-640.jpg",revision:"ee7bd4dc1142ded4da779aaf0bf63e25"},{url:"/splash/apple-splash-1170-2532.jpg",revision:"6e1b0f3cdd6a5b458a42b40e6974d5e7"},{url:"/splash/apple-splash-1179-2556.jpg",revision:"9757409891322033d8e94a5e4fd267c7"},{url:"/splash/apple-splash-1206-2622.jpg",revision:"08e17458315d649eb835ad7008adfc4c"},{url:"/splash/apple-splash-1242-2208.jpg",revision:"13ce92d71829a7e16aece30f01b7e191"},{url:"/splash/apple-splash-1242-2688.jpg",revision:"55658e503ae9f8140e04c8c065eaa6ac"},{url:"/splash/apple-splash-1284-2778.jpg",revision:"544d704bb9960579ede9fc4ce87e7fa0"},{url:"/splash/apple-splash-1290-2796.jpg",revision:"9a49d677f9cf882328e087fd05f04d22"},{url:"/splash/apple-splash-1320-2868.jpg",revision:"741ca32b9af044d08f2210db4d5b102c"},{url:"/splash/apple-splash-1334-750.jpg",revision:"e7449f24dd70802459006a68fcfc1e1a"},{url:"/splash/apple-splash-1488-2266.jpg",revision:"99f74214826165cfe9fb44bd09ef038f"},{url:"/splash/apple-splash-1536-2048.jpg",revision:"340a085b0e31de7eecf4e937ffad76f4"},{url:"/splash/apple-splash-1620-2160.jpg",revision:"af62bc22491e12777210f6c3986d1ab9"},{url:"/splash/apple-splash-1640-2360.jpg",revision:"6d4009a6775697b64df0a3981a991b05"},{url:"/splash/apple-splash-1668-2224.jpg",revision:"748745b9d838e941d56d2f7430683532"},{url:"/splash/apple-splash-1668-2388.jpg",revision:"7f0aadb52362c5939b9c764d910f1fbe"},{url:"/splash/apple-splash-1792-828.jpg",revision:"8add71f28de12fdd92e64715b7d28a6d"},{url:"/splash/apple-splash-2048-1536.jpg",revision:"aa9826a4997e706a2acea4eba1cc0a9f"},{url:"/splash/apple-splash-2048-2732.jpg",revision:"e2a3190c9320167f5a739b2d249a96d8"},{url:"/splash/apple-splash-2160-1620.jpg",revision:"2aa961a9cb2f980b73d841bc32739560"},{url:"/splash/apple-splash-2208-1242.jpg",revision:"5f5f58732391f83c2aa4bf21f95b7ea8"},{url:"/splash/apple-splash-2224-1668.jpg",revision:"2fa96a5fe2aa69dec07cad4fe3aee846"},{url:"/splash/apple-splash-2266-1488.jpg",revision:"804a86a3f3a0b34e038a61f627916f96"},{url:"/splash/apple-splash-2360-1640.jpg",revision:"02613bab5ccc1f45e7af39f1d2a8fa9e"},{url:"/splash/apple-splash-2388-1668.jpg",revision:"8d496e4578ddc8bc7375b87676cc4275"},{url:"/splash/apple-splash-2436-1125.jpg",revision:"4b2383c8dc9904fdd642390b669d7a3b"},{url:"/splash/apple-splash-2532-1170.jpg",revision:"31baf898227c009f47b6d48bc5482e98"},{url:"/splash/apple-splash-2556-1179.jpg",revision:"4432dc9c437adcbf743f0a6ef9a19fee"},{url:"/splash/apple-splash-2622-1206.jpg",revision:"f2be57593e91f57a222dff8bab6c6b4a"},{url:"/splash/apple-splash-2688-1242.jpg",revision:"2251fe04d3542bc6a5a27b387e6e9435"},{url:"/splash/apple-splash-2732-2048.jpg",revision:"d175ef0e8e7bc6587a4d031f12391d36"},{url:"/splash/apple-splash-2778-1284.jpg",revision:"58989be43ff55e6b6ea31a1bebcde20f"},{url:"/splash/apple-splash-2796-1290.jpg",revision:"b15b437bf9b5f9b99b6774fea1508821"},{url:"/splash/apple-splash-2868-1320.jpg",revision:"018b9c0833396839a7b2116e8779fd0b"},{url:"/splash/apple-splash-640-1136.jpg",revision:"442bc8e14f193977b450ef403e588f88"},{url:"/splash/apple-splash-750-1334.jpg",revision:"695c0a9e147c1ba7ed05a2ecda5500de"},{url:"/splash/apple-splash-828-1792.jpg",revision:"1f9e2e8204bd38f8689ef620b0c22e0c"},{url:"/vercel.svg",revision:"c0af2f507b369b085b35ef4bbe3bcf1e"},{url:"/window.svg",revision:"a2760511c65806022ad20adf74370ff3"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
