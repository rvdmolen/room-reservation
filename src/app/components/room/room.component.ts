import {Component, Input} from '@angular/core';
import {Store} from '../../store';

@Component({
  selector: 'room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent {

  public openend: boolean = true;

  @Input('name')
  public name: string;

  constructor(private store: Store) {
  }

  toggleOpen() {
    this.openend = !this.openend;
    let nrOfFreeItems: number = this.store.value.free;
    let nrOfOccupiedItems: number = this.store.value.occupied;
    this.store.set('free', (this.openend) ? nrOfFreeItems+1 : nrOfFreeItems-1);
    this.store.set('occupied', (this.openend) ? nrOfOccupiedItems-1 : nrOfOccupiedItems+1);
  }


}
