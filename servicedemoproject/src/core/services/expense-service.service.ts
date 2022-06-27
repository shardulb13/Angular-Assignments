import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExpenseServiceService {

  constructor() { }

  expense_arr:any =[{
    name:'Laptop',
    date:'2022-06-11',
    amount:'10000',
  }]

  addexpense(name:string , date:Date, amount:number){
    this.expense_arr.push({name, date, amount});
  }

}
