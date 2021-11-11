import { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux"
import { useEffect } from "react";

import { getAllPlatforms } from "../../actions/PlatformListAction"

import apiService from "../../services/APIService";

import Pagination from "../../../src/components/Pagination/Pagination"

import TablePlatform from "../../components/Table/TablePlatforms/TablePlanforms";


const MainPlatform = ({ PlatformList, getAllPlatforms }) => {

    useEffect(() => {
        apiService.fetchPlatformList().then(data => {
            getAllPlatforms(data.List);
        });
    }, []);

    const item = PlatformList.map(listItem => {
        return (
            <TablePlatform key={listItem.Id}
                {...listItem} />
        )
    });
    return (
        <Fragment>
            <section>
            <Link to="/user/add-platform" className="btn btn-white">Add Platform</Link>
            <table className="table">
                <thead>
                    <tr>
                        <th>
                            <input type="checkbox" />
                        </th>
                        <th>Platform</th>
                    </tr>
                </thead>
                <tbody>
                    {item.length > 0 ? item : <h4>Platform list is empty.</h4>}
                </tbody>
            </table>
            <div className="d-flex align-items-center justify-content-between">
                <div>Showing platforms 1 to 5 of 12</div>
                <Pagination />
                </div>
                </section>
        </Fragment >
    )
}

const mapStateToProps = ({ PlatformListReducer }) => {
    const { PlatformList } = PlatformListReducer;
    return { PlatformList }
}

const mapDispatchToProps = {
    getAllPlatforms
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPlatform);