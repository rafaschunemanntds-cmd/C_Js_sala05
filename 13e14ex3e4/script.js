function calcular(){
   var res = document.getElementById('res');

    res.textContent = "";

    for(var i = 1; i <= 10; i++){
        res.innerHTML += `7 X ${i} = ${7 * i}<br>`;
    }

    for(var i = 1; i <= 10; i++){
        res.innerHTML += `9 X ${i} = ${9 * i}<br>`;
    }
}