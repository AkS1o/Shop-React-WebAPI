import { Fragment } from "react";
import { connect } from "react-redux"
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImages, faEye, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

const TableProducts = ({ Ganre, Name, Ratings, Price, Date }) => {
    return (
        <Fragment>

            <tr>
                <td>
                    <input type="checkbox" />
                </td>
                <td>{Name}</td>
                <td>{Date} </td>
                <td>{Price}</td>
                <td>{Ratings}</td>
                <td>Active</td>
                <td className="table-action">
                    <Link to="/admin/views-product">
                        <FontAwesomeIcon icon={faEye} />
                    </Link>
                    <Link to="/admin/edit-product">
                        <FontAwesomeIcon icon={faEdit} />
                    </Link>
                    <Link to="/admin/delete-product">
                        <FontAwesomeIcon icon={faTrash} />
                    </Link>
                    <FontAwesomeIcon icon={faImages} />
                </td>
            </tr>
        </Fragment>
    )
}

const mapStateToProps = ({ GamesReducer }) => {
    const { Games } = GamesReducer;
    return { Games }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(TableProducts);