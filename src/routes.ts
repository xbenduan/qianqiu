import { type Component, lazy } from 'solid-js';
export interface IRoutes {
  path: string;
  component: Component & { preload: () => Promise<{ default: Component }> };
  mate: string;
}

export const routes: IRoutes[] = [
  {
    path: '/',
    component: lazy(() => import('./page/home')),
    mate: '首页',
  },
  {
    path: '/about',
    component: lazy(() => import('./page/about')),
    mate: '关于',
  },
];
