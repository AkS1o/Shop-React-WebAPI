import { Fragment } from "react";
import { useEffect } from "react";
import { connect } from "react-redux"
// Import components
import CardNews from "../../Card/CardNews/CardNews";
import Pagination from "../../Pagination/Pagination";

import { getAllNews } from "../../../actions/NewsListAction"

// Import Services
import apiService from "../../../services/APIService";

const NewsGrid = ({ NewsList, getAllNews }) => {
    useEffect(() => {
        apiService.fetchNewsList().then(data => {
            getAllNews(data.List);
        })
    }, []);

    const item = NewsList.map(listItem => {
        return (
            <CardNews key={listItem.Id}
                {...listItem} />
        )
    });

    return (
        <section className="news">
            <div className="row">
                {item.length > 0 ? item : <h4>Contact list is empty.</h4>}
            </div>
        </section>
    )
}

const mapStateToProps = ({ NewsListReducer }) => {
    const { NewsList } = NewsListReducer;
    return { NewsList }
}

const mapDispatchToProps = {
    getAllNews
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsGrid);