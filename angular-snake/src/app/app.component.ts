import { Component } from '@angular/core';
import { user } from './login/login.component'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-snake';
  public userName: string = ""
  public token: string = ""

  isVisible: boolean = true
  statusLogin(data: boolean){
    this.isVisible = data
  }
  statusGame(data: boolean){
    this.isVisible = data
  }
  getUserData(data: user){
    this.userName = data.userName
    this.token = data.token
  }
}
