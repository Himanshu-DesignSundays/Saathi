import {getState} from './state.js';

/** Escapes a value before adding it to generated markup. */
export function escapeHtml(value){return String(value).replace(/[&<>'"]/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]))}

/** Loads a reusable HTML fragment into a target. */
export async function loadComponent(targetSelector,path){
  const response=await fetch(path);
  if(!response.ok)throw new Error(`Component unavailable: ${path}`);
  document.querySelector(targetSelector).innerHTML=await response.text();
}

/** Renders the shared progress strip for the current journey phase. */
export function progress(current){
  const phases=[['Details',9],['Documents',14],['Submit',16],['Payment',17],['Test slot',20],['Online test',26],['Licence',33]];
  return `<ol class="progress" aria-label="Application progress">${phases.map(([label,start])=>`<li class="${current>start?'complete':current>=start?'current':''}"><span>${current>start?'✓ ':''}${label}</span></li>`).join('')}</ol>`;
}

/** Renders the persistent high-level journey roadmap. */
export function roadmap(current){
  const items=[['Application details',9],['Documents',14],['Review & payment',16],['Tutorial & test slot',20],['Online test',26],['Licence issued',33]];
  return `<aside class="card card-flat roadmap"><h2>Your journey</h2><ol>${items.map(([label,start],index)=>{const next=items[index+1]?.[1]||99;const cls=current>=next?'complete':current>=start?'current':'';return `<li class="${cls}">${label}</li>`}).join('')}</ol><p class="hint">Your progress is saved on this device.</p></aside>`;
}

/** Builds a complete app page around supplied screen content. */
export function page({step,title,eyebrow='Learner’s Licence application',intro='',content,wide=false}){
  return `<section class="page"><div class="wrap"><nav class="breadcrumb" aria-label="Breadcrumb"><a href="#/dashboard">Home</a> / <a href="#/roadmap">My application</a> / ${escapeHtml(title)}</nav><div class="content-stack">${step>=9?progress(step):''}<div class="page-grid"><div class="content-stack"><header><p class="eyebrow">${escapeHtml(eyebrow)} <span class="tag tag-demo">DEMO</span></p><h1>${escapeHtml(title)}</h1>${intro?`<p class="lede">${escapeHtml(intro)}</p>`:''}</header>${content}</div>${step>=9&&!wide?roadmap(step):'<div></div>'}</div></div></div></section>`;
}

/** Renders a status message with icon and explicit state label. */
export function status(type,label,title,message){
  const icons={success:'✓',error:'!',warning:'!',info:'i'};
  return `<div class="status-box is-${type}" role="${type==='error'?'alert':'status'}"><div class="status-icon" aria-hidden="true">${icons[type]}</div><div class="status-copy"><div class="status-label">${escapeHtml(label)}</div><h2>${escapeHtml(title)}</h2><p>${escapeHtml(message)}</p></div></div>`;
}

/** Returns the standard back and forward action row. */
export function actions(back,next,label='Continue',id='continue-button'){
  return `<div class="action-row"><a class="button button-secondary" href="#/${back}">← Back</a><a class="button button-primary" id="${id}" href="#/${next}">${escapeHtml(label)} →</a></div>`;
}

/** Displays a short screen-reader-announced toast. */
export function toast(message){
  const region=document.querySelector('#toast-region');region.innerHTML=`<div class="toast">${escapeHtml(message)}</div>`;setTimeout(()=>{region.innerHTML=''},3000);
}

/** Shows an in-page processing state during simulated network actions. */
export function setLoading(button,message='Saving your progress…'){
  button.setAttribute('aria-disabled','true');button.innerHTML=`<span class="spinner" aria-hidden="true"></span> ${escapeHtml(message)}`;
}

/** Restores cached inputs and saves user edits as they happen. */
export function bindAutosave(saveField){
  const state=getState();
  document.querySelectorAll('[data-save]').forEach(input=>{if(state.form[input.name]!==undefined)input.value=state.form[input.name];input.addEventListener('input',()=>saveField(input.name,input.value))});
}
