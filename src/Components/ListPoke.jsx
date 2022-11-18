import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import DisplayPoke from './DisplayPoke';

export default function ListPoke() {

    const[pokemon, setPokemon]= useState([
        {type:  'electrico',url:'https://pokeapi.co/api/v2/type/13/'}
      ])
      
      const getPokemons= ()=>{
          axios.get(`https://pokeapi.co/api/v2/type/13/`)
          .then((response)=>{
      
              console.log(response.data.results);
              setPokemon(response.data.results);
      
          });
      }
      
        useEffect(() => getPokemons(),[]);
      
    <div>
        <DisplayPoke pokemon={pokemon}/>
    </div>
}