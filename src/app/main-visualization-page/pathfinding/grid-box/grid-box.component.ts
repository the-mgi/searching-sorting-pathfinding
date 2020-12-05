import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {BoxProperties} from '../../../../sharedClasses/classTemplate';

@Component({
    selector: 'app-grid-box',
    template: `
        <div class="box" #box [style.backgroundColor]="properties.color"></div>
    `,
    styles: [`
        .box {
            width: 20px;
            height: 20px;
            border: .3px solid black;
            border-radius: 3px;
            margin-right: .8px;
            margin-bottom: .5px;
            transition: .5s;
        }

        .box:hover {
            cursor: pointer;
            background-color: #585853;
        }
    `]
})
export class GridBoxComponent implements OnInit {
    @ViewChild('box') box: ElementRef;
    @Input() great: number;
    @Input() properties: BoxProperties;

    constructor() {
    }

    ngOnInit(): void {
    }
}
