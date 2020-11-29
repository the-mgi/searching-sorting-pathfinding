import {Component, OnInit} from '@angular/core';
import {blogsData} from '../../../../sharedClasses/classTemplate';

@Component({
    selector: 'app-blog-preview',
    templateUrl: './blog-preview.component.html',
    styleUrls: ['./blog-preview.component.css']
})
export class BlogPreviewComponent implements OnInit {

    blogs = blogsData;
    clock = '&#128339;';
    book = '&#128214;';
    options = [
        {id: 'date', name: 'Date'},
        {id: 'popular', name: 'Popular'},
        {id: 'rTime', name: 'Reading Time'}
    ];

    constructor() {
    }

    ngOnInit(): void {
    }

    doSomething(): void {
        // this.blogs.push({
        //     writtenBy: 'Muhammad Usama',
        //     writtenDate: new Date(),
        //     heading: 'How to add Github Gists in Angular Apps?',
        //     description: 'Including my first experience of Learning, Creating and Deploying Angular Application',
        //     content: 'The complete content of my first blog..!!!',
        //     numberOfTimesRead: 100,
        //     minRead: 9,
        //     id: 'zyx03'
        // });
    }

    selectOption(event: { nameAlgo: string }): void {
        switch (event.nameAlgo) {
            case 'Date':
                this.sortByDate();
                break;
            case 'Popular':
                this.sortByTimesRead();
                break;
            case 'Reading Time':
                this.sortByMinRead();
                break;
        }
    }

    sortByDate(): void {
        this.blogs.sort((a, b) => {
            // @ts-ignore
            return b.writtenDate - a.writtenDate;
        });
    }

    sortByTimesRead(): void {
        this.blogs.sort((a, b) => {
            return b.numberOfTimesRead - a.numberOfTimesRead;
        });
    }

    sortByMinRead(): void {
        this.blogs.sort((a, b) => {
            return a.minRead - b.minRead;
        });
    }
}
