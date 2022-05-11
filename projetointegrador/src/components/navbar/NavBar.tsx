import { Header, Nav, Pesquisa } from "./style";
import { FaBars, FaSearch, FaRegClock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

export function NavBar() {

  const [menu1, setMenu1] = useState(true);

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
              <input type="text" placeholder="O que você está procurando?" />
              <p onClick={() => setMenu1(!menu1)}>Cancelar</p>
            </div>

        </Nav>}
            {!menu1 && <Pesquisa>
              <p onClick={() => setMenu1(!menu1)}><span><FaRegClock/></span>Fisioterapeuta</p>
              <p onClick={() => setMenu1(!menu1)}><span><FaRegClock/></span>Massagista</p>
              <p onClick={() => setMenu1(!menu1)}><span><FaRegClock/></span>Personal trainer</p>
              <p onClick={() => setMenu1(!menu1)}><span><FaRegClock/></span>Yoga</p>
            </Pesquisa>}
    </Header>
  )
}