import React from 'react';
import MediaQuery from 'react-responsive';
import {Motion, spring, presets} from 'react-motion';
import {connect} from 'react-redux';
import marked from 'marked';

const Profile = ({poster, name, paragraph, pic, springSettings})=>(
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
          <div className="Profile"
              style={{
                height:height,
                backgroundImage: `url('${poster}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="BGTint">
                <div className="Wrapper">
                  <div className="Name">
                    <h2>{name}</h2>
                  </div>
                  <div className="Info">
                    <MediaQuery maxDeviceWidth={767}>
                      <div className="Mobile">
                        <div className="PicWrapper">
                          <div className="Pic" style={{
                            backgroundImage: `url('${pic}')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                          }} />
                        </div>
                        <div className="Paragraph"
                          dangerouslySetInnerHTML={{
                            __html: marked(paragraph)
                          }} />
                      </div>
                    </MediaQuery>
                    <MediaQuery minDeviceWidth={768}>
                      <div className="Tablet">
                        <div className="PicWrapper">
                          <div className="Pic" style={{
                            backgroundImage: `url('${pic}')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                          }} />
                        </div>
                        <div className="Paragraph"
                          dangerouslySetInnerHTML={{
                            __html: marked(paragraph)
                          }} />
                      </div>
                    </MediaQuery>
                  </div>
                </div>
              </div>
          </div>
        )
      }
  </Motion>
);

const mapStateToProps = ({Profile})=>{
  return {
    poster: Profile.get('poster'),
    name: Profile.get('name'),
    paragraph: Profile.get('paragraph'),
    pic: Profile.get('pic'),
  };
};

export default connect(mapStateToProps)(Profile);
