import { Fragment } from "react";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <Fragment>
            <section className="banner">
                <div className="container">
                    <div className="row flex-nowrap">
                        <div className="col-6">
                            <div className="inner">
                                <h3>best creative studio we make great ideas happen</h3>
                                <div className="content">
                                    <Link to="#" className="btn-primary">Watch now</Link>
                                    <ul className="tag">
                                        <li>desing</li>
                                        <li>branding</li>
                                        <li>wordpres</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="watch"></div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment >
    )
}

export default Banner;