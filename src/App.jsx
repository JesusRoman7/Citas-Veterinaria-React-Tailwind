import { useState } from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes'

function App() {
  const [pacientes, setPacientes] = useState([]); //Si tenemos un state que va a pasar por diferentes componentes lo mejor ES COLOCARLO EN EL ARCHIVO PRINCIPAL

  return (
    <div className='container mx-auto mt-20'>
      <Header />
      <div className='mt-12 flex'>
        <Formulario 
        setPacientes={setPacientes} //pasando el prop a setPacientes, porque es en el formulacion donde se esta registrando el paciente
        //Nota: como ahora setPacientes(key) es un prop, debemos extraerlo alla en el componente que se le designo, en este caso formulario
        pacientes={pacientes} //Pasandole los pacientes para poder hacer la copia que ya teniamos en el arreglo, en si usar esto 
        //...pacientes, objetoPaciente
        />
        <ListadoPacientes 
        pacientes={pacientes} //aqui en este punto como ya tenemos un array de objetos y VAMOS A IMPRIMIR ESA INFO EN LISTADO PACIENTES, entonces debemos pasarlo como props, recordando que lo tenemos que extraer en ese Componente
        />
      </div>
    </div>
  )
}

export default App
