import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MpToolkitModule } from 'mp-toolkit';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    MpToolkitModule,
    AppRoutingModule
  ],
  providers: [],
})
export class AppModule { }
