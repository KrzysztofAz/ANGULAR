import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Actions } from '../actions';
import { ActivatedRoute, Router } from "@angular/router";
import { NameService } from '../services/name.service';
import { Scores } from '../interfaces/scores';
import { DownloadScoresService } from '../services/download-scores.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor(
    private _router: Router,
    private _name: NameService,
    private _httpServices: DownloadScoresService,
    private _route: ActivatedRoute
  ) { 

    this.gameParameter = this._route.snapshot.params['newColor']

    this._httpServices.downloadDate().subscribe(result => {
      this.scores = result;
      // console.log(result);
      
    })

  }

  // ------------------------- semestr 2 ---------------------------------

  public enteredName: string = "";
  public scores: Array<Scores> = [];
  public selectSort: string = 'all';
  public enteredToken: string = this._name.returnToken();
  public sortScore: string = 'ascending';
  public intervalScore: any; 
  public gameParameter: string ='';
  
  private refreshData(){
    this._httpServices.downloadDate().subscribe(result => {
      this.scores = result;
      console.log(result, 'ref data');
    })
  }



  // ------------------------- semestr 2 ---------------------------------

  ngOnInit(): void {
    this.enteredName = this._name.readName();
    console.log(this.enteredToken);
    this.intervalScore = setInterval(() => this.refreshData() ,30000);
  }

  public interval: any = 0
  public seconds: number = 0
  public mseconds: number = 0

  public changeVisible: boolean = true
  public points: number = 0
  public actionName: string = ""
  public actionList: Array<Actions> = []
  public isStart: boolean = false
  public isGameOver: boolean = false
  public selectedFilter: string = "ascending"
  public actionArray: Array<string> = ["Up", "Down", "Left", "Right"]
  public selectedSort: string = "all"

  public statusPoints() {
    this.points = this.points + 1
  }
  public statusGame() {
    alert(`Game Over! Your score is ${this.points} in ${this.seconds}.${this.mseconds}s `)

    this._httpServices.sendMyScore(this.enteredToken, this.enteredName, this.points).subscribe()

    this.isGameOver = true
    clearInterval(this.interval)
    this.isStart = false
    this.seconds = 0
    this.mseconds = 0
    this.actionList = [];
    this.actionName = "";
    this.points = 0
  }

  public welcome() {
    // this.resultChangeVisible.emit(this.changeVisible)
    this._router.navigate(['/login']);
  }

  private increase() {
    this.mseconds = this.mseconds + 1
    if (this.mseconds >= 100) {
      this.mseconds = 0
      this.seconds = this.seconds + 1
    }
  }

  public startTime() {
    if (!this.isStart && !this.isGameOver) {
      this.interval = setInterval(() => {
        this.increase()
      }, 10);
      this.isStart = true
    }
  }

  public stopTime() {
    if (this.isStart) {
      clearInterval(this.interval)
      this.isStart = false
    }
  }

  public resetTime() {
    clearInterval(this.interval)
    this.seconds = 0
    this.mseconds = 0
    this.isGameOver = false
  }

  public followActions(action: string) {
    if (this.isStart) {
      this.actionName = action
      this.actionList.push(new Actions(this.actionName, this.seconds, this.mseconds))
    }
  }

  public resetAction() {
    this.actionList = [];
    this.actionName = "";
  }

  public resetPoints() {
    this.points = 0;
  }

}

