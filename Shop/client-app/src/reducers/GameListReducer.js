const initialState = {
    GameList: [],
    GameListVM: [],
    SearchString: "",
    SearchGenre: "",
    SearchPlatform: "",
    GamePagination: "1",
    CurrentGame: null
}

const GameListReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GAMES_LOADED":
            return {
                ...state,
                GameList: action.payload
            }
        case "GAMES_LOADED_VM":
            return {
                ...state,
                GameListVM: action.payload
            }
        case "GAME_ADD":
            return {
                ...state,
                GameList: action.payload
            }
        case "GAME_DELETE":
            return {
                ...state,
                GameList: action.payload
            }
        case "GAME_GET":
            return {
                ...state,
                CurrentGame: action.payload
            }
        case "GAME_UPDATE":
            return {
                ...state,
                GameList: action.payload
            }
        case "SEARCH_STRING_UPDATE":
            return {
                ...state,
                SearchString: action.payload
            }
        case "SEARCH_GENRE_UPDATE":
            return {
                ...state,
                SearchGenre: action.payload
            }
        case "SEARCH_PLATFORM_UPDATE":
            return {
                ...state,
                SearchPlatform: action.payload
            }
        case "GAMES_PAGINATION_LOADED":
            return {
                ...state,
                GamePagination: action.payload
            }
        default:
            return state;
    }
}

export default GameListReducer;