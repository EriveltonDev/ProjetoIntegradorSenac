import { Main } from "../content/style";
import { Agenda, AgendaItem, Button, Navegacao, PersonaDescricao, PersonaImg, Precos, Sobre } from "./style";
import anaPageImg from '../../assests/anapage.png'
import { useState } from "react";


export function AnaPage() {

    const [sobre, setSobre] = useState(true);
    const [agenda, setAgenda] = useState(false);
    const [precos, setPrecos] = useState(false);

    function handleClick(event: any) {
        const target = event.target.innerHTML;

        if (target === 'SOBRE') {
            setSobre(!sobre);
            setAgenda(false);
            setPrecos(false);

        } else if (target === 'AGENDA') {
            setAgenda(!agenda);
            setSobre(false);
            setPrecos(false);
        } else {
            setPrecos(!precos);
            setSobre(false);
            setAgenda(false);
        }
    }

    const [agendado, setAgendado] = useState(false);
    const [agendado1, setAgendado1] = useState(false);
    const [agendado2, setAgendado2] = useState(false);
    const [agendado3, setAgendado3] = useState(false);
    const [agendado4, setAgendado4] = useState(false);

  return (
    <Main>
    <PersonaImg>
        <img src={anaPageImg} alt=""/>
    </PersonaImg>

    <PersonaDescricao>
        <h2>Ana</h2>
        <p>Massagista e Fisioterapeuta</p>
    </PersonaDescricao>

    <Navegacao>
        <Button onClick={handleClick} isActive={sobre}>SOBRE</Button>
        <Button onClick={handleClick} isActive={agenda}>AGENDA</Button>
        <Button onClick={handleClick} isActive={precos}>PREÇOS</Button>
    </Navegacao>

    {sobre && <Sobre>
        <p>A massagem com pedras aquecidas é uma prática que consiste em colocar pedras de basalto aquecidas sobre pontos específicos do corpo chamados de acupressão, gerando relaxamento, aliviando tensões e aumentando a circulação sanguínea local.</p>
        <p>Fisioterapeuta especializada em massagem com pedras de basalto aquecidas, atuo na região central da grande São Paulo ou em domcílio, conforme necessidade do cliente.</p>
        <p>Agende seu horário</p>
    </Sobre>}

    {agenda && <Agenda>
        <AgendaItem isAgendado={agendado}>
            <p>15/05</p>
            <button onClick={() => setAgendado(!agendado)} >{!agendado ? 'Agendar' : 'Indisponível'}</button>
        </AgendaItem>

        <AgendaItem isAgendado={agendado1}>
            <p>16/05</p>
            <button onClick={() => setAgendado1(!agendado1)}>{!agendado1 ? 'Agendar' : 'Indisponível'}</button>
        </AgendaItem>

        <AgendaItem isAgendado={agendado2}>
            <p>17/05</p>
            <button onClick={() => setAgendado2(!agendado2)}>{!agendado2 ? 'Agendar' : 'Indisponível'}</button>
        </AgendaItem>

        <AgendaItem isAgendado={agendado3}>
            <p>18/05</p>
            <button onClick={() => setAgendado3(!agendado3)}>{!agendado3 ? 'Agendar' : 'Indisponível'}</button>
        </AgendaItem>

        <AgendaItem isAgendado={agendado4}>
            <p>19/05</p>
            <button onClick={() => setAgendado4(!agendado4)}>{!agendado4 ? 'Agendar' : 'Indisponível'}</button>
        </AgendaItem>
    </Agenda>}

    {precos && <Precos>
        <p>Massagem convecional no estúdio: R$150 / Hora</p>
        <p>Massagem convecional em domcílio: R$230 / Hora</p>
        <p>Massagem com pedra aquecida no estúdio: R$170 / Hora</p>
        <p>Massagem com pedra aquecida em domcílio: R$150 / Hora</p>
    </Precos>}

</Main>
  )
}