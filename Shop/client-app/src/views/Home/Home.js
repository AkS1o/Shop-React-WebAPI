import { Fragment } from "react";
import { useEffect } from "react";
import { connect } from "react-redux"

// Import components
import Header from "../../components/Header/Header";
import Slider from "../../components/Slider/Slider";
import Footer from "../../components/Footer/Footer";

import { getAllGames } from "../../actions/GameListAction"
import { getAllGamesVM } from "../../actions/GameListAction"

import { getAllGenres } from "../../actions/GenreListAction"
import { getAllPlatforms } from "../../actions/PlatformListAction"

import apiService from "../../services/APIService";

const Home = ({ getAllGenres, getAllPlatforms, GameList, GenreList, PlatformList, GameListVM, SearchString, SearchGenre, SearchPlatform, getAllGames, getAllGamesVM, GamePagination }) => {
    useEffect(() => {
        apiService.fetchContactList().then(data => {
            getAllGames(data.List);
        })

        apiService.fetchGame_vm_List().then(data => {
            getAllGamesVM(data.List);
        })

        apiService.fetchPlatformList().then(data => {
            getAllPlatforms(data.List);
        });

        apiService.fetchGenreList().then(data => {
            getAllGenres(data.List);
        });


    }, []);

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

const mapStateToProps = ({ GameListReducer, GenreListReducer, PlatformListReducer }) => {
    const { GameList, GameListVM, SearchString, SearchGenre, SearchPlatform, GamePagination } = GameListReducer;
    const { GenreList } = GenreListReducer;
    const { PlatformList } = PlatformListReducer;
    return { GameList, GenreList, PlatformList, GameListVM, SearchString, SearchGenre, SearchPlatform, GamePagination }
}

const mapDispatchToProps = {
    getAllGames,
    getAllGamesVM,
    getAllGenres,
    getAllPlatforms
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);