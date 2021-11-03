import { useEffect } from "react";
import { connect } from "react-redux"

// Import components
import CardProducts from "../../Card/CardProducts/CardProducts";

// Import Actions
import { getAllGames } from "../../../actions/GameListAction"
import { getAllGamesVM } from "../../../actions/GameListAction"

import { getAllGenres } from "../../../actions/GenreListAction"
import { getAllPlatforms } from "../../../actions/PlatformListAction"

// Import Services
import apiService from "../../../services/APIService";

const GridProducts = ({ GameList, GenreList, PlatformList, GameListVM, SearchString, SearchGenre, SearchPlatform, getAllGames, getAllGamesVM}) => {
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

	let Search = () => {
		const tmpList = GameListVM.slice();

		let search_genre_id = "";
		let search_platforn_id = "";
		if (SearchGenre != "") {
			GenreList.forEach((item) => {
				if (item.Name == SearchGenre) {
					search_genre_id = item.Id;
				}
			})
		}
		if (SearchPlatform != "") {
			PlatformList.forEach((item) => {
				if (item.Name == SearchPlatform) {
					search_platforn_id = item.Id;
				}
			})
        }
		
		console.log("GameListVM", GameListVM)

		if (SearchString != "") {
			let searchedGames = tmpList.filter(game => game.Name.includes(SearchString));
			let searchedGames2 = [];
			if (search_genre_id != "" && search_platforn_id != "") {
				searchedGames2 = searchedGames.filter(game => game.GenreIds[0] == search_genre_id && game.PlatformIds[0] == search_platforn_id)

			}
			else if (search_genre_id != "" && search_platforn_id == "") {
				searchedGames2 = searchedGames.filter(game => game.GenreIds[0] == search_genre_id)
			}
			else if (search_genre_id == "" && search_platforn_id != "") {
				searchedGames2 = searchedGames.filter(game => game.PlatformIds[0] == search_platforn_id)
			}
			else {
				return searchedGames;
            }
			
			
			return searchedGames2;
		}
		else {
			let searchedGames = tmpList.slice();
			let searchedGames2 = tmpList.slice();
			if (search_genre_id != "" && search_platforn_id != "") {
				return searchedGames2 = searchedGames.filter(game => game.GenreIds[0] == search_genre_id && game.PlatformIds[0] == search_platforn_id)
			}
			else if (search_genre_id != "" && search_platforn_id == "") {
				 return searchedGames2 = searchedGames.filter(game => game.GenreIds[0] == search_genre_id)
			}
			else if (search_genre_id == "" && search_platforn_id != "") {
				return searchedGames2 = searchedGames.filter(game => game.PlatformIds[0] == search_platforn_id)
			}
			else {
				return searchedGames;
			}


			return searchedGames;
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
		</div>
	)
}

const mapStateToProps = ({ GameListReducer, GenreListReducer, PlatformListReducer }) => {
	const { GameList, GameListVM, SearchString, SearchGenre, SearchPlatform } = GameListReducer;
	const { GenreList } = GenreListReducer;
	const { PlatformList } = PlatformListReducer;
	return { GameList, GenreList, PlatformList, GameListVM, SearchString, SearchGenre, SearchPlatform }
}

const mapDispatchToProps = {
	getAllGames,
	getAllGamesVM,
	getAllGenres,
	getAllPlatforms
}

export default connect(mapStateToProps, mapDispatchToProps)(GridProducts);