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
export default function FooterItem(props) {
  return <FooterListItem>{props.children}</FooterListItem>;
}
/**
 * Styled components
 */
/**
 * @desc The wrapper <li> for a footer item
 *
 * @const
 *
 * @author  Deckerdent
 * @since   0.0.1
 * @version 0.0.1
 */
const FooterListItem = styled.li`
  & {
  }
`;
