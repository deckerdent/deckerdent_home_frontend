import { Outlet } from "react-router-dom";
import styled from "styled-components";

import Header from "../model/layout/Header";
import Footer from "../model/layout/Footer";
/**
 * @desc The layout used as the root element for the router
 *
 * @const {function}
 * @param {object} props - react props
 *
 * @author  Deckerdent
 * @since   0.0.1
 * @version 0.0.1
 */
const Root = (props) => {
  return (
    <App className="App">
      <Header></Header>
      <div>
        <Outlet />
      </div>
      <Footer></Footer>
    </App>
  );
};

/**
 * styled components
 */
/**
 * @desc The root <div> component
 *
 * @const
 *
 * @author  Deckerdent
 * @since   0.0.1
 * @version 0.0.1
 */
const App = styled.div`
  &.App {
    display: flex;
    flex: 1 0 100%;
    flex-direction: column;
    align-items: stretch;
    flex-wrap: nowrap;
    min-height: 100vh;
  }
`;

export default Root;
