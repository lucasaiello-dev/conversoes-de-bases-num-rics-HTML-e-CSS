function limparConversor(a) {
    switch (a) {
        case 'num_bin':
            num_oct.value = ''
            num_dec.value = ''
            num_hex.value = ''
            break;
        case 'num_oct':
            num_bin.value = ''
            num_dec.value = ''
            num_hex.value = ''
            break;
        case 'num_dec':
            num_bin.value = ''
            num_oct.value = ''
            num_hex.value = ''
            break;
        default:
            num_bin.value = ''
            num_oct.value = ''
            num_dec.value = ''
    }

    resultado_decB.innerText = ''
    resultado_octB.innerText = ''
    resultado_hexB.innerText = ''
    resultado_binO.innerText = ''
    resultado_decO.innerText = ''
    resultado_hexO.innerText = ''
    resultado_binD.innerText = ''
    resultado_octD.innerText = ''
    resultado_hexD.innerText = ''
    resultado_binH.innerText = ''
    resultado_octH.innerText = ''
    resultado_decH.innerText = ''
}

function calcular(a, b, c, d, e, f, g, i) {
    limparConversor(i)
    const num = document.getElementById(i).value
    const conversao = parseInt(num, a)
    const primeiro = conversao.toString(b)
    const segundo = conversao.toString(c)
    const terceiro = conversao.toString(d)

    e.innerText = primeiro
    f.innerText = segundo
    g.innerText = terceiro
}

function converterBin() {
    const num = document.getElementById("num_bin").value

    if ((/^[01]+$/.test(num)) == false && num != '') {
        alert('ERRO, o número digitado não corresponde ao tipo solicitado!')
    } else if (num != '') {

        calcular(2, 8, 10, 16, resultado_octB, resultado_decB, resultado_hexB, 'num_bin')
    }
}

function converterOct() {
    const num = document.getElementById("num_oct").value

    if ((/^[0-7]+$/.test(num)) == false && num != '') {
        alert('ERRO, o número digitado não corresponde ao tipo solicitado!')
    } else if (num != '') {

        calcular(8, 2, 10, 16, resultado_binO, resultado_decO, resultado_hexO, 'num_oct')
    }
}

function converterDec() {
    const num = document.getElementById("num_dec").value

    if ((/^[0-9]+$/.test(num)) == false && num != '') {
        alert('ERRO, o número digitado não corresponde ao tipo solicitado!')
    } else if (num != '') {

        calcular(10, 2, 8, 16, resultado_binD, resultado_octD, resultado_hexD, 'num_dec')
    }
}

function converterHex() {
    const num = document.getElementById("num_hex").value

    if ((/^[0-9a-fA-F]+$/.test(num)) == false && num != '') {
        alert('ERRO, o número digitado não corresponde ao tipo solicitado!')
    } else if (num != '') {

        calcular(16, 2, 8, 10, resultado_binH, resultado_octH, resultado_decH, 'num_hex')
    }
}

function somar() {
    const num1 = num_soma1.value
    const num2 = num_soma2.value

    const select1 = select_soma1.value
    const select2 = select_soma2.value

    const soma = (parseInt(num1, select1) + parseInt(num2, select2)).toString(select2)

    resultado_soma.innerText = soma
}

function subtrair() {
    const num1 = num_subtracao1.value
    const num2 = num_subtracao2.value

    const select1 = select_subtracao1.value
    const select2 = select_subtracao2.value

    const soma = (parseInt(num1, select1) - parseInt(num2, select2)).toString(select2)

    resultado_subtracao.innerText = soma
}

function multiplicar() {
    const num1 = num_multiplicacao1.value
    const num2 = num_multiplicacao2.value

    const select1 = select_multiplicacao1.value
    const select2 = select_multiplicacao2.value

    const soma = (parseInt(num1, select1) * parseInt(num2, select2)).toString(select2)

    resultado_multiplicacao.innerText = soma
}

function dividir() {
    const num1 = num_divisao1.value
    const num2 = num_divisao2.value

    const select1 = select_divisao1.value
    const select2 = select_divisao2.value

    const soma = (parseInt(num1, select1) / parseInt(num2, select2)).toString(select2)

    resultado_divisao.innerText = soma
}
