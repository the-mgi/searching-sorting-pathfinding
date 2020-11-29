import {AfterViewInit, Component, ElementRef, Input, Renderer2, ViewChild} from '@angular/core';
import {randomColor} from '../../../../../sharedClasses/classTemplate';

@Component({
    selector: 'app-profile-title',
    template: `
        <div class="main-container" #container>
            <p #letter>{{this.firstLetter}}</p>
        </div>`,
    styles: [`.main-container {
        width: 90px;
        height: 90px;
        border-radius: 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    p {
        font-size: 45px;
        color: white;
    }
    `]
})
export class ProfileTitleComponent implements AfterViewInit {
    @Input() firstLetter: string;
    @ViewChild('container') container: ElementRef;
    @ViewChild('letter') paragraph: ElementRef;

    constructor(private renderer: Renderer2) {
    }

    ngAfterViewInit(): void {
        this.renderer.setStyle(this.container.nativeElement, 'background-color', randomColor());
    }
}
