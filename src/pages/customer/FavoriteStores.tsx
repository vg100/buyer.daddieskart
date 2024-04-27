import { useDispatch, useSelector } from 'react-redux';
import Section from '../../components/base/Section';
import PageBreadcrumb from '../../components/common/PageBreadcrumb';
import StoreItem from '../../components/common/StoreItem';
import { defaultBreadcrumbItems } from '../../data/commonData';
import { stores } from '../../data/e-commerce/stores';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { StoreRepositry } from '../../services/storeRepositry';

const FavoriteStores = () => {
  const dispatch = useDispatch<any>()
  const { stores } = useSelector((state: any) => state?.store)




  React.useEffect(() => {
    dispatch(StoreRepositry.getStores())
  }, [])


  return (
    <div className="pt-5 mb-9">
      <Section small className="py-0">
        <PageBreadcrumb items={[{
          label: 'Home',
          url: '/'
        },
        {
          label: 'Favorite Store',
          active: true
        }]} />
        <div className="mb-5">
          <h2>My Favorite Stores</h2>
          <p className="mb-0 text-body-tertiary fw-semibold">
            Essential for a better life
          </p>
        </div>
        <Row className="gx-3 gy-5">
          {stores?.map((store) => store.products && store.products.length > 0 && (
            <Col key={store.name} xs={6} sm={4} md={3} lg={2}>
              <StoreItem store={store} />
            </Col>
          ))}
        </Row>
      </Section>
    </div>
  );
};

export default FavoriteStores;
