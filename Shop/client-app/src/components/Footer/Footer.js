import { Fragment } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitch, faDiscord, faTwitter } from '@fortawesome/fontawesome-free-brands'

const Footer = () => {
    return (
        <Fragment>
            <footer className="footer">
                <div className="container">
                    <div className="info-top">
                        <div className="col">
                            <div className="logo">
                                <Link to="#">logo</Link>
                            </div>
                        </div>
                        <div className="col">
                            <h3>Communities</h3>
                            <ul>
                                <li><Link to="#">Page 1</Link></li>
                                <li><Link to="#">Page 2</Link></li>
                                <li><Link to="#">Page 3</Link></li>
                            </ul>
                        </div>
                        <div className="col">
                            <h3>Products</h3>
                            <ul>
                                <li><Link to="#">Page 1</Link></li>
                                <li><Link to="#">Page 2</Link></li>
                                <li><Link to="#">Page 3</Link></li>
                            </ul>
                        </div>
                        <div className="col">
                            <h3>Company</h3>
                            <ul>
                                <li><Link to="#">Page 1</Link></li>
                                <li><Link to="#">Page 2</Link></li>
                                <li><Link to="#">Page 3</Link></li>
                            </ul>
                        </div>
                        <div className="col">
                            <div className="col">
                                <h3>Social</h3>
                                <ul className="socials">
                                    <li><Link to="#"><FontAwesomeIcon icon={faInstagram}  size="2x"/></Link></li>
                                    <li><Link to="#"><FontAwesomeIcon icon={faTwitch} size="2x"/></Link></li>
                                    <li><Link to="#"><FontAwesomeIcon icon={faTwitter} size="2x" /></Link></li>
                                    <li><Link to="#"><FontAwesomeIcon icon={faDiscord}  size="2x"/></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="info-bottom">
                        <ul>
                            <li>Privacy</li>
                            <li>Policy</li>
                            <li>Ad Choices</li>
                            <li>Cookie</li>
                            <li>Policy</li>
                        </ul>
                        <p className="copyright">© 2021 Logo Interactive, Inc.</p>
                    </div>
                </div>
            </footer >
        </Fragment >
    )
}

export default Footer;