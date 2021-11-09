import { Component } from "react";
import { Fragment } from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class DetailsProduct extends Component {
    state = {
        Id: this.props.CurrentGame.Id_Game,//
        Name: this.props.CurrentGame.Name,//
        Quantity: this.props.CurrentGame.Quantity,//
        Developer: this.props.CurrentGame.Developer,//
        Price: this.props.CurrentGame.Price, //
        Description: this.props.CurrentGame.Description,//
        Rating: this.props.CurrentGame.Rating,
        Publisher: this.props.CurrentGame.Publisher, //
        Image: this.props.CurrentGame.Image,
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
        GenreIds: this.props.CurrentGame.GenreIds,
        PlatformIds: this.props.CurrentGame.PlatformIds,
        isRedirect: false
    }

    buyProduct = () => {
        let { Id } = this.state;
        this.props.CurrentBuyerVM.GamesIds.push(Id);
        console.log("CurrentBuyerVM buy games", this.props.CurrentBuyerVM);
    }
        
    render() {
        let {
            Name, Quantity, Developer, Price, Description, Rating, Publisher, Image, ReleaseDate, Min_OS, Min_Processor,
            Min_Memory, Min_Storage, Min_DirectX, Min_Graphics, Rec_OS, Rec_Processor, Rec_Memory, Rec_Storage, Rec_DirectX, Rec_Graphics,
            GenreIds, PlatformIds } = this.state;
        let { isRedirect } = this.state;
        if (isRedirect === true) {
            return <Redirect to="/admin" />
        }

        var imgPath = "../img/game/" + Image;

        return (
            <Fragment>
                <section className="product">
                    <div className="row">
                        <div className="col-6">
                            <img src={imgPath} alt="img" className="img-fluid" />
                        </div>
                        <div className="col-6">
                            <h2>{Name}</h2>
                            <ul className="list-info">
                                <li><span>Genres</span>RPG, Open World, Adventure</li>
                                <li><span>Rating</span>{Rating}</li>
                                <li><span>Developer</span>{Developer}</li>
                                <li><span>Platform</span>PS4, Xbox One, PC, Stadia</li>
                                <li><span>Release Date</span>{ReleaseDate}</li>
                            </ul>
                            <div className="row">
                                <div className="col-3">
                                    {/*<button className="btn btn-outline-primary">Add to card</button>*/}
                                </div>
                                <div className="col-3">
                                    <button className="btn btn-outline-primary" onClick={this.buyProduct}>Buy</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div className="content">
                                <h3 className="title-line">About Game</h3>
                                <p>
                                    {Description}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="title-line">Minimum</h4>
                                    <ul className="list-info">
                                        <li><span>OS:</span>{Min_OS}</li>
                                        <li><span>CPU:</span>{Min_Processor}</li>
                                        <li><span>GPU:</span>{Min_Graphics}</li>
                                        <li><span>Memor:</span>{Min_Memory}GB</li>
                                        <li><span>Storage:</span>{Min_Storage}GB</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="title-line">Recommended</h4>
                                    <ul className="list-info">
                                        <li><span>OS:</span>{Rec_OS}</li>
                                        <li><span>CPU:</span>{Rec_Processor}</li>
                                        <li><span>GPU:</span>{Rec_Graphics}</li>
                                        <li><span>Memory:</span>{Rec_Memory} GB</li>
                                        <li><span>Storage:</span>{Rec_Storage}GB</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        )
    }
}

const mapStateToProps = ({ GameListReducer, BuyerListReducer }) => {
    const { CurrentGame } = GameListReducer;
    const { CurrentBuyerVM } = BuyerListReducer;
    return { CurrentGame, CurrentBuyerVM }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsProduct);