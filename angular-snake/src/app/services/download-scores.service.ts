import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Scores } from '../interfaces/scores';

@Injectable({
  providedIn: 'root'
})
export class DownloadScoresService {

  constructor(
    private _http: HttpClient,
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


}
