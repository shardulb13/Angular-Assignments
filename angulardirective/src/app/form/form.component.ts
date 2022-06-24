import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
 @Output() sendData = new EventEmitter();
  employee:any =[{
    firstname:'',
    lastname:'',
    email:''
  }]
  @Input() edit_arr: any = [] = this.employee;

  update(){
    if(this.edit_arr.firstname){
      this.edit_arr.firstname = this.employee.firstname;
    }
    if (this.edit_arr.lastname){
      this.edit_arr.lastname = this.employee.lastname;
    }
    if(this.edit_arr.email){
      this.edit_arr.email = this.employee.email;
    }
  }
  
  new_emp_arr:any=[];
  addDetails(){
    // var abc = this.new_emp_arr.push(this.employee);
    console.log(this.new_emp_arr.push(this.employee))
    this.sendData.emit(this.new_emp_arr);
    this.employee=[];
  }

  constructor() { }

  ngOnInit(): void {
  }
}
