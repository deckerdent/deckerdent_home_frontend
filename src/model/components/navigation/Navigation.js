import React, { useState } from "react";
import styled from "styled-components";

/**
 * @desc
 *
 * @const {function}
 * @param {object} props - react props
 *
 * @author  Deckerdent
 * @since   0.0.1
 * @version 0.0.1
 */
export default function Navigation(props) {
  const [isMobileNav, setIsMobileNav] = useState(false);
  return (
    <NavigationWrapper>
      <button onClick={() => setIsMobileNav(!isMobileNav)}></button>
      <NavList isMobileNav={isMobileNav}>{props.children}</NavList>
    </NavigationWrapper>
  );
}
/**
 * Styled components
 */
/**
 * @desc The <nav> component
 *
 * @const
 *
 * @author  Deckerdent
 * @since   0.0.1
 * @version 0.0.1
 */
const NavigationWrapper = styled.nav`
  & {
    position: relative;
    display: flex;
    flex: 1 0;
    align-items: center;
    justify-content: flex-end;
  }

  @media (max-device-width: 992px) {
    & button {
      border: none;
      background-color: red;
      margin-right: 10px;
    }
  }

  @media (min-device-width: 993px) {
    & button {
      display: none;
    }
  }
`;
/**
 * @desc a list for the navigation elements. Provides responsiveness.
 *
 * @const
 *
 * @author  Deckerdent
 * @since   0.0.1
 * @version 0.0.1
 */
const NavList = styled.ul`
  & {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
    background-color: transparent;
  }

  @media (max-device-width: 992px) {
    & {
      position: absolute;
      opacity: ${(props) => (props.isMobileNav ? 1 : 0)};
      flex-direction: column;
      right: 0;
      top: ${(props) => (props.isMobileNav ? "100%" : 0)};
      width: 100vw;
      transition: opacity 1s ease, top 1s linear;
      background-color: var(--secondary-light);
    }

    & * {
      display: ${(props) => (props.isMobileNav ? "block" : "none")};
    }
  }
`;
