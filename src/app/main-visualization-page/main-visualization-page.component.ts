import {Component, OnInit} from '@angular/core';
import {AlgorithmData, optionsAvailableSearch, searchingAlgorithmsData} from '../../sharedClasses/classTemplate';


@Component({
    selector: 'app-main-visualization-page',
    templateUrl: './main-visualization-page.component.html',
    styleUrls: ['./main-visualization-page.component.css'],
    providers: []
})
export class MainVisualizationPageComponent implements OnInit {
    isDisplayed = false;
    algoName: string;

    constructor() {
    }

    ngOnInit(): void {
    }

    updateChanges(event: { algoName: string, buttonPressed: boolean }): void {
        this.isDisplayed = event.buttonPressed;
        this.algoName = event.algoName;
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

