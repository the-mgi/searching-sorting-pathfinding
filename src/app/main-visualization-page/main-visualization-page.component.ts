import {Component, ElementRef, OnInit} from '@angular/core';
import {
    optionsAvailablePathfinding,
    optionsAvailableSearch,
    optionsAvailableSort,
    optionsAvailableSpeedValues
} from '../../sharedClasses/classTemplate';


@Component({
    selector: 'app-main-visualization-page',
    templateUrl: './main-visualization-page.component.html',
    styleUrls: ['./main-visualization-page.component.css']
})
export class MainVisualizationPageComponent implements OnInit {

    optionsAvailableSearch = optionsAvailableSearch;
    optionsAvailableSort = optionsAvailableSort;
    optionsAvailablePathfinding = optionsAvailablePathfinding;
    optionsAvailableSpeedValues = optionsAvailableSpeedValues;

    ownArray: string;
    algorithm = 'Algorithm';
    isDisabled = true;

    constructor(private elementReference: ElementRef) {
    }

    ngOnInit(): void {
    }

    setAlgorithmName(event: { nameAlgo: string }): void {
        this.algorithm = event.nameAlgo;
        this.isDisabled = false;
    }

    visualize(): void {
        const allBars = this.elementReference.nativeElement.querySelectorAll('.bars');
        allBars.forEach(singleBar => {
            console.log(singleBar);
        });
    }

    move(startPositionX: number, startPositionY: number, toPositionX: number, toPositionY: number): void {
    }

    selectionSort(): void {
    }

    bubbleSort(): void {
    }

    quickSort(): void {
    }

    mergeSort(): void {
    }

    radixSort(): void {
    }

    bucketSort(): void {
    }

    bitonicSort(): void {
    }

    pancakeSort(): void {
    }

}
