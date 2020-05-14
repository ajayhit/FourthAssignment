import { Directive, ElementRef, Renderer2, HostBinding, HostListener } from '@angular/core';


@Directive({
  selector: '[appPancard]'
})
export class PancardDirective {

  constructor(private el: ElementRef , randerer: Renderer2) {

   }
  @HostListener('input', ['$event'])  onkeydown(event: KeyboardEvent)
   {
      const input = event.target as HTMLInputElement;
      const regex = /([A-Z]){5}([0-9]){4}([A-Z]){1}$/;
      const matchArray = input.value.match(regex);
      if (matchArray == null) {
       // alert('Invalid PAN Card No.');
        return false;
    }
   }
}
