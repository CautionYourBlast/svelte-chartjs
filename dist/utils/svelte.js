import { onMount, onDestroy } from 'svelte';
const eventPrefix = /^on/;
const events = [];
Object.keys(globalThis).forEach(key => {
  if (eventPrefix.test(key)) {
    events.push(key.replace(eventPrefix, ''));
  }
});
export function useForwardEvents(getRef) {
  const destructors = [];
  function forward(e) {
    // In Svelte 5, we don't have direct access to the component instance
    // So we'll need to dispatch the event manually
    const customEvent = new CustomEvent(e.type, {
      detail: e,
      bubbles: true,
      cancelable: true,
      composed: true,
    });
    getRef().dispatchEvent(customEvent);
  }
  onMount(() => {
    const ref = getRef();
    events.forEach(event => {
      if (ref instanceof Element) {
        destructors.push(() => ref.removeEventListener(event, forward));
        ref.addEventListener(event, forward);
      } else {
        console.log('ref', ref);
        // For Svelte components in Svelte 5
        const eventHandler = e => forward(e);
        ref.$on(event, eventHandler);
        destructors.push(() => ref.$off(event, eventHandler));
      }
    });
  });
  onDestroy(() => {
    destructors.forEach(destructor => destructor());
  });
}
