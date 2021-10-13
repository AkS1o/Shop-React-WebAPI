export const getAllGames = (games) => {
    return {
        type: "GAMES_LOADED",
        payload: games
    }
}