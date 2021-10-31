export const getAllGames = (gameList) => {
    return {
        type: "GAMES_LOADED",
        payload: gameList
    }
}

export const getAllGamesVM = (gameList_vm) => {
    return {
        type: "GAMES_LOADED_VM",
        payload: gameList_vm
    }
}

export const addGame = (gameList) => {
    return {
        type: "GAME_ADD",
        payload: gameList
    }
}

export const deleteGame = (gameList) => {
    return {
        type: "GAME_DELETE",
        payload: gameList
    }
}

export const getCurrentGame = (game) => {
    return {
        type: "GAME_GET",
        payload: game
    }
}

export const changeGame = (gameList) => {
    return {
        type: "GAME_UPDATE",
        payload: gameList
    }
}