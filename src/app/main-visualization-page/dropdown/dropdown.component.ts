import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-dropdown',
    templateUrl: './dropdown.component.html',
    styleUrls: ['./dropdown.component.css'],
    encapsulation: ViewEncapsulation.Emulated
})
export class DropdownComponent implements OnInit {

    @Input() optionsAvailable: { id: string, name: string }[];
    @Input() category: string;
    @Input() width: number;
    @Output() algorithmName = new EventEmitter<{ nameAlgo: string }>();

    notDown = false;

    constructor(private elementsReference: ElementRef) {
    }

    ngOnInit(): void {
    }

    labelClicked(event): void {
        const str = event.toElement.children[0].innerText;
        this.elementsReference.nativeElement.querySelector('.selected').innerHTML = str;
        this.notDown = !this.notDown;
        this.algorithmName.emit({nameAlgo: str});
    }
}
