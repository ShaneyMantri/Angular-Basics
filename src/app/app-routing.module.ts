import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from "./test/test.component"
import { Test2Component } from "./test2/test2.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import {  DepartmentDetailComponent } from "./department-detail/department-detail.component";
import { DepartmentOverviewComponent } from "./department-overview/department-overview.component";
import { DepartmentContactComponent } from './department-contact/department-contact.component';

// deifne all possible routes for the application
// contains path and component to be rendered when we visit that path
const routes: Routes = [
  // {path:"", component:TestComponent}, //default route
  // {path:"", redirectTo:"/departments", pathMatch:'prefix'}, // but this does not work because "" is prefix to all strings hence no navigation
  {path:"", redirectTo:"departments", pathMatch:'full'},
  {path:'departments', component:TestComponent},
  {path:'employees', component:Test2Component},
  // {path:'employees/:id', component:DepartmentDetailComponent}, //routing parameters
  
  // adding child routes to det detail
  {
    path:'employees/:id', 
    component:DepartmentDetailComponent,
    // these 2 compoenents to be displayed only in department deail component
    children: [
      {path:'overview', component:DepartmentOverviewComponent},
      {path:'contact', component:DepartmentContactComponent}
    ]
    
  },

  {path:"**", component:PageNotFoundComponent}    //** for all other routes //wildcard route always the last route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  //pass routes as parameter for forrrot method
  exports: [RouterModule]
})
export class AppRoutingModule { }

//create an array of routing compoenents and export it
export const routingComponents = [
  TestComponent, 
  Test2Component,
  PageNotFoundComponent, 
  DepartmentDetailComponent, 
  DepartmentOverviewComponent,
  DepartmentContactComponent
]
