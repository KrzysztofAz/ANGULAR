import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() resultChangeVisible = new EventEmitter<boolean>()
  @Output() sendUserData = new EventEmitter<user>()

  constructor() { }

  ngOnInit(): void {
  }

  public changeVisible: boolean = false
  public welcome(){
    this.resultChangeVisible.emit(this.changeVisible)
  }

  public getValues(data: user){
    this.sendUserData.emit(data)
  }
}

export class user{
  public userName: string
  public emialAddress: string
  
  constructor(userName: string, emailAddress: string){
    this.userName = userName
    this.emialAddress = emailAddress
  }
}
