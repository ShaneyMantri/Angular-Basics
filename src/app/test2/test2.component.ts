import { Component, OnInit } from '@angular/core';
import {  TestingService } from "../testing.service";




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
  constructor(private _testingservice: TestingService) { }

  ngOnInit(): void {
    // for without http get
    // this.employeeList = this._testingservice.getemployees();

    // for http get req
    // need to subscribe to receive data
    // then assign data to class propery
    this._testingservice.getemployees().subscribe(data=>this.employeeList=data,
    error=>this.errorMsg=error);

  }

}
