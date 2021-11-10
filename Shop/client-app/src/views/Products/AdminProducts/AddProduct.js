import { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Component } from "react";
import { Redirect } from "react-router-dom";

import APIService from "../../../services/APIService";
import { addGame } from "../../../actions/GameListAction";

import React from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';


import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";


class AddProduct extends Component {
    state = {
        editorState: EditorState.createEmpty(),
        Name: "",
        Price: 0,
        Quantity: 0,
        Developer: "",
        Publisher: "",
        Description: "",
        Image: "",
        IntroImage: "",
        ReleaseDate: "",

        Min_OS: "",
        Min_Processor: "",
        Min_Memory: "",
        Min_Storage: "",
        Min_DirectX: "",
        Min_Graphics: "",

        Rec_OS: "",
        Rec_Processor: "",
        Rec_Memory: "",
        Rec_Storage: "",
        Rec_DirectX: "",
        Rec_Graphics: "",


        GenreIds: [],
        PlatformIds: [],
        isRedirect: false
    }

    //componentDidMount() {
    //    apiService.fetchNewsList().then(data => {
    //        getAllGenres(data.List);
    //    });
    //}

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

    onGetQuantity = (e) => {
        const quantity = e.target.value;
        this.setState({
            Quantity: quantity
        })
    }

    onGetDeveloper = (e) => {
        const developer = e.target.value;
        this.setState({
            Developer: developer
        })
    }

    onGetPublisher = (e) => {
        const publisher = e.target.value;
        this.setState({
            Publisher: publisher
        })
    }

    onGetDescription = (e) => {
        const description = e.target.value;
        this.setState({
            Description: description
        })
    }

    onGetImage = (e) => {
        const image = e.target.files[0].name;
        this.setState({
            Image: image
        })
    }

    onGetIntroImage = (e) => {
        const introimage = e.target.files[0].name;
        this.setState({
            IntroImage: introimage
        })
    }

    onGetReleaseDate = (e) => {
        const releaseDate = e.target.value;
        this.setState({
            ReleaseDate: releaseDate
        })
    }

    onGetMin_OS = (e) => {
        const min_OS = e.target.value;
        this.setState({
            Min_OS: min_OS
        })
    }

    onGetMin_Processor = (e) => {
        const min_Processor = e.target.value;
        this.setState({
            Min_Processor: min_Processor
        })
    }

    onGetMin_Memory = (e) => {
        const min_Memory = e.target.value;
        this.setState({
            Min_Memory: min_Memory
        })
    }

    onGetMin_Storage = (e) => {
        const min_Storage = e.target.value;
        this.setState({
            Min_Storage: min_Storage
        })
    }

    onGetMin_DirectX = (e) => {
        const min_DirectX = e.target.value;
        this.setState({
            Min_DirectX: min_DirectX
        })
    }

    onGetMin_Graphics = (e) => {
        const min_Graphics = e.target.value;
        this.setState({
            Min_Graphics: min_Graphics
        })
    }

    onGetRec_OS = (e) => {
        const rec_OS = e.target.value;
        this.setState({
            Rec_OS: rec_OS
        })
    }

    onGetRec_Processor = (e) => {
        const rec_Processor = e.target.value;
        this.setState({
            Rec_Processor: rec_Processor
        })
    }

    onGetRec_Memory = (e) => {
        const rec_Memory = e.target.value;
        this.setState({
            Rec_Memory: rec_Memory
        })
    }

    onGetRec_Storage = (e) => {
        const rec_Storage = e.target.value;
        this.setState({
            Rec_Storage: rec_Storage
        })
    }

    onGetRec_DirectX = (e) => {
        const rec_DirectX = e.target.value;
        this.setState({
            Rec_DirectX: rec_DirectX
        })
    }

    onGetRec_Graphics = (e) => {
        const rec_Graphics = e.target.value;
        this.setState({
            Rec_Graphics: rec_Graphics
        })
    }

    onGetGenreIds = (e) => {
        const prev_genreIds = new Array();
        prev_genreIds.push(e.target.value);
        const genreIds = new Array();
        this.props.GenreList.forEach(item => {
            prev_genreIds.forEach(item2 => {
                if (item.Name == item2) {
                    genreIds.push(item.Id);
                }
            })
        })
        this.setState({
            GenreIds: genreIds
        })
    }

    onGetPlatformIds = (e) => {
        const prev_platformIds = new Array();
        prev_platformIds.push(e.target.value);
        const platformIds = new Array();
        this.props.PlatformList.forEach(item => {
            prev_platformIds.forEach(item2 => {
                if (item.Name == item2) {
                    platformIds.push(item.Id);
                }
            })
        })
        this.setState({
            PlatformIds: platformIds
        })
    }

