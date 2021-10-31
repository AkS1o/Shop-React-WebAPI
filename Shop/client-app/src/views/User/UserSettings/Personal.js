import { Fragment } from "react";

const Profile = () => {
    return (
        <Fragment>
            <section>
                <div className="card">
                    <div className="card-body">
                        <h2 className="title-line">Account Info</h2>
                        <form>
                            <div className="row">
                                <div className="col-6">
                                    <div class="form-group mt-3">
                                        <label>NicName</label>
                                        <input />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div class="form-group mt-3">
                                        <label>Emain</label>
                                        <input />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <form>
                            <h2 className="title-line">Personal Details</h2>
                            <div className="row">
                                <div className="col-6">
                                    <div class="form-group mt-3">
                                        <label>FirstName</label>
                                        <input />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div class="form-group mt-3">
                                        <label>LastName</label>
                                        <input />
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div class="form-select mt-3">
                                        <label>Language</label>
                                        <select />
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

export default Profile;