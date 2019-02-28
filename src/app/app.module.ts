import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Router } from '@angular/router';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
// import { reducers, metaReducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
// import { AppEffects } from './app.effects';
import { reducers, metaReducers } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppEffects } from './store/effects/app.effects';
import { NetworkEffects } from './store/effects/NetworkEffects';
// import { PersonListComponent } from './person/person-list/person-list.component';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
// import { PersonAddComponent } from './person/person-add/person-add.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { PersonModule } from './person/person.module';
import { IsonlineComponent } from './online/isonline/isonline.component';
import { HttpErrorHandler } from './http-errorHandler.service';
import { MessageService } from './message.service';


@NgModule({
  declarations: [
    AppComponent,
    IsonlineComponent,
    // PersonListComponent,
    // PersonAddComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([AppEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([NetworkEffects]),
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'My-Xsrf-Cookie',
      headerName: 'My-Xsrf-Header'
    }),
    FormsModule,
    PersonModule,
    AppRoutingModule
  ],
  providers: [
    HttpErrorHandler,
    MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(router: Router){}
}
