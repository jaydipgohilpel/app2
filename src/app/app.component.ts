import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app2';
  name = "";
  parentcomponent(data:any="") {
    console.warn(data);
    this.name = data.name;
  }

}
