import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
    selector: 'app-dropdown',
    templateUrl: './dropdown.component.html',
    styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

    optionsAvailable = [
        {id: 'selection', name: 'Selection Sort'},
        {id: 'bubble', name: 'Bubble Sort'},
        {id: 'quick', name: 'Quick Sort'},
        {id: 'merge', name: 'Merge Sort'},
        {id: 'radix', name: 'Radix Sort'},
        {id: 'bucket', name: 'Bucket Sort'},
        {id: 'bitonic', name: 'Bitonic Sort'},
        {id: 'pancake', name: 'Pancake Sort'}
    ];

    notDown = false;
    a: any;

    constructor(private elementsReference: ElementRef) {
    }

    ngOnInit(): void {
    }

    labelClicked(event): void {
        this.elementsReference.nativeElement.querySelector('.selected').innerHTML = event.toElement.children[0].innerText;
        this.notDown = !this.notDown;
    }
}
