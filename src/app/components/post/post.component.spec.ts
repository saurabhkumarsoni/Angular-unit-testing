import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { first } from "rxjs";
import { Post } from "src/app/models/Post";
import { PostComponent } from "./post.component"

describe('post compoent', ()=>{

    let fixture: ComponentFixture<PostComponent>;
    let component: PostComponent;

    beforeEach(()=>{
        TestBed.configureTestingModule({
            declarations: [PostComponent],
            schemas: [NO_ERRORS_SCHEMA]
        })

        fixture = TestBed.createComponent(PostComponent);
        component = fixture.componentInstance;
    })

    it('should create post component using test bed', () =>{
        expect(component).toBeDefined();
    })

    // test cases for html rendering

    it('should render the post title in the anchor element', ()=>{
        const post: Post = {id: 1, body: 'body 1', title: 'title 1'};
        component.post = post;
        fixture.detectChanges();
        const postElement: HTMLElement = fixture.nativeElement;
        const a = postElement.querySelector('a');
        expect(a?.textContent).toContain(post.title);
    })

    it('should raise an event when the delete post is clicked', ()=>{
        const post: Post = {id: 1, body: 'body 1', title: 'dsdsd'};
        component.post = post;
        component.delete.pipe(first()).subscribe((selectedPost) =>{
            expect(selectedPost).toEqual(post);
            component.onDeletePost(new MouseEvent('click'))
        })  
    })

    it('should call one deletePost', ()=>{
        const post: Post = {id: 1, body: 'body 1', title: 'dsdsd'};
        component.post = post;
        component.onDeletePost(new MouseEvent('click'))

    })
})