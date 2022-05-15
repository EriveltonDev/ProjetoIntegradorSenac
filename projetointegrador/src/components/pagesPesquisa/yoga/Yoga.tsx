import React from 'react'
import { Link } from 'react-router-dom'
import { BreveDescricao, ContainerProfissoes, Main, ProfissaoImg } from './style'

export function Yoga() {
    const dados : any[] = [
        { 
            "profissao": "Yoga",
            "nome" : "Karina",
            "img" : "karina",
            "descricao" : "Professora de Yoga",
            "local" : "Guarulhos - SP",
        },
    ]

    const final = [];

    for(let dado of dados) {
        final.push(
                <ContainerProfissoes>
                    <ProfissaoImg>
                        <img src={`src/assests/${dado.img}.png`} alt="Mulher aplicando massagem"/>
                    </ProfissaoImg>
                    <BreveDescricao>
                        <span>{dado.profissao}</span>
                        <div>
                            <p>{dado.nome}</p>
                            <p>{dado.descricao}</p>
                            <p>{dado.local}</p>
                        </div>
                        <Link to='/ana'>SAIBA MAIS</Link>
                    </BreveDescricao>
                </ContainerProfissoes>
        )
    }

  return (
        <Main>
            {final}
        </Main>
  )
}