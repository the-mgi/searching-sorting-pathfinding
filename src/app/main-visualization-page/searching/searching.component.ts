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
                if (index >= this.barsValue.length) {
                    clearInterval(intervalId);
                }
                if (this.barsValue[index].value === valueToSearch) {
                    clearInterval(intervalId);
                } else {
                    index += 1;
                }
                allBars[index].condition = true;
            }, (1000 / this.speedToRun));
        }, (1000 / this.speedToRun));
    } // this line is being removed because i remembered i am NOOB

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
                if (!(startIndex <= lastIndex)) {
                    clearInterval(intervalId);
                }
                if (currentValueNumber === valueToSearch) {
                    clearInterval(intervalId);
                } else if (currentValueNumber < valueToSearch) {
                    startIndex = mid + 1;
                } else {
                    lastIndex = mid - 1;
                }
                mid = Math.floor((startIndex + lastIndex) / 2);
                allBars[mid].condition = true;
                console.log('Value of mid is: ' + mid);
            }, (1000 / this.speedToRun));
        }, (1000 / this.speedToRun));
    }

    private exponentialSearch(): void {

    }

    private fibonacciSearch(): void {

    }

    private interpolationSearch(): void {

    }

    private jumpSearch(): void {
        const allBars = this.barsAll._results;
        const valueToSearch: number = +this.searchValue.nativeElement.value;

        const jumpSize = Math.floor(Math.sqrt(this.barsValue.length));
        let val = jumpSize;
        while (val <= this.barsValue.length) {
            if ((this.barsValue[val].value > valueToSearch) || (val >= this.barsValue.length)) {
                break;
            } else {
                val = val + jumpSize;
            }
        }
        let i = (val - jumpSize);
        allBars[i].condition = true;
        val = val > this.barsValue.length ? this.barsValue.length : val;
        setTimeout(() => {
            const intervalId = setInterval(() => {
                allBars[i].condition = false;
                if (i < val) {
                    if (this.barsValue[i].value === valueToSearch) {
                        clearInterval(intervalId);
                    } else {
                        i += 1;
                    }
                    allBars[i].condition = true;
                } else {
                    clearInterval(intervalId);
                }
            }, (1000 / this.speedToRun));
        }, (1000 / this.speedToRun));
    }

}
