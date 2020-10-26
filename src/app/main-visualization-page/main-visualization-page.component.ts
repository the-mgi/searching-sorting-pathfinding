import {AfterViewChecked, Component, ElementRef, OnInit} from '@angular/core';
import {
    Bar,
    optionsAvailablePathfinding,
    optionsAvailableSearch,
    optionsAvailableSort,
    optionsAvailableSpeedValues,
    parseArray,
    randomColor
} from '../../sharedClasses/classTemplate';


@Component({
    selector: 'app-main-visualization-page',
    templateUrl: './main-visualization-page.component.html',
    styleUrls: ['./main-visualization-page.component.css']
})
export class MainVisualizationPageComponent implements OnInit, AfterViewChecked {

    optionsAvailableSearch = optionsAvailableSearch;
    optionsAvailableSort = optionsAvailableSort;
    optionsAvailablePathfinding = optionsAvailablePathfinding;
    optionsAvailableSpeedValues = optionsAvailableSpeedValues;

    ownArray: string;
    algorithm = 'Algorithm';
    isVisualizeButtonDisabled = false;

    barsValue: Bar[] = [];
    isBarsCreated = false;
    number: number[] = [];

    constructor(private elementReference: ElementRef) {
    }

    ngOnInit(): void {
    }

    setAlgorithmName(event: { nameAlgo: string }): void {
        this.algorithm = event.nameAlgo;
    }

    visualize(noOfBarsInput: HTMLInputElement, yourArrayInput: HTMLInputElement): void {
        const allBars = this.elementReference.nativeElement.querySelectorAll('.bars');
        console.log(`I am in visualize ${allBars.length}`);
        const yourArray = yourArrayInput.value;
        const numBars = noOfBarsInput.value;

        this.barsValue = [];
        this.createBars(yourArray);
    }

    createBars(yourArray: string): void {
        this.number.push(2);
        const array = parseArray(yourArray);
        /*
            if array = [1, 2, 3, 4]
            then ...array = 1, 2, 3, 4, but only writing this will result in an error
            ... is called as the spread operator, allowing the expression to be expanded
         */
        const maxValue = Math.max(...array);
        array.forEach(singleValue => {
            this.barsValue.push(new Bar(
                singleValue,
                (((singleValue / maxValue) * 100) * 50),
                randomColor()
                )
            );
        });
        this.isBarsCreated = true;
        this.linearSearch();
    }

    ngAfterViewChecked(): void {
        const bars: HTMLElement[] = this.elementReference.nativeElement.querySelectorAll('.bars');
        console.log('in linear search ' + bars.length);
        bars.forEach(singleBar => {
            setTimeout(() => {
                console.log(singleBar.innerHTML);
                console.log('I am iterating');
            }, 100);
        });
    }

    linearSearch(): void {

    }
}
