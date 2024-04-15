import React, { ReactNode } from 'react';
import { Form } from 'react-bootstrap';

export interface CheckboxItemProps {
  type?: 'checkbox' | 'radio';
  name: string;
  label: string | ReactNode;
  value: string | number;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxItem = ({
  type = 'checkbox',
  name,
  label,
  value,
  checked = false,
  onChange
}: CheckboxItemProps) => {
  return (
    <Form.Check
      type={type}
      id={String(value)}
      className="mb-0 d-flex align-items-center gap-2"
    >
      <Form.Check.Input
        type={type}
        value={value}
        name={name}
        checked={checked}
        className="mt-0"
        onChange={onChange}
      
      />
      <Form.Check.Label 
      style={{ pointerEvents: 'none' }} 
      className="d-block lh-sm fs-8 text-body fw-normal mb-0">
        {label}
      </Form.Check.Label>
    </Form.Check>
  );
};

export default CheckboxItem;
