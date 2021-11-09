export const getAllBuyers = (buyersList) => {
    return {
        type: "BUYERS_LOADED",
        payload: buyersList
    }
}

export const getAllBuyersVM = (buyersListVM) => {
    return {
        type: "BUYERS_VM_LOADED",
        payload: buyersListVM
    }
}

export const addBuyer = (buyersList) => {
    return {
        type: "BUYER_ADD",
        payload: buyersList
    }
}

export const loginBuyer = (buyer) => {
    return {
        type: "LOGIN_BUYER",
        payload: buyer
    }
}

export const changeCurrentBuyerVM = (buyer) => {
    return {
        type: "CHANGE_CURRENT_BUYER_VM",
        payload: buyer
    }
}

export const deleteBuyer = (buyersList) => {
    return {
        type: "BUYER_DELETE",
        payload: buyersList
    }
}

export const getCurrentBuyer = (buyer) => {
    return {
        type: "BUYER_GET",
        payload: buyer
    }
}

export const changeBuyer = (buyersList) => {
    return {
        type: "BUYER_UPDATE",
        payload: buyersList
    }
}
