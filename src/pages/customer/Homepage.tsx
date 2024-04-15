import React from 'react'
import EcomCategoryNavs from '../../components/navs/EcomCategoryNavs';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import EcomWhopingBanner from '../../components/banners/EcomWhopingBanner';
import EcomGiftItemsBanner from '../../components/banners/EcomGiftItemsBanner';
import EcomBestInMarketBanner from '../../components/banners/EcomBestInMarketBanner';
import {
  bestOfferProducts,
  topDealsProducts,
  topElectronicProducts
} from '../../data/e-commerce/products';
import ecom4 from '../../assets/img/e-commerce/4.png';
import EcomTopDeals from '../../components/sliders/EcomTopDeals';
import EcomTopElectronics from '../../components/sliders/EcomTopElectronics';
import EcomBestOffers from '../../components/sliders/EcomBestOffers';
import EcomBecomeMember from '../../components/cta/EcomBecomeMember';
import { useDispatch, useSelector } from 'react-redux';
import { ProductRepositry } from '../../services/productRepositry';
import { Link } from 'react-router-dom';

const Homepage = () => {
  const dispatch = useDispatch<any>()
  const {products:pds,loading}: any = useSelector<any>(state => state.products)
  React.useEffect(() => {
    dispatch(ProductRepositry.getProducts({}))
  }, [])

  
  return (
    <div className="ecommerce-homepage pt-5 mb-9">
      <section className="py-0">
        <div className="container-small">
          <div className="scrollbar">
            <EcomCategoryNavs />
          </div>
        </div>
      </section>
      <section className="py-0 px-xl-3">
        <Container className="px-xl-0 px-xxl-3">
          <Row className="g-3 mb-9">
            <Col xs={12}>
              <EcomWhopingBanner />
            </Col>
            <Col xs={12} xl={6}>
              <EcomGiftItemsBanner />
            </Col>
            <Col xs={12} xl={6}>
              <EcomBestInMarketBanner />
            </Col>
          </Row>

          {loading ? (
              <div className="text-center">
                <Spinner animation="border" role="status" />
              </div>
          ):<>
            <Row className="g-4 mb-6">
            <Col xs={12} lg={9} xxl={10}>
              {/* <EcomTopDeals products={topDealsProducts} /> */}
              <EcomTopDeals products={pds?.product} />
            </Col>
            <Col lg={3} xxl={2} className="d-none d-lg-block">
              <div className="h-100 position-relative rounded-3 overflow-hidden">
                <Link
                  to="/pf?offer=50%"
                  className="bg-holder product-bg"
                  style={{
                    backgroundImage: `url(${ecom4})`
                  }}
                />
              </div>
            </Col>
          </Row>
          <div className="mb-6">
            <EcomTopElectronics products={pds?.product} />
          </div>
          <div className="mb-6">
            <EcomBestOffers products={pds?.product} />
          </div>

          </>
}
        
          <EcomBecomeMember />
        </Container>
      </section>
    </div>
  );
};

export default Homepage;
