describe("Payments test (with setup and teardown"), function() {
    // initialization logic
    beforeEach(function () {
        billAmt.value = 20;
        tipAmt.value = 4;
    })

    // tear-down logic
    afterEach(function () {
        billAmtInput.value = '0';
        tipAmtInput.value = '0';
        paymentTbody.innerHTML = '';
        summaryTds.innerHTML = '';    
    })
        
    it('should create an object containing the billAmt, tipAmt, and tipPercent as calculated by calculateTipPercent',  function(){
        createCurPayment();
        calculateTipPercent(billAmt, tipAmt);

        let billAmt = document.querySelector('#billAmt');
        let tipAmt = document.querySelector('#tipAmt');
    
        expect(curPayment).toEqual(24);
    
    });

    it('should create table row element and pass to appendTd with input value', function() {
        appendPaymentTable(curPayment)
        appendTd(tr, value)

        let paymentTbody = document.querySelector('#paymentTable tbody');
        let curPayment = createCurPayment();

        expect(paymentTbody.innerHTML).toEqual(curPayment);
    })

    it('should dreate table row element and pass to appendTd with calculated sum of all payments', function() {
        updateSummary();

        expect(summaryTds[0]).toEqual(20);
        expect(summaryTds[1]).toEqual(4);
        expect(summaryTds[2]).toEqual(20);
    })
};
