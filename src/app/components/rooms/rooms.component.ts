import { Component, OnInit } from '@angular/core';
import {Store} from '../../store';

@Component({
  selector: 'rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  public rooms: room[] = [
    {name: '1'},
    {name: '2'},
    {name: '3'},
    {name: '4'},
    {name: '5'},
    {name: '6'},
    {name: '7'},
    {name: '8'},
    {name: '9'}
  ];

  constructor(private store: Store) {
    store.set('free', this.rooms.length);
    store.set('occupied', 0);
  }

  ngOnInit() {
  }

}
