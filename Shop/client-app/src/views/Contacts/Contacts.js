import { Fragment } from "react";

// Import components
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ContactUs from "../../components/ContactUs/ContactUs";

const Contacts = () => {
    return(
        <Fragment>
            <Header />
            <main className="main">
                <ContactUs />
            </main>
            <Footer />
        </Fragment>
    )
}

export default Contacts;