import { Injectable } from '@angular/core';
import { user } from '../login/login.component';

@Injectable({
  providedIn: 'root'
})
export class NameService {
  private _userName:string = "";

  constructor() { }

  getUserData(data: user){
    this._userName = data.userName
  }

  readName() { 
    return this._userName;
  }
}

