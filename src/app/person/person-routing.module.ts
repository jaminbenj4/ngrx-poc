import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { PersonListComponent} from './person-list/person-list.component';
import { PersonAddComponent } from './person-add/person-add.component';
import { PersonComponent } from './person/person.component';

const personRoutes: Routes = [
    {path: 'people', component: PersonComponent, data: { pageState: 'list'}},
    { path: 'addPerson', component: PersonComponent, data: {pageState: 'add'}}
];

@NgModule({
    imports: [ RouterModule.forChild(personRoutes) ],
    exports: [ RouterModule ],
})
export class PersonRoutingModule {}
