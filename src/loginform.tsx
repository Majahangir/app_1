// src/LoginForm.tsx
import React, { useState } from 'react';
import styled from 'styled-components';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <FormContainer>
      <Form onSubmit={handleLogin}>
        <Title>Login Form</Title>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <ForgotPassword>forgot password?</ForgotPassword>
        <Button type="submit">Submit</Button>
        <Divider>OR</Divider>
        <OAuthButton google>Continue with Google</OAuthButton>
        <OAuthButton facebook>Continue with Facebook</OAuthButton>
        <CreateAccount>Already have an account <a href="#">Create an account</a></CreateAccount>
      </Form>
    </FormContainer>
  );
};

export default LoginForm;

const FormContainer = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 40px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  text-align: center;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
`;

const ForgotPassword = styled.a`
  margin-bottom: 20px;
  text-align: right;
  color: #007bff;
  text-decoration: none;
  cursor: pointer;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const Divider = styled.div`
  text-align: center;
  margin: 20px 0;
  position: relative;
  &:before, &:after {
    content: '';
    height: 1px;
    background: #ddd;
    position: absolute;
    top: 50%;
    width: 45%;
  }
  &:before {
    left: 0;
  }
  &:after {
    right: 0;
  }
`;

const OAuthButton = styled.button<{ google?: boolean; facebook?: boolean }>`
  padding: 10px;
  margin-bottom: 10px;
  background-color: ${(props) => (props.google ? '#db4437' : props.facebook ? '#3b5998' : '#ddd')};
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

const CreateAccount = styled.div`
  margin-top: 20px;
  text-align: center;
  a {
    color: #007bff;
    text-decoration: none;
  }
`;
