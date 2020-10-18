import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

    sortingAlgorithms: string[] = [
        'Selection Sort',
        'Bubble sort',
        'Quick Sort',
        'Merge Sort',
        'Radix Sort',
        'Bucket Sort',
        'Bitonic Sort',
        'Pancake Sort'
    ];
    searchingAlgorithms: string[] = [
        'Linear Search',
        'Binary Search',
        'Jump Search',
        'Interpolation Search',
        'Exponential Search',
        'Fibonacci Search'
    ];
    pathfindingAlgorithms: string[] = [
        'A Star Algorithm',
        'Dijkstra\'s Algorithm'
    ];

    constructor() {
    }


    ngOnInit(): void {
    }

}
