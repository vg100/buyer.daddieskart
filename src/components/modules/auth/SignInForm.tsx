import { faKey, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../../components/base/Button';
import AuthSocialButtons from '../../../components/common/AuthSocialButtons';
import { Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React from 'react';

const SignInForm = ({ layout }: { layout: 'simple' | 'card' | 'split' }) => {
  // State variables to hold form data
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  // Function to handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked, type } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('Form submitted:', formData);
  };

  return (
    <>
      <div className="text-center mb-7">
        <h3 className="text-body-highlight">Sign In</h3>
        <p className="text-body-tertiary">Get access to your account</p>
      </div>
      {/* Social buttons and divider */}
      <AuthSocialButtons title="Sign in" />
      {/* Email and Password fields */}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 text-start">
          <Form.Label htmlFor="email">Email address</Form.Label>
          <div className="form-icon-container">
            <Form.Control
              id="email"
              type="email"
              className="form-icon-input"
              placeholder="name@example.com"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <FontAwesomeIcon icon={faUser} className="text-body fs-9 form-icon" />
          </div>
        </Form.Group>
        <Form.Group className="mb-3 text-start">
          <Form.Label htmlFor="password">Password</Form.Label>
          <div className="form-icon-container">
            <Form.Control
              id="password"
              type="password"
              className="form-icon-input"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <FontAwesomeIcon icon={faKey} className="text-body fs-9 form-icon" />
          </div>
        </Form.Group>
        {/* Remember me checkbox and Forgot Password link */}
        <Row className="flex-between-center mb-7">
          <Col xs="auto">
            <Form.Check type="checkbox" className="mb-0">
              <Form.Check.Input
                type="checkbox"
                name="rememberMe"
                id="rememberMe"
                checked={formData.rememberMe}
                onChange={handleInputChange}
              />
              <Form.Check.Label htmlFor="rememberMe" className="mb-0">
                Remember me
              </Form.Check.Label>
            </Form.Check>
          </Col>
          <Col xs="auto">
            <Link to={`/forgot-password`} className="fs-9 fw-semibold">
              Forgot Password?
            </Link>
          </Col>
        </Row>
        {/* Submit button */}
        <Button variant="primary" type="submit" className="w-100 mb-3">
          Sign In
        </Button>
        {/* Create an account link */}
        <div className="text-center">
          <Link to={`/sign-up`} className="fs-9 fw-bold">
            Create an account
          </Link>
        </div>
      </Form>
    </>
  );
};

export default SignInForm;
