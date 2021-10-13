import { Fragment } from "react";
import { Link } from "react-router-dom";

const CardNews = () => {
    return (
        <Fragment>
            <div className="col-4">
                <div className="card">
                    <Link to="#" className="image-wrap">
                        <img src="../img/news/avel-chuklanov-DUmFLtMeAbQ-unsplash.jpg" alt="img" className="image" />
                    </Link>
                    <div className="card-body">
                        <div className="data">25 April, 2020</div>
                        <h4 className="title">
                            <Link to="#">Choose the best solution for your business</Link>
                        </h4>
                        <div className="text">No matter what he does, every person on earth plays a central role in the history.</div>
                        <Link to="#">read more</Link>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default CardNews;