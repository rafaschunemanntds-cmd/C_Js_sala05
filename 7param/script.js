function calcular(n1, n2){
    var n1 = parseFloat(document.getElementById('n1').value)
    var n2 = parseFloat(document.getElementById('n2').value)
    document.getElementById('res').textContent = `${n1} X ${n2} ${n1 + n2}`
}