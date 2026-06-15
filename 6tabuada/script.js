function calcular(){
    var n1 = parseFloat(document.getElementById('n1').value);
    var res = document.getElementById('res');

    res.textContent = "";

    for(var i = 1; i <= 10; i++){
        res.innerHTML += `${n1} X ${i} = ${n1 * i}<br>`;
    }
}

