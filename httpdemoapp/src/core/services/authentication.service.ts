import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { baseApiUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient,private route: Router ) { }

  postDetails(data:string){
     return this.http.post<any>(`${baseApiUrl}/Register`,data).subscribe(val=>{
      alert("registration successfull");
      this.route.navigate(['login']);
     });
  }


  loginDetails(data:string){
    return this.http.post<any>(`${baseApiUrl}/Login`,data)
    .subscribe(
      val =>{
      alert('login Successfull');
      this.route.navigate(['dashboard']);
    },
    err =>{
      alert("Invalid Details")
    }
    )
  }


}
