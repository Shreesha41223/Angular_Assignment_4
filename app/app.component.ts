import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CounterDirective } from './counter.directive';
import { First2charPipe } from './first2char.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,CounterDirective,First2charPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hWork_4';
  inputString:string='';

  onClickIncrement(clickCount:number){
    console.log("Mouse clicked ",clickCount," number of times")
  }

  getString(item:string){
    this.inputString=item;
  }
}
