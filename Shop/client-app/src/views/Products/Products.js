// Import
import { Fragment } from "react";

// Import components
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import GridProducts from "../../components/Grid/GridProducts/GridProducts";
import SitebarProducts from "../../components/Sitebar/SitebarProducts/SitebarProducts";

import SideBarSearch from "../../components/Sitebar/SitebarSearch/SideBarSearch"

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
                            <div className="row justify-content-between align-items-center">
                                <div className="col-4">12 results found</div>
                                <div className="col-4">
                                    <SideBarSearch />
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