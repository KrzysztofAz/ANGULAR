import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from "@angular/router";
import { DownloadScoresService } from '../services/download-scores.service';
import { NameService } from '../services/name.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private _router: Router,
    private _nameService: NameService,
    private _httpService: DownloadScoresService
  ) { }

  ngOnInit(): void {
  }


  public getValues(data: user) {
    
    this._nameService.getUserData(data);
    this._httpService.sendTokenToServer(data.token).subscribe(result => {
      if (result.success === true) {
        this._router.navigate(['/game',data.color]);
      } else {
        this._router.navigate(['/login'])
      }
    });
  }
}

export class user {
  public userName: string
  public token: string
  public color: string;

  constructor(userName: string, token: string, color: string) {
    this.userName = userName;
    this.token = token;
    this.color = color;
  }
}
