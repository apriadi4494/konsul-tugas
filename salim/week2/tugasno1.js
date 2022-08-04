// const waktu = new Date();

// //sebelum kita dapat memanggil fungsi dibawah, kita harus deklarasikan dulu new Date() dalam sebuah variabel, dalam kasus ini saya mengambil nama variabel 'const waktu'

// // 1. .getFullYear()
// console.log(waktu.getFullYear())	            //Get the year as a four digit number (yyyy)

// // 2. .getMonth()                            //Get the month as a number (0-11)
// switch (waktu.getMonth()) {
//     case 0:
//         bulan = "Januari";
//         break;
//     case 1:
//         bulan = "Februari";
//         break;
//     case 2:
//         bulan = "Maret";
//         break;
//     case 3:
//         bulan = "April";
//         break;
//     case 4:
//         bulan = "Mei";
//         break;
//     case 5:
//         bulan = "Juni";
//         break;
//     case 6:
//         bulan = "Juli";
//     case 7:
//         bulan = "Agustus";
//         break;
//     case 8:
//         bulan = "September";
//         break;
//     case 9:
//         bulan = "Oktober";
//         break;
//     case 10:
//         bulan = "November";
//         break;
//     case 11:
//         bulan = "Desember";
 
// }
// console.log(`${bulan} [${waktu.getMonth()+1}]`);








// // 3. .getDate()
// console.log(waktu.getDate()) 	            //Get the day as a number (1-31)









// // 4. .getDay()                             //Get the weekday as a number (0-6)
// switch (waktu.getDay()) {
//     case 0:
//         hari = "Minggu";
//         break;
//     case 1:
//         hari = "Senin";
//         break;
//     case 2:
//         hari = "Selasa";
//         break;
//     case 3:
//         hari = "Rabu";
//         break;
//     case 4:
//         hari = "Kamis";
//         break;
//     case 5:
//         hari = "Jumat";
//         break;
//     case  6:
//         hari = "Sabtu";
// }
// console.log(`${hari} [${waktu.getDay()}]`);  







// // 5. .getHours()
// console.log(waktu.getHours())	            //Get the hour (0-23)







// // 6. .getMinutes()
// console.log(waktu.getMinutes()) 	        //Get the minute (0-59)







// // 7. .getSeconds()
// console.log(waktu.getSeconds())           //Get the second (0-59)







// 8. .length()
// ialah untuk menentukan jumlah data pada string
// // contohnya
// let str = "aku suka dengan sesuatu yang menantang";
// let strLength = str.length;
// console.log(`\nJumlah element (karakter) pada strLength adalah ${strLength} buah\n`);







// 9. .concat()
// ialah untuk menyisipkan data menjadi ke data baru hanya berlaku pada String dan Array
// hampir sama seperti spread operator
//contohnya (1)
// const str1 = 'Abdus Salim';
// const str2 = ' Laila Syifa Sefia';
// const concat = str1.concat(str2);
// console.log(concat);
// contohnya (2)
// const arr1 = ["Abdus", "Salim"];
// const arr2 = ["Laila", "Syifa", "Sefia"];
// const children = arr1.concat(arr2);
// console.log(children);






// // 10. .match()
// // ialah untuk menentukan data yang sama pada string
// // contohnya
// const str1 = "Abdus Salim adalah seorang Mahasiswa";
// const str2 = "Mahasiswa"
// const matching = str1.match(str2);
// // misal str2 sebagai nilai sama tidak ada dalam str1 maka hasil null
// // hasil akan berupa object bukan string lagi
// console.log(`Hasil Data .match() adalah ${matching}`);

