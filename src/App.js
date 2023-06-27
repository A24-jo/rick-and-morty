import './App.css';
import Buscador from './componentes/buscador';
import Cartas from './componentes/cartas';
import Data from './componentes/data';
import React,{useState} from 'react';


function App() {
  
const [estado,setEstado] = useState(Data)
const [temp,setTemp] = useState(Data)

function dele (id){
 
setEstado(estado.filter((vi)=>vi.id!==id))//
}

const handleSearch = (nombre) => {
  const nuevo = temp.filter(e => e.name.toLowerCase().includes(nombre.toLowerCase()) )
  setEstado(nuevo)
}

  return (
    <div className="App">
      <Buscador handleSearch={handleSearch} />
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
