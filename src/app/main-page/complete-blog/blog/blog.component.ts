import {Component, Input, OnInit} from '@angular/core';
import {Blog} from '../../../../sharedClasses/classTemplate';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

    @Input() blogPostData: Blog;

    constructor() {
    }

    ngOnInit(): void {
    }

}
