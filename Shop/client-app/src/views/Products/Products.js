// Import
import { Fragment } from "react";

// Import components
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import GridProducts from "../../components/Grid/GridProducts/GridProducts";
import SitebarProducts from "../../components/Sitebar/SitebarProducts/SitebarProducts";

const Products = () => {
    return (
        <Fragment>
            <Header />
            <main className="main">
                <div className="container">
                    <div className="row">
                        <aside className="col-3">
                            <SitebarProducts />
                        </aside>
                        <section className="col-9">
                            <div className="d-flex justify-content-between">
                                <div className="">12 results found</div>
                                <div className="">
                                    Sort by
                                    <select>
                                        <option value="popularity">popularity</option>
                                        <option value="novelty">novelty</option>
                                        <option value="action">action</option>
                                        <option value="rank">rank</option>
                                    </select>
                                </div>
                            </div>
                            <GridProducts />
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </Fragment>
    )
}

export default Products;