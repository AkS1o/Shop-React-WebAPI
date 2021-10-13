import React, { Component } from 'react';
import { Fragment } from "react";

export default class NotFound extends Component {
    componentDidMount() {
        window.addEventListener('resize', this.resizeEvent);
    }

    hide() {
        var notFound = document.getElementById('notFound').value;
        console.log("notFound", notFound);
    }

    render() {
        return (
            <Fragment>
                <div className="notFound" id="notFound" onLoad={this.hide}>
                    <div className="text-wrap" >
                        <h1 className="top stroke">404</h1>
                    </div>
                    <div className="text-wrap full">
                        <h1 className="">404</h1>
                    </div>
                    <div className="text-wrap">
                        <h1 className="bottom stroke">404</h1>
                    </div>
                    <div className="text-wrap">
                        <h1 className="bottom stroke">404</h1>
                    </div>
                    <div className="text-wrap">
                        <h1 className="top">404</h1>
                    </div>
                    <div className="text-wrap full">
                        <h1 className="">404</h1>
                    </div>
                    <div className="text-wrap">
                        <h1 className="bottom">404</h1>
                    </div>
                    <div className="text-wrap">
                        <h1 className="top">404</h1>
                    </div>
                    <div className="text-wrap">
                        <h1 className="top stroke">404</h1>
                    </div>
                    <div className="text-wrap full">
                        <h1 className="stroke">404</h1>
                    </div>
                    <div className="text-wrap">
                        <h1 className="bottom">404</h1>
                    </div>
                </div>
            </Fragment>
        )
    }
}