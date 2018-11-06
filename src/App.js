import React, { Component } from 'react';
import './App.css';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ContentHeader from './content/ContentHeader'
import ContentCentral from './content/ContentCentral'
import ContentFooter from './content/ContentFooter'

class App extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
  }
  next() {
    this.slider.slickNext();
  }

  render() {
    const settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      swipeToSlide: true,
      arrows: false,
      dots: true,
      customPaging: i => (
        <div className="dots">
          {''}
        </div>
      )

    };

    return (
      <div className="app" >
        <button className="buttonNext" onClick={this.next}></button>
        <Slider ref={c => (this.slider = c)} {...settings} className='slider'>
          <ContentHeader />
          <ContentCentral />
          <ContentFooter />
        </Slider>
      </div>
    );
  }
}

export default App;