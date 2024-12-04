import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { checkToken } from '@interceptors/token.interceptor';
import { Board } from '@models/board.model';
import { Card } from '@models/card.model';
import { Colors } from '@models/colors.model';
import { List } from '@models/list.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BoardsService {

  apiUrl = environment.API_URL;
  bufferSpace = 65535;

  //variable para pasar el background color del board al navbar para que coja el mismo color
  backgroundColorBoard$ = new BehaviorSubject<Colors>('sky');

  constructor(private http: HttpClient) {}

  getBoard(id: Board['id']) {
    return this.http.get<Board>(`${this.apiUrl}/api/v1/boards/${id}`, {
      context: checkToken(),
    });
  }

  //metodo para calcular la posicion de las cartas(cada una de las tareas)
  //devuelve la lista[] con las posiciones en las que se ha quedado cada card y la posicion: number en la que se ha quedado el elemento movido en esa lista
  getPosition(cards: Card[], currentIndex: number){

    console.log(cards, currentIndex);

    if(cards.length === 1){//si una card es nueva en la lista (is new)
      return this.bufferSpace;
    }

    if(cards.length > 1 && currentIndex === 0){//si una card esta en lo mas alto de la lista (is the top)
      const onTopPosition = cards[1].position;//card que se encuentra arriba de la que se ha movido
      return onTopPosition / 2;
    }

    const lastIndex = cards.length - 1;
    if(cards.length > 2 && currentIndex > 0 && currentIndex < lastIndex){//si una card esta en medio de la lista (is the middle)
      const prevPosition = cards[currentIndex - 1].position;
      const nextPosition = cards[currentIndex + 1].position;
      return (prevPosition + nextPosition) / 2;//promedio de las cards
    }

    if(cards.length > 1 && currentIndex === lastIndex){//si una card esta en lo mas bajo de la lista (is the bottom)
      const onBottomPosition = cards[lastIndex - 1].position;
      return onBottomPosition + this.bufferSpace;
    }

    return 0;
  }

  createBoard(title: string, backgroundColor: Colors) {
    return this.http.post<Board>(`${this.apiUrl}/api/v1/boards`, {
      title,
      backgroundColor
    }, {
      context: checkToken(),
    });
  }

  //metodo para calcular donde se debe añadir una nueva card o una nueva lista
  getPositionNewCardOrList(elements: Card[] | List[]){

    if(elements.length === 0){//si la lista o el board no tiene elemento que se añada 1º
      return this.bufferSpace;
    }

    const lastIndex = elements.length - 1;//si la lista o el board tiene elementos que se ponga el ultimo
    const onBottomPosition = elements[lastIndex].position;
    return onBottomPosition + this.bufferSpace;
  }

  //metodo para recuperar el background color del board y guardarlo en la variable
  setBackgroundColor(color: Colors){
    this.backgroundColorBoard$.next(color);
  }

   //metodo para recuperar el background color del board
  getBackgroundColor(){
    return this.backgroundColorBoard$;
  }

  //actualizar el board
  updateBoard(id: Board['id'], title: string, backgroundColor: Colors) {
    return this.http.put<Board>(`${this.apiUrl}/api/v1/boards/${id}`, {
      title,
      backgroundColor
    }, {
      context: checkToken(),
    });
  }
}
