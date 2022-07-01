import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({});
  workexp : FormGroup = new FormGroup({});
  arr = [];
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
        this.registerForm = this.fb.group({
        employeeNo :['',[Validators.required, Validators.pattern("^[0-9]*$")]],
        firstname:['', [Validators.required, Validators.pattern("[a-zA-Z]+$")]],
        middlename: ['',],
        lastname:['',[Validators.required, Validators.pattern("[a-zA-z]+$")]],    
        department:['',Validators.required],
        workphone:['',],
        dateOfJoining:['',Validators.required],
        location:['',Validators.required],
        salaryRevision:['',],
        mobileNo:['',],
        othermail:['',],
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
        addfields:this.fb.array([]),
    });
    this.workexp = this.fb.group({
      previouscompanyname:['', [Validators.required]],
      jobtitle:['', [Validators.required]],
      fromdate:['',[Validators.required]],
      todate:['', [Validators.required]],
      jobdesc:[''],
      relevance:[''],
    })
    
  }
  
  get f() {  return this.registerForm.controls; }
 
  RegisterDetails(){
    
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
    this.addfield.push(this.workexp);
    this.addfield.reset();  
  }
}
