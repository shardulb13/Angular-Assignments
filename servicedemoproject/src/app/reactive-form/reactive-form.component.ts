import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BloodGroup } from 'src/core/enum/bloodgroup';
import { Tshirt } from 'src/core/enum/tshirt';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  TshirtSize = Tshirt;
  bloodgroup = BloodGroup;
  registerForm: FormGroup = new FormGroup({});
  age = 0;
  date! :string;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
        this.registerForm = this.fb.group({
        employeeNo :['',[Validators.required, Validators.pattern("^[0-9]*$")]],
        firstname:['', [Validators.required, Validators.pattern("[a-zA-Z]+$")]],
        middlename: ['',],
        lastname:['',[Validators.required, Validators.pattern("[a-zA-z]+$")]], 
        workinfo: this.fb.group({
          department:['',Validators.required],
          workphone:['',],
          dateOfJoining:['',Validators.required],
          location:['',Validators.required],
          salaryRevision:['',],
        }),   
        mobileNo:['',[Validators.minLength(10),Validators.maxLength(10), Validators.pattern("^[0-9]*$")]],
        othermail:['',[Validators.email]],
        birthdate:['',],
        martialstatus:['',],
        age:['',],
        address:['',],
        tags:['',],
        tshirtSize:['',],
        bloodGroup:['',],
        jobdescription:['',],
        aboutme:['',],
        expertise:['',],
        presentaddress:['',],
        residencePhone:['',],
        addfields:this.fb.array([
          
        ]),
    });

    this.date = new Date().toISOString().slice(0,10);
    console.log(this.date);
  
    // this.workexp = this.fb.group({
    //   previouscompanyname:['', [Validators.required]],
    //   jobtitle:['', [Validators.required]],
    //   fromdate:['',[Validators.required]],
    //   todate:['', [Validators.required]],
    //   jobdesc:[''],
    //   relevance:[''],
    // })
    
  }
  
  get f() {  return this.registerForm.controls; }
  get workinfo()
  {
    return this.registerForm.get('workinfo') as FormGroup;
  }
 
  RegisterDetails(){
    this.registerForm.value.age = this.age;
    console.log(this.registerForm.value);
  }

  resetform(){
    this.registerForm.reset();
  }

  get addfield()
  {
    return this.registerForm.controls['addfields'] as FormArray;
  }

  add()
  {
    // this.addfield.push(this.workexp);
    // this.addfield.reset();  
    this.addfield.push(this.fb.group({
      previouscompanyname: ['', Validators.required],
      jobtitle: ['', [Validators.required]],
      fromdate:['',[Validators.required]],
      todate:['', [Validators.required]],
      jobdesc:[''],
      relevance:[''],
  }));
  }

  ageCalculate(){
    let currentYear = new Date();
    let dob = new Date(this.registerForm.value.birthdate);
    let year = dob.getFullYear();
    let currentYearValue = currentYear.getFullYear()
    this.age = currentYearValue-year;

  }
}
