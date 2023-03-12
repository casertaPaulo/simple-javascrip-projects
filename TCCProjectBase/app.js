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
    if (progressValue >= 100) {
        clearInterval(timer);
    }
}, 1000);

// set the values
const tela = document.getElementById("freq");

// animation =======================
    let freqAnimation = [];
    for (let x = 0; x < 80; x+=10){
        freqAnimation.push(x - 5);
    }

    let firstIndex = 0;
    function showAnimation() {
        if (firstIndex >= freqAnimation.length){
            return;
        }
        tela.style.color = "green";
        tela.textContent = freqAnimation[firstIndex];
        firstIndex++;
        setTimeout(showAnimation, 300);
    }
// exec function animation ============
    showAnimation();
    
// array real values (human)
    let freqCardiaca = [];
    for (let i = 80; i < 110; i++){
        freqCardiaca.push(i);
    }
// index que percorre o vetor da posição 0 até a posição final do vetor. enquanto menor, ela exibe na tela
    let index = 0;
    function exibirProximo() {
        if (index >= freqCardiaca.length){
            return
        }
        if (index < freqCardiaca.length - 20){
            tela.style.color = "green";
        }else if(freqCardiaca.length - 20 && freqCardiaca.length - 10){
            tela.style.color = "orange";
        }else{
            tela.style.color = "red";
        }
        tela.textContent = freqCardiaca[index];//mostra na tela o array na posição 0, 1, 2, 3...
        index++;
        setTimeout(exibirProximo, 1000);
    }
// executa a função criada acima
    exibirProximo();
})