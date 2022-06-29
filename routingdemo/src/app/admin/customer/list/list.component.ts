import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onedit(){
    let id = this.router.snapshot.params.id;
    alert(id);
  }
}
