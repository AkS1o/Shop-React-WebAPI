import { Fragment } from "react";

import Header from "../../components/Header/Header";
import DetailsNews from "../../components/Details/DetailsNews/DetailsNews"
import Footer from "../../components/Footer/Footer";

const SingleNews = () => {
    return (
        <Fragment>
            <Header />
            <main className="main">
                <div className="container">
                    <DetailsNews />
                </div>
            </main>
            <Footer />
        </Fragment>
    )
}

export default SingleNews;