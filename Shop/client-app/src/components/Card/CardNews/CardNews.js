import { Fragment } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux"

const CardNews = ({Id, Name, Publisher, ShortDescription, Image, ReleaseDate }) => {
    return (
        <Fragment>
            <div className="col-4">
                <div className="card card-news">
                    <Link to="#" className="image-wrap">
                        <img src={ Image } alt="img" className="img-fluid" />
                    </Link>
                    <div className="card-body">
                        <div className="subtitle">{ReleaseDate}</div>
                        <div className="subtitle">{Publisher}</div>
                        <h4 className="title">
                            <Link to="#">{ Name }</Link>
                        </h4>
                        <div className="text">{ ShortDescription }</div>
                        <Link to="#">read more</Link>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

const mapStateToProps = ({ NewsListReducer }) => {
    const { NewsList } = NewsListReducer;
    return { NewsList }
}

const mapDispatchToProps = {
}


export default connect(mapStateToProps, mapDispatchToProps)(CardNews);