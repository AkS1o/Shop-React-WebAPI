import { Fragment } from "react";
import { Link } from "react-router-dom";

const ViewsProduct = () => {
    return (
        <Fragment>
            <form method="post" enctype="multipart/form-data">
                <div class="row">
                    <div class="col-8">
                        <div class="form-group">
                            <label>Name</label>
                            <input />
                        </div>
                        <div class="form-group">
                            <label>Description</label>
                            <input />
                        </div>
                        <div class="form-group">
                            <label>Price</label>
                            <input />
                        </div>
                        <div class="form-select">
                            <label>Category</label>
                            <select>
                                <option selected disabled>--Select Category--</option>
                                <option>Category1</option>
                                <option>Category2</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Image</label>
                            <input type="file" name="files" id="upload" multiple />
                        </div>
                    </div>
                    <div class="col-4">
                        <img src="../img/battlefield-2042.jpg" alt="img" className="img-fluid" />
                    </div>
                </div>
                <div class="d-flex justify-content-center">
                    <Link to="/admin/products" class="btn btn-outline-white mx-2">Back</Link>
                    <input type="submit" class="btn btn-primary mx-2" value="Create" />
                </div>
            </form>
        </Fragment >
    )
}

export default ViewsProduct;