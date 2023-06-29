import './App.css';
import Buscador from './componentes/buscador';
import Cartas from './componentes/cartas';
import React,{useEffect, useState} from 'react';


function App() {

  
 let ojb={
  "id": 30,
  "name": "Rick Sanchez",
  "status": "Alive",
  "species": "Human",
  "type": "",
  "gender": "Male",
  "origin": {
    "name": "Earth (C-137)",
    "url": "https://rickandmortyapi.com/api/location/1"
  },
  "location": {
    "name": "Citadel of Ricks",
    "url": "https://rickandmortyapi.com/api/location/3"
  },
  "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg"} 
const [estado,setEstado] = useState([])
const [temp,setTemp] = useState([])
const [agregando,setAgregando]=useState([])

function dele (id){
 
setEstado(estado.filter((vi)=>vi.id!==id))//
}

const handleSearch = (nombre) => {
  const nuevo = temp.filter (e => e.name.toLowerCase().includes(nombre.toLowerCase()) )
  setEstado(nuevo)
}

useEffect(()=>{
  async function personajes (){
    const persona= await fetch('https://rickandmortyapi.com/api/character')
    const enconperson= await persona.json()
    setEstado(enconperson.results)
    setTemp(enconperson.results)
  }
  personajes()
}
  
  ,[])

  

  return (
    <div className="App">

      <Buscador handleSearch={handleSearch} />
      <button onClick={()=>setEstado([{...ojb,id:Math.floor((Math.random() * 100)-2)},...estado])}> AGREGAR </button>

     <div className='contenedor-de-cartas' >
      {estado.map(
        (persona)=>{
          return(
            <Cartas
            id= {persona.id}
            key={persona.id}
            nombre={persona.name}
            status={persona.status}
            espacie={persona.species}
            genero={persona.gender}
            origen={persona.origin.name}
            foto= {persona.image}
            delle={dele} />
          )
        }
      )}
     </div>
    </div>
  );
}

export default App;
