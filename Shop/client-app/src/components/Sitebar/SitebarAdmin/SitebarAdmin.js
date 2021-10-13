import { Fragment } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const SitebarAdmin = () => {
    return (
        <Fragment>
            <div className="sitebar sitebar-admin">
                <div className="sidebar-menu">
                    <Link to="#" className="btn-collapse collapse">
                        <h3>Products</h3>
                        <FontAwesomeIcon icon={faAngleDown} />
                    </Link>
                    <ul className="sidebar-collapse-menu show">
                        <li><Link>Show Product</Link></li>
                        <li><Link>Add Product</Link> </li>
                    </ul>
                </div>
                <div className="sidebar-menu">
                    <Link to="#" className="btn-collapse collapse">
                        <h3>News</h3>
                        <FontAwesomeIcon icon={faAngleDown} />
                    </Link>
                    <ul className="sidebar-collapse-menu show">
                        <li><Link>Show News</Link></li>
                        <li><Link>Add News</Link> </li>
                    </ul>
                </div>
            </div>
        </Fragment>
    )
}

export default SitebarAdmin;