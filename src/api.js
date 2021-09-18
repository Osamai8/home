//Base URL
const base_url = "https://api.rawg.io/api/";

//Getting the date
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if (month < 10) {
        return `0${month}`;
    } else {
        return month;
    }
};
//Getting the date
const getCurrentDay = () => {
    const day = new Date().getDate();
    if (day < 10) {
        return `0${day}`;
    } else {
        return day;
    }
};
const API_KEY = 'eaadf957dcff451db50cb98521d740f0';

//Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular Games
const popular_games = `games?key=${API_KEY}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=20`;
const upcoming_games = `games?key=${API_KEY}&dates=${currentDate},${nextYear}&ordering=-added&page_size=40`;
const newGames = `games?key=${API_KEY}&dates=${lastYear},${currentDate}&ordering=-released&page_size=20`;

// main urls
export const popularGameURL = () => `${base_url}${popular_games}`;
export const upcomingGameURL = () => `${base_url}${upcoming_games}`;
export const newGameURL = () => `${base_url}${newGames}`;

// export const allGamesURL = (num, genres) => {
//     if (genres === '') {
//         return `${base_url}games?key=${API_KEY}&page=${num}&page_size=20`
//     } else {
//         return `${base_url}games?key=${API_KEY}&page=${num}&page_size=20&genres=${genres}`
//     }
// }

export const allGamesURL = (num, genres) => `${base_url}games?key=${API_KEY}&page=${num}&page_size=20${genres !== '' ? '&genres=' + genres : ''}`;
//GAME DETAILS
export const gameDetailURL = (game_id) => `${base_url}games/${game_id}?key=${API_KEY}`;
//Game ScreenShots
export const gameScreenshotsURL = (game_id) => `${base_url}games/${game_id}/screenshots?key=${API_KEY}`;
//Searched game
export const searchGameURL = (game_name) =>
    `${base_url}games?key=${API_KEY}&search=${game_name}&ordering=-rating&page_size=40`;
// TRAILOR 
export const gameTrailorURL = (game_id) => `${base_url}games/${game_id}/movies?key=${API_KEY}`;