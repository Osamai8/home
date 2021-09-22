import React from "react";
// src={smallImage(game.background_image, 1280)}
//Styling and Animation
import styled from "styled-components";
//Redux
import { useSelector } from "react-redux";
import { smallImage } from "../util";
//IMAGES
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
import linux from '../img/linux.png';
//Star Images
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";
import Spinner from "../components/Spinner";

const GameDetail = ({ pathId }) => {
    // PLATFORM ICONS
    const getPlatform = (platform) => {
        switch (platform) {
            case 'PlayStation':
                return playstation;
            case 'PlayStation 2':
                return playstation;
            case 'PlayStation 3':
                return playstation;
            case 'PlayStation 4':
                return playstation;
            case 'PlayStation 5':
                return playstation;
            case 'Xbox 360':
                return xbox;
            case 'Xbox One':
                return xbox;
            case 'Xbox Series S/X':
                return xbox;
            case 'PC':
                return steam;
            case 'Nintendo DS':
                return nintendo;
            case 'Nintendo Switch':
                return nintendo;
            case 'iOS':
                return apple;
            case 'macOS':
                return apple;
            case 'Linux':
                return linux;
            default:
                return gamepad;
        }
    };
    // STAR RATING
    const getStars = () => {
        const stars = [];
        const rating = Math.floor(game.rating);
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<img src={starFull} key={i} alt='stars' ></img>)
            } else {
                stars.push(<img src={starEmpty} key={i} alt='stars' ></img>)
            }
        }
        return stars;
    }

    const { screen, game, isLoading } = useSelector(state => state.detail);
    return (
        <>
            {isLoading ? <Spinner /> : (
                <CardShadow >
                    <Detail layoutId={pathId} >
                        <Stats>
                            <div className="rating">
                                <h4>{game.name}</h4>
                                <p>{getStars()} {game.rating}</p>
                            </div>
                            <Info>
                                <h3>Platforms</h3>
                                <Platform>
                                    {game.platforms.map(data => (
                                        <img
                                            key={data.platform.id}
                                            src={getPlatform(data.platform.name)}
                                            alt={data.platform.name}></img>
                                    ))}
                                </Platform>
                            </Info>
                        </Stats>
                        <Media>
                            <img src={smallImage(game.background_image, 1280)} alt='bg' />
                        </Media>
                        <Description>
                            <p>{game.description_raw}</p>
                        </Description>
                        {/* {trailor.count === 0 ? "" : (
                            <Video>
                                <video autoPlay controls>
                                    <source src={trailor.results[0].data.max} type="video/mp4" />
                                </video>
                            </Video>
                        )} */}
                        <Gallery>
                            {screen.results.map(screen => (
                                <img src={smallImage(screen.image, 1280)}
                                    key={screen.id} alt={screen.image} />
                            ))}
                        </Gallery>
                    </Detail>
                </CardShadow>
            )}
        </>
    )
};

const CardShadow = styled.div`
    width:100%;
    min-height: 90vh;
    overflow-y:scroll;
    /* position: fixed; */
    /* bottom: 1px; */
    /* padding-bottom: 3rem; */
    &::-webkit-scrollbar{width:0;}
`;
const Detail = styled.div`
    width:100%;
    padding: 2rem 5rem;
    /* position: absolute; */
    /* left:10%; */
    img{
        width:100%;
    }
    @media (max-width:460px){
        padding:2rem 2rem;
    }
`;
const Stats = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    h4{
        font-size: 2rem;
    margin-bottom: 1rem;
    }
    img{
        width: 2rem;
        height: 2rem;
        display: inline;
    }
    @media (max-width:460px){
        flex-direction: column;
        align-items: flex-start;
        img{
            width:1rem;
            height:1rem;
        }
        h4{font-size:1.3rem;}
        p{font-size:70%;}
    }
`;
const Info = styled.div`
    text-align: center;
    @media (max-width:460px){
        h3{font-size:70%;}
    }
`;
const Platform = styled.div`
    display: flex;
    justify-content: space-between;
    img{
        margin-left: 3rem;
    }
    @media (max-width:460px){
        display: flex;
        flex-wrap: wrap;
        img{
            width:1.4rem;
            margin-left:2.4rem;
        }
    }
`;
const Media = styled.div`
    margin-top:5rem;
    img{
        width: 100%;
        height:100vh;
        object-fit: cover;
    }
    @media (max-width:460px){
        margin-top: 3rem;
        img{
            height:50vh;
        }
    }
    @media (min-width:768px){
        margin-top: 3rem;
        img{
            height:80vh;
        }
    }
   
`;
const Description = styled.div`
    margin: 7rem 0rem;
    p{text-align:justify;}
    @media (max-width:460px){
        margin: 2rem 0rem;
    }
    @media (min-width:462px){
        margin: 3rem 0rem;
    }
    @media (min-width:1024px){
       p{ font-size:130%;}
    }
   
`;
const Gallery = styled.div`
    display: flex;
    bottom: 1rem;
    flex-wrap: wrap;
    img{
        width:100%;
        height:80vh;
        padding: 0.2rem;
        object-fit: cover;        
    }
    @media (max-width:460px){
        img{
            height:35vh;
        }
    }
    
    @media (min-width:462px){
        img{
            height:45vh;
        }
    }
    @media (min-width:760px){
        img{
            height:75vh;
        }
    }
    @media (min-width:1024px){
        img{
            height:75vh;
        }
    }
`;
// const Video = styled.div`
//             margin:2rem;
//             display: flex;
//             justify-content: center;
//             video, source{
//                 width:100%;
//                 height:90vh;
//     }
//`;



export default GameDetail;