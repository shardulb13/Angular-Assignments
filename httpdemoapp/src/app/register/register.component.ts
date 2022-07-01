import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/core/services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private Router: Router, private fb: FormBuilder, private authservice:AuthenticationService) { }
  registerForm:FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username:[''],
      email:[''],
      password:['']
    })
  }


  // registerDetails(){
  //   console.log(this.registerForm.value);
  // }



  postdata(){
    this.authservice.postDetails(this.registerForm.value);
  }
   

  // onClick(){
  //   this.Router.navigate(['login']);
  // }

  
} 
