import {Component, ElementRef, OnInit, ViewChild, ViewChildren} from '@angular/core';
import {
    Algorithm,
    Bar,
    optionsAvailableSearch,
    optionsAvailableSpeedValues,
    parseArray,
    randomColor
} from '../../../sharedClasses/classTemplate';
import {ActivatedRoute, Router} from '@angular/router';

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
    selectAlgorithm = 'Select Algorithm';

    barsValue: Bar[];
    isBarsCreated: boolean;
    text: string;

    isClassAttached: boolean;

    valueToSearch: number;

    @ViewChild('valueToSearch') searchValue: ElementRef;
    @ViewChildren('cc') barsAll;

    constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    }

    ngOnInit(): void {
        this.isBarsCreated = false;
        this.isClassAttached = false;
        const namee = this.activatedRoute.snapshot.params['name-algo'];
        this.setAlgorithmName({nameAlgo: namee});
        this.selectAlgorithm = namee;
    }

    setAlgorithmName(event: { nameAlgo: string }): void {
        this.algorithm = event.nameAlgo;
        this.router.navigate(['/visualizer', 'searching', this.algorithm]);
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
                if (index >= this.barsValue.length) {
                    clearInterval(intervalId);
                }
                if (this.barsValue[index].value === this.valueToSearch) {
                    clearInterval(intervalId);
                } else {
                    allBars[index].condition = false;
                    index += 1;
                    allBars[index].condition = true;
                }
            }, (SPEED_TO_RUN / this.speedToRun));
        }, (SPEED_TO_RUN / this.speedToRun));
    } // this line is being removed because i remembered i am NOOB

    calculateMid = (startIndex: number, lastIndex: number) => {
        return Math.floor((startIndex + lastIndex) / 2);
    }

    private binarySearch(): void {
        const allBars = this.barsAll._results;
        let [startIndex, lastIndex] = [0, this.barsValue.length];
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

    calculatePosition = (startIndex, lastIndex) => {
        return Math.floor(startIndex + (
            (lastIndex - startIndex) /
            (this.barsValue[lastIndex].value - this.barsValue[startIndex].value) *
            (this.valueToSearch - this.barsValue[startIndex].value)));
    }

    private interpolationSearch(): void {
        const allBars = this.barsAll._results;
        let [startIndex, lastIndex] = [0, this.barsValue.length - 1];
        let mid = this.calculatePosition(startIndex, lastIndex);
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
                    mid = this.calculatePosition(startIndex, lastIndex);
                    if (mid >= 0 && mid < this.barsValue.length) {
                        allBars[mid].condition = true;
                    }
                }
            }, (SPEED_TO_RUN / this.speedToRun));
        }, (SPEED_TO_RUN / this.speedToRun));
    }

    private exponentialSearch(): void {
        const allBars = this.barsAll._results;
        if (this.barsValue[0].value > this.valueToSearch) {
            return;
        }
        let i = 1;
        while ((i < this.barsValue.length) && (this.barsValue[i].value <= this.valueToSearch)) {
            i *= 2;
        }
        let [startIndex, lastIndex] = [Math.floor(i / 2), i];
        lastIndex = Math.min(lastIndex, this.barsValue.length - 1);
        let mid = this.calculateMid(startIndex, lastIndex);
        allBars[mid].condition = true;
        setTimeout(() => {
            const intervalId = setInterval(() => {
                if (startIndex <= lastIndex) {
                    if (this.barsValue[mid].value === this.valueToSearch) {
                        clearInterval(intervalId);
                        return;
                    }
                    allBars[mid].condition = false;
                    if (this.valueToSearch < this.barsValue[mid].value) {
                        lastIndex = mid - 1;
                    } else {
                        startIndex = mid + 1;
                    }
                    mid = Math.floor((startIndex + lastIndex) / 2);
                    if (mid >= this.barsValue.length) {
                        clearInterval(intervalId);
                        return;
                    }
                    allBars[mid].condition = true;
                } else {
                    allBars[mid].condition = false;
                    clearInterval(intervalId);
                    return;
                }
            }, (SPEED_TO_RUN / this.speedToRun));
        }, (SPEED_TO_RUN / this.speedToRun));
    }

    private fibonacciSearch(): void {

    }

    private jumpSearch(): void {
        const allBars = this.barsAll._results;
        const jumpSize = Math.floor(Math.sqrt(this.barsValue.length));
        let val = jumpSize;
        while (val < this.barsValue.length) {
            if (this.barsValue[val].value > this.valueToSearch) {
                break;
            } else {
                val = val + jumpSize;
            }
        }
        let i = (val - jumpSize);
        allBars[i].condition = true;
        val = val > this.barsValue.length ? this.barsValue.length - 1 : val;
        setTimeout(() => {
            const intervalId = setInterval(() => {
                if (i < val) {
                    allBars[i].condition = false;
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

// please change man
