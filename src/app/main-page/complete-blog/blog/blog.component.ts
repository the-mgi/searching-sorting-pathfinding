import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Blog, blogsData} from '../../../../sharedClasses/classTemplate';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

    blogPostData: Blog;
    clock = '&#128339;';
    book = '&#128214;';
    bookmarkStatus = 'Bookmark Added';
    @ViewChild('popup') popup: ElementRef;

    constructor(private activatedRoute: ActivatedRoute, private renderer: Renderer2) {
    }

    ngOnInit(): void {
        this.blogPostData = blogsData.filter(object => {
            return object.id === this.activatedRoute.snapshot.params['blog-id'];
        })[0];
        this.bookmarkStatus = this.blogPostData.isBookmarked ? this.bookmarkStatus : 'Bookmark Removed';
    }

    bookmark(): void {
        this.blogPostData.isBookmarked = !this.blogPostData.isBookmarked;
        this.bookmarkStatus = this.bookmarkStatus === 'Bookmark Added' ? 'Bookmark Removed' : 'Bookmark Added';
        this.blogPostData.isBookmarked ? this.updateBookmarkVisibility('visible') : this.updateBookmarkVisibility('visible');
    }

    updateBookmarkVisibility = (show: string): void => {
        this.func(show);
        show = show === 'visible' ? 'hidden' : 'visible';
        setTimeout(() => {
            this.func(show);
            console.log('value of show is: ' + show);
        }, 1500);
    }

    func = (show: string) => {
        this.renderer.setStyle(this.popup.nativeElement, 'visibility', show);
    }
}
