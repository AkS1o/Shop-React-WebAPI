import { Fragment } from "react";

//import Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const TableOrders = () => {
    return (
        <Fragment>
            <tr>
                <td>
                    <img src="../img/bf2048.png" alt="img" height={80} />
                    <div>
                        name
                    </div>
                </td>
                <td>$120</td>
                <td>3</td>
                <td>$120 * 3</td>
                <td className="table-action">
                    <FontAwesomeIcon icon={faTimes} />
                </td>
            </tr>
        </Fragment>
    )
}


export default TableOrders;