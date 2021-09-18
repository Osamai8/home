import React from 'react'
// import styled from 'styled-components';
import { Carousel } from 'react-carousel-minimal';
// REDUX
// import { useDispatch, useSelector } from "react-redux";
// import { loadGames } from "../actions/gamesAction";
//Components


const ImgSlider = () => {
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(loadGames());
    // }, [dispatch]);

    // GET THE DATA BACK
    const data = [
        {
            image: "https://media.rawg.io/media/games/f24/f2493ea338fe7bd3c7d73750a85a0959.jpeg",
            caption: 'Ghost of Tsushima',
            id: 58550
        },
        {
            image: `https://media.rawg.io/media/games/786/7863e587bac630de82fca50d799236a9.jpg`,
            caption: 'Forza Horizon 4',
            id: 58753
        },
        {
            image: `https://media.rawg.io/media/games/aa3/aa36ba4b486a03ddfaef274fb4f5afd4.jpg`,
            caption: 'Mortal Combat X',
            id: 58755
        },
        {
            image: 'https://media.rawg.io/media/games/9aa/9aa42d16d425fa6f179fc9dc2f763647.jpg',
            caption: 'Spider-man',
            id: 180890
        },
        {
            image: 'https://media.rawg.io/media/games/b72/b7233d5d5b1e75e86bb860ccc7aeca85.jpg',
            caption: 'Apex Legend',
            id: 290856
        },
    ];
    const captionStyle = {
        fontSize: '3em',
        fontWeight: 'bold',
        fontFamily: 'orbitron'
    }

    return (
        <>
            <Carousel
                data={data}
                time={4000}
                width="100%"
                height="90vh"
                captionStyle={captionStyle}
                captionPosition="center"
                automatic={true}
                dots={true}
                slideBackgroundColor="darkgrey"
                slideImageFit="cover"
                style={{
                    textAlign: "center",
                }}
            />
        </>
    );

};



export default ImgSlider;


