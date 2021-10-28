// Import
import { Fragment } from "react";

// Import components
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import AboutUs from "../../components/AboutUs/AboutUs";

const About = () => {
    return(
        <Fragment>
            <Header />
            <main className="main">
                <AboutUs />
            </main>
            <Footer />
        </Fragment>
    )
}
export default About;