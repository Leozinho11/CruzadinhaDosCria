var cpu = inputPergunta1.value;
var ula = inputPergunta2.value;
var registradores = inputPergunta3.value;
var ram = inputPergunta4.value;
var rom = inputPergunta5.value;
var eprom = inputPergunta6.value;
var flash = inputPergunta7.value;
var memoriaMassa = inputPergunta8.value;
var dma = inputPergunta9.value;
var cs = inputPergunta10.value;
var addressBus = inputPergunta11.value;
var dataBus = inputPergunta12.value;
var i5 = inputPergunta13.value;
var i7 = inputPergunta14.value;
var dualCore = inputPergunta15.value;
var quadCore = inputPergunta16.value;
var threads = inputPergunta17.value;
var cache = inputPergunta18.value;

if (cpu != "CPU") {
    var palavra = document.getElementById("inputPergunta1");
    palavra.classList.add("inputError")
} else {
    palavra.classList.remove("inputError")
    letra1_1.innerHTML = resposta1[0]
    letra2_1.innerHTML = resposta1[1]
    letra3_1.innerHTML = resposta1[2]
}

if (ula != "ULA") {
    var palavra = document.getElementById("inputPergunta2");
    palavra.classList.add("inputError")
} else {
    palavra.classList.remove("inputError")
    letra1_2.innerHTML = resposta2[0]
    letra2_2.innerHTML = resposta2[1]
    letra3_2.innerHTML = resposta2[2]
}

if (registradores != "REGISTRADORES") {
    var palavra = document.getElementById("inputPergunta3");
    palavra.classList.add("inputError")
} else {
    palavra.classList.remove("inputError")
    letra1_3.innerHTML = resposta3[0]
    letra2_3.innerHTML = resposta3[1]
    letra3_3.innerHTML = resposta3[2]
    letra4_3.innerHTML = resposta3[3]
    letra5_3.innerHTML = resposta3[4]
    letra6_3.innerHTML = resposta3[5]
    letra7_3.innerHTML = resposta3[6]
    letra8_3.innerHTML = resposta3[7]
    letra9_3.innerHTML = resposta3[8]
    letra10_3.innerHTML = resposta3[9]
    letra11_3.innerHTML = resposta3[10]
    letra12_3.innerHTML = resposta3[11]
    letra13_3.innerHTML = resposta3[12]
}

if (ram != "RAM") {
    var palavra = document.getElementById("inputPergunta4");
    palavra.classList.add("inputError")
} else {
    palavra.classList.remove("inputError")
    letra1_4.innerHTML = resposta4[0]
    letra2_4.innerHTML = resposta4[1]
    letra3_4.innerHTML = resposta4[2]
}

if (rom != "ROM") {
    var palavra = document.getElementById("inputPergunta5");
    palavra.classList.add("inputError")
} else {
    palavra.classList.remove("inputError")
    letra1_5.innerHTML = resposta5[0]
    letra2_5.innerHTML = resposta5[1]
    letra3_5.innerHTML = resposta5[2]
}

if (eprom != "EPROM") {
    var palavra = document.getElementById("inputPergunta6");
    palavra.classList.add("inputError")
} else {
    palavra.classList.remove("inputError")
    letra1_6.innerHTML = resposta6[0]
    letra2_6.innerHTML = resposta6[1]
    letra3_6.innerHTML = resposta6[2]
    letra4_6.innerHTML = resposta6[3]
    letra5_6.innerHTML = resposta6[4]
}

if (flash != "FLASH") {
    var palavra = document.getElementById("inputPergunta7");
    palavra.classList.add("inputError")
} else {
    palavra.classList.remove("inputError")
    letra1_7.innerHTML = resposta7[0]
    letra2_7.innerHTML = resposta7[1]
    letra3_7.innerHTML = resposta7[2]
    letra4_7.innerHTML = resposta7[3]
    letra5_7.innerHTML = resposta7[4]
}

if (memoriaMassa != "MEMÓRIA DE MASSA") {
    var palavra = document.getElementById("inputPergunta8");
    palavra.classList.add("inputError")
} else {
    palavra.classList.remove("inputError")
    letra1_8.innerHTML = resposta8[0]
    letra2_8.innerHTML = resposta8[1]
    letra3_8.innerHTML = resposta8[2]
    letra4_8.innerHTML = resposta8[3]
    letra5_8.innerHTML = resposta8[4]
    letra6_8.innerHTML = resposta8[5]
    letra7_8.innerHTML = resposta8[6]
    letra8_8.innerHTML = "-"
    letra9_8.innerHTML = resposta8[7]
    letra10_8.innerHTML = resposta8[8]
    letra11_8.innerHTML = "-"
    letra12_8.innerHTML = resposta8[9]
    letra13_8.innerHTML = resposta8[10]
    letra14_8.innerHTML = resposta8[11]
    letra15_8.innerHTML = resposta8[12]
    letra16_8.innerHTML = resposta8[13]
}

