import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {BoxProperties, Colors} from '../../../../../sharedClasses/classTemplate';
import {NodeTypeService} from '../../node-type-service/node-type.service';

@Component({
    selector: 'app-grid-box',
    template: `
        <div
            class="box"
            #box
            [style.backgroundColor]="properties.color"
            [style.width.px]="properties.width ? properties.width : 20"
            [style.height.px]="properties.height ? properties.height : 20"
            [style.borderRadius.px]="properties.radius ? properties.radius : 3"
            (click)="markNode()"
        ></div>
    `,
    styles: [`
        .box {
            width: 20px;
            height: 20px;
            border: .3px solid black;
            margin-right: .8px;
            margin-bottom: .5px;
            transition: .3s;
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
    @Input() isCodeNode = false;

    constructor(private nodeTypeService: NodeTypeService) {
    }

    ngOnInit(): void {
    }

    markNode(): void {
        // i am using this component also to dente the color codes on the pathfinding component, thereby instead of making another component
        // as separate component just adding the variable isCodeNode to achieve the intended results.
        if (this.isCodeNode) {
            return;
        }
        const color: Colors = this.nodeTypeService.getNodeColor();
        // i am not liking this below if statements because they are too many.. and currently don't know how to reduce them
        // in future i will definitely try to do something about it
        // TODO DO SOMETHING ABOUT ALL THESE IF STATEMENTS
        if (this.properties.color === Colors.WHITE) { // if the node is available to color
            if (color) { // if any node type is even selected..!!

                if (color === Colors.GREEN && !this.nodeTypeService.startNodeAdded) {
                    this.nodeTypeService.startNodeAdded = this.properties;
                    this.properties.color = color;
                } else if (color === Colors.ORANGE && !this.nodeTypeService.goalNodeAdded) {
                    this.nodeTypeService.goalNodeAdded = this.properties;
                    this.properties.color = color;
                } else if (color === Colors.RED) {
                    this.properties.color = color;
                }

            } else {
                alert('No Node Type is Selected..!!');
            }
        } else {
            this.resetNode();
        }
    }

    resetNode(): void {
        if (this.properties.color === Colors.GREEN) {
            this.nodeTypeService.startNodeAdded = undefined;
        } else if (this.properties.color === Colors.ORANGE) {
            this.nodeTypeService.goalNodeAdded = undefined;
        }
        this.properties.color = Colors.WHITE;
    }
}
