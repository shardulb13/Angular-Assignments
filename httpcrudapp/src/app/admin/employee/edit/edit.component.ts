import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/core/services/employee.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  empform!:any;
  editdata:any=[];
  id!:any;
  constructor(private empservice:EmployeeService, private router:Router, private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.empform = new FormGroup({
      id: new FormControl(''),
      firstName : new FormControl(''),
      lastName : new FormControl(''),
      mobileNumber: new FormControl(''),
      bloodGroup: new FormControl(''),
      isActive: new FormControl(true)
    })
    
    this.empservice.getEmployee().subscribe(res=>{
      this.editdata =  res.result;
      console.log("edit data list",this.editdata);
      console.log("id", this.editdata[0].id);
      for(let i = 0; i<this.editdata.length;i++){
        if(this.id == this.editdata[i].id){
          this.empform.controls.id.setValue(this.editdata[i].id);
          this.empform.controls.firstName.setValue(this.editdata[i].firstName);
          this.empform.controls.lastName.setValue(this.editdata[i].lastName);
          this.empform.controls.mobileNumber.setValue(this.editdata[i].mobileNumber);
          this.empform.controls.bloodGroup.setValue(this.editdata[i].bloodGroup);
         }
      }
    })
    
    //to get id from url
    this.id = this.activatedroute.snapshot.paramMap.get('id');
      console.log("got id:", this.id);

  }
  
  updateEmployee(){
    this.empservice.updateEmployee(this.empform.value).subscribe(res=>{
      console.log(res);
      alert('Data successfully Updated');
      this.router.navigate(['admin/employee']);
      })
    }
}
