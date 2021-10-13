import { Fragment } from "react";

// Import components
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Contacts = () => {
    return(
        <Fragment>
            <Header />
            <main className="main">
                <div>Contacts</div>
            </main>
            <Footer />
        </Fragment>
    )
}

export default Contacts;