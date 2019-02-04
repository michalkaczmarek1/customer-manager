
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  styles: [
    `.isActive {text-decoration: underline;}`,
    `.oddCategory {color: green;}`
  ]
})
export class AppComponent {

  currentDate: number = Date.now();

  constructor() {
    // setTimeout(() => {
    //   this.customer.categories.push("branza budowlana");
    // }, 3000);
  }

  // changeIsActive(){
  //   this.isActive = !this.isActive;
  // }

  
}
