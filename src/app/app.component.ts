import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>    
    <div class="container">
      <mywines></mywines>
    </div>
  `
})
export class AppComponent {}
