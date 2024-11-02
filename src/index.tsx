import { Router } from '@solidjs/router';
import { render } from 'solid-js/web';
import layout from './layout.tsx';
import { routes } from './routes.ts';
import './style/index.css';

const root = document.getElementById('root');
if (root) {
  render(() => <Router root={layout}>{routes}</Router>, root);
}
