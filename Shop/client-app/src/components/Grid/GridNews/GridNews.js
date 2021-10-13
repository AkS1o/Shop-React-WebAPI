import { Fragment } from "react";

// Import components
import CardNews from "../../Card/CardNews/CardNews";
import Pagination from "../../Pagination/Pagination";

const NewsGrid = () => {
    return (
        <Fragment>
             <section className="news">
                <div className="row">
                    <CardNews />
                    <CardNews />
                    <CardNews />
                    <CardNews />
                    <CardNews />
                </div>
                <Pagination />
            </section>
        </Fragment>
    )
}

export default NewsGrid;