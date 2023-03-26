describe('first test', () =>{
    var testobject: any;

    beforeEach(()=>{
        testobject ={}
    });

    it('should return true if a is true', ()=>{
        // arrange
        testobject.a = false;

        //act

        testobject.a= true;

        // assert

        expect(testobject.a).toBe(true);
    })
})