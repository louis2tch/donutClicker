import Donut from "./donut-clicker";

renderPage();

function renderPage(){
    runDonut();
}
//bakerName, numberOfClicks, numberOfDonutClicker, priceOfDonutClicker, 
//numberOfDonutMultiplier,  priceOfDonutMultiplier, numberOfDonuts
function runDonut(){
    //console.log("Nous sommes ici");
    let start = false;
    let stop = false;
    const numberOfStartedDonut = 100;
    const numberOfStartedClick = 0;
    const numberOfStartedClicker = 0;
    const numberOfStartedMultiplier = 0;
    const startedClickerPrice = 100;
    const startedMultiplierPrice = 10;
    const clickBtn = document.querySelector('#generateDonut');
    clickBtn.style.visibility = "hidden";
    const numberOfDonut = document.querySelector('#numberOfDonuts');
    const numberOfClick = document.querySelector('#numberOfClicks');
    const priceOfDonutClickers = document.querySelector("#priceOfDonutClicker");
    priceOfDonutClickers.innerText = startedClickerPrice;

    const numberOfDonutClickers = document.querySelector("#numberOfDonutClicker");
    const numberOfDonutMultipliers = document.querySelector("#numberOfDonutMultiplier");
    const priceOfDonutMultipliers = document.querySelector("#priceOfDonutMultiplier");
    
    const stopBtn = document.createElement("button");
    stopBtn.innerText = "STOP";

    const resetBtn = document.createElement("button");
    resetBtn.innerText = "RESET";

    const timers = document.querySelector("#timer");
    
    const buyDonutClickerBtn  = document.querySelector("#buyDonutClicker");
    buyDonutClickerBtn.style.visibility = "hidden";
    const buyDonutMultiplierBtn = document.querySelector("#buyDonutMultiplier");
    buyDonutMultiplierBtn.style.visibility = "hidden";
    
    const generateDonutStop  = document.querySelector("#generateDonutStop");
    generateDonutStop.style.display = "none";
    const buyDonutClickerStop  = document.querySelector("#buyDonutClickerStop");
    buyDonutClickerStop.style.display = "none";
    const buyDonutMultiplierStop = document.querySelector("#buyDonutMultiplierStop");
    buyDonutMultiplierStop.style.display = "none";

    const bakers = document.querySelector("#baker");

    const numberOfClickValue = document.createElement("input");
    numberOfClickValue.setAttribute("type", "number");
    numberOfClickValue.setAttribute("id", "numberOfClicksValuer");
    numberOfClickValue.value = numberOfStartedDonut;
   // bakers.appendChild(numberOfClickValue);
    //box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
   
    const createBakerBtn = document.querySelector("#createBakerBtn");
    createBakerBtn.addEventListener('click', () => {
        const bakerName = document.querySelector("#bakerName");
        const timeLast = document.querySelector("#timeLast"); 
        const welcome = document.createElement("p");
        welcome.setAttribute("class","p-welcome"); 
        welcome.innerHTML = "Welcome master baker: "+ bakerName.value + 
       // " <br>You are going to work for " + timeLast.value + "mn" +
        "<br> Let's CLICK to make DONUTS <br>";
        welcome.appendChild(resetBtn);
        welcome.appendChild(stopBtn);
        bakers.appendChild(welcome); 
        // bakers.appendChild(resetBtn); 
        // bakers.appendChild(stopBtn); 
        document.querySelector('#welcomeBaker').style.display = "none";
        clickBtn.style.visibility = "visible";
        buyDonutClickerBtn.style.visibility = "visible";
        buyDonutMultiplierBtn.style.visibility = "visible";
        start = true;

    });

    const baker = new Donut(bakerName.value, numberOfStartedClick, 
        numberOfStartedClicker, startedClickerPrice, 
        numberOfStartedMultiplier, startedMultiplierPrice, 
        numberOfStartedDonut);
    
    
    resetBtn.addEventListener('click', () => {
        window.location.reload();
    });

    stopBtn.addEventListener('click', () => {
        stop = true;
        clickBtn.style.display = "none";
        buyDonutClickerBtn.style.display = "none";
        buyDonutMultiplierBtn.style.display = "none";
        
        generateDonutStop.style.display = "block";
        buyDonutClickerStop.style.display = "block";
        buyDonutMultiplierStop.style.display = "block";
    });

    clickBtn.addEventListener('click', () =>{
        baker.generateOneDonutByClick();
        numberOfClick.innerText = baker.numberOfClicks;
        numberOfDonut.innerText = baker.numberOfDonuts.toFixed(2);    

    });

    buyDonutClickerBtn.addEventListener('click',() => {
        baker.buyDonutClicker();
        numberOfDonutClickers.innerText = baker.numberOfDonutClicker;
        numberOfDonut.innerText = baker.numberOfDonuts.toFixed(2);
        priceOfDonutClickers.innerText = baker.priceOfDonutClicker.toFixed(2);
    });

    buyDonutMultiplierBtn.addEventListener('click', () => {
        baker.buyDonutMultiplier();
        numberOfDonutMultipliers.innerText = baker.numberOfDonutMultiplier;
        priceOfDonutMultipliers.innerText = baker.priceOfDonutMultiplier.toFixed(2);
    });
    
    
    setInterval(runAllDeals, 1000);
    let second = 0;
    function runAllDeals(){ 
      if(start == true && stop == false){
        baker.generateDonutsByClickers();
        numberOfDonut.innerText = baker.numberOfDonuts.toFixed(2);
        second++; 

        if(baker.numberOfDonuts>= baker.priceOfDonutClicker)
        buyDonutClickerBtn.style.visibility = "visible";
        else buyDonutClickerBtn.style.visibility = "hidden";

        if(baker.numberOfDonuts>= baker.priceOfDonutMultiplier)
        buyDonutMultiplierBtn.style.visibility = "visible";
        else buyDonutMultiplierBtn.style.visibility = "hidden";

        timers.innerText =second;
      }
    }
}