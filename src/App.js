import React from 'react';
import JoinBlock from './components/JoinBlock';
import socket from './socket';

import './index.css';

function App() {
  return (
    <div className="wrapper">
      <JoinBlock />
    </div>
  );
}

export default App;
