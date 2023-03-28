import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: ` <div>
    <h1>{{title}}</h1>
    <nav class="navbar navbar-expand navbar-light bg-light">
      <a class="navbar brand" routerLink="/welcom">{{title}}</a>
      <ul class="nav nav-pills">
        <li><a class="nav-link" routerLink="/workers">Home</a></li>
        <li><a class="nav-link" routerLink="/works">works</a></li>
        
      </ul>
    </nav>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
              `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'workerClientAngular';
  
}
