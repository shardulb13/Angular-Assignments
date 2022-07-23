import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseApiUrl='https://tech-resources-core-api.azurewebsites.net'
  constructor(private httpClient: HttpClient, private tokenservice: TokenService) { }

  getEmployee(): Observable<any>{
    // const headers = {Authorization:`Bearer ${this.tokenservice.getToken()}`};
    return this.httpClient.get(`${this.baseApiUrl}/Employee`)
  }
  
  addEmployee(data:string):Observable<any>{
    // const headers = {Authorization:`Bearer ${this.tokenservice.getToken()}`};
    return this.httpClient.post(`${this.baseApiUrl}/Employee`,data);
  }

  updateEmployee(updatedata:string): Observable<any>{
    // const headers = {Authorization:`Bearer ${this.tokenservice.getToken()}`};
    return this.httpClient.put(`${this.baseApiUrl}/Employee`,updatedata);
  }

  deleteEmployee(id:number):Observable<any>{
    // const headers = {Authorization:`Bearer ${this.tokenservice.getToken()}`};
    return this.httpClient.delete(`${this.baseApiUrl}/Employee/${id}`)
  }

}
