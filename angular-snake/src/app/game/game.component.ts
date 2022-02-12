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

  public welcome() {
    this.resultChangeVisible.emit(this.changeVisible)
  }
  public statusPoints() {
    this.points = this.points + 1
  }
  public resetPoints() {
    this.points = 0
  }
}
