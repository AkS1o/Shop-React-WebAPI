import { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Component } from "react";
import { Redirect } from "react-router-dom";
import APIService from "../../services/APIService";
import { v4 as uuidv4 } from 'uuid';

import { addGenre } from "../../actions/GenreListAction";

import React from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

class AddGenre extends Component {
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

    CreateGenre = (e) => {
        e.preventDefault();
        const {/*Id,*/ Name} = this.state;
        const newGenre = {
            /*Id: uuid(),*/
            Name
        }
        let tmplist = this.props.GenreList.slice();
        tmplist.push(newGenre);
        this.props.addGenre(tmplist);
        APIService.addGenre(newGenre);

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
            return <Redirect to="/user/genres" />
        }
        return (
            <Fragment>
                <form method="post" enctype="multipart/form-data" onSubmit={this.CreateGenre}>
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
                        <Link to="/user/genres" class="btn btn-outline-white mx-2">Back</Link>
                        <input type="submit" class="btn btn-primary mx-2" value="Create" />
                    </div>
                </form>
            </Fragment >
        )
    }
}

const mapStateToProps = ({ GenreListReducer }) => {
    const { GenreList } = GenreListReducer;
    return { GenreList }
}

const mapDispatchToProps = {
    addGenre
}

export default connect(mapStateToProps, mapDispatchToProps)(AddGenre);