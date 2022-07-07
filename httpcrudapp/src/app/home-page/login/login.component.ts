import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/core/services/authentication.service';
import { TokenService } from 'src/core/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  LoginForm:FormGroup = new FormGroup({});
 
  constructor(private fb: FormBuilder, private auth: AuthenticationService, private route: Router, private tokenService:TokenService) { }

  ngOnInit(): void {
    this.LoginForm = this.fb.group({
      username:['',[Validators.required]],
      password:['',[Validators.required,Validators.pattern(/^[A-Za-z0-9@]{8,15}$/)]]
    })
  }

  get form(){
    return this.LoginForm.controls;
  }

  loginDetails(){
    this.auth.loginDetails(this.LoginForm.value).subscribe(res => {
      if(res.result){
        alert('Login Successfull');
        this.tokenService.setToken(res.result);
        this.route.navigate(['admin']);
      }
    },
    err =>{
      alert('Invalid Login Details')
    })
  }

}
