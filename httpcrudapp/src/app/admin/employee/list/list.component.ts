import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/core/services/employee.service';
import { TokenService } from 'src/core/services/token.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  employee_details:any=[];
  datalist:any=[];
  constructor(private empservice:EmployeeService, private tokenservice:TokenService, private route: Router) {
}

  ngOnInit(): void {
    this.empservice.getEmployee().subscribe(res =>{
      console.log(res);
      this.employee_details = res.result;
      console.log('this is listcomponent',this.employee_details);
    })
  }

  edit(id:number){
    this.route.navigate([`admin/employee/edit/${id}`]);
  }
  
  deleteEmployee(id:number){
    this.empservice.deleteEmployee(id).subscribe(res=>{
      location.reload();
      console.log(res);
      console.log(id);
    })
  }


  // senddata(){
  //   for(let i=0; i<this.employee_details.length; i++){
  //     // console.log("pushed data",this.employee_details[i]);
  //     this.datalist.push(this.employee_details[i]);
  //     console.log('datalist:', this.datalist);

  //   }
  // }

//   onEdit(id:number){
  
//     this.empform.controls.id.setValue(this.employee_details.result[id].id);
//     this.empform.controls.firstName.setValue(this.employee_details.result[id].firstName);
//     this.empform.controls.lastName.setValue(this.employee_details.result[id].lastName);
// }
  
}




 




 
  
