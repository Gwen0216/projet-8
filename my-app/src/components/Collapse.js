import React, { useRef, useState, useLayoutEffect } from 'react';
import './Collapse.css';

const Collapse = ({ isOpen, children }) => {
  const contentRef = useRef(null);  
  const [maxHeight, setMaxHeight] = useState(0); 

  useLayoutEffect(() => {
    const contentElement = contentRef.current;
    
    if (isOpen && contentElement) {

      const resizeObserver = new ResizeObserver(() => {
        setMaxHeight(contentElement.getBoundingClientRect().height);
      });
      resizeObserver.observe(contentElement);

      setMaxHeight(contentElement.getBoundingClientRect().height);

      return () => resizeObserver.disconnect();
    } else {
      setMaxHeight(0);  
    }
  }, [isOpen, children]);  

  return (
    <div
      className={`collapse ${isOpen ? 'open' : ''}`}
      style={{
        maxHeight: isOpen ? `${maxHeight}px` : '0',  
        overflow: 'hidden', 
        transition: 'max-height 0.5s ease-out',  
      }}
    >
      <div ref={contentRef}>
        {children}
      </div>
    </div>
  );
};

export default Collapse;
