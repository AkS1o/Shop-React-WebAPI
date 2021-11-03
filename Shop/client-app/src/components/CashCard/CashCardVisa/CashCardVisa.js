import { Fragment } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCcVisa } from "@fortawesome/fontawesome-free-brands";

const CCVisa = () => {
    return (
        <Fragment>
           <div className="cash-card cc-visa">
                <h2>Visa</h2>
                <div className="cc-number">4000 1234 5678 9010</div>
                <div className="cc-expiry-date">
                    <span>good<br/>thru</span>
                    <p>12/12</p>
                </div>
                <div className="d-flex justify-content-between align-content-center">
                    <div className="cc-name">cardholder name</div>
                    <FontAwesomeIcon icon={faCcVisa} />
                </div>
           </div>
        </Fragment >
    )
}

export default CCVisa;