import { TestBed } from '@angular/core/testing';

import { LoggerService } from './logger.service';

describe('LoggerService', () => {
  //arrange
  let service: LoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoggerService]
    });
    service = TestBed.inject(LoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('it shold not have any message at starting', ()=>{
    //act
    let count = service.message.length;
    //assert
    expect(count).toBe(0);
  })

  it('it shold add the message when log is called', ()=>{
    //act
    service.log('message');
    //assert
    expect(service.message.length).toBe(1);
  })

  it('it should clear all the message when clear is called', ()=>{
    //act
    service.clear();
    //assert
    expect(service.message.length).toBe(0);
  })


  it('shuld get IT department if userId is 8 when we pass to getUserData', ()=>{
    //act
    service.getUserData(8);
    const userData = {
      department: 'IT'
    }
    expect(service.userData).toEqual(userData)
  })

  it('shuld get Java department if userId is 25 when we pass to getUserData', ()=>{
    //act
    service.getUserData(25);
    const userData = {
      department: 'Java'
    }
    expect(service.userData).toEqual(userData)
  })

  it('shuld get UI department if userId is 88 when we pass to getUserData', ()=>{
    //act
    service.getUserData(88);
    const userData = {
      department: 'UI'
    }
    expect(service.userData).toEqual(userData)
  })

  it('shuld get Python department if userId is 188 when we pass to getUserData', ()=>{
    //act
    service.getUserData(188);
    const userData = {
      department: 'Python'
    }
    expect(service.userData).toEqual(userData)
  })
});
