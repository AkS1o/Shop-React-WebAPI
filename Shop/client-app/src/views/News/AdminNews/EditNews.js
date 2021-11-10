import React from 'react';
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Component } from "react";
import { Redirect } from "react-router-dom";
import APIService from "../../../services/APIService";

import { changeNews } from "../../../actions/NewsListAction"

import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";



class EditNews extends Component {
    state = {
        Id: this.props.CurrentNews.Id,
        Name: this.props.CurrentNews.Name,
        ShortDescription: this.props.CurrentNews.ShortDescription,
        Description: this.props.CurrentNews.Description,
        Publisher: this.props.CurrentNews.Publisher,
        ReleaseDate: this.props.CurrentNews.ReleaseDate,
        Image: this.props.CurrentNews.Image,
        editorState: EditorState.createEmpty(),
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

    UpdateNews = (e) => {
        e.preventDefault();
        const { Id, Name, Publisher, Description, ShortDescription, Image, ReleaseDate } = this.state;
        const newNews = {
            Id,
            Name,
            Publisher,
            Description,
            ShortDescription,
            Image,
            ReleaseDate
        }
        const index = this.props.NewsList.findIndex(elem => elem.Id === newNews.Id)
        const tmpList = this.props.NewsList.slice();
        tmpList[index] = newNews;
        this.props.changeNews(tmpList);
        APIService.updateNews(newNews);

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
        let { Name, Publisher, Description, ShortDescription, Image, ReleaseDate } = this.state;
        let { isRedirect } = this.state;
        if (isRedirect === true) {
            return <Redirect to="/admin" />
        }

        var imgPath = "../img/news/" + Image;

        return (
            <Fragment>
                <form method="post" enctype="multipart/form-data" onSubmit={this.UpdateNews}>
                    <div className="row">
                        <div className="col-4">
                            <div className="card">
                                <div className="card-body">
                                    <div class="form-group">
                                        <label>Image</label>
                                        <input type="file" name="files" id="upload" defaultValue={Image} onChange={this.onGetImage} multiple />
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
                                                <input type="text" defaultValue={Name} onChange={this.onGetName} />
                                            </div>
                                            <div class="form-group">
                                                <label>Short Description</label>
                                                <input type="text" defaultValue={ShortDescription} onChange={this.onGetShortDescription} />
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div class="form-group">
                                                <label>Release date</label>
                                                <input type="date" defaultValue={ReleaseDate} onChange={this.onGetReleaseDate} />
                                            </div>
                                            <div class="form-group">
                                                <label>Publisher</label>
                                                <input type="text" defaultValue={Publisher} onChange={this.onGetPublisher} />
                                            </div>
                                            <div class="form-group">
                                                <label>Description</label>
                                                <input type="text" defaultValue={Description} onChange={this.onGetDescription} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center">
                        <Link to="/admin/news" class="btn btn-outline-white mx-2">Back</Link>
                        <input type="submit" class="btn btn-primary mx-2" value="Edit" />
                    </div>
                </form>
            </Fragment >
        )
    }
}

const mapStateToProps = ({ NewsListReducer }) => {
    const { NewsList, CurrentNews } = NewsListReducer;
    return { NewsList, CurrentNews }
}

const mapDispatchToProps = {
    changeNews
}

export default connect(mapStateToProps, mapDispatchToProps)(EditNews);


