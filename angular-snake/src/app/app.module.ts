import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { FormsModule } from '@angular/forms'
import {AppComponent} from './app.component';
import {NgxSnakeModule} from 'ngx-snake';
import { GameComponent } from './game/game.component';
import { LoginComponent } from './login/login.component';
import { SortPipe } from './sort.pipe';
import { FilterPipe } from './filter.pipe';
import {RouterModule} from "@angular/router";

@NgModule({
    declarations: [
        AppComponent,
        GameComponent,
        LoginComponent,
        SortPipe,
        FilterPipe,
    ],
    imports: [
        BrowserModule,
        NgxSnakeModule,
        FormsModule,
        RouterModule.forRoot([
            { path: 'login', component: LoginComponent },
            { path: 'game', component: GameComponent },
            { path: '**', redirectTo: '/login' }
          ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}