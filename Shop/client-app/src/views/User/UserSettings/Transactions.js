import { Fragment } from "react";
import { connect } from "react-redux"
import { useEffect } from "react";

import { loginBuyer, changeCurrentBuyerVM } from "../../../actions/BuyerListAction"
import { getAllGenres } from "../../../actions/GenreListAction"
import apiService from "../../../services/APIService";

//import components
import TableTransactions from "../../../components/Table/TableTransactions/TableTransactions";
import { Link } from "react-router-dom";

const Transactions = ({ CurrentBuyerVM, GameListVM, loginBuyer, getAllGenres, changeCurrentBuyerVM }) => {

    useEffect(() => {

        apiService.fetchGenreList().then(data => {
            getAllGenres(data.List);
        });

        apiService.fetchCurentBuyer().then(data => {
            loginBuyer(data.Buyer);
        })

        let tbody = document.getElementById("tbd");
        let button = document.getElementById("button_of_price");
        let price = 0;
        CurrentBuyerVM.GamesIds.forEach((item) => {
            GameListVM.forEach((item2) => {
                if (item == item2.Id_Game) {
                    let tr = document.createElement("tr");
                    let td1 = document.createElement("td");
                    let td2 = document.createElement("td");
                    let td3 = document.createElement("td");

                    td1.innerHTML = item2.ReleaseDate;
                    td2.innerHTML = item2.Name;
                    td3.innerHTML = item2.Price;

                    price += item2.Price;

                    tr.appendChild(td1);
                    tr.appendChild(td2);
                    tr.appendChild(td3);

                    tbody.appendChild(tr);
                }
            })
        })
        button.innerHTML = price + "$\nBUY";

    }, []);

    const BuyGames = () => {
        let NewCurrentBuyerVM = CurrentBuyerVM;
        NewCurrentBuyerVM.GamesIds = [];
        changeCurrentBuyerVM(NewCurrentBuyerVM);
    }

    return (
        <Fragment>
            <section>
                <div className="card">
                    <div className="card-body">
                        <h2 className="title-line">Your transactions</h2>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody id="tbd">
                                {/*<TableTransactions />*/}
                                {/*<TableTransactions />*/}
                                {/*<TableTransactions />*/}
                            </tbody>
                        </table>
                        <div class="d-flex justify-content-center">
                            <Link className="btn btn-primary" id="button_of_price" onClick={BuyGames} to="/user/"></Link>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment >
    )
}

const mapStateToProps = ({ BuyerListReducer, GameListReducer }) => {
    const { GameListVM } = GameListReducer;
    const { CurrentBuyerVM } = BuyerListReducer;
    return { CurrentBuyerVM, GameListVM }
}

const mapDispatchToProps = {
    loginBuyer,
    getAllGenres,
    changeCurrentBuyerVM
}

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);