import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Router, ParamMap } from "@angular/router";


@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  constructor(private route:ActivatedRoute, private router: Router) { }
  public departmentId;
  ngOnInit(): void {
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.departmentId = id;
    this.route.paramMap.subscribe((params: ParamMap)=>{
      let id = parseInt(params.get('id'));
      this.departmentId = id;
    });
  }

  goPrevious(){
    // subtract one to get previous id
    let previous = this.departmentId-1;
    // this.router.navigate(['/departments', previous])
    // Relative navigation
    // array contains the route parameters
    //  [../] means go back one segment in url
    this.router.navigate([{id:previous}], {relativeTo:this.route})
  
  
  };

  goNext(){
    // subtract one to get previous id
    let next = this.departmentId+1;
    // this.router.navigate(['/departments', next]);
    // Relative navigation
    // array contains the route parameters
    //  [../] means go back one segment in url
    this.router.navigate([{id:next}], {relativeTo:this.route})
  
  };

  // pass as optional parameter in link paramater array
  onBack(){
    let selected = this.departmentId?this.departmentId:null;
    
    // absolute navigation
    // this.router.navigate(['/departments', {id: selected}]);
    

    // Relative navigation
    // array contains the route parameters
    //  [../] means go back one segment in url
    this.router.navigate(['../', {id:selected}], {relativeTo:this.route})
  
  };



  seeOverview(){
    this.router.navigate(['overview'], {relativeTo:this.route})

  };

  seeContact(){
    this.router.navigate(['contact'], {relativeTo:this.route})
    
  };

}