if (dma != "DMA") {
    var palavra = document.getElementById("inputPergunta9");
    palavra.classList.add("inputError")
} else {
    palavra.classList.remove("inputError")
    letra1_9.innerHTML = resposta9[0]
    letra2_9.innerHTML = resposta9[1]
    letra3_9.innerHTML = resposta9[2]
}

if (cs != "CS") {
    var palavra = document.getElementById("inputPergunta10");
    palavra.classList.add("inputError")
} else {
    palavra.classList.remove("inputError")
    letra1_10.innerHTML = resposta10[0]
    letra2_10.innerHTML = resposta10[1]
}

if (addressBus != "ADDRESS BUS") {
    var palavra = document.getElementById("inputPergunta11");
    palavra.classList.add("inputError")
} else {
    palavra.classList.remove("inputError")
    letra1_11.innerHTML = resposta11[0]
    letra2_11.innerHTML = resposta11[1]
    letra3_11.innerHTML = resposta11[2]
    letra4_11.innerHTML = resposta11[3]
    letra5_11.innerHTML = resposta11[4]
    letra6_11.innerHTML = resposta11[5]
    letra7_11.innerHTML = resposta11[6]
    letra8_11.innerHTML = "-"
    letra9_11.innerHTML = resposta11[7]
    letra10_11.innerHTML = resposta11[8]
    letra11_11.innerHTML = resposta11[9]
}

if (dataBus != "DATA BUS") {
    var palavra = document.getElementById("inputPergunta12");
    palavra.classList.add("inputError")
} else {
    palavra.classList.remove("inputError")
    letra1_12.innerHTML = resposta12[0]
    letra2_12.innerHTML = resposta12[1]
    letra3_12.innerHTML = resposta12[2]
    letra4_12.innerHTML = resposta12[3]
    letra5_15.innerHTML = "-"
    letra6_12.innerHTML = resposta12[4]
    letra7_12.innerHTML = resposta12[5]
    letra8_12.innerHTML = resposta12[6]
}

if (i5 != "I5") {
    var palavra = document.getElementById("inputPergunta13");
    palavra.classList.add("inputError")
} else {
    palavra.classList.remove("inputError")
    letra1_13.innerHTML = resposta13[0]
    letra2_13.innerHTML = resposta13[1]
}

if (i7 != "I7") {
    var palavra = document.getElementById("inputPergunta14");
    palavra.classList.add("inputError")
} else {
    palavra.classList.remove("inputError")
    letra1_14.innerHTML = resposta14[0]
    letra2_14.innerHTML = resposta14[1]
}

if (dualCore != "DUAL CORE") {
    var palavra = document.getElementById("inputPergunta15");
    palavra.classList.add("inputError")
} else {
    palavra.classList.remove("inputError")
    letra1_15.innerHTML = resposta15[0]
    letra2_15.innerHTML = resposta15[1]
    letra3_15.innerHTML = resposta15[2]
    letra4_15.innerHTML = resposta15[3]
    letra4_15.innerHTML = "-"
    letra6_15.innerHTML = resposta15[4]
    letra7_15.innerHTML = resposta15[5]
    letra8_15.innerHTML = resposta15[6]
    letra9_15.innerHTML = resposta15[7]
}

if (quadCore != "QUAD CORE") {
    var palavra = document.getElementById("inputPergunta16");
    palavra.classList.add("inputError")
} else {
    palavra.classList.remove("inputError")
    letra1_16.innerHTML = resposta16[0]
    letra2_16.innerHTML = resposta16[1]
    letra3_16.innerHTML = resposta16[2]
    letra4_16.innerHTML = resposta16[3]
    letra5_16.innerHTML = "-"
    letra6_16.innerHTML = resposta16[4]
    letra7_16.innerHTML = resposta16[5]
    letra8_16.innerHTML = resposta16[6]
    letra9_16.innerHTML = resposta16[7]
}

if (threads != "THREADS") {
    var palavra = document.getElementById("inputPergunta17");
    palavra.classList.add("inputError")
} else {
    palavra.classList.remove("inputError")
    letra1_17.innerHTML = resposta17[0]
    letra2_17.innerHTML = resposta17[1]
    letra3_17.innerHTML = resposta17[2]
    letra4_17.innerHTML = resposta17[3]
    letra5_17.innerHTML = resposta17[4]
    letra6_17.innerHTML = resposta17[5]
    letra7_17.innerHTML = resposta17[6]
}

if (cache != "CACHE") {
    var palavra = document.getElementById("inputPergunta18");
    palavra.classList.add("inputError")
} else {
    palavra.classList.remove("inputError")
    letra1_18.innerHTML = resposta18[0]
    letra2_18.innerHTML = resposta18[1]
    letra3_18.innerHTML = resposta18[2]
    letra4_18.innerHTML = resposta18[3]
    letra5_18.innerHTML = resposta18[4]
}