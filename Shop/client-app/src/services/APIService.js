import { Component } from "react";

class APIService extends Component {
    apiGames = "/api/Games/";
    apiGenres = "/api/Genres/"
    apiPlatforms = "/api/Platform/"

    async fetchContactList() {
        console.log("apiGames", this.apiGames + "get-games")
        const List = await fetch(this.apiGames + "get-games")
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

    async addGame(Game) {
        await fetch(`${this.apiGames}add-game`,
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

    async deleteGame(Id) {
        await fetch(`${this.apiGames}delete-game/${Id}`,
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

    async updateGame(Game) {
        await fetch(`${this.apiGames}update-game`,
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

    async fetchGenreList() {
        console.log("apiGenres", this.apiGenres + "get-genres")
        const List = await fetch(this.apiGenres + "get-genres")
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

    async addGenre(Genre) {
        await fetch(`${this.apiGenres}add-genres`,
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

    async deleteGenre(Id) {
        await fetch(`${this.apiGenres}delete-genre/${Id}`,
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

    async fetchPlatformList() {
        console.log("apiPlatforms", this.apiPlatforms + "get-genres")
        const List = await fetch(this.apiPlatforms + "get-platforms")
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

    async addPlatform(Platform) {
        await fetch(`${this.apiPlatforms}add-platforms`,
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

    async deletePlatform(Id) {
        await fetch(`${this.apiPlatforms}delete-platform/${Id}`,
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
}

const apiService = new APIService();
export default apiService;