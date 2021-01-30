import {Component, OnInit, ViewChild, ViewChildren} from '@angular/core';
import {BoxProperties, Colors, sleep} from '../../../../sharedClasses/classTemplate';
import {NodeTypeService} from '../node-type-service/node-type.service';

const BOX_SIZE = 20;
const MARGIN_SPACE_HORIZONTAL = 200;
const MARGIN_SPACE_VERTICAL = 250;
const WIDTH_SCREEN = screen.width;
const BOXES_PER_LINE = Math.floor((WIDTH_SCREEN - MARGIN_SPACE_HORIZONTAL) / BOX_SIZE);
const TOTAL_LINES = Math.floor((screen.height - MARGIN_SPACE_VERTICAL) / BOX_SIZE);

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

    count = 0;

    constructor(private nodeTypeService: NodeTypeService) {
    }

    ngOnInit(): void {
        this.matrix = this.getMatrix(BOXES_PER_LINE, TOTAL_LINES);
    }

    getMatrix(totalBoxesPerLine: number, totalLines: number): any[] {
        // initialize 2d matrix with values of rows and columns of each BOX_ELEMENT
        return [...Array(totalLines)].map((singleRow, indexZero) => [...Array(totalBoxesPerLine)].map((entry, indexOne) => {
            return new BoxProperties(Colors.WHITE, indexZero, indexOne);
        }));
    }

    updateOneColor(): void {
        const startNode = this.nodeTypeService.startNodeAdded;
        // this.updatingNeighbours(startNode);
        // startNode.neighbours.forEach((entry) => {
        //     entry.createBarrier();
        // });
        startNode.createBarrier();
        this.recursiveFunc(startNode);
    }

    async recursiveFunc(node): Promise<void> {
        this.updatingNeighbours(node);
        for (const singleNode of node.neighbours) {
            singleNode.createBarrier();
            await sleep(200);
            this.count += 1;
            if (this.count <= 1000) {
                this.recursiveFunc(singleNode);
            }
        }
    }

    updatingNeighbours(currentNode: BoxProperties): void {
        const currentRow = currentNode.rowNumber;
        const currentCol = currentNode.columnNumber;
        if ((currentRow < (TOTAL_LINES - 1)) && !(this.matrix[currentRow + 1][currentCol].isBarrier())) {
            currentNode.neighbours.push(this.matrix[currentRow + 1][currentCol]);
        }  // UP CASE
        if ((currentRow > 0) && !(this.matrix[currentRow - 1][currentCol].isBarrier())) {
            currentNode.neighbours.push(this.matrix[currentRow - 1][currentCol]);
        }  // UP CASE
        if ((currentCol > 0) && !(this.matrix[currentRow][currentCol - 1].isBarrier())) {
            currentNode.neighbours.push(this.matrix[currentRow][currentCol - 1]);
        }  // LEFT CASE
        if ((currentCol < BOXES_PER_LINE - 1) && !(this.matrix[currentRow][currentCol + 1].isBarrier())) {
            currentNode.neighbours.push(this.matrix[currentRow][currentCol + 1]);
        }  // RIGHT CASE
    }
}
