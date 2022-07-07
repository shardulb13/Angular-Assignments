import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/core/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  data!:[{
    id:'',
    postId:'',
    name:'',
    email:'',
    body:''

  }];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.Userdata().subscribe(res=>{
      this.data = res;
    })
  }

}
