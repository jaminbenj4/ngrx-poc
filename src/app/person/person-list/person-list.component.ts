import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PersonService } from '../person.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css'],
  providers: [PersonService]
})

export class PersonListComponent implements OnInit {

  public people$: Observable<Person[]>;
  constructor(private personService: PersonService) { }


  ngOnInit() {
    this.people$ = this.personService.getAllPeople();
    console.log(this.people$);
  }

}
