import { useEffect } from "react";
import { connect } from "react-redux"
import { Fragment } from "react";
import { Link } from "react-router-dom";

// Import components
import CardProducts from "../../Card/CardProducts/CardProducts";

// Import Actions
import { getAllGames } from "../../../actions/GameListAction"
import { getAllGamesVM } from "../../../actions/GameListAction"

import { getAllGenres } from "../../../actions/GenreListAction"
import { getAllPlatforms } from "../../../actions/PlatformListAction"

// Import Services
import apiService from "../../../services/APIService";
import Pagination from "../../../components/Pagination/Pagination"

const GridProducts = ({ GameList, getAllPlatforms, getAllGenres,  GenreList, PlatformList, GameListVM, SearchString, SearchGenre, SearchPlatform, getAllGames, getAllGamesVM, GamePagination }) => {
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

    let UploadPagination = (pagin) => {
        let games = GameListVM.slice();

        let CountGames = games.length;

        let count = CountGames / 8;

        if (pagin == 1) {
            games = games.slice(0, 8);
        }
        else {
            games = games.slice((8 * pagin) - 8, (8 * pagin) + 1);
        }

        return games;
    }

    let Search = () => {
        if (SearchString == "" && (SearchPlatform == false || SearchPlatform == undefined) && (SearchGenre == false || SearchGenre == undefined)) {
            return UploadPagination(GamePagination);
        }
        else {

            const tmpList = GameListVM.slice();

            let search_genre_id = [];
            let search_platforn_id = [];
            if (SearchGenre != false && SearchGenre != undefined) {
                GenreList.forEach((item) => {
                    SearchGenre.forEach((item2) => {
                        if (item.Name == item2) {
                            search_genre_id.push(item.Id);
                        }
                    })
                })
            }
            if (SearchPlatform != false && SearchPlatform != undefined) {
                PlatformList.forEach((item) => {
                    SearchPlatform.forEach((item2) => {
                        if (item.Name == item2) {
                            search_platforn_id.push(item.Id);
                        }
                    })
                })
            }

            if (SearchString != "") {
                let searchedGames = tmpList.filter(game => game.Name.includes(SearchString));
                let searchedGames2 = [];
                let searchedGames3 = [];
                if (search_genre_id != false && search_genre_id != undefined && search_platforn_id != false && search_platforn_id != undefined) {
                    /*searchedGames2 = searchedGames.filter(game => game.GenreIds[0] == search_genre_id && game.PlatformIds[0] == search_platforn_id)*/
                    searchedGames.forEach((item) => {
                        search_genre_id.forEach((item2) => {
                            if (item.GenreIds[0] == item2) {
                                searchedGames2.push(item);
                            }
                        })
                        search_platforn_id.forEach((item2) => {
                            if (item.PlatformIds[0] == item2) {
                                searchedGames3.push(item);
                            }
                        })
                    })

                    let searchedGames4 = searchedGames2;
                    searchedGames3.forEach((item) => {
                        let ok = true;
                        searchedGames2.forEach((item2) => {
                            if (item.Id_Game == item2.Id_Game) {
                                ok = false;
                            }
                        })
                        if (ok == true) {
                            searchedGames4.push(item);
                        }
                    })

                    return searchedGames4;
                }
                else if ((search_genre_id != false && search_genre_id != undefined) && search_platforn_id == false || search_platforn_id == undefined) {
                    searchedGames.forEach((item) => {
                        search_genre_id.forEach((item2) => {
                            if (item.GenreIds[0] == item2) {
                                searchedGames2.push(item);
                            }
                        })
                    })

                    return searchedGames2;
                }
                else if (search_genre_id == false || search_genre_id == undefined && (search_platforn_id != false && search_platforn_id != undefined)) {
                    searchedGames.forEach((item) => {
                        search_platforn_id.forEach((item2) => {
                            if (item.PlatformIds[0] == item2) {
                                searchedGames3.push(item);
                            }
                        })
                    })

                    return searchedGames3;
                }
                else return searchedGames;
            }
            else {
                let searchedGames = tmpList.slice();
                let searchedGames2 = [];
                let searchedGames3 = [];
                if (search_genre_id != false && search_genre_id != undefined && search_platforn_id != false && search_platforn_id != undefined) {
                    /*searchedGames2 = searchedGames.filter(game => game.GenreIds[0] == search_genre_id && game.PlatformIds[0] == search_platforn_id)*/
                    searchedGames.forEach((item) => {
                        search_genre_id.forEach((item2) => {
                            if (item.GenreIds[0] == item2) {
                                searchedGames2.push(item);
                            }
                        })
                        search_platforn_id.forEach((item2) => {
                            if (item.PlatformIds[0] == item2) {
                                searchedGames3.push(item);
                            }
                        })
                    })


                    let searchedGames4 = searchedGames2;
                    searchedGames3.forEach((item) => {
                        let ok = true;
                        searchedGames2.forEach((item2) => {
                            if (item.Id_Game == item2.Id_Game) {
                                ok = false;
                            }
                        })
                        if (ok == true) {
                            searchedGames4.push(item);
                        }
                    })

                    return searchedGames4;

                    
                }
                else if ((search_genre_id != false && search_genre_id != undefined) && search_platforn_id == false || search_platforn_id == undefined) {
                    searchedGames.forEach((item) => {
                        search_genre_id.forEach((item2) => {
                            if (item.GenreIds[0] == item2) {
                                searchedGames2.push(item);
                            }
                        })
                    })

                    return searchedGames2;
                }
                else if (search_genre_id == false || search_genre_id == undefined && (search_platforn_id != false && search_platforn_id != undefined)) {
                    searchedGames.forEach((item) => {
                        search_platforn_id.forEach((item2) => {
                            if (item.PlatformIds[0] == item2) {
                                searchedGames3.push(item);
                            }
                        })
                    })

                    return searchedGames3;
                }
                else return searchedGames;
            }
        }
    }

    const item = Search().map(listItem => {
        return (
            <CardProducts key={listItem.Id_Game}
                {...listItem} />
        )
    });

    return (
        <div className="products">
            <div className="row">
                {item.length > 0 ? item : <h4>Contact list is empty.</h4>}
            </div>
            <Pagination/>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(GridProducts);