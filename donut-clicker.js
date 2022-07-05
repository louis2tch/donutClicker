class Donut{
    constructor(bakerName, numberOfClicks, numberOfDonutClicker, priceOfDonutClicker, 
        numberOfDonutMultiplier,  priceOfDonutMultiplier, numberOfDonuts){
        this.bakerName = bakerName;
        this.numberOfClicks = numberOfClicks;
        this.numberOfDonutClicker = numberOfDonutClicker;
        this.priceOfDonutClicker = priceOfDonutClicker;
        this.numberOfDonutMultiplier = numberOfDonutMultiplier;
        this.priceOfDonutMultiplier = priceOfDonutMultiplier;
        this.numberOfDonuts = numberOfDonuts
   }

   generateOneDonutByClick(){
    let donutMul = Math.pow(1.2, this.numberOfDonutMultiplier);
    this.numberOfClicks ++;
    this.numberOfDonuts += donutMul;

   }

   buyDonutClicker(){
    if(this.numberOfDonuts >= this.priceOfDonutClicker){
        this.numberOfDonuts -= this.priceOfDonutClicker; 
        this.numberOfDonutClicker ++;
        this.priceOfDonutClicker += this.priceOfDonutClicker*0.1;
    }
   }

   buyDonutMultiplier(){
    if(this.numberOfDonuts >= this.priceOfDonutMultiplier){
        this.numberOfDonuts -= this.priceOfDonutMultiplier; 
        this.numberOfDonutMultiplier ++;
        this.priceOfDonutMultiplier += this.priceOfDonutMultiplier*0.1;
    }
   }

   generateDonutsByClickers(){
    let donutMul = Math.pow(1.2, this.numberOfDonutMultiplier);
    this.numberOfDonuts += this.numberOfDonutClicker*donutMul;
   }

//    generateDonutsByMultipliers(){
//     let donutToAdd = Math.pow(1.2, this.numberOfDonutMultiplier);
//     this.numberOfDonuts += donutToAdd;
//    }


}
export default Donut;


