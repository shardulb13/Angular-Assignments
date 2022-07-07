import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/core/services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private auth:AuthenticationService, private route: Router) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username:['',[Validators.required]],
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required,Validators.pattern(/^[A-Za-z0-9@]{8,15}$/)]]
    })
  }

  get form(){
    return this.registerForm.controls;
  }

  registerDetails(){
    this.auth.RegsiterDetails(this.registerForm.value).subscribe(res =>{
      alert('Registration Successfull');
      this.route.navigate(['homepage/login']);
    },
    err =>{
      alert('Registration Unsuccessfull');
    }
    )
  }

}
