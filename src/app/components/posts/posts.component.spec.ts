import { Post } from "src/app/models/Post"
import { PostsComponent } from "./posts.component";
import {of} from 'rxjs';
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { PostService } from "src/app/services/Post/post.service";
import { Component, Input, NO_ERRORS_SCHEMA } from "@angular/core";
import { PostComponent } from "../post/post.component";
import { By } from "@angular/platform-browser";

describe('PostsComponent', ()=>{
    let POST: Post[];
    let component: PostsComponent;
    let mockPostService: any;
    let fixture: ComponentFixture<PostsComponent>;

    beforeEach(() =>{
        POST = [{
            id: 1,
            body: 'body 1',
            title: 'title 1'
        },
        {
            id: 2,
            body: 'body 2',
            title: 'title 2'
        },
        {
            id: 3,
            body: 'body 3',
            title: 'title 3'
        }
    ];

    mockPostService = jasmine.createSpyObj(['getPost', 'deletePost'])

    TestBed.configureTestingModule({
        declarations:[PostsComponent, PostComponent],
        providers: [
            {
                provide: PostService,
                useValue: mockPostService
            }
        ],
        schemas: [NO_ERRORS_SCHEMA] // this is the one way to remove error but not good practice
    });

    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;

    })

    it('should set posts from the service directly', ()=>{
        mockPostService.getPost.and.returnValue(of(POST));
        fixture.detectChanges();
        expect(component.posts.length).toBe(3)
    })

    describe('delete', ()=>{

        beforeEach(()=>{
            // Arrange
            mockPostService.deletePost.and.returnValue(of(true))
            component.posts = POST;
        })
        it('should delete the selected post from the posts', ()=>{
           // act
            component.deletePost(POST[1]);
            expect(component.posts.length).toBe(2);
        })

        it('should call delete method in post service only once', ()=>{
            component.posts = POST;
            component.deletePost(POST[1]);
            expect(mockPostService.deletePost).toHaveBeenCalledTimes(1)
        })

         it('should delete actual selected post in posts ', ()=>{
            component.posts = POST;
            component.deletePost(POST[1]);
            for(let post of component.posts){
                expect(post).not.toEqual(POST[1])
            }
        });

        // it('should call delete method when post component button is clicked', ()=>{
        //     spyOn(component, 'deletePost');
        //     mockPostService.getPost.and.returnValue(of(POST));
        //     fixture.detectChanges();
        //     let postComponentDEs = fixture.debugElement.queryAll(By.directive(PostComponent));

        //     postComponentDEs[0]
        //     .query(By.css('button'))
        //     .triggerEventHandler('click', { preventDefault: () =>{}});
        //     expect(component.deletePost).toHaveBeenCalledWith(POST[0])
        // })

        
    })
})