import { useSelector } from 'react-redux';
import { currencyFormat } from '../../helpers/utils';
import React from 'react';

const OrderSummaryDetails = () => {
  const { cartItems } = useSelector((state: any) => state?.cart)
  const totalPrice=cartItems
  .reduce((acc, item) => acc + item.quantity * item.price, 0)
  .toFixed(2)
  return (
    <div>
      <div className="d-flex justify-content-between">
        <p className="text-body fw-semibold">Items subtotal :</p>
        <p className="text-body-emphasis fw-semibold">{currencyFormat(totalPrice)}</p>
      </div>
      <div className="d-flex justify-content-between">
        <p className="text-body fw-semibold">Discount :</p>
        <p className="text-danger fw-semibold">-{currencyFormat(59)}</p>
      </div>
      <div className="d-flex justify-content-between">
        <p className="text-body fw-semibold">Delivery Charges :</p>
        <p className="text-success fw-semibold">FREE</p>
      </div>
      <div className="d-flex justify-content-between">
        <p className="text-body fw-semibold">Secured Packaging Fee  :</p>
        <p className="fw-semibold text-success">FREE</p>
      </div>
      <div className="d-flex justify-content-between">
        <p className="text-body fw-semibold">Subtotal :</p>
        <p className="text-body-emphasis fw-semibold">{currencyFormat(totalPrice)}</p>
      </div>
    </div>
  );
};

export default OrderSummaryDetails;
