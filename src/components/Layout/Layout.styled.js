import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: #2c3a47;
  font-weight: 500;
  font-size: 24px;
  transition: all 0.3s;

  &.active {
    color: white;
    background-color: #fd7272;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;

  > nav {
    display: flex;
  }
`;

export const Text = styled.span`
  color: #2c3a47;
  font-weight: 500;
  font-size: 24px;
`;

export const Btn = styled.button`
  display: block;
  margin-top: 20px;
  padding: 15px 25px;
  font-size: 22px;
  font-weight: 700;
  background-color: #fd7272;
  color: white;
  border-radius: 4px;
  border: none;
`;
