import { Link } from "react-router-dom";
import { Component, Fragment } from "react";
import { connect } from "react-redux"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import SliderElement from "../Slider/SliderElement"

import { getAllGames } from "../../actions/GameListAction"
import { getAllGamesVM } from "../../actions/GameListAction"
import apiService from "../../services/APIService"

class Slider extends Component {

	state = {
		position: -20,
		arr: [],
		item: []
	};

	componentDidMount() {
		
		//apiService.fetchContactList().then(data => {
		//	this.pops.getAllGames(data.List);
		//})

		//apiService.fetchGame_vm_List().then(data => {
		//	this.pops.getAllGamesVM(data.List);
		//})

		this.state.arr = this.props.GameListVM.slice(-4);
		console.log("arr", this.state.arr);

		this.state.item = this.state.arr.map(listItem => {
			return (
				<SliderElement key={listItem.Id_Game}
					{...listItem} />
			)
		});
    }


	movePrev = () => {
		if (this.state.position !== -20) {
			this.setState({
				position: this.state.position + 668
			});
		}
	}

	moveNext = () => {
		if (this.state.position !== -1356) {
			this.setState({
				position: this.state.position - 668
			});
		}
	}

	

	render() {
		return (
			<Fragment>
				<section className="slider">
					<div className="container">
						<div className="slide-show">
							<div className="slide-carousel" style={{ left: this.state.position + 'px' }}>
								{this.state.item.length > 0 ? this.state.item : <h4>Contact list is empty.</h4>}
							</div>
							<span onClick={ this.movePrev } type="button" data-controls="prev">
								<FontAwesomeIcon icon={faChevronLeft} />
							</span>
							<span onClick={ this.moveNext } type="button" data-controls="next">
								<FontAwesomeIcon icon={faChevronRight} />
							</span>
						</div>
					</div>
				</section>
			</Fragment>
		);
	}
}


const mapStateToProps = ({ GameListReducer }) => {
	const { GameList, GameListVM, SearchString, SearchGenre, SearchPlatform, GamePagination } = GameListReducer;
	return { GameList, GameListVM, SearchString, SearchGenre, SearchPlatform, GamePagination }
}

const mapDispatchToProps = {
	getAllGames,
	getAllGamesVM
}

export default connect(mapStateToProps, mapDispatchToProps)(Slider);