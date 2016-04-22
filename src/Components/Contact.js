import React from 'react';
import marked from 'marked';
import {connect} from 'react-redux';
import {Motion, spring} from 'react-motion';
import MediaQuery from 'react-responsive';

const Contact = ({springSettings,Headline,Subheadline,Paragraph,Address,Email,Mobile})=>(
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
          <div className='Contact' style={{height: height}}>
            <div className="Wrapper">
              <div className="Headline">
                <h2>{Headline}</h2>
              </div>
              <div className="Subheadline">
                <h3>{Subheadline}</h3>
              </div>
              <div className="Paragraph" dangerouslySetInnerHTML={{
                  __html: marked(Paragraph)
                }}/>
              <div className="SocialMedia">
                <div className="Cell">
                  <a href={Mobile.link}>
                    <i className='btr bt-mobile' />
                    <div className="text" dangerouslySetInnerHTML={{__html:marked(Mobile.text)}}/>
                  </a>
                </div>
                <div className="Email">
                  <a href={Email.link}>
                    <i className='btr bt-paper-plane' />
                    <div className="text" dangerouslySetInnerHTML={{__html:marked(Email.text)}}/>
                  </a>
                </div>
                <div className="Address">
                  <a href={Address.link}>
                    <i className='btr bt-map' />
                    <div className="text" dangerouslySetInnerHTML={{__html:marked(Address.text)}}/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )
      }
  </Motion>
);

const mapStateToProps = ({Contact})=>{
  return {
    Headline: Contact.get('Headline'),
    Subheadline: Contact.get('Subheadline'),
    Paragraph: Contact.get('Paragraph'),
    Address: Contact.get('Address').toJS(),
    Email: Contact.get('Email').toJS(),
    Mobile: Contact.get('Mobile').toJS()
  };
};

export default connect(mapStateToProps)(Contact);
