//  set span
const data = document.getElementById("data");

// set a event
document.getElementById("analyse").addEventListener('click', function(){
    let name = document.getElementById("name");
    let lastname = document.getElementById("lastname");
    let age = document.getElementById("age").value;

    if ((age >= 16 && age < 18)){
        data.textContent = 'VOTAR: SIM | CNH: NÃO';
    }else if(age >= 18){
        data.textContent = 'VOTAR: SIM | CNH: SIM';
    }else{
        data.textContent = 'VOTAR: NÃO | CNH: NÃO';
    }
})