import React from "react";

const Social = ({ image, alt, width, height, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img src={image} alt={alt} width={width} height={height} />
    </a>
  );
};

export default Social;
