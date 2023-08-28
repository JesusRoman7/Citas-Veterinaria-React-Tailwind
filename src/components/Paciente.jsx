import React from 'react'

const Paciente = ({paciente, setPaciente}) => {
    console.log(paciente);
    const {nombre, propietario, email, fecha, sintomas} = paciente;

  return (
    <div className='mx- 5 my-10 bg-white shadow-md px-5 py-10 rounded-xl'>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre: {''}
            <span className='font-normal normal-case'>{nombre}</span>
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'>Propietario: {''}
            <span className='font-normal normal-case'>{propietario}</span>
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'>Email: {''}
            <span className='font-normal normal-case'>{email}</span>
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha Alta: {''}
            <span className='font-normal normal-case'>{fecha}</span>
        </p>

        <p className='font-bold mb-3 text-gray-700 uppercase'>Sintomas: {''}
            <span className='font-normal normal-case'>{sintomas}</span>
        </p>

        <div className='flex justify-between mt-10'>
            <button 
                type='button' 
                className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg uppercase'
                onClick={()=> setPaciente(paciente)} //al darle click, usamos la funcion modificadora setPaciente, y le pasamos el objeto de paciente (el que usamos con MAP), al darle click, el useState de paciente (que esta en APP) se modifica gracias a la funcion modificadora y se llenan sus datos con el objeto paciente(MAP)
            >
                Editar
            </button>

            <button 
                type='button'
                className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg uppercase'>
                Eliminar
            </button>
        </div>
    </div>
  )
}

export default Paciente