import { type Component, For } from 'solid-js';

const Index: Component = () => {
  return (
    <div class={'m-auto grid max-w-screen-sm grid-cols-4 flex-wrap gap-[20px] max-sm:m-[16px]'}>
      <For each={new Array(20).fill('-')}>{() => <div class={'h-[80px] grid-cols-2 rounded-[10px] bg-white'} />}</For>
    </div>
  );
};

export default Index;
