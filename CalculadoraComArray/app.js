const resultado = document.querySelector("#resultado")
// set the buttons
const btns = document.querySelectorAll(".btn")

btns.forEach(function (btn){
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList
        let n1 = Number(window.document.querySelector("input#number1").value)
        let n2 = Number(window.document.querySelector("input#number2").value)
        if(styles.contains('somar')){
            resultado.textContent = n1 + n2
        }else if(styles.contains('subtrair')){
            resultado.textContent = n1 - n2   
        }
    })
})