import { type Component, createSignal, For, onMount } from 'solid-js';
import { A, useLocation } from '@solidjs/router';
import type { IRoutes } from '@/routes';

/**
 * 后面再做适用性适配
 * @param props
 * @constructor
 */
export const Tabs: Component<{
  items: IRoutes[];
}> = (props) => {
  const [active, setActive] = createSignal<number>(0);
  const location = useLocation();

  onMount(() => {
    setActive(props.items.findIndex((i) => i.path === location.pathname));
  });

  return (
    <div role="tablist" class="tabs tabs-boxed  bg-white mx-auto my-4 relative">
      <For
        each={props.items}
        fallback={<span class="bg-red-500">出错了！！！</span>}
      >
        {(item, index) => (
          <A
            role="tab"
            class="tab w-[100px] relative"
            on:click={() => {
              setActive(index);
            }}
            href={item.path}
          >
            <div class={'absolute z-20'}>{item.mate}</div>
          </A>
        )}
      </For>
      <div
        style={`transform: translateX(${active() * 100}%)`}
        class={
          'absolute inset-0 z-10 m-1 transition-all duration-300 rounded-box tab-active w-[100px]'
        }
      />
    </div>
  );
};
