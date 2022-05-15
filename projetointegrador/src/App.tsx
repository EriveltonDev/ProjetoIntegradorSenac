import './App.css'
import { Content } from './components/content/Content'
import { Footer } from './components/footer/Footer'
import { NavBar } from './components/navbar/NavBar'
import { Routes, Route } from "react-router-dom";
import { AnaPage } from './components/profissionais/AnaPage';
import { Fisioterapia } from './components/pagesPesquisa/fisioterapia/Fisioterapia';
import { PersonalTrainer } from './components/pagesPesquisa/personalTrainer/PersonalTrainer';
import { Yoga } from './components/pagesPesquisa/yoga/Yoga';
import { Massagista } from './components/pagesPesquisa/massagista/Massagista';

function App() {

  return (
      <>
        <NavBar />
        <Routes>
          <Route path='/' element={<Content/>}/>
          <Route path='ana' element={<AnaPage/>}/>
          <Route path='fisioterapia' element={<Fisioterapia/>}/>
          <Route path='personaltrainer' element={<PersonalTrainer/>}/>
          <Route path='yoga' element={<Yoga/>}/>
          <Route path='massagista' element={<Massagista/>}/>
        </Routes>
        <Footer />
      </>
  )
}

export default App
