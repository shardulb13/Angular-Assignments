import { Component, Input, ViewChild } from '@angular/core';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(FormComponent) form!: FormComponent
  title = 'angulardirective';
  new_arr:any=[{
    firstname:'Shardul',
    lastname:'Bhingardive',
    email:'sharbhingardive777@gmail.com'
  }];

  details(event:any){
    this.new_arr = event;
  }
  
  edit_arr: any =[] ;
  data(event:any){
    this.edit_arr=event;
    console.log("Appcomponents Edit Data:", this.edit_arr);
  }
  
}

