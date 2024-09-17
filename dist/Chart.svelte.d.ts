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
declare const Chart: $$__sveltets_2_IsomorphicComponent<
  ChartBaseProps<
    keyof import('chart.js').ChartTypeRegistry,
    (
      | number
      | [number, number]
      | import('chart.js').Point
      | import('chart.js').BubbleDataPoint
    )[],
    unknown
  > & {
    chart?: ChartJS<
      keyof import('chart.js').ChartTypeRegistry,
      (
        | number
        | [number, number]
        | import('chart.js').Point
        | import('chart.js').BubbleDataPoint
      )[],
      unknown
    >;
  },
  {
    [evt: string]: CustomEvent<any>;
  },
  {},
  {},
  string
>;
type Chart = InstanceType<typeof Chart>;
export default Chart;
//# sourceMappingURL=Chart.svelte.d.ts.map
