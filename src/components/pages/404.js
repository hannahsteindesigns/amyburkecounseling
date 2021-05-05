import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const NotFound = ({element}) => {
	useEffect(() => {
        document.title = 'Page Not Found | Amy Burke Counseling'
    }, []);
	return (
	  <section className="content width" ref={element}>
	    <h3>Page not found</h3>
	    <p>Oops! It seems like there has been an error. You can <Link to="/">go back to the home page</Link> and try again or <Link to="/contact">contact me</Link> if you're still having issues.</p>
	  </section>
	)
}

export default NotFound
