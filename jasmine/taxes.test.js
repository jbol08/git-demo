describe('taxes test',function(){
    it('should calculate lower-bracket taxes', function () {
        expect(calculateTaxes(10000)).toEqual(1500);
        expect(calculateTaxes(20000)).toEqual(3000);
      });
      
      it('should calculate higher-bracket taxes', function () {
        expect(calculateTaxes(50000)).toEqual(12500);
        expect(calculateTaxes(80000)).toEqual(20000);
      });
      it('should reject invalid income', function () {
        expect(() =>calculateTaxes('ase')).toThrowError();
        expect(() =>calculateTaxes([1234])).toThrowError();
        expect(() =>calculateTaxes(true)).toThrowError();
      });
})

describe('duplicates test',function(){
    it('should remove duplicates from an array',function(){
        expect(removeDupes([1,1,2,2,3,4])).toEqual([1,2,3,4])
        expect(removeDupes([1,2,3])).toEqual([1,2,3]) 
        expect(removeDupes([1,2,3])).toBeInstanceOf(Array)
    })
    it('should remove duplicates from a string',function(){
        expect(removeStringDupe('hello')).toBe('helo')
        expect(removeStringDupe('hello')).toBeInstanceOf(String)
    })
  
})
 
describe('remove test',function(){
    it('should remove value from array',function(){
        expect(remove([1,2,3,4,5,6],6)).not.toContain(6)
    })
})

describe('submitForm tests', () => {
  it('saves input value to usernames array',() => {
  input.value ='chickenGal'
submitForm();
  expect(usernames.length).toBe(1);
  
  })  
})
afterEach(function (){
    input.value='';
     usernames = [];
})
