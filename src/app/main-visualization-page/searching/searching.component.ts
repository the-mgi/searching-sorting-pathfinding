import {Component, ElementRef, OnInit, ViewChild, ViewChildren} from '@angular/core';
import {
    Algorithm,
    Bar,
    optionsAvailableSearch,
    optionsAvailableSpeedValues,
    parseArray,
    randomColor
} from '../../../sharedClasses/classTemplate';

const SPEED_TO_RUN = 1000;

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

    valueToSearch: number;

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
        }, SPEED_TO_RUN);
        this.valueToSearch = +this.searchValue.nativeElement.value;
    }

    private linearSearch(): void {
        const allBars = this.barsAll._results;
        allBars[0].condition = true;
        let index = 0;
        setTimeout(() => {
            const intervalId = setInterval(() => {
                allBars[index].condition = false;
                if (index >= this.barsValue.length) {
                    clearInterval(intervalId);
                }
                if (this.barsValue[index].value === this.valueToSearch) {
                    clearInterval(intervalId);
                } else {
                    index += 1;
                }
                allBars[index].condition = true;
            }, (SPEED_TO_RUN / this.speedToRun));
        }, (SPEED_TO_RUN / this.speedToRun));
    } // this line is being removed because i remembered i am NOOB

    // calculateMid = () => {
    //     return
    // }

    private binarySearch(): void {
        const allBars = this.barsAll._results;
        let [startIndex, lastIndex] = [0, this.barsAll.length];
        let mid = Math.floor((startIndex + lastIndex) / 2);
        allBars[mid].condition = true;
        setTimeout(() => {
            const intervalId = setInterval(() => {
                if ((startIndex > lastIndex) || (lastIndex < 0) || (startIndex >= this.barsValue.length)) {
                    clearInterval(intervalId);
                } else {
                    const currentValue = this.barsValue[mid].value;
                    allBars[mid].condition = false;
                    if (this.valueToSearch === currentValue) {
                        clearInterval(intervalId);
                    } else if (this.valueToSearch < currentValue) {
                        lastIndex = mid - 1;
                    } else {
                        startIndex = mid + 1;
                    }
                    mid = Math.floor((startIndex + lastIndex) / 2);
                    if (mid >= 0 && mid < this.barsValue.length) {
                        allBars[mid].condition = true;

                    }
                }
            }, (SPEED_TO_RUN / this.speedToRun));
        }, (SPEED_TO_RUN / this.speedToRun));
    }

    private interpolationSearch(): void {

    }

    private exponentialSearch(): void {

    }

    private fibonacciSearch(): void {

    }

    private jumpSearch(): void {
        const allBars = this.barsAll._results;

        const jumpSize = Math.floor(Math.sqrt(this.barsValue.length));
        let val = jumpSize;
        while (val <= this.barsValue.length) {
            if ((this.barsValue[val].value > this.valueToSearch) || (val >= this.barsValue.length)) {
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
                    if (this.barsValue[i].value === this.valueToSearch) {
                        clearInterval(intervalId);
                    } else {
                        i += 1;
                    }
                    allBars[i].condition = true;
                } else {
                    clearInterval(intervalId);
                }
            }, (SPEED_TO_RUN / this.speedToRun));
        }, (SPEED_TO_RUN / this.speedToRun));
    }
}
