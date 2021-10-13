import { Link } from "react-router-dom";
import { Fragment } from "react";

const Slider = () => {
	return (
		<Fragment>
			<section className="slider">
				<div className="container">
					<div className="slide-wrap">
						<Link to="#" className="slide active">
							<img src="/img/farcry6.jpg" alt="img" />
						</Link>
						<Link to="#" className="slide">
							<img src="/img/battlefield-2042.jpg" alt="img" />
						</Link>
					</div>
				</div>
			</section>
		</Fragment>
	)
}

export default Slider;