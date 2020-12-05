import {Component, OnInit} from '@angular/core';
import {optionsAvailablePathfinding, optionsAvailableSpeedValues} from '../../../sharedClasses/classTemplate';

@Component({
    selector: 'app-pathfinding',
    templateUrl: './pathfinding.component.html',
    styleUrls: ['./pathfinding.component.css']
})
export class PathfindingComponent implements OnInit {
    selectAlgorithm = 'Select Algorithm';
    optionsAvailablePath = optionsAvailablePathfinding;
    optionsAvailableSpeedValues = optionsAvailableSpeedValues;
    algorithm = 'Algorithm';
    speedToRun: number;

    constructor() {
    }

    ngOnInit(): void {
    }

    setAlgorithmName(event: { nameAlgo: string }): void {
        this.algorithm = event.nameAlgo;
    }

    updateSpeed(event: { speedToRun: string }): void {
        this.speedToRun = +event.speedToRun.substr(0, event.speedToRun.length - 1); // because we have speeds like 1.5x
        console.log(this.speedToRun);
    }

    startVisualization(): void {
    }
}
