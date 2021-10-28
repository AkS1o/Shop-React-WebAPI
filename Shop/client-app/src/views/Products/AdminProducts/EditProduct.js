import { Fragment } from "react";
import { Link } from "react-router-dom";

import React from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

class EditProduct extends React.Component {
    state = {
        editorState: EditorState.createEmpty(),
    }

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        });
    };

    render() {
        return (
            <Fragment>
                <form method="post" enctype="multipart/form-data">
                    <div className="row">
                        <div className="col-4">
                            <div className="card">
                                <div className="card-body">
                                    <div class="form-group">
                                        <label>Image</label>
                                        <input type="file" name="files" id="upload" multiple />
                                    </div>
                                    <img src="../img/battlefield-2042.jpg" alt="img" className="img-fluid" />
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
                                                <input type="text" />
                                            </div>
                                            <div className="row">
                                                <div class="col-6 form-group">
                                                    <label>Price</label>
                                                    <input type="text" />
                                                </div>
                                                <div class="col-6 form-group">
                                                    <label>Quantity</label>
                                                    <input type="number" />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label>Category</label>
                                                <input type="text" />
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div class="form-group">
                                                <label>Developer</label>
                                                <input type="text" />
                                            </div>
                                            <div class="form-group">
                                                <label>Publisher</label>
                                                <input type="text" />
                                            </div>
                                            <div class="form-group">
                                                <label>Available</label>
                                                <input type="text" />
                                            </div>
                                            <div class="form-group">
                                                <label>Platform</label>
                                                <input type="text" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="card">
                                <div className="card-body">
                                    <div class="form-group">
                                        <label>Description</label>
                                        <Editor
                                            editorState={this.state.editorState}
                                            wrapperClassName="style-wrapper"
                                            toolbarClassName="style-toolbar"
                                            editorClassName="style-editor"
                                            onEditorStateChange={this.onEditorStateChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="card">
                                <div className="card-body">
                                    <h3>Specifications</h3>
                                    <div class="row">
                                        <div class="col-6">
                                            <h5>Minimum</h5>
                                            <div class="form-group">
                                                <label>OS</label>
                                                <input type="text" />
                                            </div>
                                            <div class="form-group">
                                                <label>Processor</label>
                                                <input type="text" />
                                            </div>
                                            <div class="form-group">
                                                <label>Memory</label>
                                                <input type="text" />
                                            </div>
                                            <div class="form-group">
                                                <label>Storage</label>
                                                <input type="text" />
                                            </div>
                                            <div class="form-group">
                                                <label>Direct X</label>
                                                <input type="text" />
                                            </div>
                                            <div class="form-group">
                                                <label>Graphics</label>
                                                <input type="text" />
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <h5>Recommended</h5>
                                            <div class="form-group">
                                                <label>OS</label>
                                                <input type="text" />
                                            </div>
                                            <div class="form-group">
                                                <label>Processor</label>
                                                <input type="text" />
                                            </div>
                                            <div class="form-group">
                                                <label>Memory</label>
                                                <input type="text" />
                                            </div>
                                            <div class="form-group">
                                                <label>Storage</label>
                                                <input type="text" />
                                            </div>
                                            <div class="form-group">
                                                <label>Direct X</label>
                                                <input type="text" />
                                            </div>
                                            <div class="form-group">
                                                <label>Graphics</label>
                                                <input type="text" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center">
                        <Link to="/admin/products" class="btn btn-outline-white mx-2">Back</Link>
                        <input type="submit" class="btn btn-primary mx-2" value="Create" />
                    </div>
                </form>
            </Fragment >
        )
    }
}

export default EditProduct;