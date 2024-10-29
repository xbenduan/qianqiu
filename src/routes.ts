import { lazy } from 'solid-js';

export const routes = [
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
