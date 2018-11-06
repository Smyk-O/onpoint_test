import React, { Component } from 'react';
import './Content.css';
import './ContentHeader.css';


class ContentHeader extends Component {
    

    TargetCircle(diameter) {
        return (
            <span className='targetExternalCircle' style={{width: diameter, height: diameter}}><span className='targetInternalCircle'></span></span>
        );
    }
    
    render() {

        return (
            <div className='item itemHeader'>
                <h1>Всегда ли цели терапии СД2 <br /> на поверхности?</h1>
                <span className='targetOne'>{this.TargetCircle("50px")}Цель по HbA1c</span>
                <span className='targetTwo'>{this.TargetCircle("25px")}Гипогликемия</span>
                <span className='targetThree'>{this.TargetCircle("13px")}СС риски</span>
                <span className='targetFore'>{this.TargetCircle("13px")}Осложнения СД</span>
            </div>
        );
    }
}

export default ContentHeader;