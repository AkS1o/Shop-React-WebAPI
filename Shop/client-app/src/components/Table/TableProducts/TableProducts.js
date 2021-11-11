import { Fragment } from "react";
import { connect } from "react-redux"
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImages, faEye, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

import APIService from "../../../services/APIService"

import { deleteGame, getCurrentGame } from "../../../actions/GameListAction"

const TableProducts = ({ Id, Ganre, Name, Quantity, Price, ReleaseDate, GameList, deleteGame, getCurrentGame }) => {
    let onDeleteGame = () => {
        const index = GameList.findIndex(elem => elem.Id === Id);
        const tmpList = GameList.slice();
        tmpList.splice(index, 1);
        deleteGame(tmpList);
        APIService.deleteGame(Id);
    }
    let onGetCurrentGame = () => {
        const index = GameList.findIndex(elem => elem.Id === Id);
        const game = GameList[index];
        getCurrentGame(game)
    }
    return (
        <Fragment>

            <tr>
                <td>
                    <input type="checkbox" />
                </td>
                <td>{Name}</td>
                <td>{ReleaseDate} </td>
                <td>{Price}</td>
                <td>{Quantity}</td>
                <td>Active</td>
                <td className="table-action">
                    <Link to="/user/views-product" onClick={onGetCurrentGame}>
                        <FontAwesomeIcon icon={faEye} />
                    </Link>
                    <Link onClick={onGetCurrentGame} to="/user/edit-product">
                        <FontAwesomeIcon icon={faEdit} />
                    </Link>
                    <Link onClick={onDeleteGame} to="/user/products">
                        <FontAwesomeIcon icon={faTrash} />
                    </Link>
                    <FontAwesomeIcon icon={faImages} />
                </td>
            </tr>
        </Fragment>
    )
}

const mapStateToProps = ({ GameListReducer }) => {
    const { GameList } = GameListReducer;
    return { GameList }
}

const mapDispatchToProps = {
    deleteGame,
    getCurrentGame
}

export default connect(mapStateToProps, mapDispatchToProps)(TableProducts);