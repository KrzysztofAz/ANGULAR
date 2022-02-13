import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  @Output() resultChangeVisible = new EventEmitter<boolean>()
  constructor() { }

  ngOnInit(): void {
  }

  public changeVisible: boolean = true
  public points: number = 0
  public interval: any = 0
  public seconds: number = 0
  public milliseconds: number = 0


  public welcome() {
    this.resultChangeVisible.emit(this.changeVisible)
  }
  public gameOver() {
    alert("Game Over")
  }
  public statusPoints() {
    this.points = this.points + 1
  }
  public resetPoints() {
    this.points = 0
  }
  private increaseTime() {
    this.milliseconds = this.milliseconds + 1
    if (this.milliseconds === 100) {
      this.milliseconds = 0
      this.seconds = this.seconds + 1
    }
  }

  public startTime() {
    this.interval = setInterval(() => {
      this.increaseTime()
    }, 10);
  }

  public stopTime(){
    clearInterval(this.interval)
  }

  public resetTime(){
    clearInterval(this.interval)
    this.seconds = 0
    this.milliseconds = 0
  }
}
