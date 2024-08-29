import { GameController } from '@phosphor-icons/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='bg-slate-800 flex justify-around items-center text-orange-600 py-12'>
        <div className=" flex items-center text-orange-600 gap-x-3 cursor-pointer">
          <Link to = "/">
              <GameController size={32} />
          </Link>
          <Link to = "/"><span className="font-bold">Playgames Store</span></Link>
        </div>
      <div className='grid grid-cols-3 gap-x-60'>
          <div className='flex flex-col gap-2'>
            <h2 className='font-bold text-orange-600'>Produtos</h2>
            <a href="">Teste</a>
            <a href="">Teste</a>
            <a href="">Teste</a>
          </div>
          <div className='flex flex-col gap-2'>
            <h2 className='font-bold text-orange-600'>Categoria</h2>
            <a href="">Teste</a>
            <a href="">Teste</a>
            <a href="">Teste</a>
          </div>
          <div className='flex flex-col gap-2'>
            <h2 className='font-bold text-orange-600'>Contato</h2>
            <a href="">Teste</a>
            <a href="">Teste</a>
            <a href="">Teste</a>
          </div>
      </div>
    </div>
  )
}

export default Footer