import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom';

function App(): ReactElement {
  return <div>Hello World!</div>;
}

ReactDOM.render(<App />, document.querySelector('#root'));
