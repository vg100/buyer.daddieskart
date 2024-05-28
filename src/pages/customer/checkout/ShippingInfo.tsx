import { useNavigate } from 'react-router-dom';
import Section from '../../../components/base/Section';
import PageBreadcrumb from '../../../components/common/PageBreadcrumb';
import CheckoutSummaryCard from '../../../components/modules/e-commerce/checkout/CheckoutSummaryCard';
import { defaultBreadcrumbItems } from '../../../data/commonData';
import { Button, Col, Form, Row } from 'react-bootstrap';
import React, { useEffect, useRef } from 'react';
import { AuthRepo } from '../../../services/AuthRepositry';
import { useDispatch, useSelector } from 'react-redux';

const ShippingInfo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<any>()
  const { address, selectaddres }: any = useSelector<any>(state => state?.user)
  const [selectType, setSelectType] = React.useState("add")
  const [fields, setFields] = React.useState<any>({});
  const ref = useRef<any>(null)
  const fetchAddress = async () => {
    
    const result = await dispatch(AuthRepo.getAddress());
    if (result) setSelectType("select");
  };

  useEffect(() => {
    fetchAddress();
  }, [dispatch]);

  const add = {
    city: ["Allahabad", "Gurugram"],
    state: ["UP", "MP", "HARYANA"]
  }

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value });
  };

  const handleAddressTypeChange = (e) => {
    setFields({ ...fields, addressType: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let type = "add"
    if (fields?._id) {
      type = "edit"
    }
    await dispatch(AuthRepo.addAndEditAddress(fields, type))
    await fetchAddress();
    setSelectType("select");
  };

  const selectAddress = (e) => {
    dispatch({ type: "SELECT_ADDRESS", payload: address[e.target.value] })
  };

  const continueHandler = () => {
    selectaddres && navigate('/checkout');
  }

  const editHandler = (id) => {
    setFields({
      _id: id,
      ...(address?.filter((add) => add?._id == id)[0]?.shippingInfo)
    })
    setSelectType("edit")
  }

  return (
    <div className="pt-5 mb-9">
      <Section small className="py-0">
        <PageBreadcrumb items={defaultBreadcrumbItems} />
        <h2 className="mb-5">Check out</h2>
        {selectType === "select" && (
          <Button
            onClick={() => {
              setFields({})
              setSelectType("add")
            }}
            className="px-8 px-sm-11 me-2"
          >
            Add address
          </Button>

        )}



        <Row className="justify-content-between gy-6 gx-5">
          <Col lg={7}>
            {
              selectType === "select" && (
                <div>
                  {address?.map((item, index) => {
                    return (
                      <>
                        <Form.Check

                          inline
                          type="radio"
                          id="home"
                          label={JSON.stringify(item?.shippingInfo)}
                          name="addressType"
                          value={index}
                          checked={item?._id === selectaddres?._id}
                          onChange={selectAddress}
                        />
                        <p onClick={() => editHandler(item?._id)} >Edit - {item?._id}</p>
                      </>


                    )
                  })}
                  <Button
                    onClick={continueHandler}
                    className="px-8 px-sm-11 me-2"
                    type="submit"
                  >
                    COntinuew
                  </Button>
                </div>
              )
            }

            {
              ["add", "edit"].includes(selectType) && (
                <>
                  <h3 className="mb-5">Shipping Info</h3>
                  <Form onSubmit={handleSubmit}>
                    <Row className="g-4">
                      <Col md={6}>
                        <Form.Group>
                          <label className="form-label text-transform-none ps-0 fs-8 text-body-highlight">
                            Full name
                          </label>
                          <Form.Control
                            type="text"
                            placeholder="Full name"
                            name="fullName"
                            value={fields.fullName || ""}
                            onChange={onChangeHandler}
                          />
                        </Form.Group>
                      </Col>

                      <Col md={6}>
                        <Form.Group>
                          <label className="form-label text-transform-none ps-0 fs-8 text-body-highlight">
                            Phone
                          </label>
                          <Form.Control
                            type="tel"
                            placeholder="+91XXXXXXXXXX"
                            name="phone"
                            value={fields.phone}
                            onChange={onChangeHandler}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={12}>
                        <Form.Group>
                          <label className="form-label text-transform-none ps-0 fs-8 text-body-highlight">
                            Address line 1
                          </label>
                          <Form.Control
                            as="textarea"
                            rows={4}
                            placeholder="Address line 1"
                            name="address"
                            value={fields.address}
                            onChange={onChangeHandler}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={4}>
                        <Form.Group>
                          <label className="form-label text-transform-none ps-0 fs-8 text-body-highlight">
                            City
                          </label>
                          <Form.Select

                            name="city"
                            value={fields.city}
                            onChange={onChangeHandler}
                          >
                            <option value="" disabled>Select a city</option>
                            {add['city'].map((item) => {
                              return (<option value={item}>{item}</option>)
                            })}
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col md={4}>
                        <Form.Group>
                          <label className="form-label text-transform-none ps-0 fs-8 text-body-highlight">
                            State
                          </label>
                          <Form.Select
                            name="state"
                            value={fields.state}
                            onChange={onChangeHandler}
                          >
                            <option value="" disabled>Select a state</option>
                            {add['state'].map((item) => {
                              return (<option value={item}>{item}</option>)
                            })}
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col md={4}>
                        <Form.Group>
                          <label className="form-label text-transform-none ps-0 fs-8 text-body-highlight">
                            Pin code
                          </label>
                          <Form.Control
                            type="text"
                            placeholder="Zip code"
                            name="pinCode"
                            value={fields.pinCode}
                            onChange={onChangeHandler}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={12}>
                        <Form.Group>
                          <label className="form-label text-transform-none ps-0 fs-8 text-body-highlight">
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
                              checked={fields.addressType === 'home'}
                              onChange={handleAddressTypeChange}
                            />
                            <Form.Check
                              inline
                              type="radio"
                              id="work"
                              label="Work"
                              name="addressType"
                              value="work"
                              checked={fields.addressType === 'work'}
                              onChange={handleAddressTypeChange}
                            />
                          </div>
                        </Form.Group>
                      </Col>
                      <Col xs={12}>
                        <Button
                          className="px-8 px-sm-11 me-2"
                          type="submit"
                        >
                          Save
                        </Button>

                        {address?.length > 0 && (
                          <Button
                            onClick={() => setSelectType("select")}
                            variant="phoenix-secondary"
                            className="text-nowrap"
                            type="button"
                          >
                            Exit Without Saving
                          </Button>
                        )}

                      </Col>
                    </Row>
                  </Form>
                </>
              )
            }
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
