import './App.css'
import Header from './components/Header'
import Footer from'./components/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import Api from './pages/Api'
import { Route, Routes } from 'react-router-dom'

export default function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/api' element={<Api />} />
      </Routes>
      <Footer />
    </>
  )
}