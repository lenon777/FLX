import React from 'react';
import { render } from 'react-dom';
import { Player } from './Player';
// Entry point for styles
import './scss/index.scss';


// Get the root node
const rootNode = document.querySelector('#root');

// Entry point for the application
function App() {
  return (
    <Player />
  );
}

render(
  <App />,
  rootNode,
);