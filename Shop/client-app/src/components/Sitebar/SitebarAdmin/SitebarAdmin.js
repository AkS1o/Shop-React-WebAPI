import { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux"
import { useEffect } from "react";

import apiService from "../../../services/APIService";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import { getAllNews } from "../../../actions/NewsListAction";
import { getAllGames } from "../../../actions/GameListAction"
import { getAllGamesVM } from "../../../actions/GameListAction"
import { getAllPlatforms } from "../../../actions/PlatformListAction"
import { getAllGenres } from "../../../actions/GenreListAction"

const SitebarAdmin = ({ getAllNews, getAllGames, getAllGamesVM, getAllPlatforms, getAllGenres }) => {

    useEffect(() => {
        apiService.fetchContactList().then(data => {
            getAllGames(data.List);
        });

        apiService.fetchGame_vm_List().then(data => {
            getAllGamesVM(data.List);
        });

        apiService.fetchNewsList().then(data => {
            getAllNews(data.List);
        });

        apiService.fetchPlatformList().then(data => {
            getAllPlatforms(data.List);
        });

        apiService.fetchGenreList().then(data => {
            getAllGenres(data.List);
        });

    }, []);

    return (
        <Fragment>
            <div className="sitebar sitebar-admin">
                <div className="nav-item">
                    <Link className="nav-link" to="/admin/products">
                        <span className="menu-icon">
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </span>
                        <h3>Products</h3>
                    </Link>
                </div>
                <div className="nav-item">
                    <Link className="nav-link" to="/admin/genres">
                        <span className="menu-icon">
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </span>
                        <h3>Genres</h3>
                    </Link>
                </div>
                <div className="nav-item">
                    <Link className="nav-link" to="/admin/platforms">
                        <span className="menu-icon">
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </span>
                        <h3>Planforms</h3>
                    </Link>
                </div>
                <div className="sidebar-menu">
                    <Link className="nav-link" to="/admin/news">
                        <span className="menu-icon">
                            <FontAwesomeIcon icon={faNewspaper} />
                        </span>
                        <h3>News</h3>
                    </Link>
                </div>
            </div>
        </Fragment>
    )
}

const mapStateToProps = ({ GameListReducer, GenreListReducer, NewsListReducer, PlatformListReducer,  }) => {
    const { GameList } = GameListReducer;
    const { GameListVM } = GameListReducer;
    const { NewsList } = NewsListReducer;
    const { GenreList } = GenreListReducer;
    const { PlatformList } = PlatformListReducer;
    return { GameList, GameListVM, NewsList, GenreList, PlatformList }
}

const mapDispatchToProps = {
    getAllGames,
    getAllGamesVM,
    getAllNews,
    getAllPlatforms,
    getAllGenres
}

export default connect(mapStateToProps, mapDispatchToProps)(SitebarAdmin);