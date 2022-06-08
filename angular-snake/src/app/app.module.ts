import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'
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
import { NameService } from './services/name.service';
import { SaveMyRouteGuard } from './save-my-route.guard';

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
            { path: 'game/:newColor', component: GameComponent, canActivate: [SaveMyRouteGuard] },
            { path: '**', redirectTo: '/login' }
          ]),
        NgbModule,
        ReactiveFormsModule
    ],
    providers: [NameService],
    bootstrap: [AppComponent]
})
export class AppModule {
}