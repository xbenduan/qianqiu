import { BaseRouterProps } from '@solidjs/router';
import { Component, JSX } from 'solid-js';
import { Tabs } from './components/tabs';
import { routes } from './routes';

const Index: Component<BaseRouterProps> = (props) => {
  return (
    <div class={'flex flex-col'}>
      <Tabs items={routes.filter((i) => !!i.mate)} />
      <div class="h-[calc(100vh_-_72px)] overflow-auto">
        {props.children as JSX.Element}
      </div>
    </div>
  );
};

export default Index;
