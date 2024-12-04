import { Card } from "./card.model";

//clase para las listas que tiene cada board
export interface List {
  id: string;
  title: string;
  position: number;
  cards: Card[];
  showCardForm?: boolean;//estado para saber si mostrar boton crear nuevo card en cada lista
}

//crea una CreateListDto con los atributos de List, emitiendo id y cards, pero añade boardId
export interface CreateListDto extends Omit<List, 'id' | 'cards'> {
  boardId: string;
}
