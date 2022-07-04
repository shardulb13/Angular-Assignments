import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  @Input('parentdata') tableData :any =[] ;

  deleteRow(i:any){
    this.tableData.splice(i,1);
  }

  @Output() editform: EventEmitter<any> = new EventEmitter();
  
  editdata:any ;
  edituser(event:any){
    this.editdata=[];
    this.editdata = event;
    this.editform.emit(this.editdata);
    console.log("Edit data", this.editdata);
  }
}
