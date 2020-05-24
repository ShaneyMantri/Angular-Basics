import { Component, OnInit } from '@angular/core';
import {  TestingService } from "../testing.service";
import { Router } from "@angular/router";
import { ActivatedRoute, ParamMap } from "@angular/router";




@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {
  // what if we want to use employeeList here - throws error bec employeeList local to test component
  // use services
  public employeeList =[];
  public errorMsg = "";

  public selectedId;
  constructor(private _testingservice: TestingService, private router:Router, private route : ActivatedRoute) { }

  ngOnInit(): void {
    // for without http get
    // this.employeeList = this._testingservice.getemployees();

    // for http get req
    // need to subscribe to receive data
    // then assign data to class propery
    this._testingservice.getemployees().subscribe(data=>this.employeeList=data,
    error=>this.errorMsg=error);
    this.route.paramMap.subscribe((params: ParamMap)=>{
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    });

  }

  // route parameter
  departments = [
    {"id":1, "name":"Angular"},
    {"id":2, "name":"Django"},
    {"id":3, "name":"MySQL"},
    {"id":4, "name":"Python"},
    {"id":5, "name":"Java"},
  ];

  onSelect(department){
    //navigate to new route use router service, import it
    //add to constructor also
    //url construction
    // first param is url and second param is route parameter
    this.router.navigate(['/departments',department.id]);
    // need activated route service to read this route parameter
    // make hanges in department-detail compoenent ts
  };

  isSelected(department){
    return department.id===this.selectedId;
  };
}
