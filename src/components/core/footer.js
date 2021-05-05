import React from 'react';
import logomark_pink from '../../images/logomark_pink.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialBlock = (props) => {
  return (
    <a href={props.link} title={props.title} className="social">
      <FontAwesomeIcon icon={["fab", props.icon]} aria-hidden="true"/>
    </a>
  )
}

const Footer = () => {
  return(
    <footer id="footer">
        <div className="width text-center wrapper grid">
          <div id="footer-col-1" className="cell s-full m-third">
              <p><a href="tel:205-598-7843">205-598-7843</a></p>
              <p><a href="mailto:amyburkecounseling@gmail.com">amyburkecounseling@gmail.com</a></p>
              <SocialBlock
                  link="https://www.facebook.com/Amy-Burke-Counseling-319973825294765/"
                  title="Visit on Facebook"
                  icon="facebook-square"
                />
                <SocialBlock
                  link="https://www.instagram.com/amyburkecounseling/"
                  title="Visit on Instagram"
                  icon="instagram"
                />
          </div>
          <div id="footer-col-2" className="cell s-third m-third">
            <img id="footer-icon" src={logomark_pink} width="40px" alt="Amy Burke Counseling"/>
            <div className="small">&copy; 2019 - {(new Date().getFullYear())}</div>
          </div>
          <div id="footer-col-3" className="cell s-full m-third">
          <h6>In Touch Counseling Agency, LLC</h6>
          <p>1229 3rd Avenue North, Birmingham, AL 35203</p>
          </div>
        </div>
      </footer>
    )
}

export default Footer;
