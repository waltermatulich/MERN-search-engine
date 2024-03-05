import React from 'react';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';

function LoginPage() {
  return (
    <div>
      <h1>Login/Signup</h1>
      <LoginForm />
      <SignupForm />
    </div>
  );
}

export default LoginPage;
