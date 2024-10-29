import type { Component } from 'solid-js';
import { BaseRouterProps } from '@solidjs/router';

const Index: Component<BaseRouterProps> = (props) => {
  return <>{props.children}</>;
};

export default Index;
