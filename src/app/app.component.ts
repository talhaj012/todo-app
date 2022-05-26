//  this is the type-script file of the component, and this  is the most important file as it tells us how our app works..
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app-angular';
  constructor(){
    // setTimeout(() => {
    //   this.title = "New changed title"
    // }, 2000);
  }
 
}
