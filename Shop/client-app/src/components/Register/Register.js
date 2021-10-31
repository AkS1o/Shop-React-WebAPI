import { Fragment } from "react";

const Register = () => {
    return (
        <Fragment>
            <section className="register">
                <div className="img-wrap">
                    <img src="../img/cheng-feng-4pTY4ty7jXM-unsplash.jpg" alt="img" />
                </div>
                <div className="card">
                    <div className="card-header">
                        <h2>Register</h2>
                        <p>Create your account.</p>
                    </div>
                    <div className="card-body">
                        <form>
                            <div class="form-group">
                                <label for="fullname">Full Name</label>
                                <input type="text" id="fullname" placeholder="Enter your name" />
                            </div>
                            <div class="form-group">
                                <label for="email">Email address</label>
                                <input type="email" id="email" placeholder="Enter your email" />
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input type="password" id="password" placeholder="Enter your Password" />
                            </div>
                            <div class="d-flex justify-content-center">
                                <input type="submit" class="btn btn-outline-primary mt-3" value="register" />
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Register;