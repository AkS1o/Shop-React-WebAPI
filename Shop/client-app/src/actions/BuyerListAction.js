export const getAllBuyers = (buyersList) => {
    return {
        type: "BUYERS_LOADED",
        payload: buyersList
    }
}

export const addBuyers = (buyersList) => {
    return {
        type: "BUYER_ADD",
        payload: buyersList
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
