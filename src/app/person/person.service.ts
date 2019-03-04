import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from './person';
import { catchError } from 'rxjs/operators';

import { HttpErrorHandler, HandleError } from '../http-errorHandler.service';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private baseUrl = 'http://localhost:3000';
  private peopleUrl = '/people';
  private handleError: HandleError;

  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler, private router: Router) {
    this.handleError = httpErrorHandler.createHandleError('PersonSerice');
   }

  getAllPeople(): Observable<Person[]> {
    return this.http.get<Person[]>(this.baseUrl + this.peopleUrl);
  }
  addPerson(person: Person): Observable<Person> {
    // const response =
    return this.http.post<Person>(this.baseUrl + this.peopleUrl, person, httpOptions);
    // console.log(response);
    // return response.catch((e: any) => Observable.throwError(this.errorHandler(e)));
  }

  // errorHandler(error: any): void {
  //   this.router.navigate(['']);
  // }
}
