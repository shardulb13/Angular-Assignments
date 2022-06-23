import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-example',
  templateUrl: './directive-example.component.html',
  styleUrls: ['./directive-example.component.scss']
})
export class DirectiveExampleComponent implements OnInit {

  person:any =[
    {
      firstname:'Shar',
      lastname:'Bhingardive',
      zip:411041,
      phone_no:8213194314
    },
    {
      firstname:'Ajinkya',
      lastname:'Bhagat',
      zip:411041,
      phone_no:8213194314
    },
    {
      firstname:'Pranav',
      lastname:'Deshpande',
      zip:411041,
      phone_no:8213194314
    },
    {
      firstname:'Parth',
      lastname:'Pujari',
      zip:411041,
      phone_no:8213194314
    },
    {
      firstname:'Vedant',
      lastname:'Mishra',
      zip:411041,
      phone_no:8213194314
    },
    {
      firstname:'Nitin',
      lastname:'Choudhary',
      zip:411041,
      phone_no:8213194314
    },
   
  ]
  list:any =
  {
    'background-color':'green'
  } 
  constructor() { }

  ngOnInit(): void {
  }

  click = true;
  hiddentext = 'Hide';
  hide()
  {
    this.click = !this.click;
    if(this.click == false)
    {
      this.hiddentext = 'Show';
    }
    else if(this.click == true){
      this.hiddentext = 'Hide';
    }
    return this.click;
  }
}

