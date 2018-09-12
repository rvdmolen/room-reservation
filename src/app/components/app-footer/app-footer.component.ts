import {Component, OnInit} from '@angular/core';
import {Store} from '../../store';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-footer',
  styleUrls: ['app-footer.component.scss'],
  template: `
    <div class="app-footer">
      <div class="wrapper">
        <p>Rooms available: {{freeItems | async}}   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   Rooms occupied: {{occupiedItems | async}} </p> 
      </div>
    </div>
  `
})
export class AppFooterComponent implements OnInit {

  public freeItems: Observable<any>;
  public occupiedItems: Observable<any>;

  constructor(private store: Store) {

  }

  ngOnInit() {
    this.freeItems = this.store.select('free');
    this.occupiedItems = this.store.select('occupied');
  }



}
