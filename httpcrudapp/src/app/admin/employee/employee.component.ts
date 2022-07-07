import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  ngAfterViewInit(): void {

   
  }

}
