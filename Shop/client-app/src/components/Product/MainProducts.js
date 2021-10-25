import { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux"
import { useEffect } from "react";

import { getAllGames } from "../../actions/GameListAction"

import apiService from "../../services/APIService";

import Pagination from "../Pagination/Pagination";

import TableProducts from "../Table/TableProducts/TableProducts";


const MainProduct = ({ GameList, getAllGames }) => {

    useEffect(() => {
        apiService.fetchContactList().then(data => {
            getAllGames(data.List);
        });
    }, []);

    const item = GameList.map(listItem => {
        return (
            <TableProducts key={listItem.Id}
                {...listItem} />
        )
    });
    return (
        <Fragment>
            <Link to="/admin/add-product" className="btn btn-white">Add Contact</Link>
            <table className="table">
                <thead>
                    <tr>
                        <th>
                            <input type="checkbox" />
                        </th>
                        <th>Product</th>
                        <th>Added Date</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {item.length > 0 ? item : <h4>Contact list is empty.</h4>}
                </tbody>
            </table>
            <div className="d-flex align-items-center justify-content-between">
                <div>Showing products 1 to 5 of 12</div>
                <Pagination />
            </div>
        </Fragment >
    )
}

const mapStateToProps = ({ GameListReducer }) => {
    const { GameList } = GameListReducer;
    return { GameList }
}

const mapDispatchToProps = {
    getAllGames
}

export default connect(mapStateToProps, mapDispatchToProps)(MainProduct);