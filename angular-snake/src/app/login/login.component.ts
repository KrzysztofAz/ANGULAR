import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // @Output() resultChangeVisible = new EventEmitter<boolean>()
  // @Output() sendUserData = new EventEmitter<user>()

  constructor(
    private _router: Router,
  ) { }

  ngOnInit(): void {
  }

  // public changeVisible: boolean = false
  public welcome(){
    // this.resultChangeVisible.emit(this.changeVisible)
    this._router.navigate(['/game']);
  }

  public getValues(data: user){
    // this.sendUserData.emit(data)
  }
}

export class user{
  public userName: string
  public userEmail: string
  
  constructor(userName: string, userEmail: string){
    this.userName = userName
    this.userEmail = userEmail
  }
}
