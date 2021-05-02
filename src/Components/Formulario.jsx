import React,{Fragment,useState,useEffect} from 'react'
import uniqid from'uniqid'
import PropTypes from 'prop-types';


const Formulario = ({CrearCita}) => {

    //State de citas
    const [cita, setCitas] = useState({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''
    });

    //State de Error
    const [error,setError] = useState(false);

    const altualizarCitaState = e =>{
        setCitas({
            ...cita,
            [e.target.name]: e.target.value
            
            

        });
    }

    const {mascota,propietario,fecha,hora,sintomas} = cita;



    //Cuando el usuario envia el formulario
    const submitCita = e => {
        e.preventDefault();

            //Valida formulario
            if(mascota.trim() === "" || propietario.trim() === "" || fecha.trim() === "" || hora.trim() === "" || sintomas === ""){
               setError(true);
               return;
            }else{
                setError(false);
            }
            
            cita.id = uniqid();
            //Reiniciar form
            CrearCita(cita);

            setCitas({
                mascota:'',
                propietario:'',
                fecha:'',
                hora:'',
                sintomas:''
            })
    }

    return (
       <Fragment>
           
           <div style={{width:'400px'}} className="float-end">
           <h2>Crear cita</h2>
           <form
           onSubmit={submitCita}
           >

               <label>Nombre de la mascota:</label>
               <input 
               className="form form-control" 
               id="Nombre"
               placeholder="Nombre mascota"
               type="text"
               name="mascota"
               onChange={altualizarCitaState}
               value={mascota}
               />

               
               <label>Propietario:</label>
               <input 
               className="form form-control" 
               id="Propietario"
               placeholder="Propietario de la mascota"
               type="text"
               name="propietario"
               onChange={altualizarCitaState}
               value={propietario}
               />

               
               <label>Fecha:</label>
               <input 
               className="form form-control" 
               id="Fecha"
               type="date"
               name="fecha"
               onChange={altualizarCitaState}
               value={fecha}
               />

               
                <label>Hora:</label>
               <input 
               className="form form-control" 
               id="Hora"
               type="time"
               name="hora"
               onChange={altualizarCitaState}
               value={hora}
               />

               
            <label>Sintomas:</label>
               <textarea 
               className="form form-control" 
               id="Sintomas"
               placeholder="Sintomas"
               type="text"
               name="sintomas"
               onChange={altualizarCitaState}
               value={sintomas}
               />

               {
                   error ? (
                   <div className="alert alert-danger mt-2">
                        Error... Todos los campos son necesarios.
                   </div>
                        ) : ("")
               }

               <div className="d-grid mt-2 ">
               <button
               className="btn btn-success"
               >Agregar cita</button>
               </div>

           </form>
           </div>
       </Fragment>
      );
}

Formulario.propTypes = {
    CrearCita: PropTypes.func.isRequired
  }
  


 
export default Formulario;