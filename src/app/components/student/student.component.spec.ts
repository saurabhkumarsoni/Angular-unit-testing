import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { StudentService } from 'src/app/services/Student/student.service';

import { StudentComponent } from './student.component';

describe('StudentComponent', () => {
  let component: StudentComponent;
  let fixture: ComponentFixture<StudentComponent>;
  let studentService: jasmine.SpyObj<StudentService>;
  beforeEach(async () => {
    const studentServiceSpy = jasmine.createSpyObj('StudentService', ['saveDetails']);
    await TestBed.configureTestingModule({
      declarations: [ StudentComponent ],
      providers: [{
        provide: StudentService,
        useValue: studentServiceSpy
    }],
      imports: [AppRoutingModule, HttpClientModule]
    })
    .compileComponents();
    studentService = TestBed.inject(StudentService) as jasmine.SpyObj<StudentService>;


    fixture = TestBed.createComponent(StudentComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call saveDetails() method of studentService with correct arguments', () => {
    const info = {
      sumVal: 10,
      name: 'Saurabh Kumar'
    };
    const expectedResponse = { id: 1, name: 'Saurabh Kumar', total: 10 };
    studentService.saveDetails.and.returnValue(of(expectedResponse));
    component.saveData();

    expect(studentService.saveDetails).toHaveBeenCalledWith(info);
    expect(component.results).toEqual(expectedResponse);
  });

  it('should return "Fail" if the calculated result is less than or equal to 40', () => {
    spyOn(component, 'calculate').and.returnValue(30);
    const result = component.studentResult();
    expect(result).toEqual('Fail');
  });
  
  it('should return "pass" if the calculated result is greater than 40', () => {
    spyOn(component, 'calculate').and.returnValue(60);
    const result = component.studentResult();
    expect(result).toEqual('average');
  });
  
  it('should return "average" if the calculated result is exactly 40', () => {
    spyOn(component, 'calculate').and.returnValue(140); 
    const result = component.studentResult();
    expect(result).toEqual('excellent');
  });



});
