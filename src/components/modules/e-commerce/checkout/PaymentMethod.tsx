import { Button, Col, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
import visa from '../../../../assets/img/logos/visa.png';
import discover from '../../../../assets/img/logos/discover.png';
import mastercard from '../../../../assets/img/logos/mastercard.png';
import american_express from '../../../../assets/img/logos/american_express.png';
import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import React, { useState } from 'react';
dayjs.extend(localeData);






export const PaymentMethod = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("Coupan");




const Card=()=>{
  return (
    <>
    <Col md={6}>
      <Form.Group as={Col}>
        <Form.Label className="fs-8 text-body-highlight ps-0 text-transform-none">
          Select card
        </Form.Label>
        <Form.Select className="text-body-emphasis">
          <option>Select a card</option>
          <option value="visa">Visa</option>
          <option value="discover">Discover</option>
          <option value="mastercard">Mastercard</option>
          <option value="american-express">American Express</option>
        </Form.Select>
      </Form.Group>
    </Col>
    <Col md={6}>
      <Form.Group>
        <h5 className="text-body-highlight mb-2"> Card number</h5>
        <Form.Control
          className="text-body-emphasis"
          type="number"
          placeholder="Enter card number"
        />
      </Form.Group>
    </Col>
    <Col xs={12}>
      <Form.Group as={Col}>
        <h5 className="text-body-highlight mb-2">Full name</h5>
        <Form.Control
          name="full_name"
          type="text"
          placeholder="Type your fullname"
        />
      </Form.Group>
    </Col>
    <Col md={6}>
      <h5 className="text-body-highlight mb-2">Expires on</h5>
      <div className="d-flex gap-3">
        <Form.Select className="text-body-emphasis" name="month">
          <option>Month</option>
          {dayjs.months().map(month => (
            <option value={month} key={month}>
              {month}
            </option>
          ))}
        </Form.Select>

        <select className="form-select text-body-emphasis">
          <option>Year</option>
          <option value={2022}>2022</option>
          <option value={2023}>2023</option>
          <option value={2024}>2024</option>
          <option value={2025}>2025</option>
          <option value={2026}>2026</option>
        </select>
      </div>
    </Col>
    <Col md={6}>
      <Form.Group as={Col}>
        <h5 className="text-body-highlight mb-2">CVC</h5>
        <Form.Control
          className="text-body-emphasis input-spin-none"
          type="number"
          placeholder="Enter a valid CVC"
        />
      </Form.Group>
    </Col>
    <Col xs={12}>
      <Form.Check type="checkbox" id="gridCheck" className="me-3">
        <Form.Check.Input
          type="checkbox"
          value="save"
          name="paymentMethod"
        />
        <Form.Check.Label className="fs-8 text-body-emphasis">
          Save Card Details
        </Form.Check.Label>
      </Form.Check>
    </Col>
  </>
  )
}


const Coupon=()=>{
  return (
    <InputGroup className="mb-3">
    <FormControl placeholder="Coupon" aria-label="voucher" 
    // value={voucher}
    // onChange={(e) => setVoucher(e.target.value)}
    />
    <Button variant="phoenix-primary" className="px-5">
      Apply
    </Button>
  </InputGroup>
  )
}

const Upi=()=>{
  return (
    <InputGroup className="mb-3">
    <FormControl placeholder="Enter Upi Id" aria-label="voucher" 
    // value={voucher}
    // onChange={(e) => setVoucher(e.target.value)}
    />
    <Button variant="phoenix-primary" className="px-5">
      Apply
    </Button>
  </InputGroup>
  )
}


  const paymentOptions = [
    {
      label: "Coupon",
      sublabel:"Pay By Coupon",
      component: <Coupon />
    },
    {
      label: "UPI",
      sublabel:"Pay By Any UPI Id",
      component: <Upi/>
    },
    {
      label: "Credit / Debit/ ATM Card",
      component: <Card />
    },
    {
      label: "Cash on Delivery",
      component: null
    }
  ]

  return (
    <>
      <h3 className="mb-5">Payment Method</h3>
      <Row className="g-4 mb-5">
        <Col xs={12}>
          {
            paymentOptions.map((item) => {
              // const SelectedComponent = paymentOptions[selectedPaymentMethod];
              if (item?.label === "Credit / Debit/ ATM Card") {
                return (
                  <>
                    <Row className="gx-lg-11">
                      <Col xs={12} md="auto">
                        <div className="d-flex">
                          <Form.Check type="radio" id={"card"} className="me-3">
                            <Form.Check.Input
                              checked={selectedPaymentMethod === item.label}
                              type="radio"
                              name="paymentMethod"
                              onChange={() => setSelectedPaymentMethod(item.label)}
                            />
                            <Form.Check.Label className="fs-8 text-body">
                              {item?.label}
                            </Form.Check.Label>
                          </Form.Check>
                          <img className="h-100 me-2" src={visa} alt="visa" />
                          <img className="h-100 me-2" src={discover} alt="discover" />
                          <img className="h-100 me-2" src={mastercard} alt="mastercard" />
                          <img
                            className="h-100"
                            src={american_express}
                            alt="american_express"
                          />
                        </div>
                      </Col>
                    </Row>
                    {selectedPaymentMethod === item.label && (
                    <Row>
                  
                        {item.component}
                    </Row>
                  )}
                    <hr />
                  </>
                )
              }
              return (
                <>
                  <Row className="gx-lg-11">
                    <Col xs={12} md="auto">
                      <div className="d-flex">
                        <Form.Check type="radio" id={"card"} className="me-3">
                          <Form.Check.Input
                            checked={selectedPaymentMethod === item.label}
                            type="radio"
                            name="paymentMethod"
                            onChange={() => setSelectedPaymentMethod(item.label)}
                          />
                          <Form.Check.Label className="fs-8 text-body">
                            {item?.label}
                          </Form.Check.Label>
                         
                        </Form.Check>
                        
                      </div>
                     
                    </Col>
                  </Row>
                
                  {selectedPaymentMethod === item.label && (
   
                      <Col xs={12}>
                        {item.component}
                      </Col>
                 
                  )}
                   {item?.sublabel && <p>{item?.sublabel}</p>} 
                  <hr />
                </>
              )
            })
          }
        </Col>
      </Row>
    </>
  )

  return (
    <>
      <h3 className="mb-5">Payment Method</h3>
      <Row className="g-4 mb-5">
        <Col xs={12}>
          <Row className="gx-lg-11">
            {
              paymentOptions.map((option) => {
                if (option === 'card') {
                  return (
                    <Col xs={12} md="auto">
                      <div className="d-flex">
                        <Form.Check type="radio" id={option} className="me-3">
                          <Form.Check.Input
                            checked={option === pm}
                            value={option}
                            type="radio"
                            name="paymentMethod"
                            onChange={() => setpm(option)}
                          />
                          <Form.Check.Label className="fs-8 text-body">
                            Credit card
                          </Form.Check.Label>
                        </Form.Check>
                        <img className="h-100 me-2" src={visa} alt="visa" />
                        <img className="h-100 me-2" src={discover} alt="discover" />
                        <img className="h-100 me-2" src={mastercard} alt="mastercard" />
                        <img
                          className="h-100"
                          src={american_express}
                          alt="american_express"
                        />
                      </div>
                    </Col>
                  )
                }

                return (
                  <Col xs={12} md="auto">
                    <Form.Check type="radio" id={option}>
                      <Form.Check.Input
                        value={option}
                        type="radio"
                        name="paymentMethod"
                        onChange={() => setpm(option)}
                      />
                      <Form.Check.Label className="fs-8 text-body">
                        {option}
                      </Form.Check.Label>
                    </Form.Check>
                  </Col>
                )
              })
            }
          </Row>
        </Col>

        {
          pm == "card" && (
            <>
              <Col md={6}>
                <Form.Group as={Col}>
                  <Form.Label className="fs-8 text-body-highlight ps-0 text-transform-none">
                    Select card
                  </Form.Label>
                  <Form.Select className="text-body-emphasis">
                    <option>Select a card</option>
                    <option value="visa">Visa</option>
                    <option value="discover">Discover</option>
                    <option value="mastercard">Mastercard</option>
                    <option value="american-express">American Express</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <h5 className="text-body-highlight mb-2"> Card number</h5>
                  <Form.Control
                    className="text-body-emphasis"
                    type="number"
                    placeholder="Enter card number"
                  />
                </Form.Group>
              </Col>
              <Col xs={12}>
                <Form.Group as={Col}>
                  <h5 className="text-body-highlight mb-2">Full name</h5>
                  <Form.Control
                    name="full_name"
                    type="text"
                    placeholder="Type your fullname"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <h5 className="text-body-highlight mb-2">Expires on</h5>
                <div className="d-flex gap-3">
                  <Form.Select className="text-body-emphasis" name="month">
                    <option>Month</option>
                    {dayjs.months().map(month => (
                      <option value={month} key={month}>
                        {month}
                      </option>
                    ))}
                  </Form.Select>

                  <select className="form-select text-body-emphasis">
                    <option>Year</option>
                    <option value={2022}>2022</option>
                    <option value={2023}>2023</option>
                    <option value={2024}>2024</option>
                    <option value={2025}>2025</option>
                    <option value={2026}>2026</option>
                  </select>
                </div>
              </Col>
              <Col md={6}>
                <Form.Group as={Col}>
                  <h5 className="text-body-highlight mb-2">CVC</h5>
                  <Form.Control
                    className="text-body-emphasis input-spin-none"
                    type="number"
                    placeholder="Enter a valid CVC"
                  />
                </Form.Group>
              </Col>
              <Col xs={12}>
                <Form.Check type="checkbox" id="gridCheck" className="me-3">
                  <Form.Check.Input
                    type="checkbox"
                    value="save"
                    name="paymentMethod"
                  />
                  <Form.Check.Label className="fs-8 text-body-emphasis">
                    Save Card Details
                  </Form.Check.Label>
                </Form.Check>
              </Col>
            </>
          )
        }



      </Row>
    </>
  );
};
