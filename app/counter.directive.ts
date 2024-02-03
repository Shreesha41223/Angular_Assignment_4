import { Directive, EventEmitter, HostListener, Output } from '@angular/core';


@Directive({
  selector: '[appCounter]',
  standalone: true
})
export class CounterDirective {
  @Output() countEmmit= new EventEmitter<number>();
  clickCount:number=0;

  constructor() { }

  @HostListener('click') onClick(){
    this.clickCount++;
    this.countEmmit.emit(this.clickCount);
  }

}
