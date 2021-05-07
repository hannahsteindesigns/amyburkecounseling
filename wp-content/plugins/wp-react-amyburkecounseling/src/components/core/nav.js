import { NavLink } from 'react-router-dom';
import logomark_black from './../../images/logomark_black.svg';

const Nav = ({ sticky }) => {
  let navClasses = ["nav", "bg-pink", "text-center"]
  if (sticky) { 
    navClasses.push("sticky")
  } else {
    navClasses.length = 3
  }

  return (
    <nav className={navClasses.join(" ")}>
      <div className="width">
        <NavLink exact to="/" activeClassName="active">home</NavLink>
        <NavLink to="/about" activeClassName="active">about</NavLink>
        {sticky && <img src={logomark_black} alt="Amy Burke Counseling" title="Amy Burke Counseling" id="logo" width="30"/> }
        <NavLink to="/rates" activeClassName="active">rates</NavLink>
        <NavLink to="/contact" activeClassName="active">contact</NavLink>
      </div>
    </nav>
  )
}

export default Nav;
