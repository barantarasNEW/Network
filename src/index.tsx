import { createRoot } from 'react-dom/client';
import './styles/index.scss';
import { HashRouter } from 'react-router-dom';
import App from './App';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <HashRouter>
    <App />
  </HashRouter>,
);
