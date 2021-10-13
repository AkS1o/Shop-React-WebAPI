const initialState = {
    Games: [],
    CurrentGame: null
}

const GamesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GAMES_LOADED":
            return {
                ...state,
                Games: action.payload.Games
            }
        default:
            return state;
    }
}

export default GamesReducer;