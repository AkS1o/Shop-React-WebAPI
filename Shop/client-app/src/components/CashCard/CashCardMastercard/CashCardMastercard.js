import { Fragment } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCcMastercard } from "@fortawesome/fontawesome-free-brands";

const CCMastercard = () => {
    return (
        <Fragment>
           <div className="cash-card cc-mastercard">
                <h2>mastercard</h2>
                <div className="cc-number">4000 1234 5678 9010</div>
                <div className="cc-expiry-date">
                    <span>valid thru</span>
                    <p>12/12</p>
                </div>
                <div className="cc-name">cardholder name</div>
                <FontAwesomeIcon icon={faCcMastercard} />
           </div>
        </Fragment >
    )
}

export default CCMastercard;