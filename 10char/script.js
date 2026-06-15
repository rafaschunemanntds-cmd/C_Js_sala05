function calcular(){
    var n1 = document.getElementById('n1').value
    var n2 = document.getElementById('n2').value
    var n3 = parseFloat(document.getElementById('n3').value)
    document.getElementById('res').textContent = `Você nasceu na Cidade de ${n1}, no Estado de ${n2} e tem ${2026 - n3} anos `
}