import { Link } from "react-router-dom";
import { Fragment } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faWallet, faHistory, faKey } from "@fortawesome/free-solid-svg-icons";

const SitebarUser = () => {
    return (
        <Fragment>
            <aside className="sitebar">
                <div className="nav-item">
                    <Link className="nav-link" to="/user/personal">
                        <FontAwesomeIcon icon={faUser} />
                        <h3>General</h3>
                    </Link>
                </div>
                <div className="nav-item">
                    <Link className="nav-link" to="/user/payments">
                        <FontAwesomeIcon icon={faWallet} />
                        <h3>PAYMENT MANAGEMENT</h3>
                    </Link>
                </div>
                <div className="nav-item">
                    <Link className="nav-link" to="/user/transactions">
                        <FontAwesomeIcon icon={faHistory} />
                        <h3>transaction</h3>
                    </Link>
                </div>
                <div className="nav-item">
                    <Link className="nav-link" to="/user/password">
                        <FontAwesomeIcon icon={faKey} />
                        <h3>password </h3>
                    </Link>
                </div>
            </aside>
        </Fragment>
    )
}

export default SitebarUser;