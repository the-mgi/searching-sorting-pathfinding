import {Component, OnInit} from '@angular/core';
import {AlgorithmData, searchingAlgorithmsData} from '../../../sharedClasses/classTemplate';

@Component({
    selector: 'app-algorithm-info',
    templateUrl: './algorithm-info.component.html',
    styleUrls: ['./algorithm-info.component.css']
})
export class AlgorithmInfoComponent implements OnInit {

    algorithmData: AlgorithmData;  // need to mark this field as @Input() after completing routes section
    isIterative = true;
    text = 'Linear Search Iterative';

    constructor() {
    }

    ngOnInit(): void {
        this.algorithmData = searchingAlgorithmsData[0];
    }
}
