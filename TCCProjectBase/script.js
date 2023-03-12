// set timer
document.getElementById("start").addEventListener('click', function(){
    const progressBar = document.querySelector('.progress-bar');
    let progressValue = 0;

    const timer = setInterval(() => {
    // atualize o valor do progresso
    progressValue += 8;
    progressBar.setAttribute('aria-valuenow', progressValue);
    progressBar.style.setProperty('width', `${progressValue}%`);

    // verifique se o progresso atingiu 100%
    if (progressValue >= 110) {
        clearInterval(timer);
    }
}, 1000);
// the code

// set display freq
const display = document.getElementById("freq");

//set arrays
let freqAnimation = [];
for (let x = 0; x < 80; x+=5){
    freqAnimation.push(x);
}

let freqHuman = [];
for (let i = 80; i < 111; i++){
    freqHuman.push(i);
}

// set the function
function displayValues(values, delay, colorFunction){
    let index = 0;
    function showValue(){
        if(index >= values.length){
            return;
        }
        const color = colorFunction(index);
        const value = values[index];
        display.style.color = color;
        display.textContent = value;
        index++;
        setTimeout(showValue, delay);
    }
// exec function showValue
    showValue();
}

function getColor(index) {
    if(index < freqHuman.length - 20){
        return "green";
    }else if(index >= freqHuman.length - 20 && index < freqHuman.length - 10){
        return "orange";
    }else{
        return "red";
    }
} 

displayValues(freqAnimation, 200, () => "green");
displayValues(freqHuman, 500, getColor);



});

const saveBtn = document.getElementById('save');
saveBtn.addEventListener('click', function() {
    const data = JSON.stringify(freqHuman); // Transforma o array em string
    localStorage.setItem("freqHuman", data);
});
/*const submitButton = document.getElementById("save");

submitButton.addEventListener("click", function() {
  const inputText = document.getElementById("inputText").value;
  localStorage.setItem("texto", inputText);
});*/




