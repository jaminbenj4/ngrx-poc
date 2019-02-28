import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { PersonListComponent } from './person-list/person-list.component';
import { PersonAddComponent } from './person-add/person-add.component';
import { PersonRoutingModule } from './person-routing.module';
import { PersonComponent } from './person/person.component';
import { personReducer } from '../store/reducers/personReducers';
import { StoreModule } from '@ngrx/store';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PersonRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      person: personReducer
    })
  ],
  declarations: [
    PersonListComponent,
    PersonAddComponent,
    PersonComponent
  ]
})
export class PersonModule {}
