import React, { useState } from 'react';
import './Collapse.css'; 

const Collapse = ({ isOpen, children }) => {
  return (
    <div
      className={`collapse ${isOpen ? 'open' : ''}`}
      style={{
        height: isOpen ? 'auto' : '0',
        overflow: 'hidden',
        transition: 'height 0.3s ease',
      }}
    >
      {children}
    </div>
  );
};

export default Collapse;
