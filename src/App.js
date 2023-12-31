import React from 'react';
import './App.css';
import Happy from './component/Assest/Happy.mp4';

function App() {
  return (
    <div className='containerVideo'>
      <video src={Happy} autoPlay loop className='video'></video>
    </div>
  );
}

export default App;
