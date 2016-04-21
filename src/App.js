import React from 'react';

import Nav from './Components/Nav';
import Menu from './Components/Menu';
import Jumbotron from './Components/Jumbotron';
import Featured from './Components/Featured';

const App = ({})=>(
  <div className='App'>
    <Nav />
    <Menu />
    <Jumbotron
        src={['/media/video.mp4', '/media/video.webm']}
        poster='/media/poster.jpg'
        mobilePoster='/media/poster.jpg'
        headline='Headline Here'
        optional='Optional Blurb Here'
      />
    <Featured />
  </div>
);

export default App;
