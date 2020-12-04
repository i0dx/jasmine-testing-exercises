describe('Payments Test', function() {
    beforeEach(function() {
        billAmtInput.value = 60;
        tipAmtInput.value = 9;
    });
    //Testing submitPayment info
    it('should submit accept a bill and tip value into submitPaymentInfo and update UI', function() {
        submitPaymentInfo();
        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment1'].billAmt).toEqual('60');
        expect(allPayments['payment1'].tipAmt).toEqual('9');
        expect(allPayments['payment1'].tipPercent).toEqual(15);
    });
    //testing createCurPayment
    it('createCurPayment should return an object with values "billAmt: x" "tipAmt: y" and "tipPercent: z"', function() {
        let curPayment = createCurPayment();

        expect(Object.keys(curPayment).length).toEqual(3);
        expect(curPayment.billAmt).toEqual('60');
        expect(curPayment.tipAmt).toEqual('9');
        expect(curPayment.tipPercent).toEqual(15);

    });
    it('should catch invalid entries to createCurPayment', function() {
        billAmtInput.value = 'this will cause problems';
        let failPayment = createCurPayment();
        expect(failPayment).toEqual(undefined);
    });
    //Testing appendPaymentTable
    it('should add new entries to the DOM with appendPaymentTable', function() {
        let newPayment = createCurPayment();
        appendPaymentTable(newPayment);
        billAmtInput.value = 20;
        tipAmtInput.value = 20;
        newPayment = createCurPayment();
        appendPaymentTable(newPayment);
        billAmtInput.value = 53;
        tipAmtInput.value = 8;
        newPayment = createCurPayment();
        appendPaymentTable(newPayment);

        let entries = document.querySelectorAll('tr[id^="payment"]');
        expect(entries.length).toEqual(3);
    });
    //Testing updateSummary
    it('should update shift summary as entries are added', function() {
        submitPaymentInfo();
        updateSummary();
        expect(summaryTds.length).toEqual(3);
        billAmtInput.value = 23;
        tipAmtInput.value = 4;
        submitPaymentInfo();
        updateSummary();
        expect(summaryTds[0].innerText).toEqual('$83');
        expect(summaryTds[1].innerText).toEqual('$13');
        expect(summaryTds[2].innerText).toEqual('16%');
    });
    //Testing appendPaymentDeleteBtn
    it('should create a button that deletes row appended to with appendPaymentDeleteButton', function() {
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
        paymentId = 0;
        allPayments = {};
    });

});