import {execFileSync} from 'node:child_process';
import {readFile,writeFile,rm} from 'node:fs/promises';
import {build} from 'esbuild';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom/server.js';
execFileSync(process.execPath,['node_modules/vite/bin/vite.js','build'],{stdio:'inherit'});
await build({entryPoints:['src/App.jsx'],outfile:'scripts/.ssr.mjs',bundle:true,platform:'node',format:'esm',packages:'external'});
const {default:App,meta}=await import('./.ssr.mjs');
const shell=await readFile('dist/index.html','utf8');
const escape=s=>s.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;');
for(const route of [...Object.keys(meta),'/404']){
 const [title,description]=meta[route]||['Page introuvable','ASTY, foncière familiale à Angoulême.'];
 const html=renderToString(React.createElement(StaticRouter,{location:route},React.createElement(App)));
 const canonical='https://www.asty-immo.fr'+(route==='/'?'':route);
 let out=shell.replace('<div id="root"></div>',`<div id="root">${html}</div>`).replace(/<title>.*?<\/title>/,`<title>ASTY | ${escape(title)}</title>`).replace(/(<meta\s+name="description"\s+content=")[^"]*/,`$1${escape(description)}`).replace(/(<meta property="og:title" content=")[^"]*/,`$1ASTY | ${escape(title)}`).replace(/(<meta\s+property="og:description"\s+content=")[^"]*/,`$1${escape(description)}`).replace(/(<link rel="canonical" href=")[^"]*/,`$1${canonical}`).replace(/(<meta property="og:url" content=")[^"]*/,`$1${canonical}`);
 if(route==='/404')out=out.replace('</head>','<meta name="robots" content="noindex" /></head>');
 await writeFile('dist/'+(route==='/'?'index':route.slice(1))+'.html',out);
}
await rm('dist/asty-images',{recursive:true,force:true});
await rm('scripts/.ssr.mjs');
console.log('9 pages prérendues + page 404. Médias originaux conservés dans public, exclus du build.');
