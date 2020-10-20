import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-bar',
    templateUrl: './bar.component.html',
    styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {

    @Input() height: number;
    @Input() color: string;

    constructor() {
    }

    ngOnInit(): void {
    }

}
