import { Component, OnInit, ViewChild } from '@angular/core';
// import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ListComponent } from 'src/app/admin/employee/list/list.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @ViewChild(ListComponent) list!: ListComponent
  confirm:boolean = false;
  displayStyle = "none";

  constructor() { }
  ngOnInit(): void {
  }
  
  openPopup() {
    this.displayStyle = "block";
  }

  YesPopup() {
    this.confirm = true;
    this.displayStyle = "none";
    console.log("true value set");
  }
  closePopup() {
    this.confirm = false;
    this.displayStyle = "none";
    console.log("False value set");
  }
}
