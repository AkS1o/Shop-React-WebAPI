const initialState = {
    NewsList: [],
    CurrentNews: null
}

const NewsListReducer = (state = initialState, action) => {
    switch (action.type) {
        case "NEWS_LOADED":
            return {
                ...state,
                NewsList: action.payload
            }
        case "NEWS_ADD":
            return {
                ...state,
                NewsList: action.payload
            }
        case "NEWS_DELETE":
            return {
                ...state,
                NewsList: action.payload
            }
        case "NEWS_GET":
            return {
                ...state,
                CurrentNews: action.payload
            }
        case "NEWS_UPDATE":
            return {
                ...state,
                NewsList: action.payload
            }
        default:
            return state;
    }
}

export default NewsListReducer;