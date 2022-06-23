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
