import {Component, OnInit, ViewChild, ViewChildren} from '@angular/core';
import {BoxProperties, randomColor} from '../../../../sharedClasses/classTemplate';

@Component({
    selector: 'app-complete-grid',
    templateUrl: './complete-grid.component.html',
    styleUrls: ['./complete-grid.component.css']
})
export class CompleteGridComponent implements OnInit {
    matrix;
    totalBoxes: number;

    @ViewChild('table') table;
    @ViewChild('row') row;
    @ViewChildren('cc') boxes;

    constructor() {
    }

    ngOnInit(): void {
        const BOX_SIZE = 20;
        const MARGIN_SPACE_HORIZONTAL = 200;
        const MARGIN_SPACE_VERTICAL = 250;
        const WIDTH_SCREEN = screen.width;
        const BOXES_PER_LINE = Math.floor((WIDTH_SCREEN - MARGIN_SPACE_HORIZONTAL) / BOX_SIZE);
        const TOTAL_LINES = Math.floor((screen.height - MARGIN_SPACE_VERTICAL) / BOX_SIZE);
        this.matrix = this.getMatrix(BOXES_PER_LINE, TOTAL_LINES);
    }

    getMatrix(totalBoxesPerLine: number, totalLines: number): any[] {
        return [...Array(totalLines)].fill(0).map((singleRow, indexZero) => [...Array(totalBoxesPerLine)].map((entry, indexOne) => {
            const props: BoxProperties = {rowNumber: indexZero, columnNumber: indexOne, color: '#ffffff'};
            return props;
        }));
    }

    updateOneColor(): void {
        this.matrix[0][0].color = '#000000';
        this.matrix[0][1].color = 'aliceblue';
        this.matrix[0][2].color = 'royalblue';
        this.matrix[0][3].color = 'blue';
        this.matrix[0][4].color = 'green';
        this.matrix[0][5].color = 'yellow';
        this.matrix[0][6].color = 'orange';
        console.log(this.matrix[0][0].color);
    }
}
