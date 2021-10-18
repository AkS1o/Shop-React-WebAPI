import { Fragment } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const SitebarProducts = () => {
    const collapse = () => {
        let menu = document.getElementsByClassName('menu-collapse');
        let btn = document.getElementsByClassName('nav-link');

        if (menu[0].classList.contains("collapse") && btn[0].classList.contains("collapse")) {
            menu[0].classList.remove("collapse");
            btn[0].classList.remove("collapse")
        }
        else {
            menu[0].classList.add("collapse");
            btn[0].classList.add("collapse")
        }
    }

    return (
        <Fragment>
            <div className="sitebar">
                <div className="nav-item">
                    <Link className="nav-link " to="#" onClick={collapse}>
                        <h3>Products</h3>
                        <span className="menu-arrow">
                            <FontAwesomeIcon icon={faAngleDown} />
                        </span>
                    </Link>
                    <div className="menu-collapse">
                        <form className="form-group">
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
                <div className="nav-item">
                    <Link className="nav-link " to="#" onClick={collapse}>
                        <h3>Products</h3>
                        <span className="menu-arrow">
                            <FontAwesomeIcon icon={faAngleDown} />
                        </span>
                    </Link>
                    <div className="menu-collapse">
                        <form className="form-group">
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