import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NgxSnakeModule} from 'ngx-snake';
import { LoginComponent } from './login/login.component';
import { GameComponent } from './game/game.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        GameComponent,
    ],
    imports: [
        BrowserModule,
        NgxSnakeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
