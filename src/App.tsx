import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import Banner from './components/banner/Banner'
import FormCategoria from './components/categoria/formcategoria/FormCategoria'
import ListaCategoria from './components/categoria/listacategoria/ListaCategoria'

function App() {
  return (
    <>
     <BrowserRouter>
          <Navbar/>
          <Banner/>
          <div className="min-h-[80vh]">
          <Routes>
            <Route path = "/" element={<Home/>}/>
            <Route path = "/categorias" element={<ListaCategoria/>}/>
            <Route path = "/cadastrarCategoria" element={<FormCategoria/>}/>
            <Route path = "/editarCategoria/:id" element={<FormCategoria/>}/>
            <Route path = "/deletarCategoria/:id" element={<FormCategoria/>}/>
          </Routes>
          </div>
          <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
