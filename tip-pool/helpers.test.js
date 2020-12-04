describe("Helpers Test", function() {
    beforeEach(function() {
        billAmtInput.value = 60;
        tipAmtInput.value = 9;
        submitPaymentInfo();
    });

    //Tests for sumPayment total
    it('Should add tipAmnts for each submission', function() {
        expect(sumPaymentTotal('tipAmt')).toEqual(9);

        billAmtInput.value = 100;
        tipAmtInput.value = 25;

        submitPaymentInfo();
        expect(sumPaymentTotal('tipAmt')).toEqual(34);
    });

    it('Should add billAmts for each submission', function() {
        expect(sumPaymentTotal('billAmt')).toEqual(60);

        billAmtInput.value = 32;
        tipAmtInput.value = 12;
        submitPaymentInfo();
        expect(sumPaymentTotal('billAmt')).toEqual(92);
    });
    it('Should add tip percents for each submission', function() {
        expect(sumPaymentTotal('tipPercent')).toEqual(15);

        billAmtInput.value = 32;
        tipAmtInput.value = 8;
        submitPaymentInfo();
        expect(sumPaymentTotal('tipPercent')).toEqual(40);
    });

    //Tests for calculateTipPercent
    it('should calculate the tip of a single bill using calculateTipPercent()', function() {
        expect(calculateTipPercent(100, 25)).toEqual(25);
        expect(calculateTipPercent(81, 9)).toEqual(11);
    });

    //Testing for appendPaymetDeleteBtn
    it('should create a button that deletes the row it was appended to with appendPaymentDeleteBtn', function() {
        submitPaymentInfo();
        expect(document.querySelector('td.remove')).toBeDefined();
    });

    afterEach(function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        allPayments = {};
        paymentId = 0;
    })
});