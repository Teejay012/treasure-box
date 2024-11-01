"use client";
import React from 'react';
import styled from 'styled-components';

const Login = () => {
    return (
        <FormContainer>
            <Form>
                <Title>Login</Title>
                <Subtitle>Input details to access your account</Subtitle>

                <label>Email</label>
                <input type="email" placeholder="Enter your email" />

                <label>Password</label>
                <input type="password" placeholder="Enter your password" />

                <Options>
                    <CheckboxContainer>
                        <input type="checkbox" id="rememberMe" />
                        <label htmlFor="rememberMe">Remember Me</label>
                    </CheckboxContainer>
                    <ForgotPassword href="#">Forgot Password?</ForgotPassword>
                </Options>

                <Button type="submit">Login</Button>
            </Form>
        </FormContainer>
    );
};

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  background-color: #F5F5F5;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 100%;
  max-width: 400px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  label {
    font-size: 14px;
    color: #333;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  input[type="email"], input[type="password"] {
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
    color: #333;

    &:focus {
      outline: none;
      border-color: ##FF0004;
      box-shadow: 0 0 5px rgba(0, 123, 255, 0.3);
    }
  }
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 400;
  color: #333;
  margin-bottom: 5px;
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
`;

const Options = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;

  input[type="checkbox"] {
    margin-right: 8px;
    accent-color: #007bff;
  }

  label {
    font-size: 14px;
    color: #333;
  }
`;

const ForgotPassword = styled.a`
  font-size: 14px;
  color: #007bff;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background-color: #FF0004;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export default Login