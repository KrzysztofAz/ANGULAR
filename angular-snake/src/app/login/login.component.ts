import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() resultChangeVisible = new EventEmitter<boolean>()
  constructor() { }

  ngOnInit(): void {
  }

  public changeVisible: boolean = false
  public welcome(){
    this.resultChangeVisible.emit(this.changeVisible)
  }
}

