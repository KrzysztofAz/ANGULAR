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
import { HttpClientModule } from "@angular/common/http";
import { SortListPipe } from './pipes/sort-list.pipe';
import { FilterMyScoresPipe } from './pipes/filter-my-scores.pipe';
import { SortMyScoresPipe } from './pipes/sort-my-scores.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [
        AppComponent,
        GameComponent,
        LoginComponent,
        SortPipe,
        FilterPipe,
        SortListPipe,
        FilterMyScoresPipe,
        SortMyScoresPipe,
    ],
    imports: [
        BrowserModule,
        NgxSnakeModule,
        HttpClientModule,
        FormsModule,
        RouterModule.forRoot([
            { path: 'login', component: LoginComponent },
            { path: 'game', component: GameComponent },
            { path: '**', redirectTo: '/login' }
          ]),
        NgbModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}