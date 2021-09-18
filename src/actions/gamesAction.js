import axios from 'axios';
import {
    popularGameURL, searchGameURL,
    gameScreenshotsURL, upcomingGameURL,
    newGameURL, gameDetailURL,
    allGamesURL, gameTrailorURL
} from '../api';

//Action Creator

export const loadGames = (page, genres) => async (dispatch) => {
    //FETCH AXIOS
    const popularData = await axios.get(popularGameURL());
    const newGamesData = await axios.get(newGameURL());
    const upcomingData = await axios.get(upcomingGameURL());
    const allGameData = await axios.get(allGamesURL(page, genres));

    dispatch({
        type: "FETCH_GAMES",
        payload: {
            popular: popularData.data.results,
            upcoming: upcomingData.data.results,
            newGames: newGamesData.data.results,
            allGames: allGameData.data.results,
        },
    });
};

export const fetchSearch = (game_name) => async (dispatch) => {
    const searchGames = await axios.get(searchGameURL(game_name));

    dispatch({
        type: "FETCH_SEARCHED",
        payload: {
            searched: searchGames.data.results,
        },
    });
};

export const loadDetail = (id) => async (dispatch) => {
    const detailData = await axios.get(gameDetailURL(id));
    const screenshotData = await axios.get(gameScreenshotsURL(id));
    const trailorData = await axios.get(gameTrailorURL(id));
    dispatch({
        type: 'GET_DETAIL',
        payload: {
            game: detailData.data,
            screen: screenshotData.data,
            trailor: trailorData.data,
        }
    })
}