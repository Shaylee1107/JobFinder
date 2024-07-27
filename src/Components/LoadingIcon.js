import React from 'react';
import "./LoadingIcon.css";

const LoadingIcon = () => {
    return (
        <div className="loading">
         <i className="fas fa-4x fa-spinner fa-spin" />
         <p>Loading...</p>
       </div>
      )
}

export default LoadingIcon;