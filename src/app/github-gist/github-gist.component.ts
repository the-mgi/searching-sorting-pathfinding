import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
    selector: 'app-github-gist',
    templateUrl: './github-gist.component.html',
    styleUrls: ['./github-gist.component.css']
})
export class GithubGistComponent implements OnInit, AfterViewInit {

    constructor() {
    }

    @ViewChild('iframe') iframe: ElementRef;

    @Input() gistUrl: string;

    ngAfterViewInit(): void {
        const doc = this.iframe.nativeElement.contentDocument || this.iframe.nativeElement.contentElement.contentWindow;
        const content = `
        <body>
            <script type="text/javascript" src="${this.gistUrl}"></script>
        </body>
`;
        doc.open();
        doc.write(content);
        doc.close();
    }

    ngOnInit(): void {
    }

}
