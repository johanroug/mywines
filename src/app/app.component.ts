import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `    
    <app-header></app-header>    
    <div class="container">
      <div class="row">
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})
export class AppComponent {}
