import { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Component } from "react";
import { Redirect } from "react-router-dom";

import APIService from "../../../services/APIService";
import { changeGame } from "../../../actions/GameListAction";

import React from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";


class EditProduct extends Component {
    state = {
        editorState: EditorState.createEmpty(),
        Id: this.props.CurrentGame.Id,
        Name: this.props.CurrentGame.Name,
        Price: this.props.CurrentGame.Price,
        Quantity: this.props.CurrentGame.Quantity,
        Developer: this.props.CurrentGame.Developer,
        Publisher: this.props.CurrentGame.Publisher,
        Description: this.props.CurrentGame.Description,
        Image: this.props.CurrentGame.Image,
        IntroImage: this.props.CurrentGame.IntroImage,
        ReleaseDate: this.props.CurrentGame.ReleaseDate,

        Min_OS: this.props.CurrentGame.Min_OS,
        Min_Processor: this.props.CurrentGame.Min_Processor,
        Min_Memory: this.props.CurrentGame.Min_Memory,
        Min_Storage: this.props.CurrentGame.Min_Storage,
        Min_DirectX: this.props.CurrentGame.Min_DirectX,
        Min_Graphics: this.props.CurrentGame.Min_Graphics,

        Rec_OS: this.props.CurrentGame.Rec_OS,
        Rec_Processor: this.props.CurrentGame.Rec_Processor,
        Rec_Memory: this.props.CurrentGame.Rec_Memory,
        Rec_Storage: this.props.CurrentGame.Rec_Storage,
        Rec_DirectX: this.props.CurrentGame.Rec_DirectX,
        Rec_Graphics: this.props.CurrentGame.Rec_Graphics,


        GenreIds: [],
        PlatformIds: [],


        Id_Game: this.props.CurrentGame.Id,
        //CurrentGameVM: null,

        CurrentGenreId: "",
        CurrentPlatformId: "",
        CurrentGenreName: "",
        CurrentPlatformName: "",

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

    UpdateGame = (e) => {
        e.preventDefault();
        const { Id_Game, Name, Quantity, Developer, Price, Description, Rating, Publisher, Image, IntroImage, ReleaseDate, Min_OS, Min_Processor,
            Min_Memory, Min_Storage, Min_DirectX, Min_Graphics, Rec_OS, Rec_Processor, Rec_Memory, Rec_Storage, Rec_DirectX, Rec_Graphics,
            GenreIds, PlatformIds, /*CurrentGameVM*/ CurrentPlatformId, CurrentGenreId, CurrentPlatformName, CurrentGenreName } = this.state;
        const newGame = {
            Id_Game,
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
        let tmplist2 = this.props.GameListVM.slice();
        tmplist.push(newGame);
        tmplist2.push(newGame);
        this.props.changeGame(tmplist);
        this.props.changeGame(tmplist2);
        APIService.updateGame(newGame);

        this.setState({
            isRedirect: true
        })
    }

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        });
    };

    componentDidMount() {
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

        //this.props.GameListVM.forEach((item) => {
        //    if (item.Id_Game == this.props.CurrentGame.Id) {
        //        this.props.CurrentGameVM = item;
        //        console.log("CurrentGameVM", this.props.CurrentGameVM);
        //    }
        //})

        this.props.GameListVM.forEach((item) => {
            if (item.Id_Game == this.state.Id) {
                this.props.GenreList.forEach((item2) => {
                    if (item2.Id == item.GenreIds[0]) {
                        this.state.CurrentGenreName = item2.Name;
                        this.state.CurrentGenreId = item2.Id;
                        let choose_genre_option = document.getElementById("choose_genre_option");
                        choose_genre_option.setAttribute("value", this.state.CurrentGenreName)
                        choose_genre_option.setAttribute("defaultValue", this.state.CurrentGenreName)
                        choose_genre_option.innerHTML = this.state.CurrentGenreName;
                    }
                })
                this.props.PlatformList.forEach((item3) => {
                    if (item3.Id == item.PlatformIds[0]) {
                        this.state.CurrentPlatformName = item3.Name;
                        this.state.CurrentPlatformId = item3.Id;
                        let choose_platform_option = document.getElementById("choose_platform_option");
                        choose_platform_option.setAttribute("value", this.state.CurrentPlatformName)
                        choose_platform_option.setAttribute("defaultValue", this.state.CurrentPlatformName)
                        choose_platform_option.innerHTML = this.state.CurrentPlatformName;
                    }
                })
            }
        })

    }

    render() {
        const { Id_Game, Name, Quantity, Developer, Price, Description, Rating, Publisher, Image, IntroImage, ReleaseDate, Min_OS, Min_Processor,
            Min_Memory, Min_Storage, Min_DirectX, Min_Graphics, Rec_OS, Rec_Processor, Rec_Memory, Rec_Storage, Rec_DirectX, Rec_Graphics,
            GenreIds, PlatformIds, /*CurrentGameVM*/ CurrentPlatformId, CurrentGenreId, CurrentPlatformName, CurrentGenreName } = this.state;
        let { isRedirect } = this.state;
        if (isRedirect === true) {
            return <Redirect to="/user/products" />
        }

        var imgPath = "../img/game/" + Image;

        var imgPath2 = "../img/intro/" + IntroImage;

        return (
            <Fragment>
                <form method="post" enctype="multipart/form-data" onSubmit={this.UpdateGame}>
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
                                                <input type="text" defaultValue={Name} onChange={this.onGetName} />
                                            </div>
                                            <div className="row">
                                                <div class="col-6 form-group">
                                                    <label>Price</label>
                                                    <input type="number" defaultValue={Price} onChange={this.onGetPrice} />
                                                </div>
                                                <div class="col-6 form-group">
                                                    <label>Quantity</label>
                                                    <input type="number" defaultValue={Quantity} onChange={this.onGetQuantity} />
                                                </div>
                                            </div>

                                            <div class="form-group">
                                                <label>Release date</label>
                                                <input type="date" defaultValue={ReleaseDate} onChange={this.onGetReleaseDate} />
                                            </div>
                                            <div class="form-group">
                                                <label>Description</label>
                                                <input type="text" defaultValue={Description} onChange={this.onGetDescription} />
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div class="form-group">
                                                <label>Developer</label>
                                                <input type="text" defaultValue={Developer} onChange={this.onGetDeveloper} />
                                            </div>
                                            <div class="form-group">
                                                <label>Publisher</label>
                                                <input type="text" defaultValue={Publisher} onChange={this.onGetPublisher} />
                                            </div>
                                            <div class="form-select">
                                                <label>Genres</label>
                                                <select id="GenreSelect" className="custom-select" onChange={this.onGetGenreIds}>
                                                    <option id="choose_genre_option">asd</option>
                                                </select>
                                            </div>
                                            <div class="form-select">
                                                <label>Platform</label>
                                                <select id="platformSelect" className="custom-select" onChange={this.onGetPlatformIds}>
                                                    <option id="choose_platform_option">asd</option>
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
                                                <input type="text" defaultValue={Min_OS} onChange={this.onGetMin_OS} />
                                            </div>
                                            <div class="form-group">
                                                <label>Processor</label>
                                                <input type="text" defaultValue={Min_Processor} onChange={this.onGetMin_Processor} />
                                            </div>
                                            <div class="form-group">
                                                <label>Memory</label>
                                                <input type="text" defaultValue={Min_Memory} onChange={this.onGetMin_Memory} />
                                            </div>
                                            <div class="form-group">
                                                <label>Storage</label>
                                                <input type="text" defaultValue={Min_Storage} onChange={this.onGetMin_Storage} />
                                            </div>
                                            <div class="form-group">
                                                <label>Direct X</label>
                                                <input type="text" defaultValue={Min_DirectX} onChange={this.onGetMin_DirectX} />
                                            </div>
                                            <div class="form-group">
                                                <label>Graphics</label>
                                                <input type="text" defaultValue={Min_Graphics} onChange={this.onGetMin_Graphics} />
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <h5>Recommended</h5>
                                            <div class="form-group">
                                                <label>OS</label>
                                                <input type="text" defaultValue={Rec_OS} onChange={this.onGetRec_OS} />
                                            </div>
                                            <div class="form-group">
                                                <label>Processor</label>
                                                <input type="text" defaultValue={Rec_Processor} onChange={this.onGetRec_Processor} />
                                            </div>
                                            <div class="form-group">
                                                <label>Memory</label>
                                                <input type="text" defaultValue={Rec_Memory} onChange={this.onGetRec_Memory} />
                                            </div>
                                            <div class="form-group">
                                                <label>Storage</label>
                                                <input type="text" defaultValue={Rec_Storage} onChange={this.onGetRec_Storage} />
                                            </div>
                                            <div class="form-group">
                                                <label>Direct X</label>
                                                <input type="text" defaultValue={Rec_DirectX} onChange={this.onGetRec_DirectX} />
                                            </div>
                                            <div class="form-group">
                                                <label>Graphics</label>
                                                <input type="text" defaultValue={Rec_Graphics} onChange={this.onGetRec_Graphics} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center">
                        <Link to="/user/products" class="btn btn-outline-white mx-2">Back</Link>
                        <input type="submit" class="btn btn-primary mx-2" value="Update" />
                    </div>
                </form>
            </Fragment >
        )
    }
}

const mapStateToProps = ({ GenreListReducer, GameListReducer, PlatformListReducer }) => {
    const { GenreList } = GenreListReducer;
    const { GameList, GameListVM, CurrentGame } = GameListReducer;
    const { PlatformList } = PlatformListReducer;
    return { GenreList, GameList, GameListVM, PlatformList, CurrentGame }
}

const mapDispatchToProps = {
    changeGame
}


export default connect(mapStateToProps, mapDispatchToProps)(EditProduct);