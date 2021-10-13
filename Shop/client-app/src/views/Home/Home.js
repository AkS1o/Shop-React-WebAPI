import { Fragment } from "react";

// Import components
import Header from "../../components/Header/Header";
import Slider from "../../components/Slider/Slider";
import Footer from "../../components/Footer/Footer";

const Home = () => {
    return(
        <Fragment>
            <Header />
            <main className="main">
                <Slider />
            </main>
            <Footer />
        </Fragment>
    )
}

export default Home;