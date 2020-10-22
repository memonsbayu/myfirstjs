var nama = prompt("Input Nama : ");

var gender = prompt("Masukkan gender : ")

var tinggi = prompt("Input tinggi : ");

if(gender == "laki"){
var laki = (tinggi - 100) - ((tinggi - 100) * 10/100);
document.write("Hai "+nama+" Berat Ideal mu "+laki);
}
else if(gender == "cewe"){
var cewe = (tinggi - 100) - ((tinggi - 100) * 15/100);
document.write("Hai "+nama+" Berat Ideal mu "+cewe);
}
 