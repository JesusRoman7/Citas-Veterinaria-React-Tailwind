import React from 'react'

const Error = ({mensaje}) => {
  return (
    <div className='bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded'>
        <p>{mensaje}</p>
    </div>     //<-------COLOCANDO ERROR EN CASO DE QUE ERROR SEA TRUE, para eso sirve el && (si error entonces imprime en un div con un p si hay error)
  )
}

export default Error