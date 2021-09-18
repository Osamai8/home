import React, { useEffect, useState } from "react";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
import styled from 'styled-components';
// COMPONENTS
import Pagination from "../components/Pagination";
import Game from "../components/Game";

const GameWin = (page, setPage) => {
    // FETCH GAMES


    // const location = useLocation();
    // console.log(location.pathname);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadGames(page));
    }, [dispatch]);
    // GET THE DATA BACK
    const { allGames, searched, upcoming } = useSelector((state) => state.games);

    return (
        <GameList >
            {searched.length ?
                <Games>
                    {searched.map(game => (
                        <Game
                            id={game.id}
                            image={game.background_image}
                            name={game.name}
                            released={game.released}
                            key={game.id}
                        />
                    ))}
                </Games>
                : <>
                    <div>
                        <Games>
                            {allGames.map(game => (
                                <Game
                                    id={game.id}
                                    image={game.background_image}
                                    name={game.name}
                                    released={game.released}
                                    key={game.id} />
                            ))}
                        </Games>
                        <Pagination page={page} setPage={setPage} />
                    </div>
                    <div><h2>Upcoming Games</h2></div>
                    <Games>
                        {upcoming.map(game => (
                            <Game
                                id={game.id}
                                image={game.background_image}
                                name={game.name}
                                released={game.released}
                                key={game.id}
                            />
                        ))}
                    </Games>
                </>
            }
        </GameList>
    )
}
const GameList = styled.div`
  padding: 0rem 4rem;
  
  h2 {
    padding: 5rem 0rem;
    color:#ff7676;
  }
  
`;

const Games = styled.div`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  
`;

export default GameWin
