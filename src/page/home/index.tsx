import { Component, For } from 'solid-js';

const Index: Component = () => {
  return (
    <div class={'grid flex-wrap gap-[20px] grid-cols-3'}>
      <For each={[1, 1, 1, 1, 1, 1, 1, 1, 1]}>
        {() => <div class={'grid-cols-2 rounded-[10px] h-[100px] bg-white'} />}
      </For>
    </div>
  );
};

export default Index;
