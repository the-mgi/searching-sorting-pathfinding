import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-bar',
    templateUrl: './bar.component.html',
    styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {

    @Input() height: number;
    @Input() color: string;
    @Input() valueToDisplay: string;

    private condition: boolean;

    @Input()
    get isClassAttached(): boolean { return this.condition; }
    set isClassAttached(condition: boolean) { this.condition = condition; }


    constructor() {
    }

    ngOnInit(): void {
        this.condition = false;
    }

}
