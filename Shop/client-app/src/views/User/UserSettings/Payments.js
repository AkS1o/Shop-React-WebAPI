import { Fragment } from "react";

import CCVisa from "../../../components/CashCard/CashCardVisa/CashCardVisa";
import CCMastercard from "../../../components/CashCard/CashCardMastercard/CashCardMastercard";

const Payments = () => {
    return (
        <Fragment>
            <section>
                <div className="card">
                    <div className="card-body">
                        <h2 className="title-line">PAYMENT MANAGEMENT</h2>
                        <div className="row">
                            <div className="col">
                                <CCVisa />
                            </div>
                            <div className="col">
                                <CCMastercard />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment >
    )
}

export default Payments;