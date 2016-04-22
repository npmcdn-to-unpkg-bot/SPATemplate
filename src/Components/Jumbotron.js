import React from 'react';
import MediaQuery from 'react-responsive';
import {Motion, spring, presets} from 'react-motion';
import {Link, Element} from 'react-scroll';

const Jumbotron = ({src, poster, mobilePoster, headline, optional, springSettings})=>(
  <div className='Jumbotron'>
    <MediaQuery maxDeviceWidth={1024}>
      <Motion
          defaultStyle={{
            height: 0
          }}
          style={{
            height: spring(480, springSettings)
          }}
        >
          {
            ({height})=>(
              <Tablet
                  mobilePoster={mobilePoster}
                  headline={headline}
                  optional={optional}
                  style={{
                    height: height
                  }}
                />
            )
          }
      </Motion>
    </MediaQuery>
    <MediaQuery minDeviceWidth={1025}>
      <Motion
          defaultStyle={{
            height: 0
          }}
          style={{
            height: spring(875, springSettings)
          }}
        >
          {
            ({height})=>(
              <Desktop
                  src={src}
                  poster={poster}
                  headline={headline}
                  optional={optional}
                  style={{
                    height: height
                  }}
                />
            )
          }
      </Motion>
    </MediaQuery>
  </div>
);

const Tablet = ({mobilePoster, headline, optional, style})=>{
  return (
    <div className="Tablet" style={style}>
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
