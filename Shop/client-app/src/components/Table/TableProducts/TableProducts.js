import { Fragment } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImages, faEye, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

const TableProducts = () => {
    return (
        <Fragment>
            <table class="table">
                <thead>
                    <tr>
                        <th>
                            <input type="checkbox" />
                        </th>
                        <th>Product</th>
                        <th>Added Date</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input type="checkbox" />
                        </td>
                        <td>Battelfild 2048</td>
                        <td>03/24/2018 </td>
                        <td>60$</td>
                        <td>100</td>
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
                    <tr>
                        <td>
                            <input type="checkbox" />
                        </td>
                        <td>Battelfild 2048 </td>
                        <td>03/24/2018 </td>
                        <td>60$</td>
                        <td>100</td>
                        <td>Active</td>
                        <td className="table-action">
                            <FontAwesomeIcon icon={faEye} />
                            <FontAwesomeIcon icon={faEdit} />
                            <FontAwesomeIcon icon={faTrash} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" />
                        </td>
                        <td>Battelfild 2048 </td>
                        <td>03/24/2018 </td>
                        <td>60$</td>
                        <td>100</td>
                        <td>Active</td>
                        <td className="table-action">
                            <FontAwesomeIcon icon={faEye} />
                            <FontAwesomeIcon icon={faEdit} />
                            <FontAwesomeIcon icon={faTrash} />
                        </td>
                    </tr>
                </tbody>
            </table>
        </Fragment>
    )
}

export default TableProducts;