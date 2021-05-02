import React, { Fragment } from 'react'
import PropTypes from 'prop-types';


const Citas = ({ Cita,Eliminar }) => {
    return (
        <Fragment>
            <div className="col">
                <div 
                className="bg-light p-2 rounded shadow"
                style={{ color: "black" }}>

                    <div className="text-center pt-0 bg-light">
                        <h4>{Cita.mascota}</h4>
                    </div>

                    <p>Propietario: {Cita.propietario}</p>
                    <p>Fecha: {Cita.fecha}</p>
                    <p>hora: {Cita.hora}</p>

                    <div className="d-grid">
                        <button 
                        className="btn btn-danger mb-2"
                        onClick={()=>Eliminar(Cita.id)}
                        
                        >Eliminar</button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

Citas.propTypes = {
    Cita: PropTypes.object.isRequired,
    Eliminar: PropTypes.func.isRequired
  }
  


export default Citas;