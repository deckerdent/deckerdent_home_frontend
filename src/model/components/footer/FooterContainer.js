import styled from "styled-components";
/**
 * @desc
 *
 * @const {function}
 * @param {object} props - react props, accepts children, alignment:string (center, left, right), title:string
 *
 * @author  Deckerdent
 * @since   0.0.1
 * @version 0.0.1
 */
export default function FooterContainer(props) {
  let defaultAlignment = "left";
  let alignment =
    props.alignment && checkAlignment(props.alignment)
      ? props.alignment
      : defaultAlignment;

  return (
    <FooterContainerWrapper alignment={alignment}>
      <Headline>{props.title}</Headline>
      <FooterLinkList>{props.children}</FooterLinkList>
    </FooterContainerWrapper>
  );
}

const checkAlignment = (alignment) => {
  let acceptedAlignments = ["left", "right", "center"];
  return acceptedAlignments.includes(alignment);
};

/**
 * Styled components
 */
/**
 * @desc The wrapper <div> for a footer container component
 *
 * @const
 *
 * @author  Deckerdent
 * @since   0.0.1
 * @version 0.0.1
 */
const FooterContainerWrapper = styled.div`
  & {
    background-color: transparent;
    text-align: ${(props) => props.alignment};
  }
`;

/**
 * @desc The <h1> for a footer container component
 *
 * @const
 *
 * @author  Deckerdent
 * @since   0.0.1
 * @version 0.0.1
 */
const Headline = styled.h1`
  & {
    font-size: var(--headline-s);
    padding: 0;
    margin: 0;
  }
`;
/**
 * @desc The <ul> for a footer container component
 *
 * @const
 *
 * @author  Deckerdent
 * @since   0.0.1
 * @version 0.0.1
 */
const FooterLinkList = styled.ul`
  & {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;
