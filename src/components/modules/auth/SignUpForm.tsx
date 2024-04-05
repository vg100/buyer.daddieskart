import React from 'react';
import Button from '../../../components/base/Button';
import AuthSocialButtons from '../../../components/common/AuthSocialButtons';
import { Col, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AuthRepo } from '../../../services/AuthRepositry';
import { faKey, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SignUpForm = ({ layout }: { layout: 'simple' | 'card' | 'split' }) => {
  let navigate = useNavigate();
  let dispatch = useDispatch<any>()
  const { loading, error, userInfo } = useSelector((state: any) => state.user)
  const redirect = '/'
  const [formData, setFormData] = React.useState({
    number: "",
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    termsService: false,
  });

  // Function to handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked, type } = e.target;
    const newValue = value.startsWith('+91') ? value.slice(3) : value;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : newValue,
    }));
  };

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (formData.number.length > 10 || formData.number.length < 10) {
      alert("number not more the 10 digits")
      return
    }
   const res= await dispatch(AuthRepo.register({
      mobile: "+91"+formData.number
    }))
    if(res){
      navigate("/2FA",{ state: {mobile:"+91"+formData.number,type:"signup"} })
    }
  };

  React.useEffect(() => {
    if (userInfo) {
      navigate(redirect)
    }
  }, [navigate, userInfo, redirect])


  return (
    <>
      <div className="text-center mb-7">
        <h3 className="text-body-highlight">Sign Up</h3>
        <p className="text-body-tertiary">Create your account today</p>
      </div>
      {/* Your social buttons and divider */}
      <Form onSubmit={handleSubmit}>
        {/* Form fields */}
        <Form.Group className="mb-3 text-start">
          <Form.Label htmlFor="name">Mobile Number</Form.Label>
          <div className="form-icon-container">
          <Form.Control
            id="number"
            type="text"
            className="form-icon-input"
            placeholder="Enter Mobile Number"
            name="number"
            value={"+91" + formData.number}
            onChange={handleInputChange}
          />
            <FontAwesomeIcon icon={faUser} className="text-body fs-9 form-icon" />
          </div>
        </Form.Group>
        {/* Name */}
        {/* <Form.Group className="mb-3 text-start">
          <Form.Label htmlFor="name">Name</Form.Label>
          <Form.Control
            id="name"
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </Form.Group> */}
        {/* Email */}
        {/* <Form.Group className="mb-3 text-start">
          <Form.Label htmlFor="email">Email address</Form.Label>
          <Form.Control
            id="email"
            type="email"
            placeholder="name@example.com"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </Form.Group> */}
        {/* Password and Confirm Password */}
        {/* <Row className="g-3 mb-3">
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
        </Row> */}
        {/* Terms of service */}
        {/* <Form.Check type="checkbox" className="mb-3">
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
        </Form.Check> */}
        {/* Submit button */}
        <Button
          variant="primary" type="submit" className="w-100 mb-3">
          Continue
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
