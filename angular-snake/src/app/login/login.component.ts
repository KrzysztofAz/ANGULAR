import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Router} from "@angular/router";
import { NameService } from '../services/name.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private _router: Router,
    private _nameService: NameService
  ) { }

  ngOnInit(): void {
  }

 
  public getValues(data: user){
    this._router.navigate(['/game']);
    this._nameService.getUserData(data)
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
