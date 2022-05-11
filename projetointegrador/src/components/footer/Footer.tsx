import { useState } from "react";
import { FaHome, FaMapMarkedAlt, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MapaModal } from "../modal/MapaModal";
import { FooterContainer } from "./style";


export function Footer() {

    const [isOpen, setisOpen] = useState(false);

    function openModal() {
        setisOpen(true);
    }

    function closeModal() {
        setisOpen(false);
    }

  return (
    <>
        <MapaModal openModal={openModal} closeModal={closeModal} isOpen={isOpen}/>
        <FooterContainer>
            <Link to='/'>
                <div>
                    <span><FaHome/></span>
                    Inicio
                </div>
            </Link>
            <a onClick={openModal}>
                <div>
                    <span><FaMapMarkedAlt/></span>
                    Mapa
                </div>
            </a>
            <Link to='/'>
                <div>
                    <span><FaUserAlt/></span>
                    Perfil
                </div>
            </Link>
        </FooterContainer>
    </>
  )
}
