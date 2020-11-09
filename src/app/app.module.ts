import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {LoginPageComponent} from './login-page/login-page.component';
import {FormsModule} from '@angular/forms';
import {MainPageComponent} from './main-page/main-page.component';
import {HeaderComponent} from './header/header.component';
import {CompleteBlogComponent} from './complete-blog/complete-blog.component';
import {BlogComponent} from './complete-blog/blog/blog.component';
import {BarComponent} from './main-visualization-page/bar/bar.component';
import {MainVisualizationPageComponent} from './main-visualization-page/main-visualization-page.component';
import {AlgorithmInfoComponent} from './main-visualization-page/algorithm-info/algorithm-info.component';
import {DropdownComponent} from './main-visualization-page/dropdown/dropdown.component';
import {SearchingComponent} from './main-visualization-page/searching/searching.component';
import {SortingComponent} from './main-visualization-page/sorting/sorting.component';
import {PathfindingComponent} from './main-visualization-page/pathfinding/pathfinding.component';
import { GithubGistComponent } from './github-gist/github-gist.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginPageComponent,
        MainPageComponent,
        HeaderComponent,
        CompleteBlogComponent,
        BlogComponent,
        BarComponent,
        MainVisualizationPageComponent,
        AlgorithmInfoComponent,
        DropdownComponent,
        SearchingComponent,
        SortingComponent,
        PathfindingComponent,
        GithubGistComponent
    ],
    imports: [
        BrowserModule,
        RouterModule,
        FormsModule,
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
