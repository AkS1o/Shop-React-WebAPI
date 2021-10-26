export const getAllNews = (newsList) => {
    return {
        type: "NEWS_LOADED",
        payload: newsList
    }
}

export const addNews = (newsList) => {
    return {
        type: "NEWS_ADD",
        payload: newsList
    }
}

export const deleteNews = (newsList) => {
    return {
        type: "NEWS_DELETE",
        payload: newsList
    }
}

export const getCurrentNews = (news) => {
    return {
        type: "NEWS_GET",
        payload: news
    }
}

export const changeNews = (newsList) => {
    return {
        type: "NEWS_UPDATE",
        payload: newsList
    }
}
