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
                <div className="card">
                    <div className="card-body">
                        <h4 className="title-line">PAYMENT MANAGEMENT</h4>
                        <form>
                            <div className="row">
                                <div className="col-12">
                                    <div class="form-group">
                                        <label>Card number</label>
                                        <input type="text" class="form-control" data-mask="0000 0000 0000 0000" placeholder="Card number" autocomplete="off" maxlength="19" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div class="form-group">
                                        <label>Expiry date</label>
                                        <input data-mask="00/00" placeholder="MM/YY" autocomplete="off" maxlength="5" />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div class="form-group">
                                        <label>CVV code</label>
                                        <input data-mask="000" placeholder="CVV" autocomplete="off" maxlength="3" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div class="form-group">
                                        <label>Name on card </label>
                                        <input placeholder="Name on card" autocomplete="off" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="col-md-auto col">
                                        <button className="btn btn-outline-primary">add card</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </Fragment >
    )
}

export default Payments;