import {Component, ElementRef, OnInit, ViewChild, ViewChildren} from '@angular/core';
import {
    Algorithm,
    Bar,
    optionsAvailableSearch,
    optionsAvailableSpeedValues,
    parseArray,
    randomColor
} from '../../../sharedClasses/classTemplate';

@Component({
    selector: 'app-searching',
    templateUrl: './searching.component.html',
    styleUrls: ['./searching.component.css']
})
export class SearchingComponent implements OnInit {
    optionsAvailableSearch = optionsAvailableSearch;
    optionsAvailableSpeedValues = optionsAvailableSpeedValues;

    ownArray: string;
    algorithm = 'Algorithm';
    speedToRun: number;
    isVisualizeButtonDisabled = false;

    barsValue: Bar[];
    isBarsCreated: boolean;
    text: string;

    isClassAttached: boolean;

    @ViewChild('valueToSearch') searchValue: ElementRef;
    @ViewChildren('cc') barsAll;

    constructor() {
    }

    ngOnInit(): void {
        this.isBarsCreated = false;
        this.isClassAttached = false;
    }

    setAlgorithmName(event: { nameAlgo: string }): void {
        this.algorithm = event.nameAlgo;
    }

    updateSpeed(event: { speedToRun: string }): void {
        this.speedToRun = +event.speedToRun.substr(0, event.speedToRun.length - 1); // because we have speeds like 1.5x
        console.log(this.speedToRun);
    }

    addBarsInPage(noOfBarsInput: HTMLInputElement, yourArrayInput: HTMLInputElement): void {
        const yourArray = yourArrayInput.value;

        this.barsValue = [];
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
        this.isBarsCreated = true;  // whether or not, to display bars in the area, like router-outlet LOL

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
        let index = 0;
        setTimeout(() => {
            const intervalId = setInterval(() => {
                allBars[index].condition = false;
                if (this.barsValue[index].value === valueToSearch) {
                    clearInterval(intervalId);
                } else {
                    index += 1;
                }
                allBars[index].condition = true;
            }, (1000 / this.speedToRun));
        }, (1000 / this.speedToRun));

        // const allBars = this.barsAll._results;
        // console.log(allBars[0]);
        // const a = this.elementRef.nativeElement.querySelectorAll('.bars');
        //
        // console.log(a[0].getBoundingClientRect());
        // console.log(a[1].getBoundingClientRect());
        //
        // const x1 = a[0].getBoundingClientRect()['x'];
        // const y1 = a[0].getBoundingClientRect()['y'];
        // const x2 = a[1].getBoundingClientRect()['x'];
        // const y2 = a[1].getBoundingClientRect()['y'];
        //
        // console.log(x1, y1);
        // console.log(x2, y2);
        //
        //
        // a[0].style.position = 'absolute';
        // a[1].style.position = 'absolute';
        //
        // setTimeout(() => {
        //     a[0].style.left = x2 + 'px';
        //     a[0].style.top = y2 + 'px';
        // }, 3000);
        //
        // console.log(a[0].getBoundingClientRect());
        // console.log(a[1].getBoundingClientRect());
    }  // completed with QUALITY CODE. No JUGAR I SWAER.. :)

    private binarySearch(): void {
        const allBars = this.barsAll._results;
        const valueToSearch: number = +this.searchValue.nativeElement.value;

        let [startIndex, lastIndex] = [0, this.barsAll.length];
        let mid = Math.floor((startIndex + lastIndex) / 2);
        allBars[mid].condition = true;
        setTimeout(() => {
            const intervalId = setInterval(() => {
                const currentValueNumber = this.barsValue[mid].value;
                allBars[mid].condition = false;
                if (currentValueNumber === valueToSearch) {
                    clearInterval(intervalId);
                } else if (currentValueNumber < valueToSearch) {
                    startIndex = mid + 1;
                } else {
                    lastIndex = mid - 1;
                }
                mid = Math.floor((startIndex + lastIndex) / 2);
                allBars[mid].condition = true;
            }, (1000 / this.speedToRun));
        }, (1000 / this.speedToRun));
    }  // completed with QUALITY CODE. No JUGAR I SWAER.. :)

    private exponentialSearch(): void {

    }

    private fibonacciSearch(): void {

    }

    private interpolationSearch(): void {

    }

    private jumpSearch(): void {

    }

}

// 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 22

// 5, 10, 15, 18, 19, 22
