import { Fragment } from "react";
import { connect } from "react-redux"
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImages, faEye, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

import APIService from "../../../services/APIService"

import { deleteNews, getCurrentNews } from "../../../actions/NewsListAction"

const TableNews = ({ Id, Name, Publisher, ShortDescription, Image, ReleaseDate, NewsList, deleteNews, getCurrentNews }) => {
    let onDeleteNews = () => {
        const index = NewsList.findIndex(elem => elem.Id === Id);
        const tmpList = NewsList.slice();
        tmpList.splice(index, 1);
        deleteNews(tmpList);
        APIService.deleteNews(Id);
    }
    let onGetCurrentNews = () => {
        const index = NewsList.findIndex(elem => elem.Id === Id);
        const newss = NewsList[index];
        getCurrentNews(newss)
    }
    return (
        <Fragment>

            <tr>
                <td>
                    <input type="checkbox" />
                </td>
                <td>{Name}</td>
                <td>{Publisher} </td>
                <td>{ShortDescription}</td>
                <td>{ReleaseDate}</td>
                <td>Active</td>
                <td className="table-action">
                    <Link to="/admin/views-news">
                        <FontAwesomeIcon icon={faEye} />
                    </Link>
                    <Link onClick={onGetCurrentNews} to="/admin/edit-news">
                        <FontAwesomeIcon icon={faEdit} />
                    </Link>
                    <Link onClick={onDeleteNews} to="/admin/">
                        <FontAwesomeIcon icon={faTrash} />
                    </Link>
                    <FontAwesomeIcon icon={faImages} />
                </td>
            </tr>
        </Fragment>
    )
}

const mapStateToProps = ({ NewsListReducer }) => {
    const { NewsList } = NewsListReducer;
    return { NewsList }
}

const mapDispatchToProps = {
    deleteNews,
    getCurrentNews
}

export default connect(mapStateToProps, mapDispatchToProps)(TableNews);