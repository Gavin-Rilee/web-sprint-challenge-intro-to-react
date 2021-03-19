import React, {useState, useEffect} from 'react';
import Character from './components/Character';
import axios from 'axios';
import './App.css';
import styled from 'styled-components'

const StyledBG = styled.div `

flex-wrap:wrap;
flex-direction:column;
justify-content:center;
`
const StyledHeader = styled.h1`
font-size:80px;
color: #00EF0D;
background: #d7cdc1;
text-shadow: 0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #00EF0D, 0 0 30px #00EF0D, 0 0 40px #00EF0D, 0 0 55px #00EF0D, 0 0 75px #00EF0D;
color: #00EF0D;
background: #d7cdc1;


&:hover{
  color: #FF0F0A;
background: #d7cdc1;
text-shadow: 0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #FF0F0A, 0 0 30px #FF0F0A, 0 0 40px #FF0F0A, 0 0 55px #FF0F0A, 0 0 75px #FF0F0A;
color: #FF0F0A;
background: #d7cdc1;

}


`


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [theSWData, setStarWarsData] = useState([]);

  function getData() {axios.get('https://swapi.dev/api/people/')
  .then((res) =>{setStarWarsData(res.data)})
  .catch((err) =>{console.log(err)})} 
     
  console.log(theSWData);
   useEffect(getData, [])

  return (
    <StyledBG className="App">
      <StyledHeader className="Header">Characters</StyledHeader>
      <Character theSWData = {theSWData}/>
    </StyledBG>
  );
}

export default App;
