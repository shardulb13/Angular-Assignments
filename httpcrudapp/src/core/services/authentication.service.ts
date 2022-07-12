import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  baseApiUrl='https://tech-resources-core-api.azurewebsites.net'
  constructor(private httpClient:HttpClient) { }

  RegsiterDetails(data:string){
    return this.httpClient.post<any>(`${this.baseApiUrl}/Register`,data)
 }

  loginDetails(data:string){
    // const headers = { 'content-type': 'application/json'}
    return this.httpClient.post<any>(`${this.baseApiUrl}/Login`,data);
  }
}
