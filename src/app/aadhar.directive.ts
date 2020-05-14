import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appAadhar]'
})
export class AadharDirective {


  constructor(private el: ElementRef , randerer: Renderer2) {
  }

  @HostListener('input', ['$event'])  onkeydown(event: KeyboardEvent)
   {
      const input = event.target as HTMLInputElement;
      let out = this.validate(input.value);
      // tslint:disable-next-line:no-conditional-assignment
      if (out = true)
      {
        alert('Done');
      }
      else{
        alert('not valid');
      }
    }
    validate(aadharNumber) {

      const p = [
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 5, 7, 6, 2, 8, 3, 0, 9, 4],
        [5, 8, 0, 3, 7, 9, 6, 1, 4, 2],
        [8, 9, 1, 6, 0, 4, 3, 5, 2, 7],
        [9, 4, 5, 3, 1, 2, 6, 8, 7, 0],
        [4, 2, 8, 6, 5, 7, 3, 9, 0, 1],
        [2, 7, 9, 3, 8, 0, 6, 4, 1, 5],
        [7, 0, 4, 6, 9, 1, 3, 2, 5, 8]
    ];
      const  d = [
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 0, 6, 7, 8, 9, 5],
        [2, 3, 4, 0, 1, 7, 8, 9, 5, 6],
        [3, 4, 0, 1, 2, 8, 9, 5, 6, 7],
        [4, 0, 1, 2, 3, 9, 5, 6, 7, 8],
        [5, 9, 8, 7, 6, 0, 4, 3, 2, 1],
        [6, 5, 9, 8, 7, 1, 0, 4, 3, 2],
        [7, 6, 5, 9, 8, 2, 1, 0, 4, 3],
        [8, 7, 6, 5, 9, 3, 2, 1, 0, 4],
        [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
    ];

      let c = 0;
      const invertedArray = aadharNumber.split('').map(Number).reverse();
      invertedArray.forEach((val, i) => {
          c = d[c][p[(i % 8)][val]];
      });
      return (c === 0);
    // tslint:disable-next-line:no-trailing-whitespace
    }    
  }

