import React from 'react';
import {Motion, spring, presets} from 'react-motion';
import MediaQuery from 'react-responsive';
import {connect} from 'react-redux';
import {Link} from 'react-scroll';

const Menu = ({open, toggleMenu})=>{
  return (
    <div className="Menu">
      <MediaQuery maxDeviceWidth={767}>
        <Mobile open={open} toggleMenu={toggleMenu} />
      </MediaQuery>
      <MediaQuery minDeviceWidth={768}>
        <Tablet open={open} toggleMenu={toggleMenu} />
      </MediaQuery>
    </div>
  );
};

const Mobile = React.createClass({
  getInitialState(){
    return {
      propertiesMenu: false,
      profileMenu: false
    };
  },
  togglePropertiesMenu(){
    this.setState({...this.state,
      propertiesMenu: !this.state.propertiesMenu
    });
  },
  toggleProfileMenu(){
    this.setState({...this.state,
      profileMenu: !this.state.profileMenu
    });
  },
  render(){
    const {open, toggleMenu} = this.props;
    const {propertiesMenu, profileMenu} = this.state;
    return (
      <Motion style={{
        height: open ? spring(100, presets.gentle) : spring(0, presets.gentle),
        opacity: open ? spring(1, presets.gentle) : spring(0, presets.gentle)
      }}>
        {
          ({height, opacity})=>(
            <div className="Mobile" style={{
              height: `${height}%`,
              opacity: opacity
            }}>
              <div className="Category">
                <div className="CategoryName">
                  <Link onClick={toggleMenu} activeClass="active" to="Jumbotron" spy={true} smooth={true} offset={50} duration={1000} >
                    Home
                  </Link>
                </div>
              </div>
              <div className="Border"></div>
              <div className="Category">
                <div className="CategoryName" onClick={this.togglePropertiesMenu}>
                  <h5>Properties</h5>
                  <i className={`btr bt-angle-${propertiesMenu ? 'up': 'down'}`} />
                </div>
                <Motion style={{
                  height: propertiesMenu ? spring(120, presets.gentle) : spring(0, presets.gentle),
                  opacity: propertiesMenu ? spring(1, presets.gentle) : spring(0, presets.gentle)
                }}>
                  {
                    ({height, opacity})=>(
                      <div className='SubCategories' style={{
                        height: `${height}px`,
                        opacity: opacity
                      }}>
                        <div className='SubCategory'>
                          <a onClick={toggleMenu} target='_blank' href='//google.com'>Featured Properties</a>
                        </div>
                        <div className='SubCategory'>
                          <a onClick={toggleMenu} target='_blank' href='//google.com'>MLS Search</a>
                        </div>
                        <div className='SubCategory'>
                          <a onClick={toggleMenu} target='_blank' href='//google.com'>Open Homes</a>
                        </div>
                      </div>
                    )
                  }
                </Motion>
              </div>
              <div className="Border"></div>
              <div className="Category">
                <div className="CategoryName" onClick={this.toggleProfileMenu}>
                  <h5>Profile</h5>
                  <i className={`btr bt-angle-${profileMenu ? 'up': 'down'}`} />
                </div>
                <Motion style={{
                  height: profileMenu ? spring(120, presets.gentle) : spring(0, presets.gentle),
                  opacity: profileMenu ? spring(1, presets.gentle) : spring(0, presets.gentle)
                }}>
                  {
                    ({height, opacity})=>(
                      <div className='SubCategories' style={{
                        height: `${height}px`,
                        opacity: opacity
                      }}>
                        <div className='SubCategory'>
                          <a onClick={toggleMenu} target='_blank' href='//google.com'>Featured Properties</a>
                        </div>
                        <div className='SubCategory'>
                          <a onClick={toggleMenu} target='_blank' href='//google.com'>MLS Search</a>
                        </div>
                        <div className='SubCategory'>
                          <a onClick={toggleMenu} target='_blank' href='//google.com'>Open Homes</a>
                        </div>
                      </div>
                    )
                  }
                </Motion>
              </div>
              <div className="Border"></div>
              <div className="Category">
                <div className="CategoryName">
                  <Link onClick={toggleMenu} activeClass="active" to="Contact" spy={true} smooth={true} offset={50} duration={1000} >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          )
        }
      </Motion>
    );
  }
});


const Tablet = ({open, toggleMenu})=>(
  <Motion style={{
    width: open ? spring(300, presets.gentle) : spring(0, presets.gentle),
    opacity: open ? spring(1, presets.gentle) : spring(0, presets.gentle)
  }}>
    {
      ({width, opacity})=>(
        <div className="Tablet" style={{
          width: width,
          opacity: opacity
        }}>
          <div className="Category">
            <div className="CategoryName">
              <Link onClick={toggleMenu} activeClass="active" to="Jumbotron" spy={true} smooth={true} offset={50} duration={1000} >
                Home
              </Link>
            </div>
          </div>
          <div className="Border"></div>
          <div className="Category">
            <div className="CategoryName">
              <h5>Properties</h5>
            </div>
            <div className='SubCategories'>
              <div className='SubCategory'>
                <a onClick={toggleMenu} target='_blank' href='//google.com'>Featured Properties</a>
              </div>
              <div className='SubCategory'>
                <a onClick={toggleMenu} target='_blank' href='//google.com'>MLS Search</a>
              </div>
              <div className='SubCategory'>
                <a onClick={toggleMenu} target='_blank' href='//google.com'>Open Homes</a>
              </div>
            </div>
          </div>
          <div className="Border"></div>
          <div className="Category">
            <div className="CategoryName">
              <h5>Profile</h5>
            </div>
            <div className='SubCategories'>
              <div className='SubCategory'>
                <a onClick={toggleMenu} target='_blank' href='//google.com'>Featured Properties</a>
              </div>
              <div className='SubCategory'>
                <a onClick={toggleMenu} target='_blank' href='//google.com'>MLS Search</a>
              </div>
              <div className='SubCategory'>
                <a onClick={toggleMenu} target='_blank' href='//google.com'>Open Homes</a>
              </div>
            </div>
          </div>
          <div className="Border"></div>
          <div className="Category">
            <div className="CategoryName">
              <Link onClick={toggleMenu} activeClass="active" to="Contact" spy={true} smooth={true} offset={50} duration={1000} >
                Contact
              </Link>
            </div>
          </div>
        </div>
      )
    }
  </Motion>
);


const mapStateToProps = ({Menu})=>{
  return {
    open: Menu.get('open')
  }
};

const mapDispatchToProps = (dispatch)=>{
  return {
    toggleMenu: ()=>{dispatch({
      type: 'TOGGLE_MENU'
    })}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
