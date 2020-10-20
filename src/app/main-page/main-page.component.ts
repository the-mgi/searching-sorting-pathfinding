import {Component, OnInit} from '@angular/core';
import {sortingAlgorithms, searchingAlgorithms, pathfindingAlgorithms} from '../../sharedClasses/classTemplate';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

    sortingAlgorithms = sortingAlgorithms;
    searchingAlgorithms = searchingAlgorithms;
    pathfindingAlgorithms = pathfindingAlgorithms;

    constructor() {
    }


    ngOnInit(): void {
    }

}
