import React, { useState } from "react";
import '../hoja-de-estilo/buscador.css';

function Buscador ({handleSearch}){
    const [nombre, setNombre]= useState('')


    return (
        <> 
        <label onClick={()=> handleSearch(nombre)} >Buscador</label>
        <input value={nombre} onChange={(e)=> setNombre(e.target.value)} placeholder="escribe el nombre" className='buscador'></input>
        </>
    )
}

export default Buscador;