// to create a fuction that adds numbers when called

function add(x, y) {
    var result = x + y;
    console.log(result);
  }
  

// to create a function that makes the circle green when called 

function makeItGreen(){
    let greencircle = document.querySelector('.circle');
    greencircle.style.background = "radial-gradient(green, transparent 75%)";
    console.log("you can also call backtoBlue() :)")
}

// for fun, to turn it back to blue :>

function backtoBlue(){
    let bluecircle = document.querySelector('.circle');
    bluecircle.style.background = "radial-gradient(blue, rgb(148, 136, 255),transparent 75%)";
}

// to create a move-in list of objects to purchase

let moveInList = {
    Title: "Here is a list of things I need to purchase to make this new house a home OwO",
    Items: "8",
    List: ["Bedframe" , "Rug" , "Floorlamp" , "Side table", "Study table", "Mirror" , "Clothesstand" , "Drawers"],
    Properties: ["Clean white finish and colorful accents", "Black metal frame"],
    Price: {
        Bedframe: 200,
        Rug: 80,
        Floorlamp: 65,
        Sidetable: 40,
        Mirror: 70,
        Clothesstand: 40,
        Drawers: 200
    },

    Total: 695,
    Is_this_affordable_atm: false
    
};

console.log(moveInList);


// to display weather information in the circle based o na n open weather API

let weatherAPI = "https://api.weather.gov/gridpoints/OKX/33,35/forecast";
function forecastDisplay () {
    fetch(weatherAPI)
      .then(response => response.json())
      .then(data => {
        let todaysForecast = data.properties.periods[0].detailedForecast;
        let forecastinCircle = document.getElementById("forecast");
        forecastinCircle.textContent = todaysForecast;
      })
    };

 forecastDisplay();