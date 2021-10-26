import { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux"
import { useEffect } from "react";

import { getAllNews } from "../../../actions/NewsListAction";

import apiService from "../../../services/APIService";

import Pagination from "../../../components/Pagination/Pagination";

import TableNews from "../../../components/Table/TableNews/TableNews";


const MainNews = ({ NewsList, getAllNews }) => {

    useEffect(() => {
        apiService.fetchNewsList().then(data => {
            getAllNews(data.List);
        });
    }, []);

    const item = NewsList.map(listItem => {
        return (
            <TableNews key={listItem.Id}
                {...listItem} />
        )
    });
    return (
        <Fragment>
            <Link to="/admin/add-news" className="btn btn-white">Add News</Link>
            <table className="table">
                <thead>
                    <tr>
                        <th>
                            <input type="checkbox" />
                        </th>
                        <th>Name</th>
                        <th>Publisher</th>
                        <th>ShortDescription</th>
                        <th>ReleaseDate</th>
                    </tr>
                </thead>
                <tbody>
                    {item.length > 0 ? item : <h4>News list is empty.</h4>}
                </tbody>
            </table>
            <div className="d-flex align-items-center justify-content-between">
                <div>Showing news 1 to 5 of 12</div>
                <Pagination />
            </div>
        </Fragment >
    )
}

const mapStateToProps = ({ NewsListReducer }) => {
    const { NewsList } = NewsListReducer;
    return { NewsList }
}

const mapDispatchToProps = {
    getAllNews
}

export default connect(mapStateToProps, mapDispatchToProps)(MainNews);