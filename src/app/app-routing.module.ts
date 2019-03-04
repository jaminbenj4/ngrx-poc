import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { Person } from './person/person';
import { AppComponent } from './app.component';
import { IsonlineComponent } from './online/isonline/isonline.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/people',
        pathMatch: 'full'
    },
    {
        path: 'isonline',
        component: IsonlineComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {
                enableTracing: false,
            }
        )
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule {}
