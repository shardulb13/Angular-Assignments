import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/core/services/token.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private tokenservice:TokenService) { }

  ngOnInit(): void {
    console.log("Admin Token",this.tokenservice.getToken());
  }

}
