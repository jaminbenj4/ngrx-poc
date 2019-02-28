import { Component, OnInit } from '@angular/core';
import { IPersonState, IApplicationState } from 'src/app/state/application-state';
import { Store, select, Action } from '@ngrx/store';
import { RouterOutlet, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  public personState: IPersonState;
  public pageState: string;

  constructor(private store: Store<IApplicationState>, private route: ActivatedRoute, private router: Router) {
    this.store.pipe(select(e => e.person)).subscribe(ps => {
      this.personState = ps;
    });
    this.pageState = route.snapshot.data.pageState;
   }

  //  getPageState(outlet: RouterOutlet){
  //    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['pageState'];
  //  }

   onFormActions($event: Action[]){
     const actions = $event;
     actions.forEach(this.store.dispatch.bind(this.store));
   }

  ngOnInit() {
  }

}
