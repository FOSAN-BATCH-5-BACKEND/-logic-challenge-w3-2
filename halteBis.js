/* Anda adalah seorang sopir bus. Anda menurunkan dan menerima penumpang pada setiap halte.
Di asumsikan dalam sebuah array, berisi beberapa halte, dan pada setiap halte berisi 2 angka, 
angka yang pertama adalah jumlah penumpang masuk, angka kedua adalah jumlah penumpang yang turun.
buatlah sebuah fungsi untuk menghitung sisa penumpang yang ada di dalam bus.
*/

let jumlah = function (halte) {
  //  console.log(halte);
  let sum = [];
  let selisih = 0;
  let masuk = 0;
  let keluar = 0;
    for (let i = 0; i < halte.length; i++) {
      if (halte[i][0]) {
        masuk += halte[i][0];
      }
      if (halte[i][1]) {
        keluar += halte[i][1];
      }
    }
    selisih = masuk - keluar;
    sum.push(selisih);
    return sum;
}



console.log(jumlah([[10, 0], [3, 5], [5, 8]])) //5
console.log(jumlah([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]])) //17
console.log(jumlah([[3, 0], [9, 1], [4, 8], [12, 2], [6, 1], [7, 8]])) //21