import { Fragment } from "react";
import { connect } from "react-redux"
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImages, faEye, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

import APIService from "../../../services/APIService"

import { deletePlatform, getCurrentPlatform } from "../../../actions/PlatformListAction"

const TablePlatforms = ({ Id, Name, PlatformList, deletePlatform, getCurrentPlatform }) => {
    let onDeletePlatform = () => {
        const index = PlatformList.findIndex(elem => elem.Id === Id);
        const tmpList = PlatformList.slice();
        tmpList.splice(index, 1);
        deletePlatform(tmpList);
        APIService.deletePlatform(Id);
    }
    let onGetCurrentPlatform = () => {
        const index = PlatformList.findIndex(elem => elem.Id === Id);
        const platform = PlatformList[index];
        getCurrentPlatform(platform)
    }
    return (
        <Fragment>

            <tr>
                <td>
                    <input type="checkbox" />
                </td>
                <td>{Name}</td>
                <td>Active</td>
                <td className="table-action">
                    <Link onClick={onDeletePlatform} to="/admin/">
                        <FontAwesomeIcon icon={faTrash} />
                    </Link>
                    <FontAwesomeIcon icon={faImages} />
                </td>
            </tr>
        </Fragment>
    )
}

const mapStateToProps = ({ PlatformListReducer }) => {
    const { PlatformList } = PlatformListReducer;
    return { PlatformList }
}

const mapDispatchToProps = {
    deletePlatform,
    getCurrentPlatform
}

export default connect(mapStateToProps, mapDispatchToProps)(TablePlatforms);