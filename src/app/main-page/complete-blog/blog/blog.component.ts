import {Component, OnInit} from '@angular/core';
import {Blog, blogsData} from '../../../../sharedClasses/classTemplate';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

    blogPostData: Blog;

    constructor(private activatedRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.blogPostData = blogsData.filter(object => {
            return object.id === this.activatedRoute.snapshot.params['blog-id'];
        })[0];
    }
}
