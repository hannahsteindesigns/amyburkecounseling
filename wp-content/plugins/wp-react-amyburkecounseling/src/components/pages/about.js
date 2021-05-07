import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';
import amy from '../../images/amy.jpg';

const About = () => {
  
  const [pageData, setPageData] = useState("");
  useEffect(() => {
        document.title = 'About | Amy Burke Counseling';
        async function getPageData() {
          try {
            const response = await axios.get("http://localhost:8888/wp-json/wp/v2/pages/8");
            setPageData(response.data.content.rendered);
          } catch (error) {
            console.log(error);
          }
        }

        getPageData();
    }, [pageData]);
  return (
    <section id="about" className="content">
          <div className="width grid">
            <h2 className="cell s-full s-text-center m-text-left">about me</h2>
            <div className="cell s-full m-third text-center img-container">
              <img src={amy} alt="Amy Burke" className="img-about"/>
            </div>
          <div className="cell s-full m-twothirds">
            {/*<p>
              I graduated from Spring Hill College with a Bachelor’s in Psychology and the University of Montevallo with a Master’s in Clinical Mental Health Counseling. I am also an Associate Licensed Counselor under the supervision of Wanda Bowden, LPC-S. My specialties are working with survivors of trauma, particularly domestic violence and sexual assault, as well as a variety of mood and anxiety disorders. If you are seeking help, I am here to walk alongside you in your healing journey.
            </p>
            <div className="sep"></div>
            <p>
              I believe each person is unique, therefore I use a variety of treatment approaches and techniques tailored to fit each individual’s needs. I use treatment approaches including cognitive-behavioral, solution-focused, mindfulness, and humanistic approaches. I also believe in the importance of the neurobiology of trauma and incorporate coping with physiological symptoms and physical self-care.
            </p>
            <div className="sep"></div>
            <p>
              I believe counseling is a collaborative process between counselor and client. You are the expert on your life, and I have training and skills to encourage positive change. Together, I believe we can find effective ways to deal with problems in your life and promote your optimal mental health. I hope you will <Link to="/contact" title="contact me">reach out</Link> to see if I am the right fit for you!
            </p>*/}
            { ReactHtmlParser(pageData) }
          </div>
        </div>
      </section>
    )
}

export default About;
