"use client"
import styled from 'styled-components';

const SignUp = () => {
    return (
      <FormContainer>
        <Title>Sign Up</Title>
        <Subtitle>Please enter your email address below to create an account.</Subtitle>
        <form>
          <Label htmlFor="email">Email Address</Label>
          <Input type="email" id="email" required />
          <PrivacyText>
            Your personal data will be used to support your experience throughout this website,
            to manage access to your account, and for other purposes described in our{' '}
            <span className="privacy-policy">privacy policy</span>.
          </PrivacyText>
          <SubmitButton type="submit">Sign Up</SubmitButton>
        </form>
      </FormContainer>
    );
  };


  // Container for the Sign-Up Form
const FormContainer = styled.div`
max-width: 400px;
margin: 0 auto;
padding: 2rem;
background-color: #f5f5f5;
margin: 50px auto;
border-radius: 8px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

// Title and Subtitle Styling
const Title = styled.h2`
font-size: 25px;
font-weight: 400;
color: #333;
`;

const Subtitle = styled.p`
font-size: 1rem;
color: #666;
margin-bottom: 1.5rem;
`;

// Input Label and Field
const Label = styled.label`
display: block;
font-size: 1rem;
color: #333;
margin-bottom: 0.5rem;
`;

const Input = styled.input`
width: 100%;
padding: 0.75rem;
font-size: 1rem;
border: 1px solid #ccc;
border-radius: 4px;
margin-bottom: 1.5rem;
outline: none;
`;

// Privacy Policy Text
const PrivacyText = styled.p`
font-size: 0.85rem;
color: #666;
margin-bottom: 1.5rem;

.privacy-policy {
  font-weight: bold;
  color: #007bff;
  cursor: pointer;
  text-decoration: underline;
}
`;

// Button Styling
const SubmitButton = styled.button`
padding: 0.75rem 1.5rem;
font-size: 1rem;
color: #fff;
background-color: #FF0004;
border: none;
border-radius: 4px;
cursor: pointer;
width: 100%;

&:hover {
  background-color: #0056b3;
}
`;
  
  export default SignUp;