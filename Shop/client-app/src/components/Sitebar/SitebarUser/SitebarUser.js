import { Link } from "react-router-dom";
import { Fragment } from "react";
import { useEffect } from "react";
import { connect } from "react-redux"

import apiService from "../../../services/APIService";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faWallet, faHistory, faKey } from "@fortawesome/free-solid-svg-icons";
import { faNewspaper, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import { getAllNews } from "../../../actions/NewsListAction";
import { getAllGames } from "../../../actions/GameListAction"
import { getAllGamesVM } from "../../../actions/GameListAction"
import { getAllPlatforms } from "../../../actions/PlatformListAction"
import { getAllGenres } from "../../../actions/GenreListAction"
import { loginBuyer } from "../../../actions/BuyerListAction";

const SitebarUser = ({ CurrentBuyer, CurrentBuyerVM, BuyersListVM, getAllNews, getAllGames, getAllGamesVM, getAllPlatforms, getAllGenres  }) => {

    useEffect(() => {

        apiService.fetchCurentBuyer().then(data => {
            loginBuyer(data.Buyer);
        })

        apiService.fetchContactList().then(data => {
            getAllGames(data.List);
        });

        apiService.fetchGame_vm_List().then(data => {
            getAllGamesVM(data.List);
        });

        apiService.fetchNewsList().then(data => {
            getAllNews(data.List);
        });

        apiService.fetchPlatformList().then(data => {
            getAllPlatforms(data.List);
        });

        apiService.fetchGenreList().then(data => {
            getAllGenres(data.List);
        });
       

        if (CurrentBuyer.isAdmin == true) {

            let elem1 = document.getElementById("productsDiv");
            let elem2 = document.getElementById("genresDiv");
            let elem3 = document.getElementById("platformsDiv");
            let elem4 = document.getElementById("newsDiv");

            elem1.setAttribute("class", "nav-item visib top-line");
            elem2.setAttribute("class", "nav-item visib");
            elem3.setAttribute("class", "nav-item visib");
            elem4.setAttribute("class", "nav-item visib");

            //let sitebr = document.getElementById("sitebr");

            //let div1 = document.createElement("div");
            //div1.setAttribute("class", "nav-item");
            //let link1 = document.createElement("a");
            //link1.setAttribute("class", "nav-link");
            //link1.setAttribute("href", "/user/products");
            ///*let span1 = document.createElement("span");*/
            ///*span1.setAttribute("class", "menu-icon");*/
            //let h3_1 = document.createElement("h3");
            //h3_1.innerHTML = "Producth";
            //link1.appendChild(h3_1);
            //div1.appendChild(link1);
            //sitebr.appendChild(div1);

            //let div2 = document.createElement("div");
            //div2.setAttribute("class", "nav-item");
            //let link2 = document.createElement("a");
            //link2.setAttribute("class", "nav-link");
            //link2.setAttribute("href", "/user/genres");
            ///*let span1 = document.createElement("span");*/
            ///*span1.setAttribute("class", "menu-icon");*/
            //let h3_2 = document.createElement("h3");
            //h3_2.innerHTML = "Genres";
            //link2.appendChild(h3_2);
            //div2.appendChild(link2);
            //sitebr.appendChild(div2);

            //let div3 = document.createElement("div");
            //div3.setAttribute("class", "nav-item");
            //let link3 = document.createElement("a");
            //link3.setAttribute("class", "nav-link");
            //link3.setAttribute("href", "/user/platforms");
            ///*let span1 = document.createElement("span");*/
            ///*span1.setAttribute("class", "menu-icon");*/
            //let h3_3 = document.createElement("h3");
            //h3_3.innerHTML = "Planforms";
            //link3.appendChild(h3_3);
            //div3.appendChild(link3);
            //sitebr.appendChild(div3);

            //let div4 = document.createElement("div");
            //div4.setAttribute("class", "nav-item");
            //let link4 = document.createElement("a");
            //link4.setAttribute("class", "nav-link");
            //link4.setAttribute("href", "/user/news");
            ///*let span1 = document.createElement("span");*/
            ///*span1.setAttribute("class", "menu-icon");*/
            //let h3_4 = document.createElement("h3");
            //h3_4.innerHTML = "News";
            //link4.appendChild(h3_4);
            //div4.appendChild(link4);
            //sitebr.appendChild(div4);

        }
        else {
            let elem1 = document.getElementById("productsDiv");
            let elem2 = document.getElementById("genresDiv");
            let elem3 = document.getElementById("platformsDiv");
            let elem4 = document.getElementById("newsDiv");

            elem1.setAttribute("class", "nav-item notvisib");
            elem2.setAttribute("class", "nav-item notvisib");
            elem3.setAttribute("class", "nav-item notvisib");
            elem4.setAttribute("class", "nav-item notvisib");
        }

    }, []);


    return (
        <Fragment>
            <aside className="sitebar" id="sitebr">
                <div className="nav-item">
                    <Link className="nav-link" to="/user/personal">
                        <FontAwesomeIcon icon={faUser} />
                        <h3>General</h3>
                    </Link>
                </div>
                <div className="nav-item">
                    <Link className="nav-link" to="/user/payments">
                        <FontAwesomeIcon icon={faWallet} />
                        <h3>PAYMENT MANAGEMENT</h3>
                    </Link>
                </div>
                <div className="nav-item">
                    <Link className="nav-link" to="/user/transactions">
                        <FontAwesomeIcon icon={faHistory} />
                        <h3>transaction</h3>
                    </Link>
                </div>
                {/*<div className="nav-item">*/}
                {/*    <Link className="nav-link" to="/user/password">*/}
                {/*        <FontAwesomeIcon icon={faKey} />*/}
                {/*        <h3>password </h3>*/}
                {/*    </Link>*/}
                {/*</div>*/}

                <div className="nav-item" id="productsDiv">
                    <Link className="nav-link" to="/user/products">
                        <FontAwesomeIcon icon={faKey} />
                        <h3>Products </h3>
                    </Link>
                </div>

                <div className="nav-item" id="genresDiv">
                    <Link className="nav-link" to="/user/genres">
                        <FontAwesomeIcon icon={faKey} />
                        <h3>Genres </h3>
                    </Link>
                </div>

                <div className="nav-item" id="platformsDiv">
                    <Link className="nav-link" to="/user/platforms">
                        <FontAwesomeIcon icon={faKey} />
                        <h3>Platforms </h3>
                    </Link>
                </div>

                <div className="nav-item" id="newsDiv">
                    <Link className="nav-link" to="/user/news">
                        <FontAwesomeIcon icon={faKey} />
                        <h3>News </h3>
                    </Link>
                </div>
            </aside>
        </Fragment>
    )
}


const mapStateToProps = ({ BuyerListReducer }) => {
    const { CurrentBuyer, CurrentBuyerVM, BuyersListVM } = BuyerListReducer;
    return { CurrentBuyer, CurrentBuyerVM, BuyersListVM }
}

const mapDispatchToProps = {
    getAllGames,
    getAllGamesVM,
    getAllNews,
    getAllPlatforms,
    getAllGenres

}

export default connect(mapStateToProps, mapDispatchToProps)(SitebarUser);