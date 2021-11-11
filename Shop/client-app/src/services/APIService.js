import { Component } from "react";

class APIService extends Component {
    apiGames = "/api/Games/";
    apiGenres = "/api/Genres/"
    apiPlatforms = "/api/Platform/"
    apiNews = "/api/News/"
    apiBuyers = "/api/Buyers/"
    apiAuth = "/api/Auth/"

    fetchContactList() {
        const List = fetch(this.apiGames + "get-games")
            .then(response => {
                return response.json();
            })
            .then(data => {
                if (data === null)
                    return { List: [] }
                else
                    return { List: data };
            })
            .catch(error => console.log(error));
        return List;
    }

    fetchGame_vm_List() {
        const List = fetch(this.apiGames + "get-gamesVM")
            .then(response => {
                return response.json();
            })
            .then(data => {
                if (data === null)
                    return { List: [] }
                else
                    return { List: data };
            })
            .catch(error => console.log(error));
        return List;
    }

    addGame(Game) {
        fetch(`${this.apiGames}add-game`,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(Game)
            })
            .then(res => console.log(res))
            .catch(res => console.log(res))
    }

    deleteGame(Id) {
        fetch(`${this.apiGames}delete-game/${Id}`,
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "DELETE",
                body: JSON.stringify(Id)
            })
            .then(res => console.log(res))
            .catch(res => console.log(res))
    }

    updateGame(Game) {
        fetch(`${this.apiGames}update-game`,
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "PUT",
                body: JSON.stringify(Game)
            })
            .then(res => console.log(res))
            .catch(res => console.log(res))
    }

    fetchGenreList() {
        const List = fetch(this.apiGenres + "get-genres")
            .then(response => {
                return response.json();
            })
            .then(data => {
                if (data === null)
                    return { List: [] }
                else
                    return { List: data };
            })
            .catch(error => console.log(error));
        return List;
    }

    addGenre(Genre) {
        fetch(`${this.apiGenres}add-genres`,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(Genre)
            })
            .then(res => console.log(res))
            .catch(res => console.log(res))
    }

    deleteGenre(Id) {
        fetch(`${this.apiGenres}delete-genre/${Id}`,
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "DELETE",
                body: JSON.stringify(Id)
            })
            .then(res => console.log(res))
            .catch(res => console.log(res))
    }

    fetchPlatformList() {
        const List = fetch(this.apiPlatforms + "get-platforms")
            .then(response => {
                return response.json();
            })
            .then(data => {
                if (data === null)
                    return { List: [] }
                else
                    return { List: data };
            })
            .catch(error => console.log(error));
        return List;
    }

    addPlatform(Platform) {
        fetch(`${this.apiPlatforms}add-platforms`,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(Platform)
            })
            .then(res => console.log(res))
            .catch(res => console.log(res))
    }

    deletePlatform(Id) {
        fetch(`${this.apiPlatforms}delete-platform/${Id}`,
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "DELETE",
                body: JSON.stringify(Id)
            })
            .then(res => console.log(res))
            .catch(res => console.log(res))
    }

    fetchNewsList() {
        const List = fetch(this.apiNews + "get-news")
            .then(response => {
                return response.json();
            })
            .then(data => {
                if (data === null)
                    return { List: [] }
                else
                    return { List: data };
            })
            .catch(error => console.log(error));
        return List;
    }

    addNews(News) {
        fetch(`${this.apiNews}add-news`,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(News)
            })
            .then(res => console.log(res))
            .catch(res => console.log(res))
    }

    deleteNews(Id) {
        fetch(`${this.apiNews}delete-news/${Id}`,
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "DELETE",
                body: JSON.stringify(Id)
            })
            .then(res => console.log(res))
            .catch(res => console.log(res))
    }

    updateNews(News) {
        fetch(`${this.apiNews}update-news`,
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "PUT",
                body: JSON.stringify(News)
            })
            .then(res => console.log(res))
            .catch(res => console.log(res))
    }



    fetchBuyerList() {
        const List = fetch(this.apiBuyers + "get-buyers")
            .then(response => {
                return response.json();
            })
            .then(data => {
                if (data === null)
                    return { List: [] }
                else
                    return { List: data };
            })
            .catch(error => console.log(error));
        return List;
    }

    fetchBuyerListVM() {
        const List = fetch(this.apiBuyers + "get-buyersVM")
            .then(response => {
                return response.json();
            })
            .then(data => {
                if (data === null)
                    return { List: [] }
                else
                    return { List: data };
            })
            .catch(error => console.log(error));
        return List;
    }

    fetchCurentBuyer() {
        const Buyer = fetch(this.apiAuth + "user")
            .then(response => {
                return response.json();
            })
            .then(data => {
                if (data === null)
                    return { Buyer: null }
                else
                    return { Buyer: data };
            })
            .catch(error => console.log(error));
        return Buyer;
    }

    addBuyer(Buyer) {
        fetch(`${this.apiAuth}register`,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(Buyer)
            })
            .then(res => console.log(res))
            .catch(res => console.log(res))
    }

    loginBuyer(Buyer) {
        fetch(`${this.apiAuth}login`,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(Buyer)
            })
            .then(res => console.log(res))
            .catch(res => console.log(res))
    }

    logOutBuyer() {
        fetch(`${this.apiAuth}logout`,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify()
            })
            .then(res => console.log(res))
            .catch(res => console.log(res))
    }

    deleteBuyer(Id) {
        fetch(`${this.apiBuyers}delete-buyer/${Id}`,
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "DELETE",
                body: JSON.stringify(Id)
            })
            .then(res => console.log(res))
            .catch(res => console.log(res))
    }

    updateBuyer(Buyer) {
        fetch(`${this.apiAuth}update-buyer`,
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "PUT",
                body: JSON.stringify(Buyer)
            })
            .then(res => console.log(res))
            .catch(res => console.log(res))
    }
}

const apiService = new APIService();
export default apiService;