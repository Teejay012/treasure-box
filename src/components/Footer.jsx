"use client";
import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
      <FooterContainer>
        <FooterSection>
          <Title>ABOUT US</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Text>
        </FooterSection>
        <FooterSection>
          <Title>Important Links</Title>
          <LinksList>
            <LinkItem>Home</LinkItem>
            <LinkItem>About Us</LinkItem>
            <LinkItem>Contact Us</LinkItem>
            <LinkItem>Categories</LinkItem>
            <LinkItem>FAQs</LinkItem>
          </LinksList>
        </FooterSection>
        <FooterSection>
          <Title>Our Newsletter</Title>
          <Text>Sign up for the latest Ice offers and exclusives.</Text>
          <NewsletterInputContainer>
            <NewsletterInput type="email" placeholder="Enter your email" />
            <SubscribeButton>Subscribe</SubscribeButton>
          </NewsletterInputContainer>
        </FooterSection>
      </FooterContainer>
    );
  };

  const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #f8f9fa;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const FooterSection = styled.div`
  flex: 1;
  padding: 10px;
  @media (min-width: 768px) {
    padding: 20px;
  }
`;

const Title = styled.h3`
  margin-bottom: 10px;
  font-size: 1.5rem;
`;

const Text = styled.p`
  margin: 0 0 10px;
`;

const LinksList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const LinkItem = styled.li`
  margin: 5px 0;
`;

const NewsletterInputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  flex-wrap: wrap;
`;

const NewsletterInput = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  margin-right: 10px;
`;

const SubscribeButton = styled.button`
  background-color: #FF0004;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
  
  export default Footer;