import './index.css';
import React,{Fragment,useState,useEffect}from 'react'
import Formulario from './Components/Formulario'
import Citas from './Components/Citas'


function App() {

  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales){
    citasIniciales = [];
  }
  //Array que almacena todas las citas
  const [listadoCitas,setListado] = useState(citasIniciales);

  //Funcion que guarda las citass
  const crearCita = (newCita)=>{
    setListado([newCita,...listadoCitas]);
  }

  useEffect(()=>{
    let citasIniciales = JSON.parse(localStorage.getItem('citas'));
    if(citasIniciales){
      localStorage.setItem('citas',JSON.stringify(listadoCitas))
    }else{
      localStorage.setItem('citas',JSON.stringify([]));
    }
    },[listadoCitas]);

  //Funcion que elimina las citas
  const eliminarCita = id =>{
    const citasRestantes = listadoCitas.filter(p => p.id !== id);
    setListado(citasRestantes);
    
  }

  const citas = listadoCitas.length <= 0 ? 'Agrega una cita nueva' : 'Administra tus citas'

  return (
    <Fragment>
      <h1>Administrador de citas</h1>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 float-none">
            <div className="col float-end">

              <Formulario
              CrearCita={crearCita}
              />

            </div>
            <div className="col">
            <h1>{citas}</h1>
            <div className="container overflow-hidden">
              <div className="row row-cols-2 row-cols-md-3 row-cols-lg-3 gx-2 gy-2">
                
              {
                listadoCitas.length <= 0 ?(
                  <h1></h1>
                ) :(
                listadoCitas.map(Cita => (
                  <Citas
                  key={Cita.id}
                  Cita={Cita}
                  Eliminar={eliminarCita}
                  />)
                ))
              }
              </div>
              </div>
            </div>
        </div>
      </div>
    </Fragment>
   
  );
}


export default App;
