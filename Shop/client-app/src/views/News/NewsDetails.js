import { Fragment } from "react";

import Header from "../../components/Header/Header";
import ViewNews from "../../components/View/ViewNews/ViewNews"
import Footer from "../../components/Footer/Footer";

const DetailsNews = () => {
    return (
        <Fragment>
            <Header />
            <main className="main">
                <div className="container">
                    <ViewNews />
                </div>
            </main>
            <Footer />
        </Fragment>
    )
}

export default DetailsNews;