import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: ` <div>
    <h1>{{title}}</h1>
    <worker-list></worker-list>
              `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'workerClientAngular';
  
}
