import { Fragment } from "react";

import Header from "../../components/Header/Header";
import ViewProduct from "../../components/View/ViewProduct/ViewProduct"
import Footer from "../../components/Footer/Footer";

const DetalisProduct = () => {
    return (
        <Fragment>
            <Header />
            <main className="main">
                <div className="container">
                    <ViewProduct />
                </div>
            </main>
            <Footer />
        </Fragment>
    )
}

export default DetalisProduct;