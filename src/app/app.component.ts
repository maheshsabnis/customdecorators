import { Component } from '@angular/core';
import {logMethod} from './customdecorators/methoddecorator';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CustomDecorators';

  @logMethod()
  display(): void {
    console.log('The Display Method');
    for(let key in this) {
      console.log(key);
    }
  }
}
