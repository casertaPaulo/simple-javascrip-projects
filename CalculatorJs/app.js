// set the display
const display = document.getElementById("resu");

// set the btns
const btns = document.querySelectorAll(".btn");
btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        let a = Number(document.getElementById("n1").value);
        let b = Number(document.getElementById("n2").value);
        if(styles.contains('somar')){
            display.textContent = a + b;
        }else{
            display.textContent = a - b;
        }
    })
})