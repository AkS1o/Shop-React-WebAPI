const initialState = {
    GenreList: [],
    CurrentGenre: null
}

const GenreListReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GENRES_LOADED":
            return {
                ...state,
                GenreList: action.payload
            }
        case "GENRE_ADD":
            return {
                ...state,
                GenreList: action.payload
            }
        case "GENRE_DELETE":
            return {
                ...state,
                GenreList: action.payload
            }
        case "GENRE_GET":
            return {
                ...state,
                CurrentGenre: action.payload
            }
        default:
            return state;
    }
}

export default GenreListReducer;