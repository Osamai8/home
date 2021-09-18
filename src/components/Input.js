import React, { useState } from "react";
//Animation
import styled from "styled-components";

//Redux and Routes
import { fetchSearch } from "../actions/gamesAction";
import { useDispatch } from "react-redux";

const Input = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput("");
  };

  return (
    <StyledInput >
      <form className="search">
        <input value={textInput} onChange={inputHandler} type="text" />
        <button onClick={submitSearch} type="submit">
          Search
        </button>
      </form>
    </StyledInput>
  );
};

const StyledInput = styled.div`
  padding: 3rem 5rem ;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    outline: none;
    @media (max-width:460px){
      width:60%;
    }
    @media (max-width:768px){
      width:50%;
    }
    @media (max-width:1024px){
      width:50%;
    }
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #ff7676;
    color: white;
   
  }
  @media (max-width:460px){
     button{
       padding:0.5rem 1rem;
       width:30%;
      }
      input{width:70%;}
    }
`;


export default Input;
