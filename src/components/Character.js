// Write your Character component here
import React from 'react'
import styled from 'styled-components'

const StyleDemCharacters = styled.div `
border: 2px solid black;
width: 50%;
margin: 0 auto;
display:flex;
justify-content:center;
flex-flow:wrap;



section{
    margin-top:2%;
    width:50%;
    border-radius: 15px 15px;

}


`

const Character = (props) => {
    const {theSWData} = props;
    return theSWData.map((oneAtATime) => {
    
    return (
        <StyleDemCharacters>
            <h2>{oneAtATime.name}</h2>
        <section>
          <p>Height: {oneAtATime.height}</p>
          <p>Mass: {oneAtATime.mass}</p>
          <p>Hair color: {oneAtATime.hair_color}</p>
          <p>Skin color: {oneAtATime.skin_color}</p>
          <p>Eye color: {oneAtATime.eye_color}</p>
          <p>Birth year: {oneAtATime.birth_year}</p>
          <p>Gender: {oneAtATime.gender}</p>
          <p>Films: {oneAtATime.films}</p>
        </section>
        </StyleDemCharacters>
    );
});
};

export default Character
