/// <reference types="svelte" />
import { Chart as ChartJS } from 'chart.js';
import type { ChartBaseProps } from './types/index.js';
interface $$__sveltets_2_IsomorphicComponent<
  Props extends Record<string, any> = any,
  Events extends Record<string, any> = any,
  Slots extends Record<string, any> = any,
  Exports = {},
  Bindings = string,
> {
  new (
    options: import('svelte').ComponentConstructorOptions<Props>
  ): import('svelte').SvelteComponent<Props, Events, Slots> & {
    $$bindings?: Bindings;
  } & Exports;
  (
    internal: unknown,
    props: Props & {
      $$events?: Events;
      $$slots?: Slots;
    }
  ): Exports & {
    $set?: any;
    $on?: any;
  };
  z_$$bindings?: Bindings;
}
declare const Scatter: $$__sveltets_2_IsomorphicComponent<
  Omit<
    ChartBaseProps<'scatter', (number | import('chart.js').Point)[], unknown>,
    'type'
  > & {
    chart?: ChartJS<'scatter', (number | import('chart.js').Point)[], unknown>;
  },
  {
    [evt: string]: CustomEvent<any>;
  },
  {},
  {},
  string
>;
type Scatter = InstanceType<typeof Scatter>;
export default Scatter;
//# sourceMappingURL=Scatter.svelte.d.ts.map
