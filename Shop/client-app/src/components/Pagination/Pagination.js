import { useEffect } from "react";
import { Component } from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux"
import apiService from "../../services/APIService";
import { getAllGamesVM } from "../../actions/GameListAction"
import { gamePaginationChange } from "../../actions/GameListAction"

const Pagination = ({ gamePaginationChange, getAllGamesVM, GameListVM, GamePagination }) => {
    useEffect(() => {
        apiService.fetchGame_vm_List().then(data => {
            getAllGamesVM(data.List);
        })
    }, []);

    let CurrentGamePagination = GamePagination;

    let onupdatePagination = (value, id) => {
        let elem = document.getElementById(id + "li");
        elem.setAttribute("class", "page-item active")

        if (id != CurrentGamePagination) {
            let elem2 = document.getElementById(CurrentGamePagination + "li");
            elem2.setAttribute("class", "page-item")
        }
        CurrentGamePagination = value;
        let val = value.toString();
        GamePagination = val;
        gamePaginationChange(val);
    }

    let prevButtonPaginChange = (value) => {
        let val = parseInt(value);
        if (val != 1) {
            val = val - 1;
            GamePagination = val.toString();
            onupdatePagination(val, val);
        }
    }

    let nextButtonPaginChange = (value) => {
        let games = GameListVM.slice();
        let CountGames = games.length;
        let count = CountGames / 8;
        let PageAll = Math.ceil(count);

        let val = parseInt(value);
        if (val != PageAll) {
            val = val + 1;
            GamePagination = val.toString();
            onupdatePagination(val, val);
        }
    }

    useEffect(() => {
        let pagin = document.getElementById("pagn");
        if (!pagin.hasChildNodes()) {

            let games = GameListVM.slice();
            let games_with_pagin = games;

            let CountGames = games.length;

            let count = CountGames / 8;
            let PageAll = Math.ceil(count);



            let li1 = document.createElement("li");
            li1.setAttribute("class", "page-item")
            let link1 = document.createElement("a");
            link1.setAttribute("class", "page-link")
            link1.setAttribute("onClick", 'prevButtonPaginChange(GamePagination);');
            link1.onclick = function () { prevButtonPaginChange(GamePagination) }
            link1.innerHTML = "Prev";
            li1.appendChild(link1);
            pagin.appendChild(li1);

            let ar = [];
            for (var i = 1; i <= PageAll; i++) {
                ar.push(i);
            }

            ar.forEach((item) => {
                let li2 = document.createElement("li");
                li2.setAttribute("class", "page-item")
                li2.setAttribute("id", item + "li")
                let link2 = document.createElement("a");
                link2.setAttribute("class", "page-link")
                link2.setAttribute("to", "#");
                link2.setAttribute("id", item)

                link2.setAttribute("onClick", 'onupdatePagination(item, item);');
                link2.onclick = function () { onupdatePagination(item, item) }

                if (item == CurrentGamePagination) {
                    li2.setAttribute("class", "page-item active")
                }
                link2.innerHTML = item;
                li2.appendChild(link2);
                pagin.appendChild(li2);
            })


            let li3 = document.createElement("li");
            li3.setAttribute("class", "page-item")
            let link3 = document.createElement("a");
            link3.setAttribute("class", "page-link")
            link3.setAttribute("onClick", 'nextButtonPaginChange(GamePagination);');
            link3.onclick = function () { nextButtonPaginChange(GamePagination) }
            link3.innerHTML = "Next";
            li3.appendChild(link3);
            pagin.appendChild(li3);
        }
    })

    return (
        <Fragment>
            <ul class="pagination" id="pagn">

            </ul>
        </Fragment>
    )
}

const mapStateToProps = ({ GameListReducer }) => {
    const { GameListVM, GamePagination } = GameListReducer;
    return { GameListVM, GamePagination }
}

const mapDispatchToProps = {
    gamePaginationChange,
    getAllGamesVM
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
