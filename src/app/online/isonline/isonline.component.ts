import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../store/reducers';
import {StartOnlineOfflineCheck} from '../../store/actions/network';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-isonline',
  templateUrl: './isonline.component.html',
  styleUrls: ['./isonline.component.css']
})
export class IsonlineComponent implements OnInit {
  title = 'Offline Check';
  isOnline$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit(): void {
    this.isOnline$ = this.store.select(fromRoot.getIsOnline);
    this.store.dispatch(new StartOnlineOfflineCheck());
  }

}
