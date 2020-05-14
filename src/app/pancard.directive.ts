import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';
import { UpperCasePipe } from '@angular/common';


@Directive({
  selector: '[appPancard]'
})
export class PancardDirective {

  constructor(private element: ElementRef) {

   }
   @HostBinding('style.border') border:string;

  @HostListener('input', ['$event'])  onKeyDown(event: KeyboardEvent)
   {
      const input = event.target as HTMLInputElement;
      let trimed=input.value.replace(/\s+/g,'');
      if(trimed.length>10)
      {
        trimed=trimed.substr(0,10);
      }
      let numbers= [];
      numbers.push(trimed);
      input.value =numbers.join(' ');
      let value=input.value;
 
      this.border='';
      let regex = /[A-Z]{5}[0-9]{4}[A-Z]{1}$/; 
      if(!regex.test(input.value))
      {
        this.border='1px solid red';
      }
   }
}
