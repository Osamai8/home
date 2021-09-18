import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
//Components
import Input from '../components/Input';
import Pagination from '../components/Pagination';
import Game from '../components/Game';
import Sort from "../components/Sort";
import ImgSlider from "../components/ImgSlider";
import Spinner from '../components/Spinner';
// import Footer from '../components/Footer';
//Styling and Animation
import styled from "styled-components";




// import { useLocation } from "react-router";

const Home = () => {
  const [page, setPage] = useState(1);
  const [genres, setGenres] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames(page, genres));
  }, [dispatch, genres]);

  // useEffect(() => {
  //   dispatch(loadGames(page, genres));
  // }, [genres]);

  // GET THE DATA BACK
  const { allGames, searched, upcoming, gameLoading } = useSelector((state) => state.games);

  return (
    <>
      <ImgSlider />
      <Input />
      <Sort genres={genres} setGenres={setGenres} />
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
          :
          <div>
            {gameLoading ? <Spinner /> : (
              <>
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
                <Pagination page={page} setPage={setPage} genres={genres} />
              </>
            )}
          </div>
        }
        <hr />
        <div className='heading' ><h2>Upcoming Games</h2></div>
        {gameLoading ? <Spinner /> :
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
        }
      </GameList>
    </>
  );
};

const GameList = styled.div`
  padding: 0rem 4rem;
  h2 {
    padding: 5rem 0rem;
    color:#ff7676;
  }
  @media (max-width:460px){
    /* margin:0 2rem; */
    padding:0 1rem;
    h2{
      font-size: 205%;
      padding: 3rem 0rem;
    }
  }
`;

const Games = styled.div`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  
  
`;



export default Home;