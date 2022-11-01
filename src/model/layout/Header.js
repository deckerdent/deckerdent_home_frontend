import HeaderWrapper from "../components/header/HeaderWrapper";
import Navigation from "../components/navigation/Navigation";
import NavigationItem from "../components/navigation/NavigationItem";
import Logo from "../logo/Logo";
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
export default function Header(props) {
  return (
    <HeaderWrapper logo={<Logo />}>
      <Navigation>
        <NavigationItem>
          <Unlink to={`/`}>Home</Unlink>
        </NavigationItem>
      </Navigation>
    </HeaderWrapper>
  );
}
