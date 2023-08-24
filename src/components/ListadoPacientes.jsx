import React from 'react'
import Paciente from './Paciente'

const ListadoPacientes = ({pacientes}) => {
  return (
    <div className='md:w-1/2 lg:w-3/5 h-screen overflow-y-scroll'>
        <h2 className='font-black text-3xl text-center'>Listado Pacientes</h2>
        <p className='text-xl mt-5 mb-10 text-center'>
            Administra tus {''}
            <span className='text-indigo-600 font-bold'>Pacientes y Citas</span>
        </p>

        {/* Nota: aqui para iterar, como estamos dentro de un return, de preferencia usanos MAP y no forEach, ya que forEach en ningun momento usar un return, por esa razon usaremos MAP */}
        {pacientes.map((paciente)=>{
            <Paciente 
                paciente={paciente} //le pasamos todas las propiedades del iterador al PROP paciente PARA EL COMPONENTE PACIENTE
            /> //Llamamos a este componente tantas veces como haya elementos en pacientes
        })}

    </div>
  )
}

export default ListadoPacientes