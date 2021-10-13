import { Fragment } from "react";
import { connect } from "react-redux"
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const CardProducts = ({Id, Ganre, Name, Ratings, Price }) => {
    return (
        <Fragment>
            <div className="col-3">
                <Link to="#" className="card card-products">
                    <div className="image-wrap">
                        <img src="../img/bf2048.png" alt="img" className="img-fluid" />
                    </div>
                    <div className="card-body">
                        <div className="subtitle">{Ganre}</div>
                        <div className="title">{Name}</div>
                        <div className="d-flex justify-content-between">
                            <div className="ratings">
                                {Ratings}
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            <div className="price">{Price}₴</div>
                        </div>
                    </div>
                </Link>
            </div>
        </Fragment>
    )
}

const mapStateToProps = ({ GamesReducer }) => {
	const { Games } = GamesReducer;
	return { Games }
}

const mapDispatchToProps = {
}


export default connect(mapStateToProps, mapDispatchToProps)(CardProducts);