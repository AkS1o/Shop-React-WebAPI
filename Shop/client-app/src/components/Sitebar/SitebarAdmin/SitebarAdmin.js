import { Fragment } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const SitebarAdmin = () => {

    return (
        <Fragment>
            <div className="sitebar sitebar-admin">
                <div className="nav-item">
                    <Link className="nav-link" to="/admin/products">
                        <span className="menu-icon">
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </span>
                        <h3>Products</h3>
                    </Link>
                </div>
                <div className="sidebar-menu">
                    <Link className="nav-link" to="#">
                        <span className="menu-icon">
                            <FontAwesomeIcon icon={faNewspaper} />
                        </span>
                        <h3>News</h3>
                    </Link>
                </div>
            </div>
        </Fragment>
    )
}

export default SitebarAdmin;