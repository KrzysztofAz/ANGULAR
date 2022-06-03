import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Scores } from '../interfaces/scores';
import { NameService } from './name.service';

@Injectable({
  providedIn: 'root'
})
export class DownloadScoresService {

  constructor(
    private _http: HttpClient,
    private _token: NameService
  ) { }

  downloadDate() {

    const headDict = {
      "Content-Type": "application/json",
      "Accept": "application/json",
    }

    const requiredOption = {
      headers: new HttpHeaders(headDict)
    }

    const url = "http://scores.chrum.it/scores/snake";

    return this._http.get<Array<Scores>>(url, requiredOption)

  }

  sendTokenToServer(myToken: string) {

    const token = {
      "auth-token": `${myToken}`
    }

    const url = 'http://scores.chrum.it/check-token'

    return this._http.post<{ success: boolean }>(url, token)

  }

  sendMyScore(token: string, name: string, score: number) {

    const headerDict = {
      "Content-Type": 'application/json',
      "Accept": 'application/json',
      "auth-token": `${token}`,
    }

    const requiredOption = {
      headers: new HttpHeaders(headerDict)
    }

    const myBody = {
      name: `${name}`,
      game: 'snake',
      score: `${score}`
    }

    const url = 'http://scores.chrum.it/scores'

    return this._http.post<Array<Scores>>(url, myBody, requiredOption)

  }


}
