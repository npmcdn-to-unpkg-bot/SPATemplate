import React from 'react';
import {connect} from 'react-redux';
import MediaQuery from 'react-responsive';

import OwlCarousel from './OwlCarousel';

const Featured = ({Properties,Search})=>{
  return (
    <div className='Featured'>
      <MediaQuery maxDeviceWidth={767}>
        <Mobile
            Properties={Properties}
            Search={Search}
            options={{
              dots: true,
              items: 2,
              singleItem: true,
              autoPlay: false,
              navigation: false
            }}
          />
      </MediaQuery>
      <MediaQuery minDeviceWidth={768} maxDeviceWidth={1024}>
        <Tablet
            Properties={Properties}
            Search={Search}
            options={{
              dots: true,
              items: 2,
              items : 2,
              itemsTablet : [1024,2],
              autoPlay: false,
              navigation: false
            }}
          />
      </MediaQuery>
      <MediaQuery minDeviceWidth={1025}>
        <Desktop
            Properties={Properties}
            Search={Search}
            options={{
              dots: true,
              items: 3,
              itemsTablet : [1200,3],
              autoPlay: false,
              navigation: false
            }}
          />
      </MediaQuery>
    </div>
  );
};

const Mobile = ({Properties,Search,options})=>{
  return (
    <div className='Mobile'>
      <div className='Wrapper'>
        <div className='Headline'>
          <h2>FEATURED PROPERTIES</h2>
        </div>
        <div className='Search'>
          <a target='_blank' href='//google.com'>SEARCH THE MLS</a>
        </div>
        <div className='Properties'>
          <OwlCarousel className='owl-carousel owl-theme' {...options}>
            {
              Properties.map(({Address, Link, Photo, Price}, index)=>(
                <div className='item' key={index}>
                  <a target='_blank' href={Link.value.url} className='Property'>
                    <div className='Pic' style={{
                        backgroundImage: `url('${Photo.value.main.url}')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}>
                    </div>
                    <div className='Address'>{Address.value}</div>
                    <div className='Price'>{Price.value}</div>
                  </a>
                </div>
              ))
            }
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};

const Tablet = ({Properties,Search,options})=>{
  return (
    <div className='Tablet'>
      <div className='Wrapper'>
        <div className='Headline'>
          <h2>FEATURED PROPERTIES</h2>
          <a target='_blank' href={Search}>SEARCH THE MLS</a>
        </div>
        <div className='Properties'>
          <OwlCarousel className='owl-carousel owl-theme' {...options}>
            {
              Properties.map(({Address, Link, Photo, Price}, index)=>(
                <div className='item' key={index}>
                  <a target='_blank' href={Link.value.url} className='Property'>
                    <div className='Pic' style={{
                        backgroundImage: `url('${Photo.value.main.url}')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}>
                    </div>
                    <div className='Address'>{Address.value}</div>
                    <div className='Price'>{Price.value}</div>
                  </a>
                </div>
              ))
            }
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};

const Desktop = ({Properties,Search,options})=>{
  return (
    <div className='Desktop'>
      <div className='Wrapper'>
        <div className='Headline'>
          <h2>FEATURED PROPERTIES</h2>
          <a target='_blank' href={Search}>SEARCH THE MLS</a>
        </div>
        <div className='Properties'>
          <OwlCarousel className='owl-carousel owl-theme' {...options}>
            {
              Properties.map(({Address, Link, Photo, Price}, index)=>(
                <div className='item' key={index}>
                  <a target='_blank' href={Link.value.url} className='Property'>
                    <div className='Pic' style={{
                        backgroundImage: `url('${Photo.value.main.url}')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}>
                    </div>
                    <div className='Address'>{Address.value}</div>
                    <div className='Price'>{Price.value}</div>
                  </a>
                </div>
              ))
            }
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};


const mapStateToProps = ({Featured})=>{
  return {
    Properties: Featured.get('Properties').toJS(),
    Search: Featured.get('Search')
  };
};

export default connect(mapStateToProps)(Featured);
