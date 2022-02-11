import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpreaComponent } from './oprea/oprea.component';
import { OpreaBodyComponent } from './oprea/oprea-body/oprea-body.component';
import { OpreaHeaderComponent } from './oprea/oprea-header/oprea-header.component';

@NgModule({
  declarations: [
    AppComponent,
    OpreaComponent,
    OpreaBodyComponent,
    OpreaHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
