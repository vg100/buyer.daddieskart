import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../components/base/Button';
import OrderSummaryDetails from '../../components/common/OrderSummaryDetails';
import { currencyFormat } from '../../helpers/utils';
import React, { useState } from 'react';
import { Card, Form, FormControl, InputGroup,Alert, Container, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const EcomCartSummaryCard = () => {
  const { cartItems } = useSelector((state: any) => state?.cart)
  const totalPrice = cartItems
    .reduce((acc, item) => acc + item.quantity * item.price, 0)
    .toFixed(2)
  const navigate = useNavigate()
  const navigateTocheckout = () => {
    navigate('/shipping-info')
  }


  const [voucher, setVoucher] = useState('');
  const [error, setError] = useState('');
  const [discountAmount, setDiscountAmount] = useState(0);

  const handleApply = () => {
    // Reset previous error
    setError('');

    // Perform validation
    if (!voucher.trim()) {
      setError('Please enter a coupon code.');
      return;
    }

    // Simulate server request to validate coupon
    // For demonstration, assume the coupon is valid and gives a $10 discount
    // In a real application, you would validate the coupon with a server
    simulateAsyncValidation(voucher);
  };

  // Simulated asynchronous validation function
  const simulateAsyncValidation = (voucher) => {
    // Simulating a delay to mimic server request
    setTimeout(() => {
      // Check if the coupon is valid (for demonstration purpose, any non-empty code is considered valid)
      if (voucher) {
        // Set the discount amount (assuming the coupon gives a $10 discount)
        setDiscountAmount(10);
      } else {
        // If the coupon is invalid, set an error message
        setError('Invalid coupon code. Please try again.');
      }
    }, 1000);
  };





  return (
    <Card>
      <Card.Body>
        <div className="d-flex flex-between-center mb-3">
          <h3 className="mb-0">Summary</h3>
          {/* <Link to="#!" className="btn btn-link p-0">
            Edit cart
          </Link> */}
        </div>
        <Form.Select className="mb-3">
          <option value="cod">Cash on Delivery</option>
          <option value="card">Card</option>
          <option value="upi">UPI</option>
        </Form.Select>
        <OrderSummaryDetails />
        <InputGroup className="mb-3">
          <FormControl placeholder="Voucher" aria-label="voucher" 
          value={voucher}
          onChange={(e) => setVoucher(e.target.value)}
          />
          <Button variant="phoenix-primary" className="px-5" onClick={handleApply}>
            Apply
          </Button>
        </InputGroup>
        {error && <p className="text-danger small">{error}</p>}
      {discountAmount > 0 && (
        <p className="text-success small">
          Coupon applied! You've received a {currencyFormat(discountAmount)} discount.
        </p>
      )}
        <div className="d-flex justify-content-between border-y border-dashed border-translucent py-3 mb-4">
          <h4 className="mb-0">Total :</h4>
          <h4 className="mb-">



            {currencyFormat(totalPrice, { minimumFractionDigits: 2 })}
          </h4>
        </div>
        <Button
          onClick={navigateTocheckout}
          className="w-100"
          variant="primary"
          endIcon={
            <FontAwesomeIcon icon={faChevronRight} className="ms-1 fs-10" />
          }
        >
          Proceed to check out
        </Button>
      </Card.Body>
    </Card>
  );
};

export default EcomCartSummaryCard;
