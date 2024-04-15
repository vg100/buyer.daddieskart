import React from 'react';
import giftItemsBannerBg from '../../assets//img/e-commerce/gift-items-banner-bg.png';
import { Link } from 'react-router-dom';

const EcomGiftItemsBanner = () => {
  return (
    <div className="gift-items-banner w-100 rounded-3 overflow-hidden">
      <div
        className="bg-holder banner-bg"
        style={{
          backgroundImage: `url(${giftItemsBannerBg})`
        }}
      />
      <div
        data-bs-theme="light"
        className="position-relative banner-text text-md-center"
      >
        <h2 className="text-white fw-bolder fs-xl-4">
          Get <span className="gradient-text">10% Off</span>
          <br className="d-md-none" /> on gift items
        </h2>
        <Link
          className="btn btn-lg btn-primary rounded-pill banner-button"
          to="/pf?offer=10%"
        >
          Buy Now
        </Link>
      </div>
    </div>
  );
};

export default EcomGiftItemsBanner;
