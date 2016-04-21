import React from 'react';
import {Motion, spring, presets} from 'react-motion';
import MediaQuery from 'react-responsive';
import {connect} from 'react-redux';

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

const Mobile = ({open, toggleMenu})=>(
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
        </div>
      )
    }
  </Motion>
);

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
