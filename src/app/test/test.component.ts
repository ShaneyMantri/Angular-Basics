import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {  TestingService } from "../testing.service";


// immediately after component creation add to app module ts file
@Component({
  selector: 'app-test', //include this selector in app.component.html bec it is root component
  // selector: '.app-test' // this is used as class in html and not tag as above one
  // selector: '[app-test]' // use app-test as attribute <div app-test></div>
  templateUrl: './test.component.html',
  // or used
  /*
    teemplate: ` <--back ticks
              <div>
              Inline template
                </div>
                `
  */
  styleUrls: ['./test.component.css']
  // can use styles Inline
  /*
  styles: [`
  div{
  color:red
}
  `]*/
})
export class TestComponent implements OnInit {
  public name = "Shaney" ; // check test component html file
  public siteUrl = window.location.href;  // current window url
  public myId = "ShaneyID"; //Property binding
  public isDisabled = true;
  public successClass = "text-success";
  public hasError = true;
  public isSpecial = true;
  public messageClass = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  };

  public highlightColor = "violet";

  public titleStyles = {
    color:"blue",
    fontStyle: "italic"
  }




  greetUser(){
    return "Hello "+this.name+", I am from the test component class";
  }
  onClick(){
    console.log("Hello User. Event binding");
    alert("Event binding successfull");
  };

  onClickEvent(event){
    console.log(event);
    alert("Event binding successfull"+event.type);
  };

  public greeting="";
  setProperty(){
    console.log("Setting propery");
    this.greeting="Property setting done";
  };

  logMessage(message){

    console.log(message);

  };

  // two way binding
  public userName="";

  // ngIf
  public displayName=true;

  //ngSwitch
  public switchColor="orange";

  //ngFor
  public forColors = ['red','blue','green','yellow'];


  // component Interaction
  @Input() public parentData;
   // or use
  // @Input('parentData') public dataFromParent;

  // data from child to parent by event creation
  @Output() public childevent = new EventEmitter();
  fireEvent(){
    this.childevent.emit('Hey Parent Component')
  };

  // Pipes
  public pipeName = "Code Evolution";
  public person = {
    "firstname":"Shaney",
    "lastname":"Mantri"
  }
  public date = new Date();

  // Services
  // public employeeList =[
  //   {"id":1, "name":"CS","age":31},
  //   {"id":2, "name":"JPMC","age":42},
  //   {"id":3, "name":"MS","age":13},
  //   {"id":4, "name":"GOOGLE","age":24}
  // ];

  public employeeList =[];
  public errorMsg ="";
  constructor(private _testingservice: TestingService) { }

  ngOnInit(): void {
    // for without http get
    // this.employeeList = this._testingservice.getemployees();

    // for http get req
    // need to subscribe to receive data
    // then assign data to class propery
    this._testingservice.getemployees().subscribe(data=>this.employeeList=data,
    error=> this.errorMsg=error);


  }



}
