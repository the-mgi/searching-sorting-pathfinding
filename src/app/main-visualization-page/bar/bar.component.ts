import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-bar',
    template: `
        <div
            class="single-bar"
            [style.height.%]="height"
            [style.backgroundColor]="color"
            [ngClass]="{'current': isClassAttached}">
            <p>{{valueToDisplay}}</p>
        </div>`,
    styles: [`.single-bar {
        background-color: red;
        width: 25px;
        border-radius: 3px;
        margin: 8px;
        transition: .3s;
    }

    .single-bar p {
        margin: 0;
        background-color: black;
        width: 25px;
        height: 30px;
        color: white;
        font-size: 20px;
        text-align: center;
        font-family: Product-Sans-Regular, sans-serif;
        border-radius: 3px;
    }

    .current {
        box-shadow: 10px 10px 8px #585853;
    }
    `]
})
export class BarComponent implements OnInit {

    @Input() height: number;
    @Input() color: string;
    @Input() valueToDisplay: string;

    private condition: boolean;

    @Input()
    get isClassAttached(): boolean {
        return this.condition;
    }

    set isClassAttached(condition: boolean) {
        this.condition = condition;
    }


    constructor() {
    }

    ngOnInit(): void {
        this.condition = false;
    }

}
