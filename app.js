let celciusInput = document.querySelector('#celcius > input')
let fahrenheitInput = document.querySelector('#fahrenheit > input')
let kelvinInput = document.querySelector('#kelvin > input')

let btn = document.querySelector('.button button')

function roundNumber(number){
  return Math.round(number*100)/100;
}
celciusInput.addEventListener('input',function(){
  let cTemp = parseFloat(celciusInput.value)
  let fTemp = (cTemp*(9/5))+ 32
  let kTemp = cTemp + 273.15

  fahrenheitInput.value = roundNumber(fTemp)
  kelvinInput.value = roundNumber(kTemp)
})

fahrenheitInput.addEventListener('input',function(){
  let fTemp = parseFloat(fahrenheitInput.value)
  let cTemp = (fTemp-32) * (5/9)
  let kTemp = (fTemp-32) * (5/9) + 273.15

  celciusInput.value = roundNumber(cTemp)
  kelvinInput.value = roundNumber(kTemp)
})

kelvinInput.addEventListener('input',function(){
  let kTemp = parseFloat(kelvinInput.value)
  let cTemp = kTemp - 273.15
  let fTemp = (kTemp - 273.15) * (9/5) + 32

  celciusInput.value = roundNumber(cTemp)
  fahrenheitInput.value = roundNumber(fTemp)
})

btn.addEventListener('click',()=>{
  celciusInput.value = ""
  fahrenheitInput.value = ""
  kelvinInput.value = ""
})


document.addEventListener("DOMContentLoaded", function() {
  const celsiusInput = document.querySelector("#celcius input");
  const fahrenheitInput = document.querySelector("#fahrenheit input");
  const kelvinInput = document.querySelector("#kelvin input");
  const container = document.querySelector(".container");

  // Function to change background image based on temperature
  function changeBackground() {
      const temperature = parseFloat(celsiusInput.value) || parseFloat(fahrenheitInput.value) || parseFloat(kelvinInput.value);

      if (temperature < 0) {
          container.style.backgroundImage = 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYqCmt4n4FYL_XBes5mpFIfzCG3Lnm0EsBmg&usqp=CAU")';
      } else if (temperature >= 0 && temperature < 20) {
          container.style.backgroundImage = 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8fC6AOb2sMbw--0Po8wmX4pTw0mZKWKi65yPwZP2lnVXd2S2nbMMELg-7xaZbgnTSxsc&usqp=CAU")';
      } else {
          container.style.backgroundImage = 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwmQkg0L0TwS5atDthLINuMz4sL_qdq3h7yA&usqp=CAU")';
      }
  }

  // Event listeners for input changes
  celsiusInput.addEventListener("input", changeBackground);
  fahrenheitInput.addEventListener("input", changeBackground);
  kelvinInput.addEventListener("input", changeBackground);
});
