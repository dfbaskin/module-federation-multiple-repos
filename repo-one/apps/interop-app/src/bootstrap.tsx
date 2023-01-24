import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { InteropComponents } from './app/interopComponents';

import './app/componentCatalog';

const bodyElem = document.querySelector('body') as HTMLBodyElement;
const rootElem = document.createElement('div') as HTMLDivElement;
rootElem.style.display = 'none';
bodyElem.appendChild(rootElem);

const root = ReactDOM.createRoot(rootElem);
root.render(
  <StrictMode>
    <BrowserRouter>
      <InteropComponents />
    </BrowserRouter>
  </StrictMode>
);

export default true;
