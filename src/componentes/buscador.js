import React, { useState } from "react";
import '../hoja-de-estilo/buscador.css';

function Buscador ({handleSearch}){
    const [nombre, setNombre]= useState('')


    return (
        <div className='estilo-buscador'>
        <input value={nombre} onChange={(e)=> setNombre(e.target.value)} placeholder="escribe el nombre" className='buscador'></input>
        <label onClick={()=> handleSearch(nombre)} >Buscador</label>
        </div>
    )
}

export default Buscador;