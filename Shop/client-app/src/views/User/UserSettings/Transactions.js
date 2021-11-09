import { Fragment } from "react";
import { connect } from "react-redux"
import { useEffect } from "react";

//import components
import TableTransactions from "../../../components/Table/TableTransactions/TableTransactions";

const Transactions = ({ CurrentBuyerVM, GameListVM }) => {

    useEffect(() => {
        let tbody = document.getElementById("tbd");

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

                    tr.appendChild(td1);
                    tr.appendChild(td2);
                    tr.appendChild(td3);

                    tbody.appendChild(tr);
                }
            })
        })
    }, []);

    const ShowBuyerGames = () => {
        
    }

    return (
        <Fragment>
            <section>
                <div className="card">
                    <div className="card-body">
                        <h2 className="title-line">Change Your Password</h2>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Description</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody id="tbd">
                                {/*<TableTransactions />*/}
                                {/*<TableTransactions />*/}
                                {/*<TableTransactions />*/}
                            </tbody>
                        </table>
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
}

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);