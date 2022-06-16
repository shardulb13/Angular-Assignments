import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { RegisterComponent } from '../customermodule/register/register.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onclick(){
    this.router.navigate(['blogs']);
  }

  register(){
    this.router.navigate(['register']);
  }

}
