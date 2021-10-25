import { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Component } from "react";
import { Redirect } from "react-router-dom";
import APIService from "../../services/APIService";
import { v4 as uuidv4 } from 'uuid';

import { addGame } from "../../actions/GameListAction";

import React from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

class AddProduct extends Component {
    state = {
        editorState: EditorState.createEmpty(),
        Name: "",
        Price: 0,
        //Quantity: "",
        //Category: null, //sds
        //Release_date: null,
        //Developer: "",
        //Publisher: "",
        //Available: null,
        //Platform: null, //sdf
        //OS_rec: "",
        //Processor_rec: "",
        //Memory_rec: "",
        //Storage_rec: "",
        //Direct_X_rec: "",
        //OS_min: "",
        //Processor_min: "",
        //Memory_min: "",
        //Storage_min: "",
        //Direct_X_min: "",
        //isRedirect: false
        ShortDescription: "",
        Description: "",
        Rating: 0,
        Publisher: "",
        Date: "",
        isRedirect: false
    }

    onGetName = (e) => {
        const name = e.target.value;
        this.setState({
            Name: name
        })
    }

    onGetPrice = (e) => {
        const price = e.target.value;
        this.setState({
            Price: price
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

    onGetRating = (e) => {
        const rating = e.target.value;
        this.setState({
            Rating: rating
        })
    }

    //onGetQuantity = (e) => {
    //    const quantity = e.target.value;
    //    this.setState({
    //        Quantity: quantity
    //    })
    //}

    onGetRelease_date = (e) => {
        const release_date = e.target.value;
        this.setState({
            Date: release_date //dsadsa
        })
    }

    //onGetDeveloper = (e) => {
    //    const developer = e.target.value;
    //    this.setState({
    //        Developer: developer
    //    })
    //}

    onGetPublisher = (e) => {
        const publisher = e.target.value;
        this.setState({
            Publisher: publisher
        })
    }

    //onGetAvailable = (e) => {
    //    const available = e.target.value;
    //    this.setState({
    //        Available: available
    //    })
    //}

    //onGetOS_rec = (e) => {
    //    const oS_rec = e.target.value;
    //    this.setState({
    //        OS_rec: oS_rec
    //    })
    //}

    //onGetProcessor_rec = (e) => {
    //    const processor_rec = e.target.value;
    //    this.setState({
    //        Processor_rec: processor_rec
    //    })
    //}

    //onGetMemory_rec = (e) => {
    //    const memory_rec = e.target.value;
    //    this.setState({
    //        Memory_rec: memory_rec
    //    })
    //}

    //onGetStorage_rec = (e) => {
    //    const storage_rec = e.target.value;
    //    this.setState({
    //        Storage_rec: storage_rec
    //    })
    //}

    //onGetDirect_X_rec = (e) => {
    //    const direct_X_rec = e.target.value;
    //    this.setState({
    //        Direct_X_rec: direct_X_rec
    //    })
    //}

    //onGetOS_min = (e) => {
    //    const oS_min = e.target.value;
    //    this.setState({
    //        OS_min: oS_min
    //    })
    //}

    //onGetProcessor_min = (e) => {
    //    const processor_min = e.target.value;
    //    this.setState({
    //        Processor_min: processor_min
    //    })
    //}

    //onGetMemory_min = (e) => {
    //    const memory_min = e.target.value;
    //    this.setState({
    //        Memory_min: memory_min
    //    })
    //}

    //onGetStorage_min = (e) => {
    //    const storage_min = e.target.value;
    //    this.setState({
    //        Storage_min: storage_min
    //    })
    //}

    //onGetDirect_X_min = (e) => {
    //    const direct_X_min = e.target.value;
    //    this.setState({
    //        Direct_X_min: direct_X_min
    //    })
    //}

    CreateGame = (e) => {
        e.preventDefault();
        const {/*Id,*/ Name, Price, ShortDescription, Description, Rating, Publisher, Date } = this.state;
        const newGame = {
            /*Id: uuid(),*/
            Name,
            ShortDescription,
            Description,
            Publisher,
            Price,
            Rating,
            Date
        }
        let tmplist = this.props.GameList.slice();
        tmplist.push(newGame);
        this.props.addGame(tmplist);
        APIService.addGame(newGame);

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
        return (
            <Fragment>
                <form method="post" enctype="multipart/form-data" onSubmit={this.CreateGame}>
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
                                                <input type="text" onChange={this.onGetName} />
                                            </div>
                                            <div className="row">
                                                <div class="col-6 form-group">
                                                    <label>Price</label>
                                                    <input type="number" onChange={this.onGetPrice} />
                                                </div>
                                                {/*<div class="col-6 form-group">*/}
                                                {/*    <label>Quantity</label>*/}
                                                {/*    <input type="number" />*/}
                                                {/*</div>*/}
                                                <div class="col-6 form-group">
                                                    <label>Rating</label>
                                                    <input type="number" onChange={this.onGetRating} />
                                                </div>
                                            </div>
                                            {/*<div class="form-group">*/}
                                            {/*    <label>Category</label>*/}
                                            {/*    <input type="text" />*/}
                                            {/*</div>*/}
                                            <div class="form-group">
                                                <label>Release date</label>
                                                <input type="date" onChange={this.onGetRelease_date} />
                                            </div>
                                            <div class="form-group">
                                                <label>Short Sescription</label>
                                                <input type="text" onChange={this.onGetShortDescription} />
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            {/*<div class="form-group">*/}
                                            {/*    <label>Developer</label>*/}
                                            {/*    <input type="text" />*/}
                                            {/*</div>*/}
                                            <div class="form-group">
                                                <label>Description</label>
                                                <input type="text" onChange={this.onGetDescription} />
                                            </div>
                                            <div class="form-group">
                                                <label>Publisher</label>
                                                <input type="text" onChange={this.onGetPublisher} />
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

const mapStateToProps = ({ GameListReducer }) => {
    const { GameList } = GameListReducer;
    return { GameList }
}

const mapDispatchToProps = {
    addGame
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);