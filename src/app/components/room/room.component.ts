import {Component, Input, OnInit} from '@angular/core';
import {Store} from '../../store';
import {Observable} from 'rxjs';

@Component({
  selector: 'room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

  public openend: boolean;

  @Input('name')
  public name: string;

  constructor(private store: Store) {
    this.openend = true;

  }

  ngOnInit() {
    let nrOfFreeItems = this.store.value;
    console.log(nrOfFreeItems);

    //this.store.set('free', nrOfFreeItems++);
  }

  toggleOpen() {
    this.openend = !this.openend;
    console.log(this.openend);
  }


}
