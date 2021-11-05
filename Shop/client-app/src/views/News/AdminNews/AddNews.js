import { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Component } from "react";
import { Redirect } from "react-router-dom";
import APIService from "../../../services/APIService";
import { v4 as uuidv4 } from 'uuid';

import { addNews } from "../../../actions/NewsListAction";

import React from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

class AddNews extends Component {
    state = {
        editorState: EditorState.createEmpty(),
        Name: "",
        Publisher: "",
        Description: "",
        ShortDescription: "",
        Image: "",
        ReleaseDate: "",
        
        isRedirect: false
    }

    onGetName = (e) => {
        const name = e.target.value;
        this.setState({
            Name: name
        })
    }

    onGetImage = (e) => {
        const image = e.target.files[0].name;
        this.setState({
            Image: image
        })
    }

    onGetShortDescription = (e) => {
        const shortDescription = e.target.value;
        this.setState({
            ShortDescription: shortDescription
        })
    }

    onGetDescription = (e) => {
        const description = e.target.value;
        this.setState({
            Description: description
        })
    }

    onGetReleaseDate = (e) => {
        const release_date = e.target.value;
        this.setState({
            ReleaseDate: release_date //dsadsa
        })
    }

    onGetPublisher = (e) => {
        const publisher = e.target.value;
        this.setState({
            Publisher: publisher
        })
    }

    CreateNews = (e) => {
        e.preventDefault();
        const {/*Id,*/ Name, Publisher, Description, ShortDescription, Image, ReleaseDate } = this.state;
        const newNews = {
            /*Id: uuid(),*/
            Name,
            ShortDescription,
            Description,
            Publisher,
            ReleaseDate,
            Image
        }
        let tmplist = this.props.NewsList.slice();
        tmplist.push(newNews);
        this.props.addNews(tmplist);
        APIService.addNews(newNews);

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
            return <Redirect to="/admin" />
        }

        var imgPath = "../img/news/" + Image;

        return (
            <Fragment>
                <form method="post" enctype="multipart/form-data" onSubmit={this.CreateNews}>
                    <div className="row">
                        <div className="col-4">
                            <div className="card">
                                <div className="card-body">
                                    <div class="form-group">
                                        <label>Image</label>
                                        <input type="file" name="files" id="upload" onChange={this.onGetImage} multiple />
                                    </div>
                                    <img src={imgPath} alt="img" className="img-fluid" />
                                </div>
                            </div>
                        </div>
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
                                            <div class="form-group">
                                                <label>Short Description</label>
                                                <input type="text" onChange={this.onGetShortDescription} />
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div class="form-group">
                                                <label>Release date</label>
                                                <input type="date" onChange={this.onGetReleaseDate} />
                                            </div>
                                            <div class="form-group">
                                                <label>Publisher</label>
                                                <input type="text" onChange={this.onGetPublisher} />
                                            </div>
                                            <div class="form-group">
                                                <label>Description</label>
                                                <input type="text" onChange={this.onGetDescription} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/*<div className="col-6">*/}
                        {/*    <div className="card">*/}
                        {/*        <div className="card-body">*/}
                        {/*            <div class="form-group">*/}
                        {/*                <label>Description</label>*/}
                        {/*                <Editor*/}
                        {/*                    onChange={this.onGetDescription}*/}
                        {/*                    editorState={this.state.editorState}*/}
                        {/*                    wrapperClassName="style-wrapper"*/}
                        {/*                    toolbarClassName="style-toolbar"*/}
                        {/*                    editorClassName="style-editor"*/}
                        {/*                    onEditorStateChange={this.onEditorStateChange}*/}
                        {/*                />*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                    <div class="d-flex justify-content-center">
                        <Link to="/admin/news" class="btn btn-outline-white mx-2">Back</Link>
                        <input type="submit" class="btn btn-primary mx-2" value="Create" />
                    </div>
                </form>
            </Fragment >
        )
    }
}

const mapStateToProps = ({ NewsListReducer }) => {
    const { NewsList } = NewsListReducer;
    return { NewsList }
}

const mapDispatchToProps = {
    addNews
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNews);