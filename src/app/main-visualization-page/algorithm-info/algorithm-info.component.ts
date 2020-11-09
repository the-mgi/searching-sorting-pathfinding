import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AlgorithmData} from '../../../sharedClasses/classTemplate';

@Component({
    selector: 'app-algorithm-info',
    templateUrl: './algorithm-info.component.html',
    styleUrls: ['./algorithm-info.component.css']
})
export class AlgorithmInfoComponent implements OnInit {

    algorithmData: AlgorithmData;

    constructor() {
    }

    ngOnInit(): void {
    }
}
