import { HttpClient } from "@angular/common/http"
import { Component, inject } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { PostService } from "./post.service";

describe('PostService', ()=>{
    let httpClientSpy: jasmine.SpyObj<HttpClient>;
    let postService: PostService;
    let POST = [{
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
    beforeEach(()=>{
        let httpClientSpyObj =jasmine.createSpyObj('HttpClient', ['get']);
        TestBed.configureTestingModule({
            providers: [PostService, {
                provide: HttpClient,
                useValue: httpClientSpyObj
            }]
        })
      
        postService = TestBed.inject(PostService);
        httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
    })

    describe('getPosts()', ()=>{
        it('should return expected posts when getpost is called', ()=>{
            httpClientSpy.get.and.returnValue(of(POST));
        postService.getPost().subscribe({
            next: (posts) =>{
                expect(posts).toEqual(POST);
            },
            error: () =>{}
        });
        expect(httpClientSpy.get).toHaveBeenCalledTimes(1)
        });

        

        
    })
})