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
      <div class="flex justify-center">
        <a href="https://beian.miit.gov.cn/" target="_blank">
          黔ICP备2022002191号-1
        </a>
      </div>
    </div>
  );
};

export default Index;
