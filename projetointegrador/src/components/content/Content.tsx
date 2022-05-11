import { ReactNode } from "react";
import { CardProfissoes } from "../profissoes_card/CardProfissoes";
import { Main } from "./style";


export function Content() {
  return (
    <Main>
      <CardProfissoes/>
    </Main>
  )
}