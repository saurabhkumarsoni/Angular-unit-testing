import { StrengthPipe } from './strength.pipe';

describe('StrengthPipe', () => {
  it('create an instance', () => {
    const pipe = new StrengthPipe();
    expect(pipe).toBeTruthy();
  });

  it('shuold display weak if 5 value is passed', ()=>{
    const pipe = new StrengthPipe();
    expect(pipe.transform(5)).toEqual('5(Weak)')
  })

  it('shuold display Strong if 15 value is passed', ()=>{
    const pipe = new StrengthPipe();
    expect(pipe.transform(15)).toEqual('15(Strong)')
  })

  it('shuold display Strongest if 25 value is passed', ()=>{
    const pipe = new StrengthPipe();
    expect(pipe.transform(25)).toEqual('25(Strongest)')
  })
});
