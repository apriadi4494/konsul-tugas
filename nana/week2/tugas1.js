/* 1.	
    Buat dan jelaskanlah 10 method bawaan JavaScript (Built-in Functions) beserta contoh penggunaannya(kecuali : split, reverse, join, foreach, map) 
*/


// 1. toString()
/* 
    berfungsi untuk mengubah data dari Number, boolean dan array menjadi number
*/

// let number = 12
// let boolean = false;
// let array = ['buah', 'hewan', 'tumbuhan']

// let strNum = number.toString();
// let strBoolean = boolean.toString()
// let strArray = array.toString()

// console.log(`Ubah ke string: ${strNum} \ntype datanya: ${typeof(strNum)}`);
// console.log(`Ubah ke string: ${strBoolean}\ntype datanya: ${typeof(strBoolean)}`)
// console.log(`Ubah ke string: ${strArray} \ntype datanya: ${typeof(strArray)}`)

// 2. concat()
/* 
    concat() biasanya di kenal sebagai method penggabungan dengan menggunakan concat kita bisa menggabungkan string atau array dan paling banyak digunakan pada array
*/
// let hallo = 'hallo semuanya selamat pagi';
// let add = ", apa kabar?"
// console.log(hallo.concat(add))
// let array = [2, 3, 4]
// let array2 = [5, 6];

// let result = array.concat(array2)
// console.log(result)



// 4. length
/* 
    length berfungsi untuk mengetahui jumlah huruf(temasuk space) pada suatu string
*/
// // contoh
// let hallo = 'hallo semuanya selamat pagi'

// // data yang dikembalikan akan berupa jumlah(angka) dari string
// console.log(hallo.length)


// 5 replace()
/* 
    replace() berfungsi untuk mengganti nilai pada sting
*/
// cara penulisan code namaData.replace(<datalama>, <databaru>)

// let hallo = 'hallo semuanya selamat pagi'

// let newHello = hallo.replace("pagi", "Siang")
// // semua nilai tidak diganti semua hanya nilai yang ditentukan yang diganti
// console.log(newHello)





// 6. match()
/* 
    match() fungsinya hampir sama seperti filter tetapi hasil yang di tentukan harus spesifik dan tipe data yang dikembalikan akan berupa object
*/

// let hallo = 'Hallo semuanya Selamat Pagi'
// let cari = 'Pagi'
// // hasilnya bertipe data object
// console.log(hallo.match(cari))

// // ubah ke string dengan template literal
// let ubah = hallo.match(cari)
// console.log(`${ubah}`)



// 7. filter()
// seperti namanya filter berfungsi untuk memilih atau memfilter data pada array dengan kondisi yang di tentuka


// let myArray = [25, 9, 40, 8];

// // penggunaan
// let result = myArray.filter(function(e){ return e >= 25});


// console.log(`Hasil: ${result}`)


// 8. unshif() && shift()
/* 
    unshift digunakan untuk menambahkan data ke array dan datanya di tambahkan ke awal array
    shift() digunakan untuk mengambil nilai awal array
*/
// let buah = ["Apel", "Semangka", "Melon", "Nanas"];

// // menambahkan nilai ke awal array menggunakan unshift
// buah.unshift("pisang")
// console.log(buah)
// // mengambil nilai array 
// let awal = buah.shift()
// console.log(awal)

// 9 push()
// push digunakan ketika kita ingin menambahkan data baru ke array dan ingin menambahkan nilai atau datanya di akhir 

// let buah = ["Apel", "Semangka", "Melon", "Nanas"];

// // cara menambahkan 1
// let tamabah1 = "Pisang";
// buah.push(tamabah1);
// console.log(buah)

// // cara menambahkan 2
// buah.push("pir",  'pepaya');
// console.log('Hasil: ', buah);





// 10 pop()
// pop berfungsi untuk mengambil nilai akhir pada array

// let buah = ["Apel", "Semangka", "Melon", "Nanas"];

// // buah.push("Nanas")
// // ada 2 metode untuk menampilkan hasil pop yaitu :

// // hasil dari array yang datanya sudah diambil satu dari belakang
// buah.pop();
// console.log(buah)

// // menampilkan data yang di ambil dari akhir
// let dataAkhir = buah.pop();
// console.log(`Data yang diambil ${dataAkhir}`)



