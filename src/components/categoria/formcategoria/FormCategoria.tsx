import { GameController } from '@phosphor-icons/react'
import React from 'react'

function FormCategoria() {
  return (  
    <>
        <div className="flex min-h-full mt-6 flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div>
            <div className=" flex flex-col place-items-center sm:mx-auto sm:w-full sm:max-w-sm">
          <GameController size={64} className='text-orange-600'/>
          <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-orange-600 text-4xl">
            Cadastrar Categoria
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-orange-600 px-3 py-3 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
               Cadastrar
              </button>
            </div>
          </form>
        </div>
        </div>
      </div>
    </>
  )
}

export default FormCategoria