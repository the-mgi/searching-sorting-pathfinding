import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-algorithm-info',
    templateUrl: './algorithm-info.component.html',
    styleUrls: ['./algorithm-info.component.css']
})
export class AlgorithmInfoComponent implements OnInit {

    @Input() algorithmToDisplay: string;

    constructor() {
    }

    ngOnInit(): void {

    }
}
