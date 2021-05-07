import { useEffect } from 'react';

const Rates = ({element}) => {
  useEffect(() => {
          document.title = 'Rates | Amy Burke Counseling'
  }, []);
  return (
      <section id="rates" className="content" ref={element}>
        <div className="width">
          <p className="text-center m-text-left">
            Currently I do not accept private insurance.
            I accept Medicaid and private pay, and I offer sliding scale rates.
            I also offer a free 15-minute phone consultation to discuss rates, answer your questions, 
            and help you determine if I am the right fit for you.
          </p>
        </div>
      </section>
    )
}


export default Rates;
