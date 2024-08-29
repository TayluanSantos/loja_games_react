import { GameController, ShoppingCartSimple } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div>
      <nav className="flex items-center justify-between py-6 lg:px-16" aria-label="Global">
        <div className=" flex items-center text-white hover:text-orange-500 gap-x-3 cursor-pointer">
          <Link to = "/">
              <GameController size={32} />
          </Link>
          <Link to = "/"><span className="font-bold">Playgames Store</span></Link>
        </div>
        <div className="lg:flex lg:gap-x-12">
          <a href="#" className="text-sm font-semibold leading-6 text-white  hover:text-orange-500">Produtos</a>
          <Link to = "/categorias">
            <a href="#" className="text-sm font-semibold leading-6 text-white  hover:text-orange-500">Categorias</a>
          </Link>
          <Link to = "/cadastrarCategoria">
            <a href="#" className="text-sm font-semibold leading-6 text-white  hover:text-orange-500">Cadastrar Categoria</a>
          </Link>
          <a href="#" className="text-sm font-semibold leading-6 text-white  hover:text-orange-500">Contato</a>
          </div>
        <div className=" text-white hover:text-orange-600">
          <div className="lg:flex items-center lg:gap-4">
          <ShoppingCartSimple size={32} className=" text-white hover:text-orange-600" />
          <a href="#" className="text-sm font-semibold leading-6 text-white  hover:text-orange-500">Login<span aria-hidden="true">&rarr;</span></a>
          </div>   
        </div>
      </nav>
    </div>
  )
}

export default Navbar