

function matapelajaran(mtk, bahasaIndonesia, bahasaInggris, ipa){
    if(mtk == undefined || bahasaIndonesia == undefined || bahasaInggris == undefined || ipa == undefined)
    {
        console.log("lengkapi nilai");
    }
    else if(typeof(mtk) !== typeof(Number(mtk)) || typeof(bahasaIndonesia) !== typeof(Number(bahasaIndonesia)) || typeof(bahasaInggris) !== typeof(Number(bahasaInggris)) || typeof(ipa) !== typeof(Number(ipa)))
    {
        console.log("jangan memasukan selain angka");
    }
    else{
        let average = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4;
        console.log(`Rata-rata: ${average}`);
        if(average >= 90 && average <= 100){
            console.log(`Grade: A`);
        }
        else if(average >= 80 && average <= 89){
            console.log(`Grade: B`);
        }
        else if(average >= 70 && average <= 79){
            console.log(`Grade: C`);
        }
        else if(average >= 60 && average <= 69){
           console.log(`Grade: D`);
        }
        else{
            console.log(`Grade: E`);
        } 
    }
}

matapelajaran(60,80,85,100);