    CreateGame = (e) => {
        e.preventDefault();
        const { Name, Quantity, Developer, Price, Description, Rating, Publisher, Image, IntroImage, ReleaseDate, Min_OS, Min_Processor,
            Min_Memory, Min_Storage, Min_DirectX, Min_Graphics, Rec_OS, Rec_Processor, Rec_Memory, Rec_Storage, Rec_DirectX, Rec_Graphics,
            GenreIds, PlatformIds } = this.state;
        const newGame = {
            /*Id: uuid(),*/
            Name,
            Quantity,
            Developer,
            Price,
            Description,
            Publisher,
            Image,
            IntroImage,
            ReleaseDate,
            Min_OS,
            Min_Processor,
            Min_Memory,
            Min_Storage,
            Min_DirectX,
            Min_Graphics,
            Rec_OS,
            Rec_Processor,
            Rec_Memory,
            Rec_Storage,
            Rec_DirectX,
            Rec_Graphics,
            GenreIds,
            PlatformIds,

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

    componentDidMount (){
        let genreSelect = document.getElementById("GenreSelect");
        let tmplist = this.props.GenreList.slice();
        if (tmplist != null) {
            tmplist.forEach((item) => {
                let opt = document.createElement("option");
                opt.setAttribute("value", item.Name)
                opt.innerHTML = item.Name;
                genreSelect.appendChild(opt);
            })
        }

        let platformSelect = document.getElementById("platformSelect");
        let tmplist2 = this.props.PlatformList.slice();
        if (tmplist2 != null) {
            tmplist2.forEach((item) => {
                let opt = document.createElement("option");
                opt.setAttribute("value", item.Name)
                opt.innerHTML = item.Name;
                platformSelect.appendChild(opt);
            })
        }
    }

    render() {
        let { isRedirect } = this.state;
        if (isRedirect === true) {
            return <Redirect to="/admin" />
        }

        var imgPath = "../img/game/" + Image;

        var imgPath2 = "../img/intro/" + Image;

        return (
            <Fragment>
                <form method="post" enctype="multipart/form-data" onSubmit={this.CreateGame}>
                    <div className="row">
                        <div className="col-4">
                            <div className="card">
                                <div className="card-body">
                                    <div class="form-group">
                                        <label>Image</label>
                                        <input type="file" name="files" id="upload" multiple onChange={this.onGetImage} />
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
                                            <div className="row">
                                                <div class="col-6 form-group">
                                                    <label>Price</label>
                                                    <input type="number" onChange={this.onGetPrice} />
                                                </div>
                                                <div class="col-6 form-group">
                                                    <label>Quantity</label>
                                                    <input type="number" onChange={this.onGetQuantity} />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label>Release date</label>
                                                <input type="date" onChange={this.onGetReleaseDate} />
                                            </div>
                                            <div class="form-group">
                                                <label>Description</label>
                                                <input type="text" onChange={this.onGetDescription} />
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div class="form-group">
                                                <label>Developer</label>
                                                <input type="text" onChange={this.onGetDeveloper} />
                                            </div>
                                            <div class="form-group">
                                                <label>Publisher</label>
                                                <input type="text" onChange={this.onGetPublisher} />
                                            </div>
                                            <div class="form-select">
                                                <label>Genres</label>
                                                <select id="GenreSelect" className="custom-select" onChange={this.onGetGenreIds}>
                                                  <option defaultValue>Choose...</option>
                                                </select>
                                            </div>
                                            <div class="form-select">
                                                <label>Platform</label>
                                                <select id="platformSelect" className="custom-select" onChange={this.onGetPlatformIds}>
                                                    <option defaultValue>Choose...</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <div className="card">
                                <div className="card-body">
                                    <div class="form-group">
                                        <label>Intro Image</label>
                                        <input type="file" name="files" id="upload" multiple onChange={this.onGetIntroImage} />
                                    </div>
                                    <img src={imgPath2} alt="img" className="img-fluid" />
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
                                                <input type="text" onChange={this.onGetMin_OS} />
                                            </div>
                                            <div class="form-group">
                                                <label>Processor</label>
                                                <input type="text" onChange={this.onGetMin_Processor} />
                                            </div>
                                            <div class="form-group">
                                                <label>Memory</label>
                                                <input type="text" onChange={this.onGetMin_Memory} />
                                            </div>
                                            <div class="form-group">
                                                <label>Storage</label>
                                                <input type="text" onChange={this.onGetMin_Storage} />
                                            </div>
                                            <div class="form-group">
                                                <label>Direct X</label>
                                                <input type="text" onChange={this.onGetMin_DirectX} />
                                            </div>
                                            <div class="form-group">
                                                <label>Graphics</label>
                                                <input type="text" onChange={this.onGetMin_Graphics} />
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <h5>Recommended</h5>
                                            <div class="form-group">
                                                <label>OS</label>
                                                <input type="text" onChange={this.onGetRec_OS} />
                                            </div>
                                            <div class="form-group">
                                                <label>Processor</label>
                                                <input type="text" onChange={this.onGetRec_Processor} />
                                            </div>
                                            <div class="form-group">
                                                <label>Memory</label>
                                                <input type="text" onChange={this.onGetRec_Memory} />
                                            </div>
                                            <div class="form-group">
                                                <label>Storage</label>
                                                <input type="text" onChange={this.onGetRec_Storage} />
                                            </div>
                                            <div class="form-group">
                                                <label>Direct X</label>
                                                <input type="text" onChange={this.onGetRec_DirectX} />
                                            </div>
                                            <div class="form-group">
                                                <label>Graphics</label>
                                                <input type="text" onChange={this.onGetRec_Graphics} />
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

const mapStateToProps = ({ GenreListReducer, GameListReducer, PlatformListReducer }) => {
    const { GenreList } = GenreListReducer;
    const { GameList } = GameListReducer;
    const { PlatformList } = PlatformListReducer;
    return { GenreList, GameList, PlatformList }
}

const mapDispatchToProps = {
    addGame
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);