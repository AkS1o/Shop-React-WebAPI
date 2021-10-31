import React, { Component } from 'react';
import { Fragment } from "react";
import { Link } from 'react-router-dom';

export default class NotFound extends Component {

    sleep(time) {
        return new Promise((resolve) => setTimeout(resolve, time)
        )
    }

    async anivation() {
        var notFound = document.getElementById("content-text");
        var subtext = document.getElementById("main-subtext");

        var countItem = notFound.children.length;
        var itemMidle = (countItem - 1) / 2;
        var itemActive = itemMidle;

        for (let i = itemActive + 1; i < countItem; i++) {
            await this.sleep(180).then(() => {
                notFound.children[i].classList.add("active");
            })
        }
        for (let i = itemActive; i < countItem; i++) {
            await this.sleep(160).then(() => {
                notFound.children[i].classList.remove("active");
            })
        }

        for (let i = 0; i < itemMidle + 1; i++) {
            await this.sleep(180).then(() => {
                notFound.children[i].classList.add("active");
            })
        }
        for (let i = 0; i < itemMidle; i++) {
            await this.sleep(160).then(() => {
                notFound.children[i].classList.remove("active");
            })
        }

        subtext.classList.add("active");
    }

    componentDidMount() {
        this.anivation();
    }

    render() {
        return (
            <Fragment>
                <div className="notFound" id="notFound">
                    <div className="img-wrap">
                        <img src="img/salty-justice-NOMebOREvtc-unsplash.jpg" className="img-fluid" alt="img" />
                    </div>
                    <div className="content-text-wrap" id="content-text">
                        <span className="text-wrap" >
                            <span className="text stroke">404</span>
                        </span>
                        <span className="text-wrap">
                            <span className="text">404</span>
                        </span>
                        <span className="text-wrap full">
                            <span className="text stroke">404</span>
                        </span>
                        <span className="text-wrap">
                            <span className="text stroke">404</span>
                        </span>
                        <span className="text-wrap">
                            <span className="text">404</span>
                        </span>
                        <span className="text-wrap full active main-text">
                            <span className="text stroke">404</span>
                            <div id="main-subtext">
                                <p>Page not found</p>
                                <Link to="/home" className="btn btn-primary">Back To Home</Link>
                            </div>
                        </span>
                        <span className="text-wrap">
                            <span className="text bottom">404</span>
                        </span>
                        <span className="text-wrap">
                            <span className="text">404</span>
                        </span>
                        <span className="text-wrap">
                            <span className="text stroke">404</span>
                        </span>
                        <span className="text-wrap full">
                            <span className="text stroke">404</span>
                        </span>
                        <span className="text-wrap">
                            <span className="text bottom">404</span>
                        </span>
                    </div>
                </div>
            </Fragment>
        )
    }
}