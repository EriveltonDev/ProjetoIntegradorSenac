import React from 'react'
import { Link } from 'react-router-dom'
import { BreveDescricao, ContainerProfissoes, ProfissaoImg } from './style'

export function CardProfissoes() {
    const dados : any[] = [
        { 
            "profissao": "Massagista",
            "nome" : "Ana",
            "img" : "ana",
            "descricao" : "Massagista e Fisioterapeuta",
            "local" : "São Paulo - SP",
        },
        { 
            "profissao": "Personal Trainer",
            "nome" : "João",
            "img" : "joao",
            "descricao" : "Personal Trainer",
            "local" : "São Paulo - SP",
        },
        { 
            "profissao": "Yoga",
            "nome" : "Karina",
            "img" : "karina",
            "descricao" : "Professora de Yoga",
            "local" : "Guarulhos - SP",
        },
        { 
            "profissao": "Fisioterapeuta",
            "nome" : "Angela",
            "img" : "angela",
            "descricao" : "Fisioterapeuta",
            "local" : "São Paulo - SP",
        }
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
        <>
            {final}
        </>
  )
}