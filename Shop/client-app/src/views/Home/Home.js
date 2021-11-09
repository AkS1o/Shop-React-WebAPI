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
import { getAllBuyers } from "../../actions/BuyerListAction";
import { loginBuyer } from "../../actions/BuyerListAction";


const Home = ({ loginBuyer, CurrentBuyer, getAllGenres, getAllPlatforms, getAllBuyers, GameList, GenreList, PlatformList, GameListVM, SearchString, SearchGenre, SearchPlatform, getAllGames, getAllGamesVM, GamePagination }) => {
    useEffect(() => {
        apiService.fetchBuyerList().then(data => {
            getAllBuyers(data.List);
        })

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

       /* if (CurrentBuyer != null && CurrentBuyer != undefined) {*/
            console.log("current buyer", CurrentBuyer)

            apiService.fetchCurentBuyer().then(data => {
                loginBuyer(data.Buyer);
            })

        /*}*/

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

const mapStateToProps = ({ GameListReducer, GenreListReducer, PlatformListReducer, BuyerListReducer }) => {
    const { GameList, GameListVM, SearchString, SearchGenre, SearchPlatform, GamePagination } = GameListReducer;
    const { GenreList } = GenreListReducer;
    const { PlatformList } = PlatformListReducer;
    const { CurrentBuyer } = BuyerListReducer;
    return { GameList, GenreList, PlatformList, GameListVM, SearchString, SearchGenre, SearchPlatform, GamePagination, CurrentBuyer }
}

const mapDispatchToProps = {
    getAllGames,
    getAllGamesVM,
    getAllGenres,
    getAllPlatforms,
    getAllBuyers,
    loginBuyer
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);