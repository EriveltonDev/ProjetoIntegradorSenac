import styled from 'styled-components';

export const ContainerProfissoes = styled.div`
    display: flex;
    max-width: 320px;
    min-width: 310px;
`

export const BreveDescricao = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 10px;

    div {
        margin-left: 5px;
        p {
            font-size: 0.76rem;
        }

        p + p {
            margin-top: 2px;
        }
    }

    span {
    width: 120px;
    border-radius: 5px;
    background-color: rgb(0, 103, 187);
    color: white;
    text-align: center;
    font-size: 0.7rem;
    padding: 5px 15px;
    }

    a {
    background-color: rgb(0, 168, 98);
    width: 150px;
    text-align: center;
    color: white;
    text-decoration: none;
    font-weight: bold;
    padding: 6px 20px;
    border-radius: 5px;
    box-shadow: 3px 3px 5px rgb(75, 75, 75);
    }
`

export const ProfissaoImg = styled.div`
    width: 100%;
    height: 100%;
    max-width: 150px;
    max-height: 150px;
    border-radius: 5px;
    overflow: hidden;
    `