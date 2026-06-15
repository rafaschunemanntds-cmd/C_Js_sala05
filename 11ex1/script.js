function calcular(){
    var n1 = document.getElementById('n1').value
    var n2 = parseFloat(document.getElementById('n2').value)
    var res = document.getElementById('res')

    if(n2 < 15){
        res.textContent = `SESI, ${n1}`
    }
    else{
        res.textContent = `SENAI, ${n1}`
    }
}