  import { Component, OnInit } from '@angular/core';
  import { NgModel } from '@angular/forms';
  import { ExpenseServiceService } from 'src/core/services/expense-service.service';

  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
  })
  export class AppComponent implements OnInit {
    title = 'servicedemoproject';
    
    constructor(private expense_service: ExpenseServiceService){}
    details_arr:any =[{
      name:'',
      date:'',
      amount:'',
    }]
    
    expenses:{name:string; date: Date; amount: number}[] = [];
    
    ngOnInit(): void {
      this.expenses = this.expense_service.expense_arr;
      console.log(this.expenses);
    }

    addDetails(){
      this.expense_service.addexpense(this.details_arr.name, this.details_arr.date, this.details_arr.amount);
      console.log(this.details_arr);
    }  
  

    reset(){
      this.details_arr=[];
    }

    jan_deduct!:number;

    deletedata(id:any){
      this.expenses.splice(id,1);
    }
    // if(this.febresult){
      //   this.febresult = this.febresult - this.details_arr.amount;
      // }
      // if(this.marchresult){
        //   this.marchresult = this.marchresult - this.details_arr.amount;
        // }
        // if(this.aprilresult){
          //   this.aprilresult = this.aprilresult - this.details_arr.amount;
      // }
      // if(this.mayresult){
      //   this.mayresult = this.mayresult - this.details_arr.amount;
      // }
      
    

    montharr=['01','02','03','04','05','06'];
    janresult:any = 0;
    febresult:any = 0;
    marchresult:any = 0;
    aprilresult:any = 0;
    mayresult:any = 0;
    juneresult:any = 0;

    jandate(){
      // this.details_arr.date = new Date().getMonth();
      // console.log("month:",this.details_arr.date);
      var month = this.details_arr.date.slice(5,7);
      console.log(month);
      if(this.montharr[0] == month){
        console.log("jan month is matching");
        this.janresult = this.janresult + this.details_arr.amount;
        console.log("Jan result",this.janresult);
      }
      else{
        this.deletedata;
      }
  
    }
    febdate(){
      var month = this.details_arr.date.slice(5,7);
      console.log(month);
      if(this.montharr[1] == month){
        console.log("feb month is matching");
        this.febresult = this.febresult + this.details_arr.amount;
        console.log("feb result",this.febresult);
      }
      else{
        this.deletedata;
      }
    }
    marchdate(){
      var month = this.details_arr.date.slice(5,7);
      console.log(month);
      if(this.montharr[2] == month){
        console.log("march month is matching");
        this.marchresult = this.marchresult + this.details_arr.amount;
        console.log("march result",this.marchresult);
      }
      else{
        this.deletedata;
      }
      
    }
    aprildate(){
      var month = this.details_arr.date.slice(5,7);
      console.log(month);
      if(this.montharr[3] == month){
        console.log("april month is matching");
        this.aprilresult = this.aprilresult + this.details_arr.amount;
        console.log("Jan result",this.aprilresult);
      }
      else{
        this.deletedata;
      }
    }
    maydate(){
      var month = this.details_arr.date.slice(5,7);
      console.log(month);
      if(this.montharr[4] == month){
        console.log("may month is matching");
        this.mayresult = this.mayresult + this.details_arr.amount;
        console.log("may result",this.mayresult);
      }
      else{
        this.deletedata;
      }
    }
    junedate(){
      var month = this.details_arr.date.slice(5,7);
      console.log(month);
      if(this.montharr[5] == month){
        console.log("june month is matching");
        this.juneresult = this.juneresult + this.details_arr.amount;
        console.log("June result",this.juneresult);
      }
      else{
        this.deletedata;
      }
    }

  }
