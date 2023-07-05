import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnlyALphabet]'
})
export class OnlyALphabetDirective {

  constructor() { }

  key:any;
  @HostListener('keydown', ['$event']) onKeydown(event: KeyboardEvent) {
    this.key = event.keyCode;
    if ((this.key >= 15 && this.key <= 31) || (this.key>=33 && this.key<=61) || (this.key >= 123) || (this.key >= 96 && this.key <= 105)) {
      event.preventDefault();
    }
  }

}
