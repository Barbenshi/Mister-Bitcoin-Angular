import { Component, Input } from '@angular/core';
import { Move } from 'src/app/models/move.model';

@Component({
  selector: 'moves-list',
  templateUrl: './moves-list.component.html',
  styleUrls: ['./moves-list.component.scss']
})
export class MovesListComponent {
@Input() moves!:Move[]
@Input() title:string = ''
@Input() name:string =''

get getTitle():string{
 return this.title ? `Your Last ${this.moves.length > 2 ? '3' : ''} Moves:`: `Your Moves to ${this.name}:`
}
}
