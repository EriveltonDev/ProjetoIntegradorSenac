import './App.css'
import { Content } from './components/content/Content'
import { Footer } from './components/footer/Footer'
import { NavBar } from './components/navbar/NavBar'
import { Routes, Route } from "react-router-dom";
import { AnaPage } from './components/profissionais/AnaPage';
import { FisioterapeutaBusca } from './components/pagesBusca/Fisioterapeuta/FisioterapeutaBusca';
import { PersonalTrainerBusca } from './components/pagesBusca/PersonalTrainer/PersonalTrainerBusca';
import { YogaBusca } from './components/pagesBusca/Yoga/YogaBusca';
import { MassagemBusca } from './components/pagesBusca/massagista/MassagistaBusca';

function App() {

  return (
      <>
        <NavBar />
        <Routes>
          <Route path='/' element={<Content/>}/>
          <Route path='ana' element={<AnaPage/>}/>
          <Route path='fisioterapia' element={<FisioterapeutaBusca/>}/>
          <Route path='personaltrainer' element={<PersonalTrainerBusca/>}/>
          <Route path='yoga' element={<YogaBusca/>}/>
          <Route path='massagista' element={<MassagemBusca/>}/>
        </Routes>
        <Footer />
      </>
  )
}

export default App
