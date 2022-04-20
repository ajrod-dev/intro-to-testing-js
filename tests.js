// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

// plusOne() test

describe('plusOne', function () {
    it('should be a defined function', function () {
        expect(typeof plusOne).toBe('function');
    });
    it('should return a number', function() {
        expect(typeof plusOne()).toBe('number');
    });
    it('should return 5 when passed 4', function () {
        expect(plusOne(4)).toBe(5);
    });
})

// sayHello
describe('sayHello', function(){
    it('should be a defined function', function(){
        expect(typeof sayHello).toBe('function');
    });
    it('should be a string', function(){
        expect(typeof sayHello()).toBe('string');
    });
    it('should return "Hello, Jane!"', function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return "Hello, Alex!"', function () {
        expect(sayHello('Alex')).toBe('Hello, Alex!');
    });
    it('should return "Hello, Pat!"', function(){
        expect(sayHello("Pat")).toBe('Hello, Pat!');
    })
    it('should not return undefined', function () {
        expect(sayHello()).not.toBe(undefined);
    })
})


