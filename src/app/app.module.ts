import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {LoginPageComponent} from './login-page/login-page.component';
import {FormsModule} from '@angular/forms';
import { MainPageComponent } from './main-page/main-page.component';
import { HeaderComponent } from './header/header.component';
import { CompleteBlogComponent } from './complete-blog/complete-blog.component';
import { BlogComponent } from './complete-blog/blog/blog.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginPageComponent,
        MainPageComponent,
        HeaderComponent,
        CompleteBlogComponent,
        BlogComponent
    ],
    imports: [
        BrowserModule,
        RouterModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
