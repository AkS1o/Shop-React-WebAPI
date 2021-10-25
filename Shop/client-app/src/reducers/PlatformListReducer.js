const initialState = {
    PlatformList: [],
    CurrentPlatform: null
}

const PlatformListReducer = (state = initialState, action) => {
    switch (action.type) {
        case "PLATFORMS_LOADED":
            return {
                ...state,
                PlatformList: action.payload
            }
        case "PLATFORM_ADD":
            return {
                ...state,
                PlatformList: action.payload
            }
        case "PLATFORM_DELETE":
            return {
                ...state,
                PlatformList: action.payload
            }
        case "PLATFORM_GET":
            return {
                ...state,
                PlatformList: action.payload
            }
        default:
            return state;
    }
}

export default PlatformListReducer;