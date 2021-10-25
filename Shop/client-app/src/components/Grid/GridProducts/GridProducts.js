import { useEffect } from "react";
import { connect } from "react-redux"

// Import components
import CardProducts from "../../Card/CardProducts/CardProducts";

// Import Actions
import { getAllGames } from "../../../actions/GameListAction"

// Import Services
import apiService from "../../../services/APIService";

const GridProducts = ({ GameList, getAllGames }) => {
	useEffect(() => {
		apiService.fetchContactList().then(data => {
			getAllGames(data.List);
		})
	}, []);

	const item = GameList.map(listItem => {
		return (
			<CardProducts key={listItem.Id}
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

const mapStateToProps = ({ GameListReducer }) => {
	const { GameList } = GameListReducer;
	return { GameList }
}

const mapDispatchToProps = {
	getAllGames
}

export default connect(mapStateToProps, mapDispatchToProps)(GridProducts);