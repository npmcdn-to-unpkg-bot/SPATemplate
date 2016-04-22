import React from 'react';
import {Motion, spring, presets} from 'react-motion';
import MediaQuery from 'react-responsive';

const Featured = ({children, Search, springSettings})=>(
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
          <div className="Featured" style={{height:height}}>
            <MediaQuery maxDeviceWidth={767}>
              <Mobile children={children} Search={Search} />
            </MediaQuery>
            <MediaQuery minDeviceWidth={768} maxDeviceWidth={1024}>
              <Tablet children={children} Search={Search} />
            </MediaQuery>
            <MediaQuery minDeviceWidth={1025}>
              <Desktop children={children} Search={Search} />
            </MediaQuery>
          </div>
        )
      }
  </Motion>
);

const Mobile = React.createClass({
  getInitialState(){
    return {
      slideIndex : 0
    };
  },
  setSlide(index){
    return ()=>{
      this.setState({
        slideIndex : index
      });
    };
  },
  componentDidMount(){
    this.autoPlay = setInterval(()=>{
      const {slideIndex} = this.state;
      const {children} = this.props;
      this.setState({
        slideIndex: (slideIndex + 1) % (children.length)
      })
    }, 5000);
  },
  componentWillUnmount(){
    clearInterval(this.autoPlay);
  },
  render(){
    const {children, Search} = this.props;
    const {slideIndex} = this.state;
    return (
      <div className='Mobile'>
        <div className="Wrapper">
          <div className="Headline">
            <h2>Featured Properties</h2>
          </div>
          <div className="Search">
            <a target='_blank' href={Search}>Search The MLS</a>
          </div>
          <div className="Properties">
            {
              !children ? <div /> :
              children.map((child, index)=>(
                <Motion
                    key={index}
                    style={{
                      x: spring((index-slideIndex)*100, presets.gentle),
                    }}
                  >
                    {
                      ({x})=>(
                        <div className="Item" style={{
                          transform: `translate(${x}%, 0%)`,
                          width: `${100}%`,
                          position:'absolute'
                        }}>
                          {child}
                        </div>
                      )
                    }
                </Motion>
              ))
            }
          </div>
          <div className="Controls">
            {
              !children ? <div /> :
              children.map((child, index)=>(
                <i
                    key={index}
                    className={`fa fa-circle ${slideIndex === index ? 'active' : 'unactive'}`}
                    onClick={this.setSlide(index)}
                  />
              ))
            }
          </div>
        </div>
      </div>
    );
  }
});

const Tablet = React.createClass({
  getInitialState(){
    return {
      slideIndex : 0
    };
  },
  setSlide(index){
    return ()=>{
      this.setState({
        slideIndex : index
      });
    };
  },
  componentDidMount(){
    this.autoPlay = setInterval(()=>{
      const {slideIndex} = this.state;
      const {children} = this.props;
      this.setState({
        slideIndex: (slideIndex + 1) % (children.length - 1)
      })
    }, 5000);
  },
  componentWillUnmount(){
    clearInterval(this.autoPlay);
  },
  render(){
    const {children, Search} = this.props;
    const {slideIndex} = this.state;
    return (
      <div className='Tablet'>
        <div className="Wrapper">
          <div className="Headline">
            <h2>Featured Properties</h2>
            <a target='_blank' href={Search}>Search The MLS</a>
          </div>
          <div className="Properties">
            {
              !children ? <div /> :
              children.map((child, index)=>(
                <Motion
                    key={index}
                    style={{
                      x: spring((index-slideIndex)*100, presets.gentle),
                    }}
                  >
                    {
                      ({x})=>(
                        <div className="Item" style={{
                          transform: `translate(${x}%, 0%)`,
                          width: `${100/2}%`,
                          position:'absolute'
                        }}>
                          {child}
                        </div>
                      )
                    }
                </Motion>
              ))
            }
          </div>
          <div className="Controls">
            {
              !children ? <div /> :
              children.slice(1).map((child, index)=>(
                <i
                    key={index}
                    className={`fa fa-circle ${slideIndex === index ? 'active' : 'unactive'}`}
                    onClick={this.setSlide(index)}
                  />
              ))
            }
          </div>
        </div>
      </div>
    );
  }
});

const Desktop = React.createClass({
  getInitialState(){
    return {
      slideIndex : 0
    };
  },
  setSlide(index){
    return ()=>{
      this.setState({
        slideIndex : index
      });
    };
  },
  componentDidMount(){
    this.autoPlay = setInterval(()=>{
      const {slideIndex} = this.state;
      const {children} = this.props;
      this.setState({
        slideIndex: (slideIndex + 1) % (children.length - 2)
      })
    }, 5000);
  },
  componentWillUnmount(){
    clearInterval(this.autoPlay);
  },
  render(){
    const {children, Search} = this.props;
    const {slideIndex} = this.state;
    return (
      <div className='Desktop'>
        <div className="Wrapper">
          <div className="Headline">
            <h2>Featured Properties</h2>
            <a target='_blank' href={Search}>Search The MLS</a>
          </div>
          <div className="Properties">
            {
              !children ? <div /> :
              children.map((child, index)=>(
                <Motion
                    key={index}
                    style={{
                      x: spring((index-slideIndex)*100, presets.gentle),
                    }}
                  >
                    {
                      ({x})=>(
                        <div className="Item" style={{
                          transform: `translate(${x}%, 0%)`,
                          width: `${100/3}%`,
                          position:'absolute'
                        }}>
                          {child}
                        </div>
                      )
                    }
                </Motion>
              ))
            }
          </div>
          <div className="Controls">
            {
              !children ? <div /> :
              children.slice(2).map((child, index)=>(
                <i
                    key={index}
                    className={`fa fa-circle ${slideIndex === index ? 'active' : 'unactive'}`}
                    onClick={this.setSlide(index)}
                  />
              ))
            }
          </div>
        </div>
      </div>
    );
  }
});


export default Featured;
