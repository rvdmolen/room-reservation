import {BehaviorSubject, Observable} from 'rxjs';
import {distinctUntilChanged, pluck} from 'rxjs/operators';


export interface State {
  free: any,
  occupied: any
}

const state: State = {
  free: 0,
  occupied: 0
};

export class Store {

  private subject = new BehaviorSubject<State>(state);
  private store = this.subject.asObservable().pipe(distinctUntilChanged());

  get value() {
    return this.subject.value;
  }

  select<T>(name: string): Observable<T> {
    return this.store.pipe(pluck('name'));
  }

  set(name: string, state: any) {
    this.subject.next({...this.value, [name]: state});
  }

}
