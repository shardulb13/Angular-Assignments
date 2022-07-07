import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/core/services/employee.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  empform!:any;
  constructor(private empservice:EmployeeService, private route: Router) { }

  ngOnInit(): void {
    this.empform = new FormGroup({
      firstName : new FormControl(''),
      lastName : new FormControl(''),   
      mobileNumber: new FormControl(''),
      bloodGroup: new FormControl(''),
      isActive: new FormControl(true)
      
    })
  }
  addEmployee(){
      this.empservice.addEmployee(this.empform.value).subscribe(res=>{
        alert('Sucessfully Added Details'); 
        this.route.navigate(['admin/employee']);
        console.log(res);
      })
    }

}
