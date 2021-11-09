const initialState = {
    BuyersList: [],
    BuyersListVM: [],
    //CurrentBuyer: {
    //    Name: "",
    //    Surname: "",
    //    Password: "",
    //    NickName: "",
    //    Email: "",
    //}
    CurrentBuyer: null,
    CurrentBuyerVM: null
}

const BuyerListReducer = (state = initialState, action) => {
    switch (action.type) {
        case "BUYERS_LOADED":
            return {
                ...state,
                BuyersList: action.payload
            }
        case "BUYERS_VM_LOADED":
            return {
                ...state,
                BuyersListVM: action.payload
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
        case "LOGIN_BUYER":
            return {
                ...state,
                CurrentBuyer: action.payload
            }
        case "CHANGE_CURRENT_BUYER_VM":
            return {
                ...state,
                CurrentBuyerVM: action.payload
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