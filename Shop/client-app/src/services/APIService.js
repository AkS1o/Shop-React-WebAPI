class APIService {
    URl = "https://database-d0d55-default-rtdb.firebaseio.com/games.json";

    fetchContactList() {
        const Games = fetch(this.URl)
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

    updateDatabse = (games) => {
        fetch(this.URl,
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "PUT",
                body: JSON.stringify(games)
            })
            .then(res => console.log(res))
            .catch(res => console.log(res))
    }
}

const apiService = new APIService();
export default apiService;