import { Fragment } from "react";
import { Link } from "react-router-dom";

import TableProducts from "../../components/Table/TableProducts/TableProducts"
import Pagination from "../../components/Pagination/Pagination"

const MainProduct = () => {
    return (
        <Fragment>
            <Link to="/admin/add-product" className="btn btn-white">Add Contact</Link>
            <TableProducts />
            <div className="d-flex align-items-center justify-content-between">
                <div>Showing products 1 to 5 of 12</div>
                <Pagination />
            </div>
        </Fragment >
    )
}

export default MainProduct;