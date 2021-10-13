import { Fragment } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <Fragment>
            <section className="login">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-5">
                            <div className="card">
                                <div className="card-body">
                                    <div className="">
                                        <h2>Login</h2>
                                        <p>Sign in to your account to continue.</p>
                                    </div>
                                    <form>
                                        <div class="form-group">
                                            <label for="email" class="form-label mt-4">Email address</label>
                                            <input type="email" class="form-control" id="email" placeholder="Enter email" />
                                        </div>
                                        <div class="form-group">
                                            <label for="password" class="form-label mt-4">Password</label>
                                            <input type="password" class="form-control" id="password" placeholder="Password" />
                                        </div>
                                        <div class="d-flex justify-content-center">
                                            <input type="submit" class="btn btn-outline-primary mt-4" value="Sing In" />
                                        </div>
                                    </form>
                                    <div className="">
                                        <p>
                                            Not registered?
                                            <Link> Create account</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Login;