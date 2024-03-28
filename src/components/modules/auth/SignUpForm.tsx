import React from 'react';
import Button from '../../../components/base/Button';
import AuthSocialButtons from '../../../components/common/AuthSocialButtons';
import { Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SignUpForm = ({ layout }: { layout: 'simple' | 'card' | 'split' }) => {
  // State variables to hold form data
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    termsService: false,
  });

  // Function to handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked, type } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Perform form validation here (e.g., check if all required fields are filled, passwords match, etc.)
    // If validation passes, you can submit the form data
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <div className="text-center mb-7">
        <h3 className="text-body-highlight">Sign Up</h3>
        <p className="text-body-tertiary">Create your account today</p>
      </div>
      {/* Your social buttons and divider */}
      <Form onSubmit={handleSubmit}>
        {/* Form fields */}
        {/* Name */}
        <Form.Group className="mb-3 text-start">
          <Form.Label htmlFor="name">Name</Form.Label>
          <Form.Control
            id="name"
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </Form.Group>
        {/* Email */}
        <Form.Group className="mb-3 text-start">
          <Form.Label htmlFor="email">Email address</Form.Label>
          <Form.Control
            id="email"
            type="email"
            placeholder="name@example.com"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </Form.Group>
        {/* Password and Confirm Password */}
        <Row className="g-3 mb-3">
          <Col sm={layout === 'card' ? 12 : 6} lg={6}>
            <Form.Group>
              <Form.Label htmlFor="password">Password</Form.Label>
              <Form.Control
                id="password"
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
          <Col sm={layout === 'card' ? 12 : 6} lg={6}>
            <Form.Group>
              <Form.Label htmlFor="confirmPassword">Confirm Password</Form.Label>
              <Form.Control
                id="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
        </Row>
        {/* Terms of service */}
        <Form.Check type="checkbox" className="mb-3">
          <Form.Check.Input
            type="checkbox"
            name="termsService"
            id="termsService"
            checked={formData.termsService}
            onChange={handleInputChange}
          />
          <Form.Check.Label htmlFor="termsService" className="fs-9 text-transform-none">
            I accept the <Link to="#!">terms</Link> and <Link to="#!">privacy policy</Link>
          </Form.Check.Label>
        </Form.Check>
        {/* Submit button */}
        <Button variant="primary" type="submit" className="w-100 mb-3">
          Sign up
        </Button>
        {/* Sign in link */}
        <div className="text-center">
          <Link to={`/sign-in`} className="fs-9 fw-bold">
            Sign in to an existing account
          </Link>
        </div>
      </Form>
    </>
  );
};

export default SignUpForm;
