import React, { Component } from 'react';
import './Content.css';
import './ContentFooter.css';

import Slider from 'react-slick';

import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';


class ContentFooter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 2
        };
    }
    render() {
        const settings = {
            infinite: false,
            arrows: false,
            dots: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            rtl: true,
            beforeChange: (current, next) => this.setState({ value: next })
        };

        return (
            <div className='item itemFooter'>
                <div className='scroll'>
                    <form>
                        <InputRange
                            labelPrefix='1998'
                            maxValue={2}
                            minValue={0}
                            value={this.state.value}
                            onChange={value => this.slider.slickGoTo(value)}
                        />
                    </form>
                    <div className='years'>
                        <span>1998</span>
                        <span>2009</span>
                        <span>2016</span>
                    </div>
                </div>
                <Slider ref={slider => (this.slider = slider)} {...settings} className='slider sliderFooter'>
                    <div className='itemFooterContent'>
                        <h2>Звенья патогенеза СД2</h2>
                        <div className="img img2016"></div>
                    </div>
                    <div className='itemFooterContent'>
                        <h2>Смертельный октет</h2>
                        <div className="img img2009"></div>
                    </div>
                    <div className='itemFooterContent'>
                        <h2>Звенья патогенеза СД2</h2>
                        <div className="img img1998"></div>
                    </div>
                </Slider>
            </div>
        );
    }
}

export default ContentFooter;