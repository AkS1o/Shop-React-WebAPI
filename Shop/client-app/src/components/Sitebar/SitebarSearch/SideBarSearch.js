import { useEffect } from "react";
import { connect } from "react-redux"

import { updateSearchString } from "../../../actions/GameListAction"

const SideBarSearch = ({ updateSearchString }) => {
    let onupdateSearchString = (e) => {
        e.preventDefault();
        let selectElem = document.getElementById("Searchhh").value;
        const searchString = selectElem;
        updateSearchString(selectElem);
    }
    return (
        <form>
            <div className="form-group">
                <input type="text" id="Searchhh" className="contacts-search" placeholder="Search" onChange={onupdateSearchString} />

                {/*<button type="submit" className="btn btn-primary mb-3" onClick={onupdateSearchString}>Search</button>*/}
            </div>
        </form>
    )
}

const mapStateToProps = ({ GameListReducer }) => {
    const { GameList, SearchString } = GameListReducer;
    return { GameList, SearchString }
}

const mapDispatchToProps = {
    updateSearchString
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBarSearch);