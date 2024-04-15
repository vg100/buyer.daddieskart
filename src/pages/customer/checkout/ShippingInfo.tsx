import { useNavigate } from 'react-router-dom';
import Section from '../../../components/base/Section';
import PageBreadcrumb from '../../../components/common/PageBreadcrumb';
import CheckoutSummaryCard from '../../../components/modules/e-commerce/checkout/CheckoutSummaryCard';
import { defaultBreadcrumbItems } from '../../../data/commonData';
import { Button, Col, Form, Row } from 'react-bootstrap';

const ShippingInfo = () => {
  const navigate = useNavigate()
  const navigateTocheckout = () => {
    navigate('/checkout')
  }
  return (
    <div className="pt-5 mb-9">
      <Section small className="py-0">
        <PageBreadcrumb items={defaultBreadcrumbItems} />
        <h2 className="mb-5">Check out</h2>
        <Row className="justify-content-between gy-6 gx-5">
          <Col lg={7}>
            <h3 className="mb-5">Shipping Info</h3>
            <Row className="g-4">
              <Col md={6}>
                <Form.Group>
                  <label className="form-label text-transform-none ps-0 fs-8 text-body-highlight">
                    Full name
                  </label>
                  <Form.Control type="text" placeholder="Full name" />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <label className="form-label text-transform-none ps-0 fs-8 text-body-highlight">
                    Phone
                  </label>
                  <Form.Control type="tel" placeholder="+91XXXXXXXXXX" />
                </Form.Group>
              </Col>
              <Col md={12}>
                <Form.Group>
                  <label className="form-label text-transform-none ps-0 fs-8 text-body-highlight">
                    Address line 1
                  </label>
                  <Form.Control as="textarea" rows={4} placeholder="Address line 1" />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <label className="form-label text-transform-none ps-0 fs-8 text-body-highlight">
                    City
                  </label>
                  <Form.Select defaultValue="van-nuys">
                    <option value="van-nuys">Van Nuys</option>
                    <option value="los-angeles">Los Angeles</option>
                    <option value="chicago">Chicago</option>
                    <option value="houston">Houston</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <label className="form-label text-transform-none ps-0 fs-8 text-body-highlight">
                    State
                  </label>
                  <Form.Select defaultValue="california">
                    <option value="california">California</option>
                    <option value="Alaska">Alaska</option>
                    <option value="alabama">Alabama</option>
                    <option value="florida">Florida</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <label className="form-label text-transform-none ps-0 fs-8 text-body-highlight">
                    Pin code
                  </label>
                  <Form.Control type="text" placeholder="Zip code" />
                </Form.Group>
              </Col>
              <Col md={12}>
                <Form.Group>
                  <label className="form-label text-transform-none ps-0 fs-9 text-body-highlight">
                    Address Type
                  </label>
                  <div>
                    <Form.Check
                      inline
                      type="radio"
                      id="home"
                      label="Home"
                      name="addressType"
                      value="home"
                    // checked={addressType === 'home'}
                    // onChange={handleAddressTypeChange}
                    />
                    <Form.Check
                      inline
                      type="radio"
                      id="work"
                      label="Work"
                      name="addressType"
                      value="work"
                    // checked={addressType === 'work'}
                    // onChange={handleAddressTypeChange}
                    />
                  </div>
                </Form.Group>
              </Col>
              <Col xs={12}>
                <Button
                  onClick={navigateTocheckout}
                  className="px-8 px-sm-11 me-2" type="submit">
                  Save
                </Button>
                <Button
                  variant="phoenix-secondary"
                  className="text-nowrap"
                  type="button"
                >
                  Exit Without Saving
                </Button>
              </Col>

            </Row>
          </Col>
          <Col lg={5} xl={{ span: 4, offset: 1 }}>
            <div className="position-sticky top-0">
              <CheckoutSummaryCard />
            </div>
          </Col>
        </Row>
      </Section>
    </div>
  );
};

export default ShippingInfo;
