export default function Card(props) {
   return (
      <div>
         <button onClick = {props.onClose}> X </button>
         <h2>{props.name}</h2>
         <h2>{props.status}</h2>
         <h3>{props.especie}</h3>
         <h4>{props.genero}</h4>
         <h2>{props.origin?.name}</h2>
         <img src={props.image} alt={props.name} /> */
      </div>
   );
} 


//name: nombre.
//status: status.
//species: especie.
//gender: género.
//origin: origen (ten en cuenta que el nombre del origen viene dentro de otra propiedad llamada name).
//image: imagen.