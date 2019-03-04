// import * as networkActions from "./../actions/network";
import { Observable, merge, of, fromEvent } from "rxjs";
import { switchMap, mapTo, map, catchError, tap } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { PersonService } from '../../person/person.service';
import * as networkActions from "../actions/network";
import { Router } from '@angular/router';

@Injectable()
export class NetworkEffects {
  constructor(private actions$: Actions, private personService: PersonService, private router: Router) {}

  @Effect()
  startOnlineOfflineCheck$: Observable<Action> = this.actions$.pipe(
    ofType(networkActions.NetworkActionTypes.StartOnlineOfflineCheck),
    switchMap(() => {
      return merge(
        of(navigator.onLine),
        fromEvent(window, "online").pipe(mapTo(true)),
        fromEvent(window, "offline").pipe(mapTo(false))
      );
    }),
    map(isOnline => {
      return new networkActions.SetIsOnline(isOnline);
    })
  );

  @Effect()
  pingServer$: Observable<Action> = this.actions$.pipe(
    ofType(networkActions.NetworkActionTypes.PingServer),
    switchMap((action) => {
      return this.personService.addPerson(action)
      .pipe(
        map( res => {
          console.log(res);
          // if (res.status === 0) {
          //   const a = new networkActions.PostFail();
          // }
          return new networkActions.SetIsServerDown(false);
        }),
        catchError(err => {
          console.log(err);
          // const Observable<Action> pf = new networkActions.PostFail();
          // if (err.status === 0) {
          //   return new networkActions.PostFail();
          // }
          const a = new networkActions.PostFail() as unknown;
          return a as Observable<Action>;
        })
      );
    })
  );

  @Effect()
  postFail$ = this.actions$.pipe(
    ofType(networkActions.NetworkActionTypes.PostFail),
    tap(() => this.router.navigate(['']))
  );


  //   map((action: networkActions.PingServer) => action.payload)
  //   .switchMap(person => 
  //     this.personService.addPerson(person).pipe(
  //       map(result => {
  //         console.log(result);
  //         return new networkActions.SetIsServerDown(false);
  //       }),
  //       catchError(error => {
  //         console.log(error);
  //         var s = new networkActions.SetIsServerDown(true);
  //         return Observable.throw(error);
  //       })
  //     );
  //   )
  // )

  // @Effect(dispatch: false)
  // pingServer$: Observable<Action> = this.actions$.pipe(
  //   ofType(networkActions.NetworkActionTypes.PingServer),
  //   map(serverDown => {
  //     return new SetIsServerDown(serverDown);
  //   })
  // );
}