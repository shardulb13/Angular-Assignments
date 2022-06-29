import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDirectiveDemo]'
})
export class DirectiveDemoDirective {

  constructor(private el : ElementRef) {
    this.el.nativeElement.style.textDecoration = 'underline'
   }
  
}
