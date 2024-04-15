import whoopingBannerProduct from '../../assets/img/e-commerce/whooping_banner_product.png';
import whoopingBannerShape2 from '../../assets/img/e-commerce/whooping_banner_shape_2.png';
import { Link, useNavigate } from 'react-router-dom';

const EcomWhopingBanner = () => {
  const navigate = useNavigate()
  const navigatehandler = async () => {
    return navigate(`/pf?offer=60%`)
 }
  return (
    <div className="whooping-banner w-100 rounded-3 overflow-hidden">
      <div
        className="bg-holder product-bg"
        style={{
          backgroundImage: `url(${whoopingBannerProduct})`,
          backgroundPosition: 'bottom right'
        }}
      />
      <div
        className="bg-holder shape-bg"
        style={{
          backgroundImage: `url(${whoopingBannerShape2})`,
          backgroundPosition: 'bottom left'
        }}
      />

      <div className="position-relative">
        <div className="banner-text" data-bs-theme="light">
          <h2 className="text-warning-light fw-bolder fs-lg-3 fs-xxl-2">
            Whooping <span className="gradient-text">60%</span> Off
          </h2>
          <h3 className="fw-bolder fs-lg-5 fs-xxl-3 text-white">
            on everyday items
          </h3>
        </div>
        <Link
        onClick={navigatehandler}
          // to="/pf?offer=60%"
          className="btn btn-lg btn-primary rounded-pill banner-button"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default EcomWhopingBanner;
