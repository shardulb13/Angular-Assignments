import { Component, OnInit } from '@angular/core';
import { ExpensesService } from 'src/core/services/expenses.service';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.scss']
})
export class ExpenseListComponent implements OnInit {
  monthArray = [
    { id: 0, name: 'January', value: 0 },
    { id: 1, name: 'February', value: 0 },
    { id: 2, name: 'March', value: 0 },
    { id: 3, name: 'April', value: 0 },
    { id: 4, name: 'May', value: 0 },
    { id: 5, name: 'June', value: 0 },
  ]
  expenses:{name:string; date: Date; amount: number}[] = [];
  
  constructor(private expense_service: ExpensesService){}
  details_arr:any =[{
    name:'',
    date:'',
    amount:''
  }]
  date = new Date(this.details_arr.date).getMonth();
  
  ngOnInit(): void {
    this.expenses = this.expense_service.expense_arr;
    console.log(this.expenses);

  }
  
  addDetails(){
    if(this.details_arr.name == null || this.details_arr.date == null && this.details_arr.amount == null){
      alert("All fields are mandatory");
    }
    else{
    this.expense_service.addExpense(this.details_arr.name, this.details_arr.date, this.details_arr.amount);
    console.log(this.details_arr);
    this.details_arr.sort(this.details_arr.date);
    }
  }

  reset(){
    this.details_arr=[];
  }

  deleteExpense(id:number)
  {
    let date = new Date(this.details_arr.date).getMonth();
    for (let i = 0; i < this.monthArray.length; i++) {
    if(this.monthArray[i].id == date){
      this.monthArray[i].value = this.monthArray[i].value - this.expenses[id].amount;
      }
    }
    this.expense_service.deleteExpense(id);
  }

  matchmonth(){
    let date = new Date(this.details_arr.date).getMonth();
    for (let i = 0; i < this.monthArray.length; i++) {
    if(this.monthArray[i].id == date){
      this.monthArray[i].value = this.monthArray[i].value + this.details_arr.amount;
      }
    }   
  }
  
  // jandate(){
  //   // this.details_arr.date = new Date().getMonth();
  //   // console.log("month:",this.details_arr.date);
  //   var month = this.details_arr.date.slice(5,7); //dont use var, use getMonth instead of slice to fetch month
  //   console.log(month);
  //   if(this.monthArray[0] == month){
  //     console.log("jan month is matching");
  //     this.janTotalExpense = this.janTotalExpense + this.details_arr.amount;
  //     console.log("Jan result",this.janTotalExpense);
  //   }
  // }
  // febdate(){
  //   var month = this.details_arr.date.slice(5,7);
  //   console.log(month);
  //   if(this.monthArray[1] == month){
  //     console.log("feb month is matching");
  //     this.febTotalExpense = this.febTotalExpense + this.details_arr.amount;
  //     console.log("feb result",this.febTotalExpense);
  //   }
  // }
  // marchdate(){
  //   var month = this.details_arr.date.slice(5,7);
  //   console.log(month);
  //   if(this.monthArray[2] == month){
  //     console.log("march month is matching");
  //     this.marchTotalExpense = this.marchTotalExpense + this.details_arr.amount;
  //     console.log("march result",this.marchTotalExpense);
  //   }
  // }
  // aprildate(){
  //   var month = this.details_arr.date.slice(5,7);
  //   console.log(month);
  //   if(this.monthArray[3] == month){
  //     console.log("april month is matching");
  //     this.aprilTotalExpense = this.aprilTotalExpense + this.details_arr.amount;
  //     console.log("Jan result",this.aprilTotalExpense);
  //   }
  // }
  // maydate(){
  //   var month = this.details_arr.date.slice(5,7);
  //   console.log(month);
  //   if(this.monthArray[4] == month){
  //     console.log("may month is matching");
  //     this.mayTotalExpense = this.mayTotalExpense + this.details_arr.amount;
  //     console.log("may result",this.mayTotalExpense);
  //   }
  // }
  // junedate(){
  //   var month = this.details_arr.date.slice(5,7);
  //   console.log(month);
  //   if(this.monthArray[5] == month){
  //     console.log("june month is matching");
  //     this.juneTotalExpense = this.juneTotalExpense + this.details_arr.amount;
  //     console.log("June result",this.juneTotalExpense);
  //   }
  // }

}
