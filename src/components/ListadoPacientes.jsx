import React, { useEffect } from 'react'
import Paciente from './Paciente'

//Nota: cuando usamos la funcion modificadora setPaciente, este lo pasamos al componente Paciente.jsx
const ListadoPacientes = ({pacientes, setPaciente}) => {

    //Practica
    useEffect(()=>{
        if(pacientes.length > 0){
            console.log('Nuevo Paciente');
        }
    }, [pacientes])

  return (
    <div className='md:w-1/2 lg:w-3/5 h-screen overflow-y-scroll'>

        {pacientes && pacientes.length ? ( /* aqui damos por implicito un return, al poner los () es que hay un return, retorname lo siguiente */
            <> {/* retornando un fragment para que no nos de error */}
                    <h2 className='font-black text-3xl text-center'>Listado Pacientes</h2>
                    <p className='text-xl mt-5 mb-10 text-center'>
                        Administra tus {''}
                        <span className='text-indigo-600 font-bold'>Pacientes y Citas</span>
                    </p>
            
                    {/* Nota: aqui para iterar, como estamos dentro de un return, de preferencia usanos MAP y no forEach, ya que forEach en ningun momento usar un return, por esa razon usaremos MAP */}
                    {pacientes.map((paciente)=>{
                        return( <Paciente 
                            key={paciente.id}//para que no nos salga el error Each child in a list should have a unique "key" prop, le ponemos el key con el valur paciente.id de cada iteracion del objeto
                            paciente={paciente} //le pasamos todas las propiedades del iterador al PROP paciente PARA EL COMPONENTE PACIENTE
                            setPaciente={setPaciente} //este va para Paciente.jsx
                        /> )//Llamamos a este componente tantas veces como haya elementos en pacientes
                    })}
                    {/* Nota IMPORTANTE: cuando vayamos a iterar y mostrar diferentes componentes una y otra vez en base a un arreglo TENEMOS QUE PASARLES UN ID UNICO*/}
        
            </>
        ) : ( /* RETORNANDO */
            <>
                    <h2 className='font-black text-3xl text-center'>No hay pacientes</h2>
                    <p className='text-xl mt-5 mb-10 text-center'>
                        Comienza agregando pacientes {''}
                        <span className='text-indigo-600 font-bold'>y apareceran en este lugar</span>
                    </p>
            </>
        )}
    </div>
  )
}

export default ListadoPacientes