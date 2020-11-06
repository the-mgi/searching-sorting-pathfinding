import {Component, ElementRef, OnInit, ViewChild, ViewChildren} from '@angular/core';
import {
    Algorithm,
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
export class MainVisualizationPageComponent implements OnInit {

    optionsAvailableSearch = optionsAvailableSearch;
    optionsAvailableSort = optionsAvailableSort;
    optionsAvailablePathfinding = optionsAvailablePathfinding;
    optionsAvailableSpeedValues = optionsAvailableSpeedValues;

    ownArray: string;
    algorithm = 'Algorithm';
    speedToRun: number;
    isVisualizeButtonDisabled = false;

    barsValue: Bar[];
    isBarsCreated: boolean;
    number: number[];
    text: string;

    isClassAttached: boolean;

    @ViewChild('valueToSearch') searchValue: ElementRef;
    @ViewChildren('cc') barsAll;

    constructor() {
    }

    ngOnInit(): void {
        this.barsValue = [];
        this.isBarsCreated = false;
        this.number = [];
        this.isClassAttached = false;
    }

    setAlgorithmName(event: { nameAlgo: string }): void {
        this.algorithm = event.nameAlgo;
    }

    updateSpeed(event: { speedToRun: string }): void {
        this.speedToRun = +event.speedToRun.substr(0, event.speedToRun.length - 1);
        console.log(this.speedToRun);
    }

    addBarsInPage(noOfBarsInput: HTMLInputElement, yourArrayInput: HTMLInputElement): void {
        const yourArray = yourArrayInput.value;

        this.barsValue = [];
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
        this.isBarsCreated = true;  // whether or not, to display bars in the area, like router-outlet

        setTimeout(() => {
            switch (this.algorithm) {
                case Algorithm.LINEAR_SEARCH:
                    this.linearSearch();
                    break;
                case Algorithm.BINARY_SEARCH:
                    this.binarySearch();
                    break;
                case Algorithm.EXPONENTIAL_SEARCH:
                    this.exponentialSearch();
                    break;
                case Algorithm.FIBONACCI_SEARCH:
                    this.fibonacciSearch();
                    break;
                case Algorithm.INTERPOLATION_SEARCH:
                    this.interpolationSearch();
                    break;
                case Algorithm.JUMP_SEARCH:
                    this.jumpSearch();
                    break;
            }
        }, 1000);
    }

    private linearSearch(): void {
        const allBars = this.barsAll._results;
        allBars[0].condition = true;
        const valueToSearch: number = +this.searchValue.nativeElement.value;
        setTimeout(() => {
            for (let i = 1; i < this.barsValue.length; i++) {
                if (valueToSearch === this.barsValue[i - 1].value) {
                    break;
                }
                // tslint:disable-next-line:no-shadowed-variable
                const func = (i) => {
                    setTimeout(() => {
                        allBars[i - 1].condition = false;
                        allBars[i].condition = true;
                    }, (1000 / this.speedToRun) * i);
                };
                func(i);
            }
        }, (1000 / this.speedToRun));
    }

    private binarySearch(): void {

    }

    private exponentialSearch(): void {

    }

    private fibonacciSearch(): void {

    }

    private interpolationSearch(): void {

    }

    private jumpSearch(): void {

    }
}

// Reference Code from Sebs Angular Discord
// const singleItem = item => {
//     item.condition = true;
// };

// i don't know how this shit is iterating over the array and adding the delay effectively but literally i am really really
// thankful to a guy SEBS in Angular Discord server
// i love you man!!!!!!!
// const results = from(all).pipe(
//     concatMap(item => of(item).pipe(delay(1000)))
// );
// results.subscribe(singleItem);

