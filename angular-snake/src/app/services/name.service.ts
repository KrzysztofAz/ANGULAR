import { Injectable } from '@angular/core';
import { user } from '../login/login.component';

@Injectable({
  providedIn: 'root'
})
export class NameService {
  private _userName:string = "";
  private _myToken: string = "";

  constructor() { }

  getUserData(data: user){
    this._userName = data.userName;
    this._myToken = data.token;
  }

  readName() { 
    return this._userName;
  }

  returnToken(){
    return this._myToken;
  }

}

