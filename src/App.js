import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Switch } from 'react-router-dom';
import useSticky from './hooks/useSticky';

import Header from './components/core/header';
import Nav from './components/core/nav';
import Home from './components/pages/home';
import About from './components/pages/about';
import Rates from './components/pages/rates';
import Contact from './components/pages/contact';
import NotFound from './components/pages/404';
import Footer from './components/core/footer';
import GoogleAnalytics from './components/core/analytics';

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookSquare,
  faInstagram } from '@fortawesome/free-brands-svg-icons';
import {
  faChild,
  faEnvelope,
  faHome,
  faMapMarkerAlt,
  faPhone,
  faUser,
  faUsers
} from '@fortawesome/pro-solid-svg-icons';

library.add(
  faFacebookSquare,
  faInstagram,
  faChild,
  faEnvelope,
  faHome,
  faMapMarkerAlt,
  faPhone,
  faUser,
  faUsers
);

const routes = [
  {
    'path': '/',
    'component': Home,
    'exact': true
  },
  {
    'path': '/about',
    'component': About,
    'exact': false
  },
  {
    'path': '/rates',
    'component': Rates,
    'exact': false
  },
  {
    'path': '/contact',
    'component': Contact,
    'exact': false
  },
  {
    'path': '',
    'component': NotFound,
    'exact': false
  }
];



const App = () => {
  const { isSticky, element } = useSticky();
  
  return (
    <HashRouter>
      <div>
        <Header />
        <Nav sticky={isSticky} />
        <Switch>
          { routes.map((route) => (
            <Route key={route.path} path={route.path} exact={route.exact}>
              <route.component element={element} />
            </Route>
          )) }
        </Switch>
        <Footer />
        <GoogleAnalytics />
      </div>
    </HashRouter>
    )
}

export default App;