// Import
import { Fragment } from "react";

// Import components
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import GridNews from "../../components/Grid/GridNews/GridNews";

const News = () => {
    return (
        <Fragment>
            <Header />
            <main className="main">
                <div className="container">
                    <GridNews />
                </div>
            </main>
            <Footer />
        </Fragment>
    )
}

export default News;