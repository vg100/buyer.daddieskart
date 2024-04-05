import React from  'react'
import SignInForm from '../../../components/modules/auth/SignInForm';
import AuthCardLayout from '../../../layouts/AuthCardLayout';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {

  return (
    <AuthCardLayout className="pb-md-7">
      <SignInForm layout="card" />
    </AuthCardLayout>
  );
};

export default SignIn;
