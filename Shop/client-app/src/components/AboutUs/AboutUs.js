import { Fragment } from "react";
import { Link } from "react-router-dom";

// Import 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCar, faCog, faUserCog, } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faTwitch, faTwitter } from "@fortawesome/fontawesome-free-brands";

const AboutUs = () => {
    return (
        <Fragment>
            <section className="about-store">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div className="img-border">
                                <img src="../img/christin-hume-hBuwVLcYTnA-unsplash.jpg" alt="img" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-6">
                            <h3 className="title-line">About our Store</h3>
                            <p>
                                Sed mollis, est laoreet tempus fermentum, erat libero tristique risus,
                                nec commodo felis nunc sed augue. Nam iaculis aliquet enim pulvinar lacinia.
                                Praesent ornare nisi sed tempor pharetra. Duis nec venenatis quam.
                                Sed et efficitur massa. Etiam semper non nunc at commodo. Duis est lectus,
                                interdum a ullamcorper nec, tristique id justo.
                            </p>
                            <ul>
                                <li><FontAwesomeIcon icon={faCheck} />Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                <li><FontAwesomeIcon icon={faCheck} />Maecenas vel turpis ac nisl varius vehicula.</li>
                                <li><FontAwesomeIcon icon={faCheck} />Aenean sit amet nulla aliquam, pulvinar nunc ut, pretium felis.</li>
                            </ul>
                            <p>
                                Etiam tristique quam vitae ligula porttitor, in aliquam massa euismod.
                                Vivamus dictum dignissim mauris, quis cursus orci laoreet ut. Cras blandit
                                iaculis sem, sed cursus dui ullamcorper quis. Pellentesque dapibus purus
                                mauris. Proin vitae erat ut purus rhoncus molestie. In elementum enim
                                vitae justo sollicitudin tempor. Vivamus nec lacus nisi. Duis
                                sollicitudin convallis urna a dignissim. Proin in justo maximus,
                                molestie eros non, laoreet justo.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="services">
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <div className="service">
                                <FontAwesomeIcon icon={faCog} />
                                <h3>Unlimited Helpers</h3>
                                <div className="desc">
                                    Aliquam volutpat velit diam, in pulvinar sapien sagittis non.
                                    Fusce consectetur dolor felis, in aliquam ante tristique id.
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="service">
                                <FontAwesomeIcon icon={faUserCog} />
                                <h3>Friendly Support</h3>
                                <div className="desc">
                                    Aliquam id purus non tellus lobortis congue.
                                    Aenean non ultrices velit, a mattis tortor.
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="service">
                                <FontAwesomeIcon icon={faCar} />
                                <h3>Free Delivery</h3>
                                <div className="desc">
                                    Praesent ornare faucibus lacinia. Sed tincidunt, felis in malesuada
                                    porttitor, orci urna tempor dolor, at malesuada sem augue vel neque.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="our-story">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <h3 className="title-line">Our Story</h3>
                            <p>
                                Morbi dignissim nec purus eu iaculis. Pellentesque
                                habitant morbi tristique senectus et netus et
                                malesuada fames ac turpis egestas. Ut rhoncus
                                elit vitae aliquet porta. Nulla non tristique magna.
                                Nulla volutpat vitae mi vitae aliquet. Integer
                                vulputate, quam quis ultrices imperdiet, nisl metus
                                tempus turpis, vitae posuere mauris nisi ut ligula.
                                Vivamus sed ultrices mauris, in semper ex.
                            </p>
                            <p>
                                Nullam sit amet magna iaculis, mollis quam id, posuere lacus.
                                Vestibulum lacinia ex ac odio condimentum, et consectetur dui
                                ultrices. Proin pretium metus id magna tristique, et varius
                                orci ullamcorper. Duis erat orci, scelerisque non consequat nec,
                                commodo et quam. Maecenas pellentesque malesuada hendrerit.
                            </p>
                        </div>
                        <div className="col-6">
                            <img src="../img/annie-spratt-hCb3lIB8L8E-unsplash.jpg" alt="img" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="feature-stats">
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <span>15</span>
                            <p>Years of experience</p>
                        </div>
                        <div className="col-3">
                            <span>2k+</span>
                            <p>Employees worldwide</p>
                        </div>
                        <div className="col-3">
                            <span>90%</span>
                            <p>Positive feedback</p>
                        </div>
                        <div className="col-3">
                            <span>100</span>
                            <p>Successfully completed projects</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="team">
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <div className="card">
                                <div className="image-wrap">
                                    <img src="../img/team/alex-suprun-ZHvM3XIOHoE-unsplash.jpg" alt="img" className="img-fluid" />
                                    <div className="socials">
                                        <Link to="#"><FontAwesomeIcon icon={faInstagram} /></Link>
                                        <Link to="#"><FontAwesomeIcon icon={faTwitter} /></Link>
                                        <Link to="#"><FontAwesomeIcon icon={faTwitch} /></Link>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h3>Kolotyuk Vasil</h3>
                                    <h5>Young Male</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card">
                                <div className="image-wrap">
                                    <img src="../img/team/imansyah-muhamad-putera-n4KewLKFOZw-unsplash.jpg" alt="img" className="img-fluid" />
                                    <div className="socials">
                                        <Link to="#"><FontAwesomeIcon icon={faInstagram} /></Link>
                                        <Link to="#"><FontAwesomeIcon icon={faTwitter} /></Link>
                                        <Link to="#"><FontAwesomeIcon icon={faTwitch} /></Link>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h3>Zhomiruk Vladislav</h3>
                                    <h5>Flexer</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card">
                                <div className="image-wrap">
                                    <img src="../img/team/julian-wan-WNoLnJo7tS8-unsplash.jpg" alt="img" className="img-fluid" />
                                    <div className="socials">
                                        <Link to="#"><FontAwesomeIcon icon={faInstagram} /></Link>
                                        <Link to="#"><FontAwesomeIcon icon={faTwitter} /></Link>
                                        <Link to="#"><FontAwesomeIcon icon={faTwitch} /></Link>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h3>Baziuk Vitaly</h3>
                                    <h5>Team leader</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}
export default AboutUs;