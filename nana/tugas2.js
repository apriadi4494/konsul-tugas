/* 
    2.	Buat program yang menghitung rata-rata UN beserta gradenya, dengan mengisi 4 nilai yakni Bahasa indonesia, Bahasa Inggris Matematika dan IPA, yang di dalam program tersebut memiliki validasi yaitu semua nilai tersebut harus diisi, dan juga untuk grade memiliki kondisi dengan ketentuan sebagai berikut:
        90 - 100 = A
        80 - 89 = B
        70 - 79 = C
        60 - 69 = D
        0 - 59 = E
*/

function matapelajaran(mtk, bahasaIndonesia, bahasaInggris, ipa){
   
    if(mtk == undefined || bahasaIndonesia == undefined || bahasaInggris == undefined || ipa == undefined){
        console.log("lengkapi nilai")
    }else if(typeof(mtk) !== typeof(Number(mtk)) || typeof(bahasaIndonesia) !== typeof(Number(bahasaIndonesia)) || typeof(bahasaInggris) !== typeof(bahasaInggris) || typeof(ipa) !== typeof(Number(ipa))){
        console.log("jangan memasukan selain angka")
    }
    else {
        let average = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4;
        console.log(`Rata-rata: ${average}`)
        if(average >= 90 && average <= 100){
            console.log(`Grade: A`)
        }else if(average >= 80 && average <= 89){
            console.log(`Grade: B`)
        }else if(average >= 70 && average <= 79){
            console.log(`Grade: C`)
        }else if(average >= 60 && average <= 69){
            console.log(`Grade: D`)
        }else{
            console.log(`Grade: E`)
        }
    }
}
matapelajaran(100, 80, 70, 0)

