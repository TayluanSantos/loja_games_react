import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Categoria from '../../../model/Categoria';
import { buscar } from '../../../service/Service';
import CardCategoria from '../cardcategoria/CardCategoria';

function ListaCategoria() {
    const navigate = useNavigate();
    const [categorias,setCategoria] = useState<Categoria[]>([]);
  
    async function buscarCategorias(){
      try {
        await buscar('/categorias',setCategoria);
      } catch(error:any){
          alert('Categoria não encontrada')
      }
    }

    useEffect(() => {
        buscarCategorias();
      },[categorias.length])

  
  return (
    <>
    <div className="flex justify-center w-full my-10">
    <div className="container flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categorias.map((categorias) => (
              <CardCategoria key={categorias.id} categoria={categorias}  />
            ))}
      </div>
    </div>
  </div>
  </>
  )
}

export default ListaCategoria