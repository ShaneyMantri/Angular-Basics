import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
// import { TestComponent } from './test/test.component';   //not required bec these are already imported in app routing module
// import { Test2Component } from './test2/test2.component';
// import { DepartmentDetailComponent } from './department-detail/department-detail.component';
// import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
// import { DepartmentContactComponent } from './department-contact/department-contact.component'
import { TestingService } from './testing.service'
import { HttpClientModule } from '@angular/common/http';



//entry point of the app
@NgModule({
  declarations: [
    AppComponent,
    // TestComponent,   //not required bec these are already imported in app routing module
    // Test2Component
    // DepartmentDetailComponent,
    // DepartmentOverviewComponent,
    // DepartmentContactComponent
    routingComponents,

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
