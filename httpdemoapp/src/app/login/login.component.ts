import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticationService } from 'src/core/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  LoginForm:FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder, private authservice: AuthenticationService ) {}

  ngOnInit(): void {
    this.LoginForm = this.fb.group({
      username:[''],
      password:['']
    })
  }

  logindata(){
    this.authservice.loginDetails(this.LoginForm.value);
    console.log(this.LoginForm.value);
  }
   
}
