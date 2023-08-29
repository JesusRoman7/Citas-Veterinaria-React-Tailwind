import { useState } from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes'

function App() {
  const [pacientes, setPacientes] = useState([]); //Si tenemos un state que va a pasar por diferentes componentes lo mejor ES COLOCARLO EN EL ARCHIVO PRINCIPAL
  const [paciente, setPaciente] = useState({}); //inicia como un objeto vacio ya que todos los elementos de la variable PACIENTES, son objetos, se creo este useState para el COMPONENTE DE PACIENTE.JSX para que al darle click le pasemos por via props, todo el OBJETO DE PACIENTE QUE ITERAMOS CON EL MAP, este (setPaciente) va a pasar por el componente ListadoPacientes, luego por Paciente, el setPaciente va a tomar como datos el objeto paciente(DEL MAP) para modificarlo y dejar esa info a paciente

  //Podemos hacer lo mismo que en editar, agregar un useState y pasarlo a ListadoPacientes luego a Pacientes, pero en vez de eso usaremos una funcion para variar un poco, esta funcion pasara a ListadoPacientes luego a Paciente para usarla alli
  const eliminarPaciente = (id) =>{
    //Nota: Filter puede o no mutar el arreglo original, podemos usarlo como queramos, por eso en otros proyectos mios si mutaba el original, por ejemplo el de abajo seria pacientes = pacientes.filter
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)
    //Filtrame todos los que sean diferentes al id que le decimos
    console.log('Eliminando paciente', id);
    setPacientes(pacientesActualizados);
  }

  return (
    <div className='container mx-auto mt-20'>
      <Header />
      <div className='mt-12 flex'>
        <Formulario 
        setPacientes={setPacientes} //pasando el prop a setPacientes, porque es en el formulacion donde se esta registrando el paciente
        //Nota: como ahora setPacientes(key) es un prop, debemos extraerlo alla en el componente que se le designo, en este caso formulario
        pacientes={pacientes} //Pasandole los pacientes para poder hacer la copia que ya teniamos en el arreglo, en si usar esto 
        //...pacientes, objetoPaciente
        paciente={paciente} //pasandole paciente a formulario para usarla para cuando le demos click al boton editar, se llenen los campos en el formulario
        setPaciente={setPaciente} //Pasandole esta prop para poder reiniciar el state
        />
        <ListadoPacientes 
        pacientes={pacientes} //aqui en este punto como ya tenemos un array de objetos y VAMOS A IMPRIMIR ESA INFO EN LISTADO PACIENTES, entonces debemos pasarlo como props, recordando que lo tenemos que extraer en ese Componente
        setPaciente={setPaciente} //este va para el componente Paciente.jsx donde se encuentran los botones editar y eliminar, pero primero pasando por el componente ListadoPacientes, ya que es el padre de Paciente.jsx
        eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App
