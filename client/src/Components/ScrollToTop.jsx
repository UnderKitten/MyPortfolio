import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

// Start new pages at the top, but leave back/forward to the browser so
// returning to a list keeps your place.
const ScrollToTop = () => {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (navigationType !== "POP") window.scrollTo(0, 0);
  }, [pathname, navigationType]);

  return null;
};

export default ScrollToTop;
