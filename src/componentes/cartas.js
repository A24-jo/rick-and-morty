import '../hoja-de-estilo/carta.css'

function Cartas({nombre,id,status,espacie,genero,foto,delle,origen}){


return (
     <div className='cartas'>
       <div className='borrador' onClick={()=>delle(id)}> o </div>
       <div className='datos'> {nombre}<br/>{status}<br/> {espacie} <br/> {origen}<br/> {genero} </div>
       <img  className='foto' src={foto} alt='algunafotro'/>
     </div>
 )
}

export default Cartas;