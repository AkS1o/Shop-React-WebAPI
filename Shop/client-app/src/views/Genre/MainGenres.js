﻿import { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux"
import { useEffect } from "react";

import { getAllGenres } from "../../actions/GenreListAction"

import apiService from "../../services/APIService";

import Pagination from "../../../src/components/Pagination/Pagination"

import TableGenres from "../../components/Table/TableGenres/TableGenres";


const MainGenre = ({ GenreList, getAllGenres }) => {

    useEffect(() => {
        apiService.fetchGenreList().then(data => {
            getAllGenres(data.List);
            console.log(data);
        });
    }, []);

    const item = GenreList.map(listItem => {
        return (
            <TableGenres key={listItem.Id}
                {...listItem} />
        )
    });
    return (
        <Fragment>
            <Link to="/admin/add-genre" className="btn btn-white">Add Genre</Link>
            <table className="table">
                <thead>
                    <tr>
                        <th>
                            <input type="checkbox" />
                        </th>
                        <th>Genre</th>
                    </tr>
                </thead>
                <tbody>
                    {item.length > 0 ? item : <h4>Genre list is empty.</h4>}
                </tbody>
            </table>
            <div className="d-flex align-items-center justify-content-between">
                <div>Showing genres 1 to 5 of 12</div>
                <Pagination />
            </div>
        </Fragment >
    )
}

const mapStateToProps = ({ GenreListReducer }) => {
    const { GenreList } = GenreListReducer;
    return { GenreList }
}

const mapDispatchToProps = {
    getAllGenres
}

export default connect(mapStateToProps, mapDispatchToProps)(MainGenre);