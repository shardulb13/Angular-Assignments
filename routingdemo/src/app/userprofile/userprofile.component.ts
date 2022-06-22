import { Component, OnInit } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.scss']
})
export class UserprofileComponent implements OnInit {
  birthdate:any;
  age:any;
  image = '../.././assets/userlogo.jpg'
  redcolor:string = "red";
  greencolor:string ="green";
  size:string = '2px';
  profile={
    firstname : '',
    lastname:'',
    username:'',
    email:'sharbhingardive777',
  }
  constructor() {
   }
  ngOnInit(): void {
  }
  ageclac(){
    if(this.birthdate){
      const convertAge = new Date(this.birthdate);
      const timeDiff = Math.abs(Date.now() - convertAge.getTime());
      this.age = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
      console.log(this.age);
    }
  }
  getDetails(){
    console.log(this.profile);
  }
}
