import { DirectivesModule } from './shared/directive/directives.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [    
    BrowserModule,
    DirectivesModule     
      ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
