import { Fragment } from "react";
import { Link } from "react-router-dom";

//import Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

//import components
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import TableOrders from "../../components/Table/TableOrders/TableOrders";

const Cart = () => {
    return (
        <Fragment>
            <Header />
            <main className="main">
                <div className="container">
                    <h2 className="">Cart</h2>
                    <div className="row">
                        < section className="col-8">
                            <table className="table table-order">
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <TableOrders />
                                    <TableOrders />
                                    <TableOrders />
                                </tbody>
                            </table>
                            <div className="d-flex justify-content-between my-4">
                                <Link className="btn btn-link">
                                    <FontAwesomeIcon icon={faArrowLeft} />
                                    Back to products
                                </Link>
                                <Link className="btn btn-outline-primary">Order</Link>
                            </div>
                        </section>
                        <aside className="col-4">
                            <div className="card">
                                <div className="card-body">
                                    <h3></h3>
                                    <ul class="list-info">
                                        <li>
                                            <span>Subtotal</span>
                                            100$
                                        </li>
                                        <li>
                                            <span>discount</span>
                                            10%
                                        </li>
                                        <li>
                                            <span> Shipping Charge</span>
                                            10$
                                        </li>
                                        <li>
                                            <span>Total</span>
                                            200$
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </main>
            <Footer />
        </Fragment >
    )
}
export default Cart;