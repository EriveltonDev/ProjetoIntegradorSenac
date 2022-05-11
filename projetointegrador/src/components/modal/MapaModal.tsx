import Modal from 'react-modal';
import './style.css'
import { FaRegTimesCircle, FaAngleDown } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

interface TypeProps {
  isOpen: boolean;
  closeModal: () => void;
  openModal: () => void;
}

export function MapaModal( props : TypeProps ) {

  const navegacao = useNavigate();

  function submit() {
    navegacao('/');
    props.closeModal()
  }

  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.closeModal}
      className='modal-content'
      overlayClassName='overlay'
    >
      <button className='fechar' onClick={props.closeModal} ><FaRegTimesCircle/></button>

      <div className='container'>
        <div className='titulo'>
          <h1>Verificar Disponibilidade</h1>
          <p>Informe seu estado e cidade para verificar qual profissional está mais próximo de você!</p>
        </div>
  
        <div className='inputs'>
          <span><FaAngleDown/></span>
          <span><FaAngleDown/></span>
          <select name="estado" id="1" required>
            <option value="" disabled selected>Informe seu estado</option>
            <option value="SP">São Paulo</option>
          </select>
          <select name="cidade" id="2" required>
            <option value="" disabled selected>Informe seu estado</option>
            <option value="SP">São Paulo</option>
          </select>
        </div>
  
        <div className='buttons'>
          <button onClick={submit}>Cancelar</button>
          <button onClick={submit} type='submit'>Confirmar</button>
        </div>
      </div>
    </Modal>
  )
}


