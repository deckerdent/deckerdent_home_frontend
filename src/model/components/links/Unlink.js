import styled from "styled-components";

import Link from "./Link";
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
export default function Unlink(props) {
  return <StyledLink {...props}>{props.children}</StyledLink>;
}

/**
 * Styled components
 */
/**
 * @desc An <a> without default styles
 *
 * @const
 *
 * @author  Deckerdent
 * @since   0.0.1
 * @version 0.0.1
 */
const StyledLink = styled(Link)`
  & {
    color: inherit;
    font: inherit;
    text-decoration: none;
  }
`;
