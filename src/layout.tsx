import type { Component, JSX } from 'solid-js';
import type { BaseRouterProps } from '@solidjs/router';
import { routes } from './routes';
import { Tabs } from './components/tabs';

const Index: Component<BaseRouterProps> = (props) => {
  return (
    <div class={'flex flex-col'}>
      <Tabs items={routes.filter((i) => !!i.mate)} />
      <div style={{ height: 'calc(100vh - 72px)' }} class=" overflow-auto">
        {props.children as JSX.Element}
      </div>
    </div>
  );
};

export default Index;
