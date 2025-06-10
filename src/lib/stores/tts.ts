import { writable } from 'svelte/store';

let initial = false;
if (typeof localStorage !== 'undefined') {
  initial = localStorage.getItem('ttsEnabled') === 'true';
}

export const ttsEnabled = writable<boolean>(initial);

ttsEnabled.subscribe((value) => {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('ttsEnabled', value ? 'true' : 'false');
  }
});
