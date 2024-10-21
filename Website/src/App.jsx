import React from 'react';
import Navbar from './components/Navbar';
import ImageSlider from './components/ImageSlider'
import TendersIconComponent from './components/TendersIconComponent';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ImageSlider/>
      <TendersIconComponent/>
      {/* Other components go here */}
    </div>
  );
}

export default App;
