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
declare const Pie: $$__sveltets_2_IsomorphicComponent<
  Omit<ChartBaseProps<'pie', number[], unknown>, 'type'> & {
    chart?: ChartJS<'pie', number[], unknown>;
  },
  {
    [evt: string]: CustomEvent<any>;
  },
  {},
  {},
  string
>;
type Pie = InstanceType<typeof Pie>;
export default Pie;
//# sourceMappingURL=Pie.svelte.d.ts.map
