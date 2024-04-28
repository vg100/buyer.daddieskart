import { useSelector } from 'react-redux';
import Section from '../../components/base/Section';
import EcomCartSummaryCard from '../../components/cards/EcomCartSummaryCard';
import PageBreadcrumb from '../../components/common/PageBreadcrumb';
import EcomCartTable from '../../components/tables/EcomCartTable';
import { defaultBreadcrumbItems } from '../../data/commonData';
// import { cartItems } from '../../data/e-commerce/products';
import { Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems } = useSelector((state: any) => state?.cart)
  const navigate=useNavigate<any>()

  if(!cartItems.length){
    navigate('/pf')
    return;
  }

  return (
    <div className="pt-5 mb-9">
      <Section small className="py-0">
        <PageBreadcrumb items={defaultBreadcrumbItems} />
        <h2 className="mb-6">{`Cart (${cartItems?.length})`}</h2>
        <Row className="g-5">
          <Col xs={12} lg={8}>
            <EcomCartTable cartItems={cartItems} />
          </Col>
          <Col xs={12} lg={4}>
            
            <EcomCartSummaryCard />
          </Col>
        </Row>
      </Section>
    </div>
  );
};

export default Cart;
