const initState = {
    popular: [],
    newGames: [],
    upcoming: [],
    allGames: [],
    searched: [],
    gameLoading: true,
};

export const gamesReducer = (state = initState, action) => {
    switch (action.type) {
        case "FETCH_GAMES":
            return {
                ...state,
                popular: action.payload.popular,
                upcoming: action.payload.upcoming,
                newGames: action.payload.newGames,
                allGames: action.payload.allGames,
                gameLoading: false
            };
        case "FETCH_SEARCHED":
            return {
                ...state,
                searched: action.payload.searched,
                gameLoading: false
            };
        case "CLEAR_SEARCHED":
            return {
                ...state,
                searched: [],
            };
        default:
            return { ...state };
    }
};

// detailReducer
const initialState = {
    game: { platforms: [] },
    screen: { results: [] },
    trailor: {},
    isLoading: true,
};

export const detailReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_DETAIL":
            return {
                ...state,
                game: action.payload.game,
                screen: action.payload.screen,
                trailor: action.payload.trailor,
                isLoading: false,
            };
        case "LOADING_DETAIL":
            return {
                ...state,
                isLoading: true,
            };
        default:
            return { ...state };
    }
};
