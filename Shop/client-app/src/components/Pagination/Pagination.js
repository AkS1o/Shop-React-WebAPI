import { Fragment } from "react";
import { Link } from "react-router-dom";

const Pagination = () => {
    return (
        <Fragment>
            <ul class="pagination">
                <li class="page-item">
                    <Link class="page-link" to="#">Prev</Link>
                </li>
                <li class="page-item">
                    <Link class="page-link" to="#">1</Link>
                </li>
                <li class="page-item active">
                    <Link class="page-link" to="#">2</Link>
                </li>
                <li class="page-item">
                    <Link class="page-link" to="#">3</Link>
                </li>
                <li class="page-item">
                    <Link class="page-link" to="#">Next</Link>
                </li>
            </ul>
        </Fragment>
    )
}

export default Pagination;