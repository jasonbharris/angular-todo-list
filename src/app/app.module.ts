import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TaskListModule } from './task-list/task-list.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TaskListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
