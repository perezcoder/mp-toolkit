import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MpToolkitModule } from 'mp-toolkit';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MpToolkitModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
