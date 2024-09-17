import { onMount, onDestroy } from 'svelte';
import { get } from 'svelte/store';
import type { ComponentType } from 'svelte';

const eventPrefix = /^on/;
const events: string[] = [];

Object.keys(globalThis).forEach(key => {
  if (eventPrefix.test(key)) {
    events.push(key.replace(eventPrefix, ''));
  }
});

export function useForwardEvents<T extends ComponentType | Element>(
  getRef: () => T
) {
  const destructors: (() => void)[] = [];

  function forward(e: Event) {
    // In Svelte 5, we don't have direct access to the component instance
    // So we'll need to dispatch the event manually
    const customEvent = new CustomEvent(e.type, {
      detail: e,
      bubbles: true,
      cancelable: true,
      composed: true
    });
    getRef().dispatchEvent(customEvent);
  }

  onMount(() => {
    const ref = get(getRef);

    events.forEach(event => {
      if (ref instanceof Element) {
        destructors.push(() => ref.removeEventListener(event, forward));
        ref.addEventListener(event, forward);
      } else {
        // For Svelte components in Svelte 5
        const eventHandler = (e: Event) => forward(e);
        ref.$on(event, eventHandler);
        destructors.push(() => ref.$off(event, eventHandler));
      }
    });
  });

  onDestroy(() => {
    destructors.forEach(destructor => destructor());
  });
}
