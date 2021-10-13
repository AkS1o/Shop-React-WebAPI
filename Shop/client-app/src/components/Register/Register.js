import { Fragment } from "react";

const Register = () => {
    return (
        <Fragment>
            <section className="register">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-5">
                            <div className="card">
                                <div className="card-body">
                                    <div className="">
                                        <h2>Register</h2>
                                        <p>Create your account.</p>
                                    </div>
                                    <form>
                                        <div class="form-group">
                                            <label for="fullname" class="form-label mt-4">Full Name</label>
                                            <input type="text" class="form-control" id="fullname" placeholder="Enter your name" />
                                        </div>
                                        <div class="form-group">
                                            <label for="email" class="form-label mt-4">Email address</label>
                                            <input type="email" class="form-control" id="email" placeholder="Enter your email" />
                                        </div>
                                        <div class="form-group">
                                            <label for="password" class="form-label mt-4">Password</label>
                                            <input type="password" class="form-control" id="password" placeholder="Enter your Password" />
                                        </div>
                                        <div class="d-flex justify-content-center">
                                            <input type="submit" class="btn btn-outline-primary mt-4" value="register" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Register;