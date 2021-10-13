import { Fragment } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

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