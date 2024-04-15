import classNames from 'classnames';
import { Col, Row } from 'react-bootstrap';
import visa from 'assets/img/logos/visa.png';
import discover from 'assets/img/logos/discover.png';
import mastercard from 'assets/img/logos/mastercard.png';
import american_express from 'assets/img/logos/american_express.png';

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={classNames(className, 'footer')}>
      <Row className="g-1 justify-content-between align-items-center h-100">
        <Col xs={12} sm="auto" className="text-center">
          <p className="mb-0 mt-2 mt-sm-0 text-body">
            {/* @2023-2024 */}
            <span className="d-none d-sm-inline-block" />
            {/* <span className="d-none d-sm-inline-block mx-1">|</span> */}
            {/* <br className="d-sm-none" /> */}
            {/* 2024- */}
            {new Date().getFullYear()} &copy;{' '}
            <a href="http://daddieskart.com" target="_blank" rel="noreferrer">
              daddiesKart.com
            </a>
          </p>
        </Col>


        <Col xs={12} sm="auto" className="text-center">

          <img className="h-50 me-2" src={visa} alt="visa" />
          <img className="h-50 me-2" src={discover} alt="discover" />
          <img className="h-50 me-2" src={mastercard} alt="mastercard" />
          <img
            className="h-50"
            src={american_express}
            alt="american_express"
          />
        </Col>


      </Row>
    </footer>
  );
};

export default Footer;
