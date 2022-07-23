import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/core/services/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private tokenservice:TokenService, private route: Router, private location: Location) { }

  ngOnInit(): void {
  }

  logout(){
    console.log(this.tokenservice.deleteToken());
    this.route.navigate(['']);
  }

  back(){
    this.location.back();
  }
}
