import { Fragment } from "react";

//import components
import TableTransactions from "../../../components/Table/TableTransactions/TableTransactions";

const Transactions = () => {
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
                            <tbody>
                                <TableTransactions />
                                <TableTransactions />
                                <TableTransactions />
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </Fragment >
    )
}

export default Transactions;