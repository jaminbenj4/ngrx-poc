import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Person } from '../person';
import { PersonService } from '../person.service';
import { Router } from '@angular/router';
import { IPersonState } from 'src/app/state/application-state';
import { FormGroup, FormControl } from '@angular/forms';
import { distinctUntilChanged } from 'rxjs/operators';
import { personChanged } from 'src/app/store/actions/person.actions';
// import { IPersonState, IApplicationState } from 'src/app/state/application-state';
import { Action } from '@ngrx/store';
import { SetIsServerDown } from 'src/app/store/actions/network';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../store/reducers';
import {PingServer} from '../../store/actions/network';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-person-add',
  templateUrl: './person-add.component.html',
  styleUrls: ['./person-add.component.css']
})
export class PersonAddComponent implements OnInit, OnChanges {
  // person1 = new Person();
  submitted = false;

  // public personState: IPersonState;

  constructor(private personService: PersonService, private router: Router, private store: Store<fromRoot.State>) {
    // this.store.pipe(select(e => e.person)).subscribe(ps => {
    //   this.personState = ps;
    // });
    // in constructor , private store: Store<IApplicationState>
  }

  @Input() person: IPersonState;
  @Output() actionsEmitted: EventEmitter<Action[]> = new EventEmitter();

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
  // onFormActions($event: Action[]) {
  //   const actions = $event;
  //   actions.forEach(this.store.dispatch.bind(this.store));
  // }

  onSubmit() {
    const newPerson: Person = this.myPerson.value as Person;
    this.actionsEmitted.emit([personChanged(this.myPerson.value)]);
    let x = this.store.select(fromRoot.getPersonState).subscribe(val => console.log(val));
    console.log(newPerson);
    this.personService.addPerson(newPerson).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/people']);
        },
      (error: Response | any) => {if (error.status === 0) {
        const s = new SetIsServerDown(true);
        this.router.navigate(['/isonline', {serverDown: true}]);
      }},
      () => console.log('Completed')
    );
    // this.store.dispatch(new PingServer(newPerson));
    this.submitted = true;
  }

  ngOnInit() {
    this.myPerson.controls.firstName.valueChanges.pipe(distinctUntilChanged()).subscribe((value) => {
      this.actionsEmitted.emit([personChanged(value)]);
    });
    this.myPerson.controls.lastName.valueChanges.pipe(distinctUntilChanged()).subscribe((value) => {
      this.actionsEmitted.emit([personChanged(value)]);
    });
    this.myPerson.controls.email.valueChanges.pipe(distinctUntilChanged()).subscribe((value) => {
      this.actionsEmitted.emit([personChanged(value)]);
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.form || changes.form.isFirstChange()) {
      return;
    }
    // whenever input changes (and input is the form's state in the store), we update the value of the control
    this.myPerson.controls.firstName.setValue(changes.form.currentValue.firstName);
    this.myPerson.controls.lastName.setValue(changes.form.currentValue.lastName);
    this.myPerson.controls.email.setValue(changes.form.currentValue.email);
  }

}
