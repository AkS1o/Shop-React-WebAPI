// Import
import { Fragment } from "react";

// Import components
import Header from "../../components/Header/Header";
import NotFound from "../../components/NotFound/NotFound"
import Footer from "../../components/Footer/Footer";

const NoMatchPage = () => {
    return(
        <Fragment>
            <Header />
            <main className="main">
                <NotFound />
            </main>
            <Footer />
        </Fragment>
    )
}

export default NoMatchPage;