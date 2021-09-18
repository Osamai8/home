import React from "react";
//Styling and Animation src={smallImage(image, 640)}
import styled from "styled-components";
//Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/gamesAction";
import { Link } from "react-router-dom";
import { smallImage } from "../util";

const Game = ({ name, released, image, id, genre }) => {
  // LOAD DETAILS 
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    // document.body.style.overflow = 'hidden';
    dispatch(loadDetail(id));
  }

  return (
    // <Link to={`/games/${id}`} target='_blank' >
    <StyledGame onClick={loadDetailHandler} >
      <Link to={`/games/${id}`}>
        <h3 >{name}</h3>
        <h5>{released}</h5>
        <img src={smallImage(image, 640)} alt={name} />
      </Link>
    </StyledGame>
    // </Link>

  );
};


const StyledGame = styled.div`
  min-height: 23vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  /* text-align: center; */
  cursor: pointer;
  overflow: hidden;
  background: #1b1b1b;
  h3, h5{
     padding-left:1rem;
     color:azure;
    }
  img {
    width: 100%;
    height: 25vh;
    min-height: 20vh;
    object-fit: cover;
  }
  @media (max-width:460px){    
    max-height:30vh;
    margin-right: 1rem;
    /* width:50%; */
    img{
      height:25vh;
    }
  }
  @media (min-width:461px){
    min-height:40vh;
    h3{
      font-size:130%;
    }
    img{height:40vh;}
  }
  @media (max-width:768px){
    min-height:40vh;
    h3{
      font-size:130%;
    }
    img{height:40vh;}
  }
  
`;

export default Game;