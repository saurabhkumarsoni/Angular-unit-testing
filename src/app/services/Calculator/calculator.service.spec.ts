import { TestBed } from "@angular/core/testing";
import { LoggerService } from "../Logger/logger.service";
import { CalculatorService } from "./calculator.service"

describe('calculator service', () =>{
  let loggerServiceSpy: jasmine.SpyObj<LoggerService>;
  let calculator: CalculatorService;

  beforeEach(() =>{
  const mockLoggerService = jasmine.createSpyObj('LoggerService', ['log'])

    TestBed.configureTestingModule({
      providers: [CalculatorService,{
        provide: LoggerService,
        useValue: mockLoggerService
      }]
    })

    calculator = TestBed.inject(CalculatorService);
    loggerServiceSpy = TestBed.inject(
      LoggerService )as jasmine.SpyObj<LoggerService>
  })

  it('it should add two numbers', ()=>{
    // let loggerService = new LoggerService(); // use when mocking anyparticular method
    // spyOn(loggerService, 'log');             // use when mocking anyparticular method
    let result = calculator.add(30, 10);
    expect(result).toBe(40);
    expect(loggerServiceSpy.log).toHaveBeenCalledTimes(1);
  })

  it('it should subtract two numbers', ()=>{
    // let loggerService = new LoggerService();   // use when mocking anyparticular method
    // spyOn(loggerService, 'log');               // use when mocking anyparticular method
    let result = calculator.subtract(30, 10);
    expect(result).toBe(20);
    expect(loggerServiceSpy.log).toHaveBeenCalledTimes(1);
  })
})