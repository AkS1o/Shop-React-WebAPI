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

const SitebarProducts = ({ GenreList, PlatformList, getAllGenres, getAllPlatforms, updateSearchGenre, updateSearchPlatform }) => {

    useEffect(() => {
        apiService.fetchPlatformList().then(data => {
            getAllPlatforms(data.List);
        });

        apiService.fetchGenreList().then(data => {
            getAllGenres(data.List);
        });

        

        createsiteBarItem("search_by_genre_form", GenreList);
        createsiteBarItem("search_by_platform_form", PlatformList);
    }, []);

    let onupdateSearchGenre = (/*e,*/ value) => {
/*        e.preventDefault();*/
        /*console.log("value", value)*/
        //let selectElem = document.getElementById(value).value;
        //const searchString = selectElem;
        updateSearchGenre(value);
    }

    let onupdateSearchPlatform = (/*e,*/ value) => {
        //e.preventDefault();
        //let selectElem = document.getElementById(value).value;
        //const searchString = selectElem;
        updateSearchPlatform(value);
    }

    //let LoadGenresCheckBox = () => {
    //    let search_by_genre_form = document.getElementById("search_by_genre_form");
    //    GenreList.forEach((item) => {
    //        let div1 = document.createElement("div");
    //        div1.setAttribute("className", "form-check")
    //        let input1 = document.createElement("input");
    //        input1.setAttribute("type", "checkbox")
    //        let label1 = document.createElement("label");
    //        label1.setAttribute("value", item.Name);
    //        label1.setAttribute("id", item.Name);
    //        label1.setAttribute("onClick", onupdateSearchGenre);
    //        label1.innerHTML = item.Name;

    //        div1.appendChild(input1);
    //        div1.appendChild(label1);
    //        search_by_genre_form.appendChild(div1);

    //    })
    //}

    //let LoadPlatformsCheckBox = () => {
    //    let search_by_platform_form = document.getElementById("search_by_platform_form");
    //    PlatformList.forEach((item) => {
    //        let div1 = document.createElement("div");
    //        div1.setAttribute("className", "form-check")
    //        let input1 = document.createElement("input");
    //        input1.setAttribute("type", "checkbox")
    //        let label1 = document.createElement("label");
    //        label1.setAttribute("defaultValue", item.Name);
    //        label1.setAttribute("text", item.Name);
    //        label1.innerHTML = item.Name;
    //        label1.setAttribute("onClick", onupdateSearchPlatform);

    //        div1.appendChild(input1);
    //        div1.appendChild(label1);
    //        search_by_platform_form.appendChild(div1);
    //    })
    //}

    const createsiteBarItem = (elId, arr) => {
        let form = document.getElementById(elId);

        let formGroup = document.createElement('div');
        formGroup.classList.add("form-group");

        //let search = document.createElement('input');

        //let typeText = document.createAttribute('type');
        //typeText.value = "text";

        //let placeholderSearch = document.createAttribute('placeholder');
        //placeholderSearch.value = "Search";

        //search.setAttributeNode(typeText);
        //search.setAttributeNode(placeholderSearch);

        //formGroup.appendChild(search);

        form.appendChild(formGroup);

        arr.forEach((item) => 
        {
            let formCheck = document.createElement('div');
            formCheck.classList.add("form-check");

            let checkbox = document.createElement('input');
            let typeCheckbox = document.createAttribute('type');
            typeCheckbox.value = "radio";
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
                //let typeOnClick = document.createAttribute('onClick');
                //typeOnClick.value = onupdateSearchGenre(item.Name);
                //checkbox.setAttributeNode(typeOnClick);
                checkbox.setAttribute("onClick", 'onupdateSearchGenre(item.Name);');
                checkbox.onclick = function () { onupdateSearchGenre(item.Name) }
                /*checkbox.addEventListener('click', onupdateSearchGenre(...Array(1), item.Name), true);*/
            }
            if (elId == "search_by_platform_form") {
                //let typeOnClick = document.createAttribute('onClick');
                //typeOnClick.value = onupdateSearchPlatform(item.Name);
                //checkbox.setAttributeNode(typeOnClick);
                checkbox.setAttribute("onClick", 'onupdateSearchPlatform(item.Name);');
                checkbox.onclick = function () { onupdateSearchPlatform(item.Name) }
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

const mapStateToProps = ({ GenreListReducer, PlatformListReducer }) => {
    const { GenreList} = GenreListReducer;
    const { PlatformList } = PlatformListReducer;
    return { GenreList, PlatformList}
}

const mapDispatchToProps = {
    getAllGenres,
    getAllPlatforms,
    updateSearchGenre,
    updateSearchPlatform
}

export default connect(mapStateToProps, mapDispatchToProps)(SitebarProducts);