import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFighterJet,
  faGamepad,
  faHeadphones,
  faCubes,
  faPaw,
  faRocket,
  faTicket,
  faPieChart,
//   faCodepen,
} from '@fortawesome/free-solid-svg-icons';
import './Loader.css'; // Import the CSS file

const Loader = () => {
  const [counter, setCounter] = useState(0);
  const [percentage, setPercentage] = useState(0);

  const icons = [
    faFighterJet,
    faGamepad,
    faHeadphones,
    faCubes,
    faPaw,
    faRocket,
    faTicket,
    faPieChart,
  ];

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCounter((prevCounter) => (prevCounter + 1) % icons.length);
    }, 3000);

    return () => clearInterval(imageInterval);
  }, [icons.length]);

  useEffect(() => {
    const loadingInterval = setInterval(() => {
      setPercentage((prevPercentage) => {
        if (prevPercentage >= 100) return 0;
        return prevPercentage + 1;
      });
    }, 120);

    return () => clearInterval(loadingInterval);
  }, []);

  return (
    <div className="loader">
      <div className="image">
        <FontAwesomeIcon icon={icons[counter]} />
      </div>
<span>{percentage}%</span>
 </div> 
  );
};

export default Loader;
