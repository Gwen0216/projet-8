import React, { useState } from 'react';
import Collapse from '../components/Collapse';
import './Description.css';

function Description({description, equipments}){
const [isOpenDesc, setIsOpenDesc] = useState(false);
const [isOpenEqui, setIsOpenEqui] = useState(false);
return(
    <div className="description-container">
    <div className="sectionDesc">
    <button
      className="collapse-button"
      onClick={() => setIsOpenDesc(!isOpenDesc)}
    >
      <span className="section-title">Description</span>
      <span
        className={`icon ${isOpenDesc ? 'rotate' : ''}`}
      >
        <i className="fa-solid fa-chevron-up"></i>
      </span>
    </button>
    <Collapse isOpen={isOpenDesc}>
      <p>
      {description}
      </p>
    </Collapse>
  </div>
  <div className="sectionDesc">
    <button
      className="collapse-button"
      onClick={() => setIsOpenEqui(!isOpenEqui)}
    >
      <span className="section-title">Equipements</span>
      <span
        className={`icon ${isOpenEqui ? 'rotate' : ''}`}
      >
        <i className="fa-solid fa-chevron-up"></i>
      </span>
    </button>
    <Collapse isOpen={isOpenEqui}>
    <ul className="equip-list">
            {equipments.map((item, index) => (
              <li key={index} className="equip-item">
                {item}
              </li>
            ))}
          </ul>
    </Collapse>
  </div>
  </div>
)

}

export default Description;