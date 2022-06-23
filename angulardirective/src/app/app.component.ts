import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angulardirective';
  new_arr:any=[];

  details(event:any){
    this.new_arr=event;
  }
  
  edit_arr: any =[] ;
  data(event:any){
    this.edit_arr=event;
    console.log("Appcomponents Edit Data:", this.edit_arr);
  }
  
}

