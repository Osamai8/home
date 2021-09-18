import React from 'react';
import CircleLoader from "react-spinners/CircleLoader";
import styled from 'styled-components';

const Spinner = () => {
    return (
        <StyledDiv>
            <CircleLoader color='#1b1b1b' size='130px' />
        </StyledDiv>
    )
}
const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* top:15vh; */
    position: relative;
    min-height: 30vh;
`;

export default Spinner;
