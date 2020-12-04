describe("Testing for calculateMontlyPayment()", function() {

    it('should calculate the monthly rate correctly', function() {
        const testValues = {
            amount: 23465,
            years: 10,
            rate: 5,
        }
        expect(calculateMonthlyPayment(testValues)).toEqual('$248.88');
    });


    it("should return a result with 2 decimal places", function() {
        const testValues = {
            amount: 100032,
            years: 30,
            rate: 8,
        }
        expect(calculateMonthlyPayment(testValues)).toEqual('$734.00');
    });

    it('should handle invalid entries', function() {
        const testValues = {
            amount: 12000,
            years: "hi",
            rate: 0,
        }
        expect(calculateMonthlyPayment(testValues)).toEqual('Please Enter Positive Integers');

    });

    it('should hanle negative numbers', function() {
        const testValues = {
            amount: -12333,
            years: 23,
            rate: 6,
        }
        expect(calculateMonthlyPayment(testValues)).toEqual('Please Enter Positive Integers');
    });
});