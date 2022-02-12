import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-snake';
  isVisible: boolean = true
  statusLogin(data: boolean){
    this.isVisible = data
  }
  statusGame(data: boolean){
    this.isVisible = data
  }
}
