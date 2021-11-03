import { Fragment } from "react";
import { connect } from "react-redux"
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImages, faEye, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

import APIService from "../../../services/APIService"

import { deleteGenre, getCurrentGenre } from "../../../actions/GenreListAction"

const TableGenres = ({ Id, Name, GenreList, deleteGenre, getCurrentGenre }) => {
    let onDeleteGenre = () => {
        const index = GenreList.findIndex(elem => elem.Id === Id);
        const tmpList = GenreList.slice();
        tmpList.splice(index, 1);
        deleteGenre(tmpList);
        APIService.deleteGenre(Id);
    }
    let onGetCurrentGenre = () => {
        const index = GenreList.findIndex(elem => elem.Id === Id);
        const genre = GenreList[index];
        getCurrentGenre(genre)
    }
    return (
        <Fragment>

            <tr>
                <td>
                    <input type="checkbox" />
                </td>
                <td>{Name}</td>
                <td>Active</td>
                <td className="table-action">
                    <Link onClick={onDeleteGenre} to="/admin/genres">
                        <FontAwesomeIcon icon={faTrash} />
                    </Link>
                    <FontAwesomeIcon icon={faImages} />
                </td>
            </tr>
        </Fragment>
    )
}

const mapStateToProps = ({ GenreListReducer }) => {
    const { GenreList } = GenreListReducer;
    return { GenreList }
}

const mapDispatchToProps = {
    deleteGenre,
    getCurrentGenre
}

export default connect(mapStateToProps, mapDispatchToProps)(TableGenres);