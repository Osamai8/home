import React from 'react';
// import logo from "../img/logo1.svg";
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

const Nav = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const clearSearched = () => {
        dispatch({ type: "CLEAR_SEARCHED" });
        history.push('/home');
    };
    return (
        <div>
            <Logo onClick={clearSearched}>
                <h1>IGNITE</h1>
            </Logo>
        </div>
    )
}

const Logo = styled.div`
  display: flex;
  justify-content: center;
  padding: 1.5rem 0 ;
  cursor: pointer;
  font-family:'orbitron';
  background: black;
  color: white;
  /* z-index:5; */
  /* position:sticky; */
  @media (max-width:460px){
      padding:0.6rem 0;
      h1{font-size:170%}
  }
  @media (min-width:460px){
      padding:0.9rem 0;
  }
`;

export default Nav
