import { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux"
import { useEffect } from "react";

import { getAllGames } from "../../../actions/GameListAction"
import { getAllGamesVM } from "../../../actions/GameListAction"

import apiService from "../../../services/APIService";

import Pagination from "../../../components/Pagination/Pagination";
import TableProducts from "../../../components/Table/TableProducts/TableProducts";


const MainProduct = ({ GameList, getAllGames, GameListVm, getAllGamesVM, CurrentBuyerVM, CurrentBuyer }) => {

    useEffect(() => {

        console.log("CurrentBuyerVM from main product", CurrentBuyerVM);
        console.log("CurrentBuyer from main product", CurrentBuyer);


        apiService.fetchContactList().then(data => {
            
            getAllGames(data.List);
            console.log("data1", data.List)
        });

        apiService.fetchGame_vm_List().then(data => {
           
            getAllGamesVM(data.List);
            console.log("data2", data.List)
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
            <section>
            <Link to="/user/add-product" className="btn btn-white">Add Contact</Link>
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
            </section>
        </Fragment >
    )
}

const mapStateToProps = ({ GameListReducer, BuyerListReducer }) => {
    const { GameList } = GameListReducer;
    const { GameListVm } = GameListReducer;
    const { CurrentBuyerVM, CurrentBuyer } = BuyerListReducer;
    return { GameList, GameListVm, CurrentBuyerVM, CurrentBuyer }
}

const mapDispatchToProps = {
    getAllGames,
    getAllGamesVM
}

export default connect(mapStateToProps, mapDispatchToProps)(MainProduct);