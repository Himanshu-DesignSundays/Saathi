import {loadComponent,toast} from './ui.js';
import {resetState} from './state.js';
import {startRouter} from './router.js';

/** Boots shared chrome and the hash-routed app. */
async function boot(){
  try{await loadComponent('#demo-banner','components/demo-banner.html');bindChrome();startRouter()}catch(error){document.querySelector('#main-content').innerHTML='<div class="fallback"><h1>The prototype could not load</h1><p>Run it through a local HTTP server and reload this page.</p></div>';console.error(error)}
}

/** Connects persistent header, help, network and reset controls. */
function bindChrome(){
  document.querySelector('.demo-banner button').addEventListener('click',event=>event.currentTarget.parentElement.remove());
  const dialog=document.querySelector('#help-dialog');
  document.querySelector('#help-button').addEventListener('click',()=>dialog.showModal());
  document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
  document.querySelector('#language-button').addEventListener('click',()=>toast('Language options are represented in this demo. English remains selected.'));
  document.querySelector('#reset-button').addEventListener('click',()=>{if(window.confirm('Reset all saved demo progress on this device?')){resetState();window.location.hash='#/welcome';window.location.reload()}});
  window.addEventListener('offline',showNetworkState);window.addEventListener('online',showNetworkState);showNetworkState();
}

/** Explains whether connectivity is needed without hiding saved progress. */
function showNetworkState(){const bar=document.querySelector('#network-status');bar.hidden=navigator.onLine;bar.textContent='You appear to be offline. Your saved progress is safe; reconnect before continuing.'}

boot();
