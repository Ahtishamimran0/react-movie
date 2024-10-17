const MovieReducer = (state, action) => {
    if (action.type === "MY_API_DATA") {
        return {
            ...state,
            Movie: action.payload
        }
    }
    if (action.type === "MY_SINGLE_MOVIE") {
        return {
            ...state,
            SingleMovie: action.payload
        }
    }
    if (action.type === "TOP_RATED") {
        return {
            ...state,
            TopRated: action.payload
        }
    }
    if (action.type === "MY_SEARCH_MOVIE") {
        return {
            ...state,
            SearchMovie: action.payload
        }
    }
    if (action.type === "SET_QUERY") {
        return {
            ...state,
            query: action.payload
        }
    }


}
export default MovieReducer