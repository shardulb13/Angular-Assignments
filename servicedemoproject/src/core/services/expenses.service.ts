import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  constructor() { }

  expense_arr:any =[]

  addExpense(name:string , date:Date, amount:number){
    this.expense_arr.unshift({name, date, amount});
  }

  deleteExpense(id:number)
  {
    this.expense_arr.splice(id,1);
  }
}
