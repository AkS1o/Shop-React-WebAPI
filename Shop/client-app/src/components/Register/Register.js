import { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux"
import { useEffect } from "react";
import { Component } from "react";
import { Redirect } from "react-router-dom";
import APIService from "../../services/APIService";

import { Formik } from "formik";
import React from "react";

import { addBuyer } from "../../actions/BuyerListAction";
import { useHistory } from "react-router-dom";

const Register = ({ addBuyer }) => {

    //useEffect(() => {
    //    apiService.fetchBuyerList().then(data => {
    //        getAllBuyers(data.List);
    //    });
    //}, []);

    const initialValues = {
        name: "",
        surname: "",
        nickname: "",
        password: "",
        email: "",
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

        if (!values.nickname) {
            errors.nickname = "Nick name is required";
        } else if (values.nickname.length < 2) {
            errors.nickname = "Nick name too short";
        }

        if (!values.name) {
            errors.name = "Name is required";
        } else if (values.name.length < 2) {
            errors.name = "Name too short";
        }

        if (!values.surname) {
            errors.surname = "Surname is required";
        } else if (values.surname.length < 2) {
            errors.surname = "Surname too short";
        }

        return errors;
    };

    const submitForm = (values) => {
        const newBuyer = {
            /*Id: uuid(),*/
            Name: values.name,
            Surname: values.surname,
            Nickname: values.nickname,
            Password: values.password,
            Email: values.email
        }
        //let tmplist = this.props.BuyerList.slice();
        //tmplist.push(newBuyer);
        //this.props.addBuyer(tmplist);
        APIService.addBuyer(newBuyer);

        history.push("/login")
    };

    //const redir = () => {
    //    history.push("/login")
    //}

   

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
                                    <form method="post" onSubmit={handleSubmit}>
                                        <div class="form-group">
                                            <label for="fullname">Your nickName</label>
                                            <input type="text" name="nickname" id="nickname" placeholder="Enter your NickName" value={values.nickname} onChange={handleChange} onBlur={handleBlur} className={errors.nickname && touched.nickname ? "input-error" : null} />
                                            {errors.nickname && touched.nickname && (
                                                <span className="error">{errors.nickname}</span>
                                            )}
                                        </div>
                                        <div class="form-group">
                                            <label for="fullname">Your Name</label>
                                            <input type="text" id="name" name="name" placeholder="Enter your Name" value={values.name} onChange={handleChange} onBlur={handleBlur} className={errors.name && touched.name ? "input-error" : null} />
                                            {errors.name && touched.name && (
                                                <span className="error">{errors.name}</span>
                                            )}
                                        </div>
                                        <div class="form-group">
                                            <label for="fullname">Your Surname</label>
                                            <input type="text" id="surname" name="surname" placeholder="Enter your Surname" value={values.surname} onChange={handleChange} onBlur={handleBlur} className={errors.surname && touched.surname ? "input-error" : null} />
                                            {errors.surname && touched.surname && (
                                                <span className="error">{errors.surname}</span>
                                            )}
                                        </div>
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
                                        {/*<div class="form-group">*/}
                                        {/*    <label for="password">Confirm password</label>*/}
                                        {/*    <input type="password" id="passwordConfirm" name="passwordConfirm" value={values.confirmPassword} onChange={handleChange} onBlur={handleBlur} className={errors.confirmPassword && touched.confirmPassword ? "input-error" : null} placeholder="Confirm password" />*/}
                                        {/*    {errors.confirmPassword && touched.confirmPassword && (*/}
                                        {/*        <span className="error">{errors.confirmPassword}</span>*/}
                                        {/*    )}*/}
                                        {/*</div>*/}
                                        <div class="d-flex justify-content-center">
                                            <input type="submit" className={dirty && isValid ? "btn btn-outline-primary mt-4 " : "btn disabled-btn btn-outline-primary mt-4 "} disabled={!(dirty && isValid)} value="register" />
                                        </div>
                                    </form>
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
    //const { BuyerList } = BuyerListReducer;
    //return { BuyerList }
}

const mapDispatchToProps = {
    addBuyer
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
