import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '../../store/reducers';
import {StartOnlineOfflineCheck} from '../../store/actions/network';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { IApplicationState, IPersonState } from 'src/app/state/application-state';
import { FormGroup, FormControl } from '@angular/forms';
import { Person } from 'src/app/person/person';

@Component({
  selector: 'app-isonline',
  templateUrl: './isonline.component.html',
  styleUrls: ['./isonline.component.css']
})
export class IsonlineComponent implements OnInit {
  title = 'Offline Mode';
  isOnline$: Observable<boolean>;
  isServerDown$: Observable<boolean>;
  pageState: string;
  personState: IPersonState;
  person$: Observable<IPersonState>;

  constructor(private store: Store<fromRoot.State>, route: ActivatedRoute, router: Router, private personStore: Store<IPersonState>) {
    // this.personStore.pipe(select(e => e.person)).subscribe(ps => {
    //   this.personState = ps;
    //   console.log(ps);
    // });
    this.pageState = route.snapshot.paramMap.get('serverDown');
  }

  myPerson: FormGroup = new FormGroup({
    firstName: new FormControl('', {
      updateOn: 'blur'
    }),
    lastName: new FormControl('', {
      updateOn: 'blur'
    }),
    email: new FormControl('', {
      updateOn: 'blur'
    })

  });

  ngOnInit(): void {
    this.isOnline$ = this.store.select(fromRoot.getIsOnline);
    this.store.dispatch(new StartOnlineOfflineCheck());
    this.isServerDown$ = this.store.select(fromRoot.getIsServerDown);
    this.person$ = this.personStore.select(fromRoot.getPersonState);
    console.log(this.person$);
    // this.personState.email
    // this.myPerson.controls.firstName.setValue(currentValue.firstName);
    // this.myPerson.controls.lastName.setValue(changes.form.currentValue.lastName);
    // this.myPerson.controls.email.setValue(changes.form.currentValue.email);
  }

}
