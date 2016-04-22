import React from 'react';
import {connect} from 'react-redux';
import {Link, Element} from 'react-scroll';
import Helmet from 'react-helmet';
import {Motion, spring, presets} from 'react-motion';

import Nav from './Components/Nav';
import Menu from './Components/Menu';
import Jumbotron from './Components/Jumbotron';
import Featured from './Components/Featured';
import Profile from './Components/Profile';
import Contact from './Components/Contact';
import Foot from './Components/Foot';

const App = ({Title, Description, Properties, Search, springSettings})=>(
  <Motion
    defaultStyle={{
      opacity: 0
    }}
    style={{
      opacity: spring(1, presets.gentle)
    }}
  >
    {
      ({opacity})=>(
        <div className='App' style={{opacity: opacity}}>
          <Helmet
              title={Title}
              meta={[
                {name: 'description', content: Description}
              ]}
            />
          <Nav springSettings={springSettings} />
          <Menu />
          <Element name="Jumbotron" className="element">
            <Jumbotron
                src={['/media/video.mp4', '/media/video.webm']}
                poster='/media/poster.jpg'
                mobilePoster='/media/poster.jpg'
                headline={`Headline Here Here Here Here`}
                optional='Optional Blurb Here'
                springSettings={springSettings}
              />
          </Element>
          <Element name="Featured" className="element">
            <Featured Search={Search} springSettings={springSettings} >
              {
                Properties.map(({Address, Link, Photo, Price}, index)=>(
                  <a target='_blank' href={Link.value.url} className="Property" key={index}>
                    <div className="Pic"
                        style={{
                          backgroundImage: `url('${Photo.value.main.url}')`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }}
                      />
                    <div className="Address">{Address.value}</div>
                    <div className="Price">{Price.value}</div>
                  </a>
                ))
              }
            </Featured>
          </Element>
          <Element name="Profile" className="element">
            <Profile springSettings={springSettings} />
          </Element>
          <Element name="Contact" className="element">
            <Contact springSettings={springSettings} />
          </Element>
          <Foot />
        </div>
      )
    }
  </Motion>
);

const mapStateToProps = ({Featured, Seo})=>{
  return {
    Properties: Featured.get('Properties').toJS(),
    Search: Featured.get('Search'),
    springSettings: presets.gentle,
    Title: Seo.get('Title'),
    Description: Seo.get('Description')
  };
};

const mapDispatchToProps = (dispatch)=>{
  return {};
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
