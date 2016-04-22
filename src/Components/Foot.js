import React from 'react';
import {connect} from 'react-redux';
import MediaQuery from 'react-responsive';
import marked from 'marked';

const Foot = ({Copyright,Information,Developer,Facebook,Twitter,Instagram})=>(
  <div className='Foot'>
    <MediaQuery maxDeviceWidth={767}>
      <div className="Mobile">
        <div className="Copyright" dangerouslySetInnerHTML={{__html:marked(Copyright)}} />
        <div className="SocialMedia">
          <a target='_blank' href={Facebook}>
            <i className='fab fab-facebook-alt' />
          </a>
          <a target='_blank' href={Twitter}>
            <i className='fab fab-twitter' />
          </a>
          <a target='_blank' href={Instagram}>
            <i className='fab fab-instagram' />
          </a>
        </div>
        <div className="Information" dangerouslySetInnerHTML={{__html:marked(Information)}} />
        <div className="Developer" dangerouslySetInnerHTML={{__html:marked(Developer)}} />
      </div>
    </MediaQuery>
    <MediaQuery minDeviceWidth={768}>
      <div className="Tablet">
        <div className="Copyright" dangerouslySetInnerHTML={{__html:marked(`${Copyright}<br />${Information}`)}} />
        <div className="SocialMedia">
          <a target='_blank' href={Facebook}>
            <i className='fab fab-facebook-alt' />
          </a>
          <a target='_blank' href={Twitter}>
            <i className='fab fab-twitter' />
          </a>
          <a target='_blank' href={Instagram}>
            <i className='fab fab-instagram' />
          </a>
        </div>
        <div className="Developer" dangerouslySetInnerHTML={{__html:marked(Developer)}} />
      </div>
    </MediaQuery>
  </div>
);

const mapStateToProps = ({Foot})=>{
  return {
    Copyright: Foot.get('Copyright'),
    Information: Foot.get('Information'),
    Developer: Foot.get('Developer'),
    Facebook: Foot.get('Facebook'),
    Twitter: Foot.get('Twitter'),
    Instagram: Foot.get('Instagram')
  };
};

export default connect(mapStateToProps)(Foot);
