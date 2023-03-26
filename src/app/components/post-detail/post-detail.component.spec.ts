import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDetailComponent } from './post-detail.component';
import { Location } from '@angular/common';
import { PostService } from 'src/app/services/Post/post.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { Post } from 'src/app/models/Post';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
describe('PostDetailComponent', () => {
  let component: PostDetailComponent;
  let fixture: ComponentFixture<PostDetailComponent>;
  let mockPostService: jasmine.SpyObj<PostService>;
  beforeEach( () => {
    let mockActivatedRoute = {
      snapshot: {
        paramMap: {
          get: ()=>{
            return '3'
          }
        }
      }
    }
    mockPostService = jasmine.createSpyObj(['getPost', 'updatePost'])
    let mockLocation = jasmine.createSpyObj(['back'])
     TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ PostDetailComponent ],
      providers: [
        {provide: Location, useValue: mockLocation},
        {provide: PostService, useValue: mockPostService},
        {provide: ActivatedRoute, useValue: mockActivatedRoute}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostDetailComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the post title in div template',()=>{
    mockPostService.getPost.and.returnValue(of({
      id: 3,
      title: 'title 1',
      body: 'body 1'
    } as any))
    fixture.detectChanges();

    const element = fixture.debugElement.query(By.css('h3')).nativeElement as HTMLElement;
    expect(element.textContent).toBe('title 1')
  });

  it('should call goback',()=>{
    component.goBack();
  })

  it('shuld call save',()=>{
    mockPostService.updatePost.and.returnValue(of({
      id: 3,
      title: 'title 1',
      body: 'body 1'
    }))
    // fixture.detectChanges();
    component.save();

  })


});
