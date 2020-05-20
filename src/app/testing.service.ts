import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import { Iempl } from "./empl";
import 'rxjs/add/operator/catch';
import "rxjs/add/observable/throw";
//import catch operator

@Injectable({
  providedIn: 'root'
})
export class TestingService {
  //responsible to provide employee data
  // initialize employee array in test and test2 class as empty array

  constructor(private http: HttpClient) { //inject as depenedcy HttpClient

  }

  // getemployees(){
  //   return [{"id":1, "name":"CS","age":31},
  //       {"id":2, "name":"JPMC","age":42},
  //       {"id":3, "name":"MS","age":13},
  //       {"id":4, "name":"GOOGLE","age":24}];
  // }

  // get method takes url from where data is t be fetched, can be server, local file etc
  private _url: string = "/assets/data/emp.json"; //proper working
  // private _url: string = "/assets/data/emp1.json"; //proper checking erorr handling

  getemployees(): Observable<Iempl[]>{
    return this.http.get<Iempl[]>(this._url).catch(this.errorHandler); //to cath error, errorHandler method triggered
    // step1 done in ss
    // need to cast the response - create an interface
    // add imports for interface and Observable
  };

  errorHandler(error:HttpErrorResponse){
    //throw towards component that subscribe the observable
    // error message or server error if message body empty
    return Observable.throw(error.message || "Server Error")
  };


}
