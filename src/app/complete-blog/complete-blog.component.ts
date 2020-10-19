import {Component, OnInit} from '@angular/core';
import {Blog} from '../../sharedClasses/classInterfaces';

@Component({
    selector: 'app-complete-blog',
    templateUrl: './complete-blog.component.html',
    styleUrls: ['./complete-blog.component.css']
})
export class CompleteBlogComponent implements OnInit {

    blogs: Blog[] = [
        new Blog(
            'Muhammad Usama',
            new Date(),
            'How I launched my First Angular Application?',
            'Including my first experience of Learning, Creating and Deploying Angular Application',
            'The complete content of my first blog..!!!'
        )
    ];

    constructor() {
    }

    ngOnInit(): void {
    }

}
