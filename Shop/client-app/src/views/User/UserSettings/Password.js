import { Fragment } from "react";

const Password = () => {
    return (
        <Fragment>
            <section>
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-6 py-4 px-4">
                                <h2 className="title-line">Change Your Password</h2>
                                <form>
                                    <div class="form-group mt-3">
                                        <label>Current Password</label>
                                        <input />
                                    </div>
                                    <div class="form-group mt-3">
                                        <label>New Password</label>
                                        <input />
                                    </div>
                                    <div class="form-group mt-3">
                                        <label>Retype New Password</label>
                                        <input />
                                    </div>
                                    <button className="btn btn-outline-primary mt-3">save changes</button>
                                </form>
                            </div>
                            <div className="col-6 py-4 px-4">
                                <h2 className="title-line">Change Your Password</h2>
                                <p>Your password must not be the same as your last 5 passwords used</p>
                                <br />
                                <p>Your password must have 7+ characters</p>
                                <br />
                                <p>Your password must have at least 1 number</p>
                                <br />
                                <p>Your password must contain no space(s)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment >
    )
}

export default Password;