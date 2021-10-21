import { Fragment } from "react";

import Header from "../../components/Header/Header";
import DetailsProduct from "../../components/Details/DetailsProduct/DetailsProduct"
import Footer from "../../components/Footer/Footer";

const Product = () => {
    return (
        <Fragment>
            <Header />
            <main className="main">
                <div className="container">
                    <DetailsProduct />
                </div>
            </main>
            <Footer />
        </Fragment>
    )
}

export default Product;