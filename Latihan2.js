var arrayku = ["buku", "tas", "kacamata", "bolpoin", "penghapus"];
var tambah = prompt("Tambah Array : ")


if(arrayku.includes(tambah)){
    console.log("barang nama sudah ada");
}
else {
    arrayku.push(tambah);
    console.log("barang "+tambah+" belum ada");
    arrayku.sort();
    window.alert("Barang ditambahkan");
}
document.write(arrayku);