import { Fragment } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <Fragment>
            <section className="login">
                <div className="img-wrap">
                    <img src="../img/cheng-feng-4pTY4ty7jXM-unsplash.jpg" alt="img" />
                </div>
                <div className="card">
                    <div className="card-header">
                        <h2 className="title-line">Login</h2>
                        <p>Sign in to your account to continue.</p>
                    </div>
                    <div className="card-body">
                        <form>
                            <div class="form-group">
                                <label for="email">Email address</label>
                                <input type="email" id="email" placeholder="Enter email" />
                            </div>
                            <div class="form-group">
                                <label for="password" >Password</label>
                                <input type="password" id="password" placeholder="Password" />
                            </div>
                            <div class="d-flex justify-content-center">
                                <input type="submit" class="btn btn-outline-primary mt-4" value="Sing In" />
                            </div>
                        </form>
                    </div>
                    <div className="card-footer">
                        <p>
                            Not registered?
                            <Link> Create account</Link>
                        </p>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Login;