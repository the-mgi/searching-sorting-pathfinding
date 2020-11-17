import {Component} from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';
import {AuthenticationService} from './services/authentication.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    animations: [
        trigger('openClose', [
            state('open', style({
                height: '200px',
                opacity: '1',
                backgroundColor: 'yellow'
            })),
            state('close', style({
                height: '100px',
                opacity: '0.5',
                backgroundColor: 'green'
            })),
            transition('open => close', [animate(
                '1s ease-in'
            )]),
            transition('close => open', [animate(
                '0.5s'
            )])
        ])
    ],
    providers: [AuthenticationService]
})

export class AppComponent {
    title = 'calculator-angular';
    isOpen = true;

    toggle(): void {
        this.isOpen = !this.isOpen;
    }

    constructor(private authService: AuthenticationService) {

    }
}
