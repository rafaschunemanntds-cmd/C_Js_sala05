function calcular(){
    var n1 = parseFloat(document.getElementById('n1').value)
    var n2 = parseFloat(document.getElementById('n2').value)
    document.getElementById('res').textContent = `Seu IMC é igual a: ${n1 / (n2*n2)}`
}