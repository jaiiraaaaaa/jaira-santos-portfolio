import React from 'react';
import { Col } from 'react-bootstrap';

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  const handleCardClick = () => {
    window.open(link, '_blank'); // Open the specified link in a new tab when card is clicked
  };

  return (
    //<Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" style={{ cursor: 'pointer' }} onClick={handleCardClick}>
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    //</Col>
  );
};
