export const getAllGenres = (genreList) => {
    return {
        type: "GENRES_LOADED",
        payload: genreList
    }
}

export const addGenre = (genreList) => {
    return {
        type: "GENRE_ADD",
        payload: genreList
    }
}

export const deleteGenre = (genreList) => {
    return {
        type: "GENRE_DELETE",
        payload: genreList
    }
}

export const getCurrentGenre = (genre) => {
    return {
        type: "GENRE_GET",
        payload: genre
    }
}
