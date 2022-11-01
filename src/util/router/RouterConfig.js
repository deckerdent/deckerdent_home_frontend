import { createBrowserRouter } from "react-router-dom";

import Root from "../../layout/Root";
import Home from "../../view/Home";

/**
 * @desc A function that returns the router config
 *
 * @const {function}
 * @param {object} props - react props
 *
 * @author  Deckerdent
 * @since   0.0.1
 * @version 0.0.1
 */
const getRouter = () => {
  const routes = [
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
  ];

  return createBrowserRouter(routes);
};

export const routerConfig = getRouter();
