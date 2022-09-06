describe("Helpers test (with set-up and tear-down)", function () {
    beforeEach(function () {
    // initialization logic
    let billAmtInput = document.getElementById('billAmt');
    let tipAmtInput = document.getElementById('tipAmt');
    
    billAmtInput.value = '20';
    tipAmtInput.value = '4';
    })

    afterEach(function (){
    // tear-down logic
    billAmtInput.value = '0';
    tipAmtInput.value = '0';    
    })

    it('should calculate the sum of all payments', function () {
        sumPaymentTotal();
        calculateTipPercent();

        let allPayments = {};
        let payment = allPayments[key];
        let key = allPayments.index.value;
        let total = Number(payment[type]);
         
        expect(total).toEqual(24);
    });

    it('should calculate tip percent', function() {
        calculateTipPercent(billAmt, tipAmt)

        let billAmt = document.querySelector('#billAmt');
        let tipAmt = document.querySelector('#tipAmt');
        let tipPercent = calculateTipPercent(billAmt, tipAmt);
        
        expect(tipPercent).toEqual(20);
    });

    it('should append a newly created td element from the value', function(){
        appendTd(tr, value);

        let tr = document.getElementsByTagName('tr');
        let newTd = document.getElementsByTagName('td');

        expect(newTd.value).toEqual(value);

    });
});    
