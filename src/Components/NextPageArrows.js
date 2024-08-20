import React from 'react';
import './NextPageArrows.css';
import arrow from '../images/arrow.png';

const NextPageArrows = ({flipPageNum, pageNum}) => {
    return (
      <div className="next-arrows-main-container">
        <div className="next-page-container">
            <div className="arrow-container">
              <img 
                src={arrow}
                alt="left arrow" 
                className="left-arrow" 
                onClick={() => flipPageNum('left')}
              />
            </div>
            <div className="pageNum">
              {pageNum}
            </div>
            <div className="arrow-container">
              <img 
                src={arrow}
                alt="right arrow" 
                className="right-arrow" 
                onClick={() => flipPageNum('right')}
              />
            </div>
        </div>
      </div>
    )
};

export default NextPageArrows; 