import React from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import '../styles/footer.css';
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__intro__card">
                <div className="footer__company">
                    <h4>Company</h4>
                    <a href=""><ChevronRightIcon />About Us</a>
                    <a href=""><ChevronRightIcon />Contact Us</a>
                    <a href=""><ChevronRightIcon />Privacy Policy</a>
                    <a href=""><ChevronRightIcon />Terms & Condition</a>
                    <a href=""><ChevronRightIcon />Reservation</a>
                </div>
                <div className="footer__contact">
                    <h4>Contact</h4>
                    <p><LocationOnIcon className="footer__contact__address" />123 Street, New York, USA</p>
                    <p><CallIcon className="footer__contact__address" />+012 345 67890</p>
                    <p><MailIcon className="footer__contact__address" />info@example.com</p>
                    <div className="footer__contact__socialmedia">
                        <TwitterIcon className="footer__contact__icon" />
                        <FacebookIcon className="footer__contact__icon" />
                        <YouTubeIcon className="footer__contact__icon" />
                        <LinkedInIcon className="footer__contact__icon" />
                    </div>

                </div>
                <div className="footer__opening">
                    <h4>Opening</h4>
                    <h5>Monday - Saturday</h5>
                    <p>09 AM - 09 PM</p>
                    <h5>Sunday</h5>
                    <p>10 AM - 08 PM</p>
                </div>
                <div className="footer__newsletter">
                    <h4>Newsletter</h4>
                    <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
