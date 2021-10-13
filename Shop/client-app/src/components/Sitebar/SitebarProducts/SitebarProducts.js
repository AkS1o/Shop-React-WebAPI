import { Fragment } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const SitebarProducts = () => {
    const collapse = () => {
        let collapse = document.getElementsByClassName('sidebar-collapse-menu');
        let menu = document.getElementsByClassName('sidebar-menu');

        if (collapse[0].classList.contains("show") && menu[0].childNodes[0].classList.contains("collapse")) {
            collapse[0].classList.remove("show");
            menu[0].childNodes[0].classList.remove("collapse")
        }
        else {
            collapse[0].classList.add("show");
            menu[0].childNodes[0].classList.add("collapse")
        }
    }

    return (
        <Fragment>
            <div className="sitebar">
                <div className="sidebar-menu">
                    <Link to="#" className="btn-collapse" onClick={collapse}>
                        <h3>Ganre</h3>
                        <FontAwesomeIcon icon={faAngleDown} />
                    </Link>
                    <div className="sidebar-collapse-menu">
                        <form className="form-search">
                            <input type="text" placeholder="Search" />
                        </form>
                        <form className="">
                            <div className="form-check">
                                <input type="checkbox" />
                                <label>FPS(10)</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" />
                                <label>MMO(17)</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" />
                                <label>RPG(15)</label>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="sidebar-menu">
                    <Link to="#" className="btn-collapse" onClick={collapse}>
                        <h3>Price</h3>
                        <FontAwesomeIcon icon={faAngleDown} />
                    </Link>
                    <div className="sidebar-collapse-menu">
                        <div></div>
                    </div>
                </div>
                <div className="sidebar-menu">
                    <Link to="#" className="btn-collapse" onClick={collapse}>
                        <h3>Game Studios</h3>
                        <FontAwesomeIcon icon={faAngleDown} />
                    </Link>
                    <div className="sidebar-collapse-menu">
                        <form className="form-search">
                            <input type="text" placeholder="Search" />
                        </form>
                        <form>
                            <div className="form-check">
                                <input type="checkbox" />
                                <label>ubisoft(20)</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" />
                                <label>Electronic Arts(13)</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" />
                                <label>cd projekt red(16)</label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default SitebarProducts;