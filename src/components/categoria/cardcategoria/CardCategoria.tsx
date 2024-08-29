import React from 'react'
import { Link } from 'react-router-dom'
import Categoria from '../../../model/Categoria'

interface CardCategoriaProps {
  categoria: Categoria
}

function CardCategoria({categoria}:CardCategoriaProps) {
  return (
    <>
    <div className="w-72 bg-slate-600 text-white">
        < div className=" flex flex-col gap-7">
            <h1 className='text-orange-600 text-3xl font-bold p-4 text-center'>Categoria</h1>
            <p className="card-text text-center">{categoria.tipo}</p>
            <div className='grid grid-cols-2 bg-indigo-600 text-center'>
              <a href="#" className=" inline-block py-2 card-link bg-orange-600">Editar</a>
              <a href="#" className=" inline-block  py-2 card-link bg-red-700">Cancelar</a>
            </div>
        </div>
    </div>
    </>         
  )
}

export default CardCategoria