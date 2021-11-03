import { Fragment } from "react";
import { connect } from "react-redux"
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { getCurrentGame } from "../../../actions/GameListAction"

const CardProducts = ({ Id_Game, Developer, Name, Quantity, Price, GameList, GameListVM, getCurrentGame}) => {
    let onGetCurrentGame = () => {
        const index = GameListVM.findIndex(elem => elem.Id_Game === Id_Game);
        const game = GameListVM[index];
        getCurrentGame(game)
    }
    return (
        <Fragment>
            <div className="col-3">
                <Link to="/productsId" className="card card-products" onClick={onGetCurrentGame}>
                    <div className="image-wrap">
                        <img src="../img/bf2048.png" alt="img" className="img-fluid" />
                    </div>
                    <div className="card-body">
                        <div className="subtitle">{Developer}</div>
                        <div className="title">{Name}</div>
                        <div className="d-flex justify-content-between">
                            <div className="ratings">
                                {Quantity}
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            <div className="price">{Price}₴</div>
                        </div>
                    </div>
                </Link>
            </div>
        </Fragment>
    )
}

const mapStateToProps = ({ GameListReducer }) => {
    const { GameList, GameListVM } = GameListReducer;
    return { GameList, GameListVM }
}

const mapDispatchToProps = {
    getCurrentGame
}

export default connect(mapStateToProps, mapDispatchToProps)(CardProducts);