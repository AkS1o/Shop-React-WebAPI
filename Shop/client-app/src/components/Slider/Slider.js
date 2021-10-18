import { Link } from "react-router-dom";
import { Component, Fragment } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

class Slider extends Component {
	state = {
		position: -20
	};

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
								<Link to="#" className="slide">
									<img src="/img/farcry6.jpg" alt="img" className="img-fluid" />
									<div className="content">
										<h3>far cry 6</h3>
										<p>Dive into the gritty world of a modern-day guerrilla revolution to liberate a nation from its oppressive dictators.</p>
										<div className="d-flex justify-content-between">
											<div className="price">60$</div>
											<div className="btn-group">
												<Link to="#" className="btn btn-outline-white">By Now</Link>
												<Link to="#" className="btn btn-white ">Add to card</Link>
											</div>
										</div>
									</div>
								</Link>
								<Link to="#" className="slide">
									<img src="/img/battlefield-2042.jpg" alt="img" className="img-fluid" />
									<div className="content">
										<h3>far cry 6</h3>
										<p>Suit up for Event Challenges with new Batman themed items, Gotham City Rumble Limited Time Mode, the return of all three Batmobiles, and more!</p>
										<div className="d-flex justify-content-between">
											<div className="price">60$</div>
											<div className="btn-group">
												<Link to="#" className="btn btn-outline-white">By Now</Link>
												<Link to="#" className="btn btn-white ">Add to card</Link>
											</div>
										</div>
									</div>
								</Link>
								<Link to="#" className="slide">
									<img src="/img/RocketLeague.jpg" alt="img" className="img-fluid" />
									<div className="content">
										<h3>Rocket League</h3>
										<p>Suit up for Event Challenges with new Batman themed items, Gotham City Rumble Limited Time Mode, the return of all three Batmobiles, and more!</p>
										<div className="d-flex justify-content-between">
											<div className="price">60$</div>
											<div className="btn-group">
												<Link to="#" className="btn btn-outline-white">By Now</Link>
												<Link to="#" className="btn btn-white ">Add to card</Link>
											</div>
										</div>
									</div>
								</Link>
								<Link to="#" className="slide">
									<img src="/img/DarkestDungeon.jpg" alt="img" className="img-fluid" />
									<div className="content">
										<h3>Darkest Dungeon II</h3>
										<p>Gather your courage and ride out into the chaos of a world undone in this long-awaited sequel to the smash hit RPG.</p>
										<div className="d-flex justify-content-between">
											<div className="price">60$</div>
											<div className="btn-group">
												<Link to="#" className="btn btn-outline-white">By Now</Link>
												<Link to="#" className="btn btn-white ">Add to card</Link>
											</div>
										</div>
									</div>
								</Link>
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

export default Slider;