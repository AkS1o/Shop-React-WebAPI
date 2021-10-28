import { Fragment } from "react";
import { Link } from "react-router-dom";

// Import 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitch, faDiscord, faTwitter } from '@fortawesome/fontawesome-free-brands'
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";


const ContactUs = () => {
    return (
        <Fragment>
            <section className="contact">
                <div className="container">
                    <div className="row justify-content-evenly">
                        <div className="col-6">
                            <h2>Contact form</h2>
                            <form>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="form-group">
                                            <label>Firstname</label>
                                            <input />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-group">
                                            <label>Lastname</label>
                                            <input />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input />
                                </div>
                                <div className="form-group">
                                    <label>Message</label>
                                    <textarea />
                                </div>
                                <button className="btn btn btn-outline-white">By Now</button>
                            </form>
                        </div>
                        <div className="col-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex my-4">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                        <div>
                                            <h4>Email: </h4>
                                            <p>info@sell.com</p>
                                            <p>support@sell.com</p>
                                        </div>
                                    </div>
                                    <div className="d-flex my-4">
                                        <FontAwesomeIcon icon={faPhone} />
                                        <div>
                                            <h4>Phone: </h4>
                                            <p>408-919-1668</p>
                                            <p>408-919-1690</p>
                                        </div>
                                    </div>
                                    <ul className="socials">
                                        <li><Link to="#"><FontAwesomeIcon icon={faInstagram} /></Link></li>
                                        <li><Link to="#"><FontAwesomeIcon icon={faTwitch} /></Link></li>
                                        <li><Link to="#"><FontAwesomeIcon icon={faTwitter} /></Link></li>
                                        <li><Link to="#"><FontAwesomeIcon icon={faDiscord} /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default ContactUs;