import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Map from './../core/map';

const SocialBlock = (props) => {
  return (
    <a href={props.link} title={props.title}>
      <FontAwesomeIcon icon={["fab", props.icon]} aria-hidden="true"/>
    </a>
  )
}

const Contact = ({element}) => {
	useEffect(() => {
	        document.title = 'Contact | Amy Burke Counseling'
	    }, []);
	return (
	    <section id="contact" ref={element}>
	      <div className="grid content width">
	        <div className="cell s-full m-half center-x">
	          <h2>get in touch</h2>
	          <div id="info">
	            <div className="contact-block">
	              <FontAwesomeIcon icon="phone" title="phone"/>
	              <a href="tel:205-598-7843">205-598-7843</a>
	            </div>
	            <div className="contact-block">
	              <FontAwesomeIcon icon="envelope" title="email"/>
	              <a href="mailto:amyburkecounseling@gmail.com">amyburkecounseling@gmail.com</a>
	            </div>
	            <div className="contact-block">
	              <FontAwesomeIcon icon="map-marker-alt" title="address"/>
	              <div>
	                <p className="bold margin-bottom-05">Practicing with In Touch Counseling Agency, LLC</p>
	                <p>
	                  1229 3rd Avenue North <br/>
	                  Birmingham, AL 35203
	                </p>
	              </div>
	            </div>
	            <div id="social-links">
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
	          </div>
	        </div>
	        <div className="cell s-full m-half">
	          <Map />
	        </div>
	      </div>
	      <div id="referral" className="width text-center">
	        <a href="https://hannahsteindesigns.com/" target="_blank" rel="noopener noreferrer" alt="this site was created by Hannah Stein">designed & developed by hannah stein</a>
	      </div>
	    </section>
	);
}

export default Contact