import {Component, OnInit, Renderer2} from '@angular/core';
import {Colors, contains, optionsAvailablePathfinding, optionsAvailableSpeedValues} from '../../../sharedClasses/classTemplate';
import {ActivatedRoute, Router} from '@angular/router';
import {NodeTypeService} from './node-type-service/node-type.service';

@Component({
    selector: 'app-pathfinding',
    templateUrl: './pathfinding.component.html',
    styleUrls: ['./pathfinding.component.css'],
    providers: [NodeTypeService]
})
export class PathfindingComponent implements OnInit {
    selectAlgorithm = 'Select Algorithm';
    optionsAvailablePath = optionsAvailablePathfinding;
    optionsAvailableSpeedValues = optionsAvailableSpeedValues;
    algorithm = 'Algorithm';
    speedToRun: number;

    colorCodesLeft = [];
    colorCodesRight = [];

    eventTarget: EventTarget;

    constructor(
        private renderer: Renderer2,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private nodeTypeService: NodeTypeService
    ) {
    }

    //  start node => green
    //  last node => orange
    //  path node => blue
    //  open node => white
    //  barrier node => red
    //  closed node => purple

    ngOnInit(): void {
        const namee = this.activatedRoute.snapshot.params['name-algo'];
        this.setAlgorithmName({nameAlgo: namee});
        this.selectAlgorithm = namee;
        this.colorCodesLeft.push(
            {color: Colors.GREEN, text: 'Starting Node'},
            {color: Colors.ORANGE, text: 'Goal Node'},
            {color: Colors.RED, text: 'Barrier Node'}
        );
        this.colorCodesRight.push(
            {color: Colors.WHITE, text: 'Open Node'},
            {color: Colors.BLUE, text: 'Final Path'},
            {color: Colors.PURPLE, text: 'Node Already Visited'}
        );
    }

    setAlgorithmName(event: { nameAlgo: string }): void {
        this.algorithm = event.nameAlgo;
        this.router.navigate(['/visualizer', 'pathfinding', this.algorithm]);

    }

    updateSpeed(event: { speedToRun: string }): void {
        this.speedToRun = +event.speedToRun.substr(0, event.speedToRun.length - 1); // because we have speeds like 1.5x
        console.log(this.speedToRun);
    }

    handleClicks(event: Event): void {
        this.renderer.setStyle(event.currentTarget, 'background-color', '#b3cafa');
        if (this.eventTarget) {
            this.renderer.setStyle(this.eventTarget, 'background-color', 'transparent');
        }
        if (this.eventTarget === event.currentTarget) {
            this.eventTarget = undefined;
            this.nodeTypeService.updateNodeColor(undefined);
            return;
        }
        this.eventTarget = event.currentTarget;
        this.nodeTypeService.updateNodeColor(this.eventTarget);
    }

    startVisualization(): void {
        if (contains(this.algorithm, 'Dijkstra')) {
            this.visualizeDijkstra();
        } else if (contains(this.algorithm, 'Star')) {
            this.visualizeAStar();
        }
    }

    visualizeDijkstra(): void {
    }

    visualizeAStar(): void {
    }
}
