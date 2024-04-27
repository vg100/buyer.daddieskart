import React from 'react';
import logo from '../../assets/img/icons/logo.png';
import classNames from 'classnames';
import { Navbar } from 'react-bootstrap';

interface LogoProps {
  width?: number;
  text?: boolean;
  textClass?: string;
  className?: string;
}

const Logo = ({ width = 27, text = true, textClass, className }: LogoProps) => {

  const logoStyle = {
    fontFamily: 'Comic Sans MS',
    // color: '#333',
    fontWeight: '400',
    fontSize: '30px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
  };

  const dotStyle = {
    color: '#FF6347',
    fontSize: '32px',
  };

  const comStyle = {
    fontFamily: 'Arial, sans-serif',
    fontSize: '18px',
  };
  return (
    <div className={classNames(className, 'd-flex align-items-center')}>
      {/* <img src={logo} alt="phoenix" width={width} /> */}

      {text && (
        
          <div className={classNames(textClass, 'logo-text ms-2 my-2 ')} style={logoStyle}>
          <span style={{ fontWeight: 'bold' }}>d</span>addies
          <span style={{ color: '#FF6347', fontWeight: 'bold' }}>K</span>art
          <span style={dotStyle}>.</span>
          <span style={comStyle}>com</span>
          {/* <p className={classNames(textClass, 'logo-text ms-2')}>DaddiesKart</p> */}
        </div>

      )}
    </div>
  );
};

export default Logo;
