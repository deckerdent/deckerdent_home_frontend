import styled from "styled-components";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
  FaRedditSquare,
} from "react-icons/fa";

import FooterWrapper from "../components/footer/FooterWrapper";
import FooterContainer from "../components/footer/FooterContainer";
import FooterItem from "../components/footer/FooterItem";
import Unlink from "../components/links/Unlink";
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
export default function Footer(props) {
  return (
    <FooterWrapper>
      <FooterContainer title="first">
        <FooterItem>About Us</FooterItem>
        <FooterItem>Impressum</FooterItem>
      </FooterContainer>
      <FooterContainer title="second" alignment="center">
        <FooterItem>
          <SocialMediaWrapper>
            <Unlink>
              <FaFacebookSquare />
            </Unlink>
            <Unlink>
              <FaInstagram />
            </Unlink>
            <Unlink>
              <FaTwitterSquare />
            </Unlink>
          </SocialMediaWrapper>
        </FooterItem>
      </FooterContainer>
      <FooterContainer title="third" alignment="right">
        <FooterItem>First</FooterItem>
        <FooterItem>Sec</FooterItem>
        <FooterItem>Third</FooterItem>
      </FooterContainer>
    </FooterWrapper>
  );
}

const SocialMediaWrapper = styled.div`
  & {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    font-size: 3em;
  }

  & * {
    margin-right: 3px;
  }
`;
