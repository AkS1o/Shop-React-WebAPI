import { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux"
import { useEffect } from "react";
import { Component } from "react";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";

import React from "react";

import APIService from "../../services/APIService";
import { loginBuyer } from "../../actions/BuyerListAction";
import { changeCurrentBuyerVM } from "../../actions/BuyerListAction";

import { Formik } from "formik";

const Login = ({ loginBuyer, changeCurrentBuyerVM}) => {



    //useEffect(() => {
    //    apiService.fetchBuyerListVM().then(data => {
    //        getAllBuyersVM(data.List);
    //    })
    //}, []);

    const initialValues = {
        email: "",
        password: ""
    };

    const history = useHistory();

    const validate = (values) => {
        let errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if (!values.email) {
            errors.email = "Email is required";
        } else if (!regex.test(values.email)) {
            errors.email = "Invalid Email";
        }

        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 4) {
            errors.password = "Password too short";
        }

        return errors;
    };

    const submitForm = (values) => {
        const { Name, Surname, NickName } = "";
        const newBuyer = {
            /*Id: uuid(),*/
            Name: "",
            Surname: "",
            NickName: "",
            Password: values.password,
            Email: values.email
        }
        //let tmplist = this.props.BuyerList.slice();
        //tmplist.push(newBuyer);



        APIService.loginBuyer(newBuyer);
        loginBuyer(newBuyer);


        const newBuyerVM = {
            /*Id: uuid(),*/
            Name: "",
            Surname: "",
            NickName: "",
            Password: values.password,
            Email: values.email,
            GamesIds: []
        }

        changeCurrentBuyerVM(newBuyerVM);

        history.push("/")
    };


    return (

        <Formik
            initialValues={initialValues}
            validate={validate}
            onSubmit={submitForm}

        >
            {(formik) => {
                const {
                    values,
                    handleChange,
                    handleSubmit,
                    errors,
                    touched,
                    handleBlur,
                    isValid,
                    dirty
                } = formik;
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
                                    <form method="post" onSubmit={handleSubmit}>
                                        <div class="form-group">
                                            <label for="email">Email address</label>
                                            <input type="email" id="email" name="email" placeholder="Enter your email" value={values.email} onChange={handleChange} onBlur={handleBlur} className={errors.email && touched.email ? "input-error" : null} />
                                            {errors.email && touched.email && (
                                                <span className="error">{errors.email}</span>
                                            )}
                                        </div>
                                        <div class="form-group">
                                            <label for="password">Password</label>
                                            <input type="password" id="password" name="password" value={values.password} onChange={handleChange} onBlur={handleBlur} className={errors.password && touched.password ? "input-error" : null} placeholder="Enter your Password" />
                                            {errors.password && touched.password && (
                                                <span className="error">{errors.password}</span>
                                            )}
                                        </div>
                                        <div class="d-flex justify-content-center">
                                            <input type="submit" className={dirty && isValid ? "btn btn-outline-primary mt-4 " : "btn disabled-btn btn-outline-primary mt-4 "} disabled={!(dirty && isValid)} value="Sing In" />
                                        </div>
                                    </form>
                                </div>
                                <div className="card-footer">
                                    <p>
                                        Not registered?
                                        <Link to="/register"> Create account</Link>
                                    </p>
                                </div>
                            </div>
                        </section>
                    </Fragment>
                );
            }}
        </Formik>
    );
}

const mapStateToProps = ({ BuyerListReducer }) => {
    const { CurrentBuyerVM } = BuyerListReducer;
    return { CurrentBuyerVM }
}

const mapDispatchToProps = {
    loginBuyer,
    changeCurrentBuyerVM
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);