import Donut from './donut-clicker.js';

//bakerName, numberOfClicks, numberOfDonutClicker, priceOfDonutClicker, 
//numberOfDonutMultiplier,  priceOfDonutMultiplier, numberOfDonuts
describe('Donut object', () => {

    // test('Does Donut return a name', () => {
    //     const underTest = new Donut('Louis', 0, 0, 100, 0, 10, 100);
    //     expect(typeof underTest.bakerName).toMatch('string');
    // });

    // test('Does Donut return Louis', () => {
    //     const underTest = new Donut('Louis', 0, 0, 100, 0, 10, 100);
    //     expect(underTest.bakerName).toEqual("Louis");
    // });

    test('numberOfClicks +=1 when click?', () => {
        const underTest = new Donut('Louis', 0, 0, 100, 0, 10, 100);
        underTest.generateOneDonutByClick();
        expect(underTest.numberOfClicks).toEqual(1);
        expect(Math.round(underTest.numberOfDonuts)).toEqual(101);
    });

    test('numberOfDonut += Math.pow(1.2, numberOfDonutMultiplier) when any click run?', () => {
        const underTest = new Donut('Louis', 0, 3, 100, 3, 10, 1);
        underTest.generateOneDonutByClick();
        //underTest.generateDonutsByMultipliers();
        expect(underTest.numberOfDonuts).toEqual(1+1.728);
    });

    test('numberOfDonutClicker +=1  and numberOfDonuts -=100,'+ 
    ' when system buy 1 donut-Clicker for 100 donuts', () => {
        const underTest = new Donut('Louis', 0, 0, 100, 0, 10, 101);
        //setTimeout(myFunction, 1000);
        underTest.buyDonutClicker();
        expect(underTest.numberOfDonutClicker).toEqual(1);
        expect(underTest.numberOfDonuts).toEqual(1);
        expect(underTest. priceOfDonutClicker).toEqual(110);
    });

    test('numberOfDonutMultiplier += 1  and numberOfDonuts -=10,'+ 
    ' when system buy 1 donut-multiplier for 10 donuts', () => {
        const underTest = new Donut('Louis', 0, 0, 100, 0, 10, 11);
        //setTimeout(myFunction, 1000);
        //myVar = setTimeout(myFunction, 3000);
        //clearTimeout(myVar)
        underTest.buyDonutMultiplier();
        expect(underTest.numberOfDonutMultiplier).toEqual(1);
        expect(underTest.numberOfDonuts).toEqual(1);
        expect(underTest. priceOfDonutMultiplier).toEqual(11);
    });

    //Auto function

    test('numberOfDonut += 1*numberOfClicker when autoclick run?', () => {
        const underTest = new Donut('Louis', 0, 3, 100, 0, 10, 1);
        underTest.generateDonutsByClickers();
        expect(underTest.numberOfDonuts).toEqual(4);
    });

   

   


});