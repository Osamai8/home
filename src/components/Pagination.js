import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { loadGames } from '../actions/gamesAction';

const Pagination = ({ setPage, page, genres }) => {

    const dispatch = useDispatch();
    const nextPg = (e) => {
        e.preventDefault();
        dispatch(loadGames(page, genres));
        setPage(page + 1);

    }
    const prevPg = (e) => {
        e.preventDefault();
        dispatch(loadGames(page, genres));
        setPage(page - 1);
    }

    return (
        <Arrows>
            <i className="fa fa-angle-left fa-2x" aria-hidden="true" onClick={prevPg} ></i>
            <i className="fa fa-angle-right fa-2x" aria-hidden="true" onClick={nextPg}></i>
        </Arrows>
    )
}
const Arrows = styled.div`
display: flex;
justify-content: center;
align-items: center;
i{
    margin: 1rem;
    padding: 1rem;
    color:#ff7676;
    &:hover{
        color:#000;
    }
}
`;

export default Pagination;
