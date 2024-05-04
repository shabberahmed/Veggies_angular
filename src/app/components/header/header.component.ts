import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  toggleCart:boolean=false
  handleCart(){
    console.log("clicked");
    return this.toggleCart= !this.toggleCart
  }
}
