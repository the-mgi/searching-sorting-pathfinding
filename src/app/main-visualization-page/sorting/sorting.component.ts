import {Component, ElementRef, OnInit, ViewChild, ViewChildren} from '@angular/core';
import {
    Algorithm,
    Bar,
    optionsAvailableSort,
    optionsAvailableSpeedValues,
    parseArray,
    randomColor,
    sleep
} from '../../../sharedClasses/classTemplate';
import {ActivatedRoute, Router} from '@angular/router';

const SPEED_TO_RUN = 3000;

@Component({
    selector: 'app-sorting',
    templateUrl: './sorting.component.html',
    styleUrls: ['./sorting.component.css']
})
export class SortingComponent implements OnInit {
    selectAlgorithm = 'Select Algorithm';
    optionsAvailableSort = optionsAvailableSort;
    optionsAvailableSpeedValues = optionsAvailableSpeedValues;
    algorithm = 'Algorithm';
    speedToRun: number;
    isBarsCreated: boolean;
    barsValue: Bar[];
    isClassAttached: boolean;
    text: string;
    allBarsResult;
    length: number;

    @ViewChild('valueToSearch') searchValue: ElementRef;
    @ViewChildren('cc') allBars;

    constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        const namee = this.activatedRoute.snapshot.params['name-algo'];
        this.setAlgorithmName({nameAlgo: namee});
        this.selectAlgorithm = namee;
    }

    setAlgorithmName(event: { nameAlgo: string }): void {
        this.algorithm = event.nameAlgo;
        this.router.navigate(['/visualizer', 'sorting', this.algorithm]);

    }

    updateSpeed(event: { speedToRun: string }): void {
        this.speedToRun = +event.speedToRun.substr(0, event.speedToRun.length - 1); // because we have speeds like 1.5x
        console.log(this.speedToRun);
    }

    async addBarsInPage(yourArrayInput: HTMLInputElement): Promise<void> {
        const yourArray = yourArrayInput.value;

        this.barsValue = [];
        const array = parseArray(yourArray);
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
        await setTimeout(() => {
            this.allBarsResult = this.allBars._results;
            this.length = this.allBarsResult.length;
            console.log(this.allBarsResult[0]);
            console.log(this.allBars._results);
        }, 1000);
        setTimeout(() => {
            switch (this.algorithm) {
                case Algorithm.SELECTION_SORT:
                    this.selectionSort();
                    break;
                case Algorithm.BUBBLE_SORT:
                    this.bubbleSort();
                    break;
                case Algorithm.QUICK_SORT:
                    this.quickSort();
                    break;
                case Algorithm.MERGE_SORT:
                    this.mergeSort();
                    break;
                case Algorithm.RADIX_SORT:
                    this.radixSort();
                    break;
                case Algorithm.BUCKET_SORT:
                    this.bucketSort();
                    break;
                case Algorithm.BITONIC_SORT:
                    this.bitonicSort();
                    break;
                case Algorithm.PANCAKE_SORT:
                    this.pancakeSort();
                    break;
            }
        }, SPEED_TO_RUN);
    }

    private async selectionSort(): Promise<any> {
        const length = this.barsValue.length;
        for (let i = 0; i < length; i++) {
            let currentI = this.barsValue[i].value;
            let index = -1;

            this.allBarsResult[i].condition = true;
            await sleep(SPEED_TO_RUN / this.speedToRun);

            for (let j = i + 1; j < length; j++) {
                const currentJ = this.barsValue[j].value;

                await sleep(SPEED_TO_RUN / this.speedToRun);
                this.allBarsResult[j].condition = false;

                console.log(currentJ);
                if (currentJ < currentI) {
                    this.allBarsResult[j].condition = true;
                    await sleep(SPEED_TO_RUN / this.speedToRun);

                    currentI = currentJ;
                    index = j;
                }
            }
            if (index !== -1) {
                [this.barsValue[i], this.barsValue[index]] = [this.barsValue[index], this.barsValue[i]];
            }

            this.allBarsResult[i].condition = false;
            await sleep(SPEED_TO_RUN / this.speedToRun);
        }
    }

    private bubbleSort(): void {

    }

    private quickSort(): void {

    }

    private mergeSort(): void {

    }

    private radixSort(): void {

    }

    private bucketSort(): void {

    }

    private bitonicSort(): void {

    }

    private pancakeSort(): void {

    }
}
