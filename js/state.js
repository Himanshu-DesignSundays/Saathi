const DRAFT_KEY = 'saathi_ll_draft_v1';
const SESSION_KEY = 'saathi_ll_session_v1';

/** Returns persisted journey state merged with safe defaults. */
export function getState(){
  const defaults={step:1,completed:[],form:{},documents:[],tutorialComplete:false,slot:'',paymentComplete:false,testResult:'',faceAttempts:0,selectedState:''};
  try{return {...defaults,...JSON.parse(localStorage.getItem(DRAFT_KEY)||'{}'),...JSON.parse(sessionStorage.getItem(SESSION_KEY)||'{}')}}catch{return defaults}
}

/** Persists changes across reloads and returns the resulting state. */
export function saveState(patch){
  const next={...getState(),...patch};
  localStorage.setItem(DRAFT_KEY,JSON.stringify(next));
  sessionStorage.setItem(SESSION_KEY,JSON.stringify({step:next.step,faceAttempts:next.faceAttempts}));
  return next;
}

/** Marks a numbered screen complete without losing earlier progress. */
export function completeStep(step){
  const state=getState();
  const completed=[...new Set([...state.completed,step])];
  return saveState({step:Math.max(state.step,step+1),completed});
}

/** Saves one form value immediately. */
export function saveField(name,value){
  const state=getState();
  saveState({form:{...state.form,[name]:value}});
}

/** Clears all prototype journey data after explicit confirmation. */
export function resetState(){localStorage.removeItem(DRAFT_KEY);sessionStorage.removeItem(SESSION_KEY)}
