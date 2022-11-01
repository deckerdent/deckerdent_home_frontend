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

export default function NavigationItem(props) {
  return <NavItem>{props.children}</NavItem>;
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
const NavItem = styled.li`
  & {
    padding: 10px 20px;
    font-size: 1.4em;
    font-weight: 500;
    color: var(--secondary-dark);
  }
`;
