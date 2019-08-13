import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<navbar></navbar><router-outlet></router-outlet>',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'AngularQuestionsApp';
}
