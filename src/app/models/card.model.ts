import { List } from "./list.model";

//clase para las cartas que contiene cada lista de cada board
export interface Card {
  id: string;
  title: string;
  description: string;
  position: number;
  list: List;
}

export interface UpdateCardDto {
  title?: string;
  description?: string;
  position?: number;
  listId?: number |string;
  boardId?: string;
}

export interface CreateCardDto {
  title: string;
  position: number;
  description?: string;
  listId: string;
  boardId: string;
}
