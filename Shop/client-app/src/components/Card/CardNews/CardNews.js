import { Fragment } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux"

import moment from 'moment';

import { getCurrentNews } from "../../../actions/NewsListAction"

const CardNews = ({ Id, Name, Publisher, ShortDescription, Image, ReleaseDate, NewsList, getCurrentNews }) => {
    let onGetCurrentNews = () => {
        const index = NewsList.findIndex(elem => elem.Id === Id);
        const newss = NewsList[index];
        getCurrentNews(newss)
    }

    var imgPath = "../img/news/" + Image;

    return (
        <Fragment>
            <div className="col-4">
                <div className="card card-news">
                    <Link to="#" className="image-wrap">
                        <img src={imgPath} alt="img" className="img-fluid" />
                    </Link>
                    <div className="card-body">
                        <div className="subtitle">{moment(ReleaseDate).format("MMM Do YY")}</div>
                        <div className="subtitle">{Publisher}</div>
                        <h4 className="title">
                            <Link to="#">{ Name }</Link>
                        </h4>
                        <div className="text">{ ShortDescription }</div>
                        <Link to="/newsId" onClick={onGetCurrentNews}>read more</Link>
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
    getCurrentNews
}


export default connect(mapStateToProps, mapDispatchToProps)(CardNews);