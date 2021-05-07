// adapted from http://www.sheshbabu.com/posts/automatic-pageview-tracking-using-react-router/
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const GoogleAnalytics = () => {
  const history = useHistory();
    
    function trackPageView() {
      if (typeof window.ga === 'function') {
        window.ga("set", "page", window.location.pathname);
        window.ga("send", "pageview");
      }
    }

    useEffect(() => {
      trackPageView();
      history.listen(trackPageView);
    }, [history]);

    return <div id="GA_temp"></div>;
}

export default GoogleAnalytics;