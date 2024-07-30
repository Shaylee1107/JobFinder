import React from 'react';
import './NextPageArrows.css';

const NextPageArrows = ({flipPageNum, pageNum}) => {
    return (
      <div className="next-arrows-main-container">
        <div className="next-page-container">
            <div className="arrow-container">
              <img 
                src="https://www.iconpacks.net/icons/2/free-arrow-left-icon-3099-thumb.png" 
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
                src="https://www.iconpacks.net/icons/2/free-arrow-left-icon-3099-thumb.png" 
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