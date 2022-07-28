import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { EmployeeService } from 'src/core/services/employee.service';
import { TokenService } from 'src/core/services/token.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  employee_details:any=[];
  @ViewChild(ModalComponent) modal!: ModalComponent;
  constructor(private empservice:EmployeeService, private tokenservice:TokenService, private route: Router) {
}

  ngOnInit(): void {
    this.empservice.getEmployee().subscribe(res =>{
      // console.log(res);
      this.employee_details = res.result;
    })
  }

  edit(id:number){
    this.route.navigate([`admin/employee/edit/${id}`]);
  }
  confirm:boolean = false;
  cancel: boolean = false;

  deleteEmployee(id:number){
    this.modal.openPopup();
    console.log("Alert box Open");
    if(this.modal.confirm == true){     
      this.empservice.deleteEmployee(id).subscribe(res=>{
        console.log("Data deleted Successfully");
        this.ngOnInit();     
      },
      error =>{
        console.log("Error Occured")
      })
    }
    // else{
    //   console.log("Data not deleted");
    // }
  }

  
}




 




 
  
