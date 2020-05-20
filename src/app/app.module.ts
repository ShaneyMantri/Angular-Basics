import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { TestingService } from './testing.service'
import { HttpClientModule } from '@angular/common/http'
//entry point of the app
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule  //no need to add to providers array //made changes in testing service constructor
  ],
  providers: [TestingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
