import { Component, OnInit } from '@angular/core';
import {optionsAvailablePathfinding, optionsAvailableSearch, optionsAvailableSort} from '../../../sharedClasses/classTemplate';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    sortingAlgorithms = optionsAvailableSort;
    searchingAlgorithms = optionsAvailableSearch;
    pathfindingAlgorithms = optionsAvailablePathfinding;

  constructor() { }

  ngOnInit(): void {
  }

}
