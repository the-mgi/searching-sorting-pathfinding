import {AfterContentInit, AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AlgorithmData, searchingAlgorithmsData} from '../../../sharedClasses/classTemplate';

@Component({
    selector: 'app-algorithm-info',
    templateUrl: './algorithm-info.component.html',
    styleUrls: ['./algorithm-info.component.css']
})
export class AlgorithmInfoComponent implements OnInit {

    algorithmData: AlgorithmData;  // need to mark this field as @Input() after completing routes section
    isIterative = true;
    text = 'Iterative';
    @Input() algoName: string;

    constructor() {
    }

    ngOnInit(): void {
        this.algorithmData = searchingAlgorithmsData[0];
        // this.algorithmData = searchingAlgorithmsData.filter(object => {
        //     return object.algorithmName === this.algoName;
        // })[0];
    }
}
