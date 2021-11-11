import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { connect } from "react-redux"
import apiService from "../../../services/APIService";

import { getAllGenres } from "../../../actions/GenreListAction"
import { getAllPlatforms } from "../../../actions/PlatformListAction"

import { updateSearchGenre } from "../../../actions/GameListAction"
import { updateSearchPlatform } from "../../../actions/GameListAction"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const SitebarProducts = ({ GenreList, PlatformList, getAllGenres, getAllPlatforms, updateSearchGenre, updateSearchPlatform, SearchGenre, SearchPlatform }) => {

    useEffect(() => {
        apiService.fetchPlatformList().then(data => {
            getAllPlatforms(data.List);
        });

        apiService.fetchGenreList().then(data => {
            getAllGenres(data.List);
        });

        //let array = [];
        //updateSearchGenre(array);
        //updateSearchPlatform(array)

        createsiteBarItem("search_by_genre_form", GenreList);
        createsiteBarItem("search_by_platform_form", PlatformList);
    }, []);

    let onupdateSearchGenre = (/*e,*/value) => {
        let a = SearchGenre;
        if (a.includes(value)) {
            let a = [];
            SearchGenre.forEach((item) => {
                if (item != value) {
                    a.push(item);
                }
            })
            SearchGenre = a;
            updateSearchGenre(SearchGenre);
        //    console.log("genre arr with include elem stae", SearchGenre)
        }
        else {
            let b = [];
            SearchGenre.forEach((item) => {
                if (item != value) {
                    b.push(item);
                }

            })
            b.push(value);
            SearchGenre = b;
            updateSearchGenre(SearchGenre);
        //    console.log("genre arr with not include elem stae", SearchGenre)
        }
    }

    let onupdateSearchPlatform = (/*e,*/value) => {

        let a = SearchPlatform;
        if (a.includes(value)) {
            let a = [];
            SearchPlatform.forEach((item) => {
                if (item != value) {
                    a.push(item);
                }
            })
            SearchPlatform = a;
            updateSearchPlatform(SearchPlatform);
        //    console.log("platform arr with include elem stae", SearchPlatform)
        }
        else {
            let b = [];
            SearchPlatform.forEach((item) => {
                if (item != value) {
                    b.push(item);
                }
                
            })
            b.push(value);
            SearchPlatform = b;
            updateSearchPlatform(SearchPlatform);
        //    console.log("platform arr with not include elem stae", SearchPlatform)
        }
    }



    const createsiteBarItem = (elId, arr) => {
        let form = document.getElementById(elId);

        let formGroup = document.createElement('div');
        formGroup.classList.add("form-group");



        form.appendChild(formGroup);

        arr.forEach((item) => {
            let formCheck = document.createElement('div');
            formCheck.classList.add("form-check");

            let checkbox = document.createElement('input');
            let typeCheckbox = document.createAttribute('type');
            typeCheckbox.value = "checkbox";
            let typeValue = document.createAttribute('value');
            typeValue.value = item.Name;
            let typeId = document.createAttribute('id');
            typeId.value = item.Name;

            if (elId == "search_by_genre_form") {
                let typeName = document.createAttribute('name');
                typeName.value = "search_by_genre_form";
                checkbox.setAttributeNode(typeName);
            }
            if (elId == "search_by_platform_form") {
                let typeName = document.createAttribute('name');
                typeName.value = "search_by_platform_form";
                checkbox.setAttributeNode(typeName);
            }

            checkbox.setAttributeNode(typeCheckbox);
            checkbox.setAttributeNode(typeValue);
            checkbox.setAttributeNode(typeId);

            if (elId == "search_by_genre_form") {

                checkbox.setAttribute("onchange", 'onupdateSearchGenre(item.Name);');
                checkbox.onchange = function () { onupdateSearchGenre(item.Name) }

            }
            if (elId == "search_by_platform_form") {

                checkbox.setAttribute("onchange", 'onupdateSearchPlatform(item.Name);');
                checkbox.onchange = function () { onupdateSearchPlatform(item.Name) }
            }


            let label = document.createElement('label');
            label.innerHTML = item.Name; // Назва



            formCheck.appendChild(checkbox);
            formCheck.appendChild(label);

            form.appendChild(formCheck);
        }
        )
    }

    const collapse = (param) => {
        let navItem = document.getElementById(param);

        if (navItem.childNodes[0].classList.contains("collapse") && navItem.childNodes[1].classList.contains("collapse")) {
            navItem.childNodes[0].classList.remove("collapse");
            navItem.childNodes[1].classList.remove("collapse")
        }
        else {
            navItem.childNodes[0].classList.add("collapse");
            navItem.childNodes[1].classList.add("collapse")
        }
    }

    return (
        <Fragment>
            <div className="sitebar sitebar-products">
                <div className="nav-item" id="genre_button_id">
                    <Link className="nav-link" to="#" onClick={() => collapse("genre_button_id")}>
                        <h3>Genres</h3>
                        <span className="menu-arrow">
                            <FontAwesomeIcon icon={faAngleDown} />
                        </span>
                    </Link>
                    <div className="menu-collapse">
                        {/*<form className="form-group">*/}
                        {/*    <input type="text" placeholder="Search" />*/}
                        {/*</form>*/}
                        <form id="search_by_genre_form">
                            {/*<div className="form-check">*/}
                            {/*    <input type="checkbox" />*/}
                            {/*    <label>ubisoft(20)</label>*/}
                            {/*</div>*/}
                            {/*<div className="form-check">*/}
                            {/*    <input type="checkbox" />*/}
                            {/*    <label>Electronic Arts(13)</label>*/}
                            {/*</div>*/}
                            {/*<div className="form-check">*/}
                            {/*    <input type="checkbox" />*/}
                            {/*    <label>cd projekt red(16)</label>*/}
                            {/*</div>*/}
                        </form>
                    </div>
                </div>
                <div className="nav-item" id="platform_button_id">
                    <Link className="nav-link" to="#" onClick={() => collapse("platform_button_id")}>
                        <h3>Platforms</h3>
                        <span className="menu-arrow">
                            <FontAwesomeIcon icon={faAngleDown} />
                        </span>
                    </Link>
                    <div className="menu-collapse">
                        {/*<form className="form-group">*/}
                        {/*    <input type="text" placeholder="Search" />*/}
                        {/*</form>*/}
                        <form id="search_by_platform_form">
                            {/*<div className="form-check">*/}
                            {/*    <input type="checkbox" />*/}
                            {/*    <label>ubisoft(20)</label>*/}
                            {/*</div>*/}
                            {/*<div className="form-check">*/}
                            {/*    <input type="checkbox" />*/}
                            {/*    <label>Electronic Arts(13)</label>*/}
                            {/*</div>*/}
                            {/*<div className="form-check">*/}
                            {/*    <input type="checkbox" />*/}
                            {/*    <label>cd projekt red(16)</label>*/}
                            {/*</div>*/}
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

const mapStateToProps = ({ GenreListReducer, PlatformListReducer, GameListReducer }) => {
    const { GenreList } = GenreListReducer;
    const { PlatformList } = PlatformListReducer;
    const { SearchGenre, SearchPlatform } = GameListReducer
    return { GenreList, PlatformList, SearchGenre, SearchPlatform }
}

const mapDispatchToProps = {
    getAllGenres,
    getAllPlatforms,
    updateSearchGenre,
    updateSearchPlatform
}

export default connect(mapStateToProps, mapDispatchToProps)(SitebarProducts);