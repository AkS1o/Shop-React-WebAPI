import { faCcVisa } from "@fortawesome/fontawesome-free-brands";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment } from "react";

const CCVisa = () => {
    return (
        <Fragment>
           <div className="cash-card cc-visa">
                <h2>Visa</h2>
                <div className="cc-number">4000 1234 5678 9010</div>
                <div className="cc-expiry-date">12/12</div>
                <div className="cc-CVV-code">665</div>
                <div className="cc-name">12/12</div>
                <FontAwesomeIcon icon={faCcVisa} />
           </div>
        </Fragment >
    )
}

export default CCVisa;