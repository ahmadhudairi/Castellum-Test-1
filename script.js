const btnSubmit = document.getElementById("btnSubmit");
const btnReset = document.getElementById("btnReset");

btnSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  const teks = document.getElementById("kotakTeks").value.toLowerCase();

  const listVokal = cekDouble(objectHuruf(teks).hurufVokal);
  const listConsonant = cekDouble(objectHuruf(teks).hurufConsonant);
  const listHuruf = objectHuruf(teks).listHuruf;

  console.log({ listVokal, listConsonant, listHuruf });

  document.getElementById("elementVocals").innerHTML = listVokal.length;
  document.getElementById("listVokal").innerHTML = listVokal.join(" - "); // array to text pisah -

  document.getElementById("jumlahMati").innerHTML = listConsonant.length;
  document.getElementById("listMati").innerHTML = listConsonant.join(" - ");

  document.getElementById("urutAbjad").innerHTML = listHuruf.sort().join(" - ");
  // document.getElementById("sumAbjad").innerHTML = listHuruf.length;
});

btnReset.addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("kotakTeks").value = "";
  document.getElementById("elementVocals").innerHTML = "0";
  document.getElementById("listVokal").innerHTML = "";

  document.getElementById("jumlahMati").innerHTML = "0";
  document.getElementById("listMati").innerHTML = "";

  document.getElementById("urutAbjad").innerHTML = "-";
  // document.getElementById("sumAbjad").innerHTML = "";
});

// fungsi utama menghasilkan object dari setiap data yang di input
function objectHuruf(text) {
  const teksArray = text.split(""); //text to array

  let hurufVokal = [];
  let hurufConsonant = [];
  let listHuruf = [];

  // melakukan looping dengan mengecek aray dari inputan user
  teksArray.forEach(function (item) {
    // menambah/push ke array di atas jika fungsi isVokal, dll mereturn true
    if (isVokal(item) === true) hurufVokal.push(item);
    if (isConsonant(item) === true) hurufConsonant.push(item);
    if (isHuruf(item) === true) listHuruf.push(item);
  });

  // for(var n=0;  n < teksArray.length; n++){
  // 	if(isVokal(teksArray[n]) === true) hurufVokal.push(teksArray[n]);
  // 	if(isConsonant(teksArray[n]) === true) hurufConsonant.push(teksArray[n]);
  // 	if(isHuruf(teksArray[n]) === true) listHuruf.push(teksArray[n]);
  // }

  return { hurufVokal, hurufConsonant, listHuruf };
}

// fungsi untuk mengecek huruf vokal/tidaknya karakter
// isVokal("e") => true
// Boolean(1 !== -1) => true	=> karena tidak sama maka nilainya true => jika sama false
// nilai indexof => jika tidak ada data di maka akan return -1 => Boolean(-1 !== -1) => false
function isVokal(c) {
  const hurufVokal = "aiueo"; // jika terindex dalam array mereturn true
  return hurufVokal.indexOf(c.toLowerCase()) !== -1; // === -1 >> karakter tidak terindex dlm aray
}

// fungsi untuk mengecek huruf Mati/tidaknya karakter
function isConsonant(item) {
  const hurufConsonant = "bcdfghjklmnpkrstvwxyz";
  return hurufConsonant.indexOf(item) !== -1;
}

// fungsi utuk mengecek apakah data yang di masukkan huruf
function isHuruf(item) {
  const huruf = "abcdefghijklmnopqrstuvwxyz";
  return huruf.indexOf(item) !== -1;
}

// fungsi untuk filter/saring data di dalam array agar tidak double dan membuat array baru
// removing array duplikat
function cekDouble(list) {
  return list.filter((item, index) => {
    return list.indexOf(item) === index;
  });
}
// A - 0 - 0 = true karena 0 dan 0 sama
// B - 1 - 1 = true
// A - 2 - 0 = false karena 2 dan 0 beda
// C - 3 - 3 = true
// B - 4 - 1 = false karena 4 dan 1 beda
