import React from 'react';
import soham from '../../../assets/profile/soham.jpg';
import './illuminate.css'; // Import the CSS file for styling

const IlluminatedElement = () => {
  return (
    <div className="illuminated-container">
      <div className="illuminated-element">
        <img src={soham} alt="" className="my-image"/>
      </div>
    </div>
  );
};

export default IlluminatedElement;
