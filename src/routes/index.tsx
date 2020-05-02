import React, { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { renderRoutes } from 'react-router-config';
import routes from './routes';

function App(): ReactElement {
  return <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>;
}

ReactDOM.render(<App />, document.querySelector('#root'));
