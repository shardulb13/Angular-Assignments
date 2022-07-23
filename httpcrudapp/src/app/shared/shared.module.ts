import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ModalComponent } from './modal/modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    NgbModule,
  ],
  exports:[ModalComponent]
})
export class SharedModule { }
