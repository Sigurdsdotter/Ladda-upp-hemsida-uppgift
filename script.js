let displayResult = document.querySelector("#displayResult");
let result = document.querySelector("#result");
let ageInput = document.querySelector("#ageInput");
let calcBtn = document.querySelector("#calcBtn");
let resetBtn = document.querySelector("#resetBtn");
let refresh = document.querySelector(".refresh");

let myTimer;
let age;


calcBtn.addEventListener('click', function () {
    age = ageInput.value.trim();

    if (age == "") {

        clearInterval(myTimer);                         // Ser till att vid många klick, myTimer inte ökar takten som förbestämts på 3000

        let alert = document.querySelector('.alert');
        alert.classList.add('active');                  // classList.add = Skapar extra class till alert 

        myTimer = setInterval(function () {
            alert.classList.remove('active');           // classList.remove = Tar bort classen och då även attributen, i detta fall texten
        }, 3000)
    
    } else if (isNaN(age) == true) {                    // isNaN = is Not a Number
        let alert2 = document.querySelector('.alert2');
        alert2.classList.add('active');

        myTimer = setInterval(function () {
            alert2.classList.remove('active');
        }, 3000)
    } else {
        let answer = document.querySelector('.answer');
        answer.classList.add('active');

        let remainingYears = 90 - age;
        let remainingWeeks = remainingYears * 52;

        result.innerHTML = separateNumbersInComma(remainingWeeks);
        ageInput.value = "";
    }
});


function separateNumbersInComma(weeks) {
    return weeks.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

resetBtn.addEventListener('click', function () {
    refresh.click();
})
