import React from 'react';
import MediaQuery from 'react-responsive';
import {Motion, spring} from 'react-motion';

const Jumbotron = ({src, poster, mobilePoster, headline, optional})=>(
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
              <i className='btr bt-angle-down' />
            </div>
          </div>
      </div>
    </div>
  );
};

const Desktop = ({src, poster, headline, optional})=>{
  return (
    <div className="Desktop">
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
          <i className='btr bt-angle-down' />
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
