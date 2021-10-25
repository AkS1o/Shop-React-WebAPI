import { Fragment } from "react";
import { connect } from "react-redux"
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const CardProducts = ({ Id, Developer, Name, Quantity, Price }) => {
    return (
        <Fragment>
            <div className="col-3">
                <Link to="#" className="card card-products">
                    <div className="image-wrap">
                        <img src="../img/bf2048.png" alt="img" className="img-fluid" />
                    </div>
                    <div className="card-body">
                        <div className="subtitle">{Developer}</div>
                        <div className="title">{Name}</div>
                        <div className="d-flex justify-content-between">
                            <div className="ratings">
                                {Quantity}
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

const mapStateToProps = ({ GameListReducer }) => {
    const { GameList } = GameListReducer;
    return { GameList }
}

const mapDispatchToProps = {
}


export default connect(mapStateToProps, mapDispatchToProps)(CardProducts);