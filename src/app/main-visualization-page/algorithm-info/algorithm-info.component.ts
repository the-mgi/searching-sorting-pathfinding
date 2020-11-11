import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AlgorithmData} from '../../../sharedClasses/classTemplate';

@Component({
    selector: 'app-algorithm-info',
    templateUrl: './algorithm-info.component.html',
    styleUrls: ['./algorithm-info.component.css']
})
export class AlgorithmInfoComponent implements OnInit {

    algorithmData: AlgorithmData;
    isLinearIterative = true;
    text = 'Linear Search Iterative';

    @ViewChild('radio') input: ElementRef;

    constructor() {
    }

    ngOnInit(): void {
    }

    consoleLog(event: Event): void {
        // console.log(event);
        console.log(this.input.nativeElement);
    }
}
