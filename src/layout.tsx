import { Component, JSX } from 'solid-js';
import { BaseRouterProps } from '@solidjs/router';
import { routes } from './routes.ts';
import { Tabs } from './components/tabs';

const Index: Component<BaseRouterProps> = (props) => {
  return (
    <div class="flex flex-col">
      <Tabs items={routes.filter((i) => !!i.mate)} />
      <div class={"w-[640px] m-auto overflow-y-auto"}>
        {props.children as JSX.Element}
      </div>
    </div>
  );
};

export default Index;
