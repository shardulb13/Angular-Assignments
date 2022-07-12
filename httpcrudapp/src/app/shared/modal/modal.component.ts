import { Component, OnInit, ViewChild } from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { ListComponent } from 'src/app/admin/employee/list/list.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @ViewChild(ListComponent) list!: ListComponent
  clickYes:boolean=false;
  clickNo:boolean=false;
  constructor(private modalService: NgbModal) { }
  ngOnInit(): void {
  }

  displayStyle = "none";

  openPopup() {
    this.displayStyle = "block";

  }

  okPopup() {
    this.displayStyle = "none";
    this.clickYes = true;
  }
  closePopup() {
    this.displayStyle = "none";
    this.clickNo = true;
  }
}
