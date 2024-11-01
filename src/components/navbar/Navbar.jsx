'use client'
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaUser, FaShoppingCart, FaHeart, FaBars } from 'react-icons/fa'; 

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <HeaderContainer>
          {/* Large screen layout */}
          <DesktopHeader>

            <Logo className=""><img src="/images/treasureBox.png" alt="logo" /></Logo>

            <Nav>
              <NavLink href="/">Home</NavLink>
              <NavLink href="/categories">Categories</NavLink>
              <NavLink href="/about">About Us</NavLink>
              <NavLink href="/contact">Contact Us</NavLink>
            </Nav>
            <SearchContainer>
              <input type="text" placeholder="Search..." />
            </SearchContainer>
            <IconsContainer>
              <Icon><FaUser /></Icon>
              <Icon><FaShoppingCart /></Icon>
              <Icon><FaHeart /></Icon>
            </IconsContainer>
          </DesktopHeader>
    
          {/* Small screen layout */}
          <MobileHeader>
            <ToggleIcon onClick={() => setMenuOpen(!menuOpen)}>
              <FaBars />
            </ToggleIcon>
            <div><img src="/images/treasureBox.png" alt="logo" /></div>
            <Icon>
              <FaShoppingCart />
            </Icon>
          </MobileHeader>
    
          {menuOpen && (
            <MobileMenu>
              <NavLink href="/">Home</NavLink>
              <NavLink href="/categories">Categories</NavLink>
              <NavLink href="/about">About Us</NavLink>
              <NavLink href="/contact">Contact Us</NavLink>
              <SearchContainer>
                <input type="text" placeholder="Search..." />
              </SearchContainer>
              <IconsContainer>
                <Icon><FaUser /></Icon>
                <Icon><FaHeart /></Icon>
              </IconsContainer>
            </MobileMenu>
          )}
        </HeaderContainer>
      );
}

const HeaderContainer = styled.header`
  width: 100%;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

// Desktop layout
const DesktopHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 30px;

  @media (max-width: 768px) {
    display: none;  // Hide on small screens
  }
`;

const Logo = styled.div`
  margin-right: 20px;
`;

const Nav = styled.nav`
  display: flex;
  gap:60px;
  margin: 0 20px;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: black;
  font-weight: 400;
  transition: color 0.3s;
  font-size: 18px;

  &:hover {
    color: gray;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 20px;

  input {
    width: 100%;
    max-width: 300px;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    color: black;

    &:focus {
      outline: none;
      border-color: #FF0004;
    }
  }
`;

const IconsContainer = styled.div`
  display: flex;
  gap: 35px;
`;

const Icon = styled.div`
  color: black;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    color: gray;
  }
`;

// Mobile layout
const MobileHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;

  @media (min-width: 769px) {
    display: none;  // Only show on small screens
  }
`;

const ToggleIcon = styled.div`
  font-size: 24px;
  cursor: pointer;
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (min-width: 769px) {
    display: none;
  }
`;

export default Navbar