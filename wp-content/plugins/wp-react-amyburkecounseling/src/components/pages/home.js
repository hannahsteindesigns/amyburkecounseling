import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';
//import useFetch from './../../hooks/useFetch';

const Home = () => {

  const [pageData, setPageData] = useState("");

  useEffect(() => {
        document.title = 'Amy Burke Counseling'
        
        async function getPageData() {
          try {
            const response = await axios.get("http://localhost:8888/wp-json/wp/v2/pages/5");
            setPageData(response.data.content.rendered);
          } catch (error) {
            console.log(error);
          }
        }

        getPageData();
    }, [pageData]);

  return (
      <section id="home">
        <div className="width text-center">
          {/*<p>
            Traumatic experiences and mental health difficulties can leave you feeling isolated and out of control of your own life. If you are experiencing significant distress in your life and you are not sure what to do next, I encourage you to reach out for help. Counseling can help you gain perspective, explore options you may have, and help you to feel empowered again.
          </p>*/}
          { ReactHtmlParser(pageData) }
          <div id="services">
            <ServiceIcon icon="user" name="adults" />
            <ServiceIcon icon="child" name="children & adolescents" />
            <ServiceIcon icon="home" name="families" />
            <ServiceIcon icon="users" name="group" />
          </div>
        </div>
      </section>
    )
}

export default Home;

const ServiceIcon = (props) => {
  return (
    <div className="service-icon">
      <FontAwesomeIcon icon={props.icon} className="t-dark-pink" size="3x" />
      <div>{props.name}</div>
    </div>
  )
}