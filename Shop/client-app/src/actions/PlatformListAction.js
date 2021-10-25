export const getAllPlatforms = (platformList) => {
    return {
        type: "PLATFORMS_LOADED",
        payload: platformList
    }
}

export const addPlatform = (platformList) => {
    return {
        type: "PLATFORM_ADD",
        payload: platformList
    }
}

export const deletePlatform = (platformList) => {
    return {
        type: "PLATFORM_DELETE",
        payload: platformList
    }
}

export const getCurrentPlatform = (platform) => {
    return {
        type: "PLATFORM_GET",
        payload: platform
    }
}
