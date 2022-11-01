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

export default function HeaderWrapper(props) {
  return (
    <Header>
      <LogoWrapper>{props.logo}</LogoWrapper>
      {props.children}
    </Header>
  );
}

/**
 * styled components
 */
/**
 * @desc The <header> component
 *
 * @const
 *
 * @author  Deckerdent
 * @since   0.0.1
 * @version 0.0.1
 */
const Header = styled.header`
  & {
    position: sticky;
    top: 0;
    display: flex;
    align-items: stretch;
    align-content: center;
    justify-content: space-between;
    flex-wrap: nowrap;
    background-color: transparent;
  }

  &:first-child {
    padding-top: 20px;
    padding-left: 10px;
    padding-bottom: 20px;
  }
`;
/**
 * @desc A <div> component to wrap around a (most commonly SVG) logo. Provides resizing for different device width.
 *
 * @const
 *
 * @author  Deckerdent
 * @since   0.0.1
 * @version 0.0.1
 */
const LogoWrapper = styled.div`
  @media (max-device-width: 576px) {
    & {
      width: 36%;
    }
  }

  @media (min-device-width: 577px) and (max-device-width: 768px) {
    & {
      width: 30%;
    }
  }

  @media (min-device-width: 769px) and (max-device-width: 992px) {
    & {
      width: 24%;
    }
  }

  @media (min-device-width: 993px) and (max-device-width: 1199px) {
    & {
      width: 18%;
    }
  }

  @media (min-device-width: 1200px) {
    & {
      width: 12%;
    }
  }
`;
