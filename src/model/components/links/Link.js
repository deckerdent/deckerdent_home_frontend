import { Link as ReactRouterLink } from "react-router-dom";
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
export default function Link(props) {
  return <ReactRouterLink {...props}>{props.children}</ReactRouterLink>;
}
