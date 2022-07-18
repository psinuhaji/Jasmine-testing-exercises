describe("Payments test (with setup and tear-down)", function() {
    beforeEach(function () {
      billAmtInput.value = 100;
      tipAmtInput.value = 20;
    });
    it('should add a new payment to allPayments on submitPaymentInfo()', function () {
        submitPaymentInfo();
        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment1'].billAmt).toEqual('100');
        expect(allPayments['payment1'].tipAmt).toEqual('20');
        expect(allPayments['payment1'].tipPercent).toEqual(20);
      });
    describe('createCurPayment will return undefined with negative or empty inputs', function(){
        it('should return undefined with a negative tip', function() {
            tipAmtInput.value = -1;
            let curPayment = createCurPayment();
            expect(curPayment).toEqual(undefined);
        });
        it('should return undefiend with an empty bill', function(){
            billAmtInput.value = '';
            let curPayment = createCurPayment();
            expect(curPayment).toEqual(undefined);
        })
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