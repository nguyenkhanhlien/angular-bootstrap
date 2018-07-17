import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    ButtonsModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyCIT_Ik83sIz9WdgXcpsq123zRwU2eIDZ0'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
