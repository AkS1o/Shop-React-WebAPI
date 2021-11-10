import { Fragment } from "react";
import { connect } from "react-redux"
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { getCurrentGame } from "../../actions/GameListAction"

const SliderElement = ({ CurrentGame, Id_Game, Developer, Name, Image, IntroImage, Description, Quantity, Price, GameList, GameListVM, getCurrentGame }) => {
    let onGetCurrentGame = () => {
        const index = GameListVM.findIndex(elem => elem.Id_Game === Id_Game);
        const game = GameListVM[index];
        getCurrentGame(game)
        console.log("game from intro", game)
    }

    let fleksss = () => {
        console.log("game from intro CurrentGame", CurrentGame)
    }

    var imgPath = "../img/intro/" + IntroImage;

    return (
        <Fragment>
            <Link to="/productsId" className="slide" onClick={onGetCurrentGame}>
                <img src={imgPath} alt="img" className="img-fluid" />
                <div className="content">
                    <div className="d-flex justify-content-between">
                        <h3>{Name}</h3>
                        <div className="price">{Price}$</div>
                    </div>
                    <p>{Description}</p>
                </div>
            </Link>
        </Fragment>
    )
}

const mapStateToProps = ({ GameListReducer }) => {
    const { GameList, GameListVM, CurrentGame } = GameListReducer;
    return { GameList, GameListVM, CurrentGame }
}

const mapDispatchToProps = {
    getCurrentGame
}

export default connect(mapStateToProps, mapDispatchToProps)(SliderElement);