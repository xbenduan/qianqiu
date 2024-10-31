import { type Component, For } from 'solid-js';

const Index: Component = () => {
  return (
    <div
      class={
        'grid flex-wrap gap-[20px] grid-cols-4 max-sm:m-[16px] max-w-screen-sm m-auto'
      }
    >
      <For each={new Array(20).fill('-')}>
        {() => <div class={'grid-cols-2 rounded-[10px] h-[80px] bg-white'} />}
      </For>
    </div>
  );
};

export default Index;
