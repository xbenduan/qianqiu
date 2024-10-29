import { render } from 'solid-js/web';
import { Router } from '@solidjs/router';
import './style/index.css';
import { routes } from './routes.ts';
import layout from './layout.tsx';

const root = document.getElementById('root');
if (root) {
  render(() => <Router root={layout}>{routes}</Router>, root);
}
