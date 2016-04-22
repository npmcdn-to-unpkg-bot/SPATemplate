import React from 'react';
import {Motion, spring, presets} from 'react-motion';
import {connect} from 'react-redux';

const Nav = ({open, toggleMenu, springSettings})=>(
  <Motion defaultStyle={{
    height: 0
  }}
  style={{
    height: spring(50, springSettings)
  }}>
    {
      ({height})=>(
        <div className='Nav' style={{height: height}}>
          <div className="Brand">
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
                  <a href='/' style={{
                    transform: `translate(0px, -${transform}px)`,
                    opacity: opacity
                  }}>
                    BRAND NAME
                  </a>
                )
              }
            </Motion>
          </div>
          <div className="MenuIcon">
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
                  <i
                    className={`btr bt-${open ? 'times' : 'bars'}`}
                    onClick={toggleMenu}
                    style={{
                      transform: `translate(0px, -${transform}px)`,
                      opacity: opacity
                    }} />
                )
              }
            </Motion>
          </div>
        </div>
      )
    }
  </Motion>
);

const mapStateToProps = ({Menu})=>{
  return {
    open : Menu.get('open')
  };
};

const mapDispatchToProps = (dispatch)=>{
  return {
    toggleMenu: ()=>{
        dispatch({
          type : 'TOGGLE_MENU'
        })
      }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
