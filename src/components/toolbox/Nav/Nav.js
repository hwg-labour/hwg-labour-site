import Burger from "./Burger";
import Links from "./Links";
import Logo from "./Logo";
import PropTypes from "prop-types";
import React, { useState } from "react";
import styled from "styled-components";

const NavWrapper = styled.nav`
  color: white;
  left: 0;
  right: 0;
  top: 0;
  z-index: 10;
  position: relative;
`;

const MobileStuff = styled.div`
`;

const Overlay = styled.div`
  transition: 0.3s all ease-out;
`;

const BurgerWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
`;

const Nav = (props) => {
  const { theme, links, logo, } = props;
  
  const [open, setOpen] = useState(false);

  const closeMenu = setOpen(false);
  const toggleMenu = setOpen(!open);

  return (
    <NavWrapper>
      <Links 
        close = { closeMenu } 
        open = { open } 
        links = { links }
      />

      <MobileStuff>
        <Overlay open = { open } />

        <BurgerWrapper onClick = { toggleMenu }>
          <Burger
            open = { open }
          />
        </BurgerWrapper>
      </MobileStuff>

      {logo}
    </NavWrapper>
  );
};

Nav.propTypes = {
  closeMenu: PropTypes.func,
  links: PropTypes.array,
  logo: PropTypes.object,
  open: PropTypes.bool,
  toggleMenu: PropTypes.func,
};

export default Nav;
