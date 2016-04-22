import React from 'react';
import MediaQuery from 'react-responsive';
import {Motion, spring, presets} from 'react-motion';
import {Link, Element} from 'react-scroll';
import Waypoint from 'react-waypoint';

const Jumbotron = ({src, poster, mobilePoster, headline, optional, springSettings})=>(
  <div className='Jumbotron'>
    <MediaQuery maxDeviceWidth={1024}>
      <Tablet
          mobilePoster={mobilePoster}
          headline={headline}
          optional={optional}
        />
    </MediaQuery>
    <MediaQuery minDeviceWidth={1025}>
      <Desktop
          src={src}
          poster={poster}
          headline={headline}
          optional={optional}
          style={{
            height: 875
          }}
        />
    </MediaQuery>
  </div>
);

const Tablet = ({mobilePoster, headline, optional})=>{
  return (
    <div className="Tablet">
      <div
          className="BGPic"
          style={{
            backgroundImage: `url('${mobilePoster}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="BGTint">
            <Motion defaultStyle={{
                transform: 25,
                opacity: 0
              }}
              style={{
                transform: spring(0, {stiffness:100, damping:40}),
                opacity: spring(1, {stiffness:100, damping:40})
              }}>
              {
                ({transform, opacity})=>(
                  <div className="Headline">
                      <h1 style={{
                        transform: `translate(0px, -${transform}px)`,
                        opacity: opacity
                      }}>
                        {headline}
                      </h1>
                      <h3 style={{
                        transform: `translate(0px, -${transform}px)`,
                        opacity: opacity
                      }}>
                        {optional}
                      </h3>
                  </div>
                )
              }
            </Motion>
            <div className="ScrollDown">
              <Link activeClass="active" to="Featured" spy={true} smooth={true} offset={50} duration={1000} >
                <i className='btr bt-angle-down' />
              </Link>
            </div>
          </div>
      </div>
    </div>
  );
};

const Desktop = ({src, poster, headline, optional, style})=>{
  return (
    <div className="Desktop" style={style}>
      <video
          className='BGVid'
          preload={true}
          loop={true}
          autoPlay={true}
          poster={poster}
        >
          {
            src.map((url, index)=>(
              <source src={url} key={index} />
            ))
          }
      </video>
      <div className="BGTint">
        <Motion defaultStyle={{
            transform: 25,
            opacity: 0
          }}
          style={{
            transform: spring(0, {stiffness:100, damping:40}),
            opacity: spring(1, {stiffness:100, damping:40})
          }}>
          {
            ({transform, opacity})=>(
              <div className="Headline">
                  <h1 style={{
                    transform: `translate(0px, -${transform}px)`,
                    opacity: opacity
                  }}>{headline}</h1>
                  <h3 style={{
                    transform: `translate(0px, -${transform}px)`,
                    opacity: opacity
                  }}>{optional}</h3>
              </div>
            )
          }
        </Motion>
        <div className="ScrollDown">
          <Link activeClass="active" to="Featured" spy={true} smooth={true} offset={50} duration={500} >
            <i className='btr bt-angle-down' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
