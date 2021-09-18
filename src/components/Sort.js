import React from 'react';
import styled from 'styled-components';

const Sort = ({ genres, setGenres }) => {

    // return (
    //     <StyledSort>
    //         <div className="select">
    //             <label htmlFor="sort">Sort by:</label>
    //             <select name="sort" className="filter-sort"  >
    //                 <option value="all">All</option>
    //                 <option value="popularity">Popularity</option>
    //                 <option value="A-Z">A-Z</option>
    //                 <option value="Z-A">Z-A</option>
    //                 <option value="new">New</option>
    //                 <option value="upcoming">Upcoming</option>
    //             </select>
    //         </div>
    //         <div className="select">
    //             <label for="genres">Genres:</label>
    //             <select name="genres" className="filter-genres">
    //                 <option value="all">All</option>
    //                 <option value="action" onClick={setGenres('action')} >Action</option>
    //                 <option value="simulation">Simulation</option>
    //                 <option value="adventure">Adventure</option>
    //                 <option value="strategy">Strategy</option>
    //                 <option value="shooter">Shooter</option>
    //                 <option value="rpg">RPG</option>
    //                 <option value="sports">Sports</option>
    //                 <option value="racing">Racing</option>
    //             </select>
    //         </div>
    //     </StyledSort>
    // )
    const selectHandler = (e) => {
        setGenres(e.target.value);
        e.preventDefault();
    };

    return (
        <StyledSort>
            <label>
                Genres:
                <select name={genres} onChange={selectHandler} >
                    <option value="all">All</option>
                    <option value="action" >Action</option>
                    <option value="simulation">Simulation</option>
                    <option value="adventure">Adventure</option>
                    <option value="strategy">Strategy</option>
                    <option value="shooter">Shooter</option>
                    <option value="role-playing-games-rpg">RPG</option>
                    <option value="sports">Sports</option>
                    <option value="racing">Racing</option>
                </select>
            </label>
        </StyledSort>
    )
}
const StyledSort = styled.form`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 2rem;
    /* background: #1b1b1b; */
    font-size: 18px;
    select{
        /* appearance: none; */
        outline: none;
        border: none;
        font-size: 1.1rem;
        color: #ff7676;
        width: 8rem;
        cursor: pointer;
        padding: 0.6rem;
        margin-left: 1rem;
    }
    .select{
        margin: 1rem;
        position: relative;
        overflow: hidden;
       &:hover::after{
            background:#ff7676;
            color: azure;
        }    
    }
    
`;

export default Sort;
