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
export default function FooterWrapper(props) {
  return <Footer>{props.children}</Footer>;
}

/**
 * Styled components
 */
/**
 * @desc The <footer> component
 *
 * @const
 *
 * @author  Deckerdent
 * @since   0.0.1
 * @version 0.0.1
 */
const Footer = styled.footer`
  & {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    min-height: 15vh;
    bottom: 0;
    margin-top: auto;
    padding: 20px 10px;
    background-color: var(--secondary-dark);
    color: var(--secondary-light);
  }
`;
