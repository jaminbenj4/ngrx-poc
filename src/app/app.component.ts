import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from './store/reducers';
import {StartOnlineOfflineCheck} from './store/actions/network';
import { Observable } from 'rxjs';
import { PersonListComponent } from './person/person-list/person-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Offline POC';
  isOnline$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>){}

  ngOnInit(): void {
    this.isOnline$ = this.store.select(fromRoot.getIsOnline);

    this.store.dispatch(new StartOnlineOfflineCheck());
  }
}
