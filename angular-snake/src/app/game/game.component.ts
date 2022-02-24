import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Actions } from '../actions';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  @Output() resultChangeVisible = new EventEmitter<boolean>()
  constructor() { }
  @Input() getUserName: string = ""
  @Input() getUserEmail: string = ""

  ngOnInit(): void {
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
  public actionArray: Array<string> = ["up", "down", "left", "right"]
  public selectedSort: string = "all"

  public statusPoints() {
    this.points = this.points + 1
  }
  public statusGame() {
    alert("Game Over")
    this.isGameOver = true
    clearInterval(this.interval)
    this.isStart=false
    this.seconds = 0
    this.mseconds = 0
    this.actionList = [];
    this.actionName = "";
    this.points = 0
  }
  
  public welcome() {
    this.resultChangeVisible.emit(this.changeVisible)
  }

  private increase() {
    this.mseconds = this.mseconds + 1
    if (this.mseconds === 100) {
      this.mseconds = 0
      this.seconds = this.seconds + 1
    }
  }

  public startTime() {
    if (! this.isStart && ! this.isGameOver) {
      this.interval = setInterval(() => {
        this.increase()
      }, 10);
      this.isStart = true
    }
  }

  public stopTime(){
    if (this.isStart) {
      clearInterval(this.interval)
      this.isStart = false
    }
  }

  public resetTime(){
    clearInterval(this.interval)
    this.seconds = 0
    this.mseconds = 0
    this.isGameOver = false
  }

  public followActions(action: string){
    if (this.isStart) {
      this.actionName = action
    this.actionList.push(new Actions(this.actionName, this.seconds, this.mseconds))
    }
  }

  public resetAction(){
    this.actionList = [];
    this.actionName = "";
  }
  
  public resetPoints(){
    this.points = 0;
  }

}

