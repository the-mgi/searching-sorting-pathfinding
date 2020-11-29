import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {Route, RouterModule} from '@angular/router';
import {LoginPageComponent} from './login-page/login-page.component';
import {FormsModule} from '@angular/forms';
import {MainPageComponent} from './main-page/main-page.component';
import {HeaderComponent} from './header/header.component';
import {CompleteBlogComponent} from './main-page/complete-blog/complete-blog.component';
import {BlogComponent} from './main-page/complete-blog/blog/blog.component';
import {BarComponent} from './main-visualization-page/bar/bar.component';
import {MainVisualizationPageComponent} from './main-visualization-page/main-visualization-page.component';
import {AlgorithmInfoComponent} from './main-visualization-page/algorithm-info/algorithm-info.component';
import {DropdownComponent} from './main-visualization-page/dropdown/dropdown.component';
import {SearchingComponent} from './main-visualization-page/searching/searching.component';
import {SortingComponent} from './main-visualization-page/sorting/sorting.component';
import {PathfindingComponent} from './main-visualization-page/pathfinding/pathfinding.component';
import {GithubGistComponent} from './github-gist/github-gist.component';
import {AboutComponent} from './main-page/about/about.component';
import {HomeComponent} from './main-page/home/home.component';
import {BlogPreviewComponent} from './main-page/complete-blog/blog-preview/blog-preview.component';

const routes: Route[] = [
    {path: '', component: HomeComponent},
    {
        path: 'blog-page', component: CompleteBlogComponent,
        children: [
            {path: 'blogs', component: BlogPreviewComponent},
            {path: ':blog-id', component: BlogComponent}
        ]
    },
    {path: 'about-me', component: AboutComponent}
];

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
        GithubGistComponent,
        AboutComponent,
        HomeComponent,
        BlogPreviewComponent
    ],
    imports: [
        BrowserModule,
        RouterModule,
        FormsModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(routes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
