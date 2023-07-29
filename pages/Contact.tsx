
import EmailIcon from '@mui/icons-material/Email';
import '../styles/contactus.css';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import Footer from './Footer';
import Header from './Header';
const Contact = () => {

  const mapStyles = {
    height: "468px",
    width: "100%",
    borderRadius: "12px",

  };

  const defaultCenter = {
    lat: 16.965337451708745,
    lng: 73.29706253674152
  };

  return (
    <div>
      <div className="contact-header">
        <Header />
      </div>

      <div className="Contact__section">
        <div className="contact__container">
          <div className="contact__titles">
            <div className="headline"><h5 className="contact__title"> Contact Us</h5></div>
            <h1 className="contact__secondTitle">Contact For Any Query</h1>
          </div>
          <div className="contact__cards">
            <div className="contac__card">
              <h5 className="contact__card_title">Booking</h5>
              <div className="contact__card__info">
                <EmailIcon style={{ stroke: "white", strokeWidth: 1 }} className="contact__card__info__icon" />
                <p className="contact__card__info__email">book@example.com</p>
              </div>
            </div>
            <div className="contac__card">
              <h5 className="contact__card_title">General</h5>
              <div className="contact__card__info">
                <EmailIcon className="contact__card__info__icon" />
                <p className="contact__card__info__email">info@example.com</p>
              </div>
            </div>
            <div className="contac__card">
              <h5 className="contact__card_title">Technical</h5>
              <div className="contact__card__info">
                <EmailIcon className="contact__card__info__icon" />
                <p className="contact__card__info__email">tech@example.com</p>
              </div>
            </div>
          </div>

          <div className="contact__map__form">
            <div className="contact__map">
              <LoadScript googleMapsApiKey="AIzaSyCug_97kOgEMDAANlGMbmHW33QdzipuCRo" >
                <GoogleMap
                  mapContainerStyle={mapStyles}
                  zoom={15}
                  center={defaultCenter}
                />
              </LoadScript>

            </div>

            <div className="form">

              <form action="">
                <div className="form-first-container">
                  <div className="form__first_name input-label">
                    <input type="text" className="first_name_input" required />
                    <label htmlFor="first name" className="first_name_label">First Name</label>
                  </div>
                  <div className="form__last_name">
                    <input type="text" className="last_name_input" required />
                    <label className="last_name_label" htmlFor="last name">Last Name</label>
                  </div>
                </div>
                <div className="form__second__container">
                  <input className="subject__input" type="text" required />
                  <label className="subject__label" htmlFor="subject">Subject</label>
                </div>
                <div className="form__third__container">
                  <textarea required className="form__third__container__textarea" name="input_message" id="" cols={57} rows={8} />
                  <label className="form__third__container__label" htmlFor="messsage">Message</label>
                </div>
                <button className="w-[100%] mt-10  h-12 text-indigo-100 transition-colors duration-150 bg-[#fea116] rounded-lg focus:shadow-outline hover:bg-indigo-800">Large block button</button>
              </form>
            </div>

          </div>
        </div>
      </div>

     


    </div>


  );

}

export default Contact;
