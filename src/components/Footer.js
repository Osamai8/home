import React from 'react';
// import './footer.css';
import styled from 'styled-components';
import Resume from '../img/Yet_Another_Resume.pdf';

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer__addr">
        <h1 className="footer__logo">IGNITE</h1>
        <h2>Contact</h2>
        <address>
          Bareilly, U.P, India<br />
          <a className="footer__btn" href="mailto:islamosama488@gmail.com">Email Me</a>

        </address>
      </div>
      <ul className="footer__nav">
        <li className="nav__item">
          <h2 className="nav__title">Media</h2>
          <ul className="nav__ul">
            <li>
              <a href="https://www.instagram.com/_osamaislam_" rel="noreferrer" target='_blank' >Instagram</a>
            </li>
            <li>
              <a href="https://github.com/Osamai8" rel="noreferrer" target='_blank'>Github</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/osamaislam" rel="noreferrer" target='_blank'>LinkedIn</a>
            </li>
          </ul>
        </li>
        <li className="nav__item nav__item--extra">
          <h2 className="nav__title">Zutaten</h2>
          <ul className="nav__ul nav__ul--extra">
            <li>
              <a href='https://reactjs.org/' >React.js</a>
            </li>
            <li>
              <a href='https://redux.js.org/'  >Redux</a>
            </li>
            <li>
              <a href='https://rawg.io/apidocs' >Rawg API</a>
            </li>
            <li>
              <a href='https://styled-components.com/'>Styled Components</a>
            </li>
          </ul>
        </li>
        <li className="nav__item">
          <h2 className="nav__title">Contact Me</h2>
          <ul className="nav__ul">
            <li>
              <a href="tel:7533849201">Phone Call</a>
            </li>
            <li>
              <a href={Resume} download>Resume Download</a>
            </li>
          </ul>
        </li>
      </ul>
      <div className="legal">
        <div className="legal__links">
          <span>Made with <span className="heart">♥</span> remotely by Osama</span>
        </div>
      </div>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  /* position: relative;
  bottom: 0;
  width: 100%; */
   display: flex;
    flex-flow: row wrap;
    padding: 30px 30px 20px 30px;
    color: azure;
    background-color: #1b1b1b;
    border-top: 1px solid #e5e5e5; 
    margin-top: 4rem;
    margin-bottom: 0;
    & >*{
        flex:1 100%;
    }
    .footer > * {
    flex:  1 100%;
  }
  
  .footer__addr {
    margin-right: 1.25em;
    margin-bottom: 2em;
  }
  
  .footer__logo {
    font-family: 'orbitron','Pacifico', cursive;
    font-weight: 400;
    /* text-transform: lowercase; */
    font-size: 2.5rem;
    color:#fff;
  }
  
  .footer__addr h2 {
    margin-top: 1.3em;
    font-size: 20px;
    font-weight: 400;
    color:#8E8D8D
  }
  
  .nav__title {
    font-weight: 400;
    font-size: 1.2rem;
    color:#fff;
  }
  
  .footer address {
    font-style: normal;
    /* color: #999; */
  }
  
  .footer__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 36px;
    max-width: max-content;
    background-color: rgb(0, 0, 0);
    border-radius: 100px;
    color: #8E8D8D;
    line-height: 0;
    margin: 0.8em 0;
    font-size: 1.2rem;
    padding: 0 1.3em;
    font-weight: bold;
    &:hover{
        background:#1b1b1bb7 ;
        border:2px solid black;
    }
  }
  
  .footer ul {
    list-style: none;
    padding-left: 0;
  }
  
  .footer li {
    line-height: 2em;
    color: #595959;
    
  }
  
  .footer a {
    text-decoration: none;
  }
  
  .footer__nav {
    display: flex;
      flex-flow: row wrap;
  }
  
  .footer__nav > * {
    flex: 1 50%;
    margin-right: 1.25em;
  }
  
  .nav__ul a {
    color: #999;
  }
  
  .nav__ul--extra {
    column-count: 1;
    column-gap: 1.25em;
  }
  
  .legal {
    display: flex;
    flex-wrap: wrap;
    color: #999;
  }
    
  .legal__links {
    display: flex;
    align-items: center;
  }
  
  .heart {
    color: #fff;
  }
  
  @media screen and (min-width: 24.375em) {
    .legal .legal__links {
      margin-left: auto;
    }
  }
  
  @media screen and (min-width: 40.375em) {
    .footer__nav > * {
      flex: 1;
    }
    
    .nav__item--extra {
      flex-grow: 1;
    }
    
    .footer__addr {
      flex: 1 0px;
    }
    
    .footer__nav {
      flex: 2 0px;
    }
  }
`;

export default Footer;
