const initialState = {
    BuyersList: [],
    CurrentBuyer: null
}

const BuyerListReducer = (state = initialState, action) => {
    switch (action.type) {
        case "BUYERS_LOADED":
            return {
                ...state,
                BuyersList: action.payload
            }
        case "BUYER_ADD":
            return {
                ...state,
                BuyersList: action.payload
            }
        case "BUYER_DELETE":
            return {
                ...state,
                BuyersList: action.payload
            }
        case "BUYER_GET":
            return {
                ...state,
                CurrentBuyer: action.payload
            }
        case "BUYER_UPDATE":
            return {
                ...state,
                BuyersList: action.payload
            }
        default:
            return state;
    }
}

export default BuyerListReducer;