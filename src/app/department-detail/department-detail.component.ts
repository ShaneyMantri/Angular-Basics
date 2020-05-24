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
    this.router.navigate(['/departments', previous])
  };

  goNext(){
    // subtract one to get previous id
    let next = this.departmentId+1;
    this.router.navigate(['/departments', next]);
  };

  // pass as optional parameter in link paramater array
  onBack(){
    let selected = this.departmentId?this.departmentId:null;
    this.router.navigate(['/departments', {id: selected}]);
  }

}
