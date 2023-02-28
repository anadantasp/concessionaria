import React from 'react'
import Carro from './carros'

export default function Carros(){
    return(
        <>
            <img src={Carro} alt="imagem carro"/>
        
            <ul>
                <li>Modelo 1</li>
                <li>Modelo 2</li>
                <li>Modelo 3</li>
                <li>Modelo 4</li>
                <li>Modelo 5</li>
             </ul>
        </>
    )
}