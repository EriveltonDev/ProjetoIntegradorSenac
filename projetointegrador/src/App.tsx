import './App.css'
import { Content } from './components/content/Content'
import { Footer } from './components/footer/Footer'
import { NavBar } from './components/navbar/NavBar'
import { Routes, Route } from "react-router-dom";
import { AnaPage } from './components/profissionais/AnaPage';

function App() {

  return (
      <>
        <NavBar />
        <Routes>
          <Route path='/' element={<Content/>}/>
          <Route path='/ana' element={<AnaPage/>}/>
        </Routes>
        <Footer />
      </>
  )
}

export default App
