import { Link } from 'react-router-dom';
import logo from './../../images/logo.svg';

const Header = () => {
	return (
		<header>
          <div id="banner" className="width text-center">
            <Link to="/" className="image-link">
              <img src={logo} alt="Amy Burke Counseling" id="logo" className="center-y" width="550px"/>
              <h1 className="display-hidden">Amy Burke Counseling</h1>
            </Link>
          </div>
        </header>
	)
}

export default Header