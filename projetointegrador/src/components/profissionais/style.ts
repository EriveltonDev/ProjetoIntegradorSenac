import styled from "styled-components";

export const PersonaImg = styled.div`
    border-radius: 5px;
    overflow: hidden;
`
export const PersonaDescricao = styled.div`
    align-self: flex-start;
    padding: 0 5px;

    h2 {
        margin-bottom: 10px;
    }
`
export const Navegacao = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: rgb(0, 168, 98);
    border-radius: 5px;
    overflow: hidden;
`

export const Sobre = styled.div`
    padding: 0 5px;
    font-size: 0.8rem;

    p + p {
        margin-top: 10px;
    }
`

export const Agenda = styled.div`
    width: 98%;
` 

interface TypeAgenda {
    isAgendado: boolean;
}

export const AgendaItem = styled.div`
        margin-bottom: 10px;
        display: flex;
        background-color: ${({isAgendado} : TypeAgenda) => ( !isAgendado ? 'rgb(0, 168, 98)' : 'rgb(255, 105, 97)')};
        justify-content: space-between;
        padding: 10px;
        border-radius: 5px;
        align-items: center;

        p {
            background-color: white;
            padding: 10px 5px;
            border-radius: 5px;
        }

        button {
            border: none;
            margin-right: 50%;
            transform: translateX(50%);
            min-width: 150px;
            height: 30px;
            border-radius: 5px;
            background-color: ${({isAgendado} : TypeAgenda) => ( !isAgendado ? 'rgb(0, 80, 47)' : 'red' )};
            color: white;
            box-shadow: 2px 2px 5px rgb(75, 75, 75);

            @media (max-width:375px) {
                transform: translateX(25%);
            }
        }
`

interface TypeProps {
    isActive: boolean;
}

export const Button = styled.a`
    background-color: ${({isActive} : TypeProps) => ( isActive ? 'rgb(0, 80, 47)' : 'transparent')};
    text-align: center;
    flex: 1;
    text-decoration: none;
    color: white;
    font-weight: bold;
    padding: 5px 10px;
    border-radius: 5px;

`

export const Precos = styled.div`
    padding: 0 5px;
    font-size: 0.8rem;
`

