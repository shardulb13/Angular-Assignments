import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { 
  
  }

  Userdata(): Observable<any>{
   return this.httpClient.get('https://jsonplaceholder.typicode.com/posts/1/comments');
  }
}
