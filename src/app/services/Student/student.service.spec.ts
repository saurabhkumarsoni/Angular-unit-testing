import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { StudentService } from './student.service';

describe('StudentService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let service: StudentService;
  let mockStudentService: jasmine.SpyObj<StudentService>;

  beforeEach(() => {
    let httpClientSpyObj =jasmine.createSpyObj('HttpClient', ['get', 'delete', 'put', 'post']);
    TestBed.configureTestingModule({
      providers: [StudentService,  {
        provide: HttpClient,
        useValue: httpClientSpyObj
    }]
    });
    service = TestBed.inject(StudentService);
    httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should call saveDetails', ()=>{
    const studentInfo = { name: 'John Doe', age: 25 };
    httpClientSpy.post.and.returnValue(of(studentInfo));
service.saveDetails(studentInfo).subscribe({
    next: (posts) =>{
        expect(posts).toEqual(studentInfo);
    },
    error: () =>{}
});
expect(httpClientSpy.post).toHaveBeenCalledTimes(1)
});

  
});
