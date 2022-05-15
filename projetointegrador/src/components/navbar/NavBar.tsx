import { Header, Nav, Pesquisa } from "./style";
import { FaBars, FaSearch, FaRegClock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

export function NavBar() {

  const [menu1, setMenu1] = useState(true);
  const [pesquisa, setPesquisa] = useState(false);
  const [busca, setBusca ] = useState('');

  const buscado = [
    {
      profissao: "Fisioterapeuta",
      page: "fisioterapia",
    },
    {
      profissao: "Yoga",
      page: "yoga",
    },
    {
      profissao: "Personal Trainer",
      page: "personaltrainer",
    },
  ]

  function handleChange(event : any) {
    setPesquisa(true);
    setBusca(event.target.value);
  }

  const filtrados = buscado.filter((dado) => dado.profissao.toLowerCase().includes(busca.toLowerCase()));

  return (
    <Header>
        {menu1 && <Nav>
            <Link to='/'>
                <span><FaBars/></span>
            </Link>
            <Link onClick={() => setMenu1(!menu1)} to='/'>
                <span><FaSearch/></span>
            </Link>
        </Nav>}

        {!menu1 && <Nav>
            <Link onClick={() => setMenu1(!menu1)} to='/'>
                <span><FaSearch/></span>
            </Link>

            <div>
              <input onChange={handleChange} type="text" placeholder="O que você está procurando?" />
              <p onClick={() => { setMenu1(!menu1) ; setPesquisa(false) }}>Cancelar</p>
            </div>

        </Nav>}
            {!menu1 &&
            <Pesquisa>

                {pesquisa &&
                <div>
                  <ul>
                    {filtrados.map((info) => (
                      <Link onClick={() => { setMenu1(!menu1) ; setPesquisa(false) }} to={info.page} ><li><span><FaRegClock/></span>{info.profissao}</li></Link>
                    ))}
                  </ul>
                </div>}

                {!pesquisa &&
                <div>
                  <Link onClick={() => { setMenu1(!menu1) ; setPesquisa(false) }} to='fisioterapia'><p><span><FaRegClock/></span>Fisioterapeuta</p></Link>
                  <Link onClick={() => { setMenu1(!menu1) ; setPesquisa(false) }} to='personaltrainer'><p><span><FaRegClock/></span>Personal trainer</p></Link>
                  <Link onClick={() => { setMenu1(!menu1) ; setPesquisa(false) }} to='yoga'><p><span><FaRegClock/></span>Yoga</p></Link>
                </div>}
            </Pesquisa>}
    </Header>
  )
}
