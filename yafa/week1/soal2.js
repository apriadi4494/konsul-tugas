function matapelajaran(mtk, bahasaIndonesia, bahasaInggris, ipa){

    if(mtk == undefined || bahasaIndonesia == undefined || bahasaInggris == undefined || ipa == undefined){
        return console.log("lengkapi nilai")
    }else if(typeof(mtk) !== typeof(Number(mtk)) || typeof(bahasaIndonesia) !== typeof(Number(bahasaIndonesia)) || typeof(bahasaInggris) !== typeof(Number(bahasaInggris)) || typeof(ipa) !== typeof(Number(ipa))){
        return console.log("jangan memasukan selain angka")
    }
    else {
        let ratarata = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4;
        console.log(`Rata-rata: ${ratarata}`)
        if(ratarata >= 90 && ratarata <= 100){
            console.log(`Grade: A`)
        }else if(ratarata >= 80 && ratarata <= 89){
            console.log(`Grade: B`)
        }else if(ratarata >= 70 && ratarata <= 79){
            console.log(`Grade: C`)
        }else if(ratarata >= 60 && ratarata <= 69){
            console.log(`Grade: D`)
        }else{
            console.log(`Grade: E`)
        }
    }
}
matapelajaran(100, 80, 70, 90)