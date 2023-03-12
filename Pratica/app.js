const resu = document.querySelector("#resu");
// set btns
const btns = document.querySelectorAll(".btn");
btns.forEach(function(btn){
    btn.addEventListener('click', function(doIt){
        const styles = doIt.currentTarget.classList;
        let n1 = Number(document.querySelector("#n1").value);
        let n2 = Number(document.querySelector("#n2").value);
        if(styles.contains('somar')){
            resu.textContent = n1 + n2;
        }else if(styles.contains('subtrair')){
            resu.textContent = n1 - n2;
        }else if(styles.contains('multiplicar')){
            resu.textContent = n1 * n2;
        }else{
            resu.textContent = n1 / n2;
        }
    })
})