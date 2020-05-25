import { Component } from '@angular/core';


// html and css of the apps
// metadata decorator
@Component({
  selector: 'app-root',   // when used as tag in html renders the component in its place(index.html)
  templateUrl: './app.component.html', //substitued in place where selector is used
  styleUrls: ['./app.component.css']  //css file for this component only
})
export class AppComponent { //class name
  // title of app
  public nameSentToTest = "Hey TestComponent Loser"; // check app component html
  title = 'hello-world';
  public message=" ";
}
