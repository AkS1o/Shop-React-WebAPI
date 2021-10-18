import { Component } from "react";

class APIService extends Component {
    apiGames = "/api/Games/";

    async fetchContactList() {
        const Games = await fetch(this.apiGames + "get-games")
            .then(response => {
                return response.json();
            })
            .then(data => {
                if (data === null)
                    return { Games: [] }
                else
                    return { Games: data };
            })
            .catch(error => console.log(error));
        return Games;
    }

    //updateDatabse = (games) => {
    //    fetch(this.URl,
    //        {
    //            headers: {
    //                'Content-Type': 'application/json'
    //            },
    //            method: "PUT",
    //            body: JSON.stringify(games)
    //        })
    //        .then(res => console.log(res))
    //        .catch(res => console.log(res))
    //}
}

const apiService = new APIService();
export default apiService;