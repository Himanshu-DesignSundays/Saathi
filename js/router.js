import {renderScreen} from './flows/licence-flow.js';

/** Resolves the current hash and asks the journey renderer for its screen. */
export function route(){
  const key=window.location.hash.replace(/^#\/?/,'')||'welcome';
  renderScreen(key);
  window.scrollTo(0,0);
}

/** Starts hash navigation without History API usage. */
export function startRouter(){window.addEventListener('hashchange',route);route()}
