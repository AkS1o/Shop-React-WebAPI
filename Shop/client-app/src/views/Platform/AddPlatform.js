import { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Component } from "react";
import { Redirect } from "react-router-dom";
import APIService from "../../services/APIService";
import { v4 as uuidv4 } from 'uuid';

import { addPlatform } from "../../actions/PlatformListAction";

import React from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

class AddPlatform extends Component {
    state = {
        editorState: EditorState.createEmpty(),
        Name: "",
        isRedirect: false
    }

    onGetName = (e) => {
        const name = e.target.value;
        this.setState({
            Name: name
        })
    }

    CreatePlatform = (e) => {
        e.preventDefault();
        const { Name } = this.state;
        const newPlatform = {
            Name
        }
        let tmplist = this.props.PlatformList.slice();
        tmplist.push(newPlatform);
        this.props.addPlatform(tmplist);
        APIService.addPlatform(newPlatform);

        this.setState({
            isRedirect: true
        })
    }

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        });
    };

    render() {
        let { isRedirect } = this.state;
        if (isRedirect === true) {
            return <Redirect to="/user/news" />
        }
        return (
            <Fragment>
                <form method="post" enctype="multipart/form-data" onSubmit={this.CreatePlatform}>
                    <div className="row">
                        <div className="col-8">
                            <div className="card">
                                <div className="card-body">
                                    <h3>Product Information</h3>
                                    <div className="row">
                                        <div className="col-6">
                                            <div class="form-group">
                                                <label>Name</label>
                                                <input type="text" onChange={this.onGetName} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center">
                        <Link to="/user/platforms" class="btn btn-outline-white mx-2">Back</Link>
                        <input type="submit" class="btn btn-primary mx-2" value="Create" />
                    </div>
                </form>
            </Fragment >
        )
    }
}

const mapStateToProps = ({ PlatformListReducer }) => {
    const { PlatformList } = PlatformListReducer;
    return { PlatformList }
}

const mapDispatchToProps = {
    addPlatform
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPlatform);