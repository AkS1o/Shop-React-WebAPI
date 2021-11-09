import GameListReducer from "./GameListReducer";
import GenreListReducer from "./GenreListReducer";
import PlatformListReducer from "./PlatformListReducer"
import NewsListReducer from "./NewsListReducer"
import BuyerListReducer from "./BuyerListReducer"
import { combineReducers } from "redux";

export default combineReducers({
    GameListReducer,
    GenreListReducer,
    PlatformListReducer,
    NewsListReducer,
    BuyerListReducer
})