//the main function for checking, validating and printing the result exam 

function mataPelajaranValidation(nilaiUNAS){

    const {mtk,bahasaIndonesia,bahasaInggris,ipa} = nilaiUNAS;

    if(mtk == undefined || bahasaIndonesia == undefined || bahasaInggris == undefined || ipa == undefined)
    {
        console.log('Tolong lengkapi nilai');
        return;
    }
    if(isNaN(mtk)||isNaN(bahasaIndonesia)||isNaN(bahasaInggris)||isNaN(ipa))
    {
        console.log('Tolong hindari memasukkan selain angka');
        return;
    }

    let result = mataPelajaranCalc(mtk, bahasaIndonesia, bahasaInggris, ipa)
    console.log(result);
}

//the funtion for calculating the exam scores

function mataPelajaranCalc(mtk, bahasaIndonesia, bahasaInggris, ipa){
    
    let average = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4;

if(mtk < 0 || bahasaIndonesia < 0 || bahasaInggris <0 || ipa < 0 || mtk > 100 || bahasaIndonesia >100 || bahasaInggris >100 || ipa >100) return `Tolong masukkan setiap nilai hanya dalam interval 0 hingga 100 saja!`;

if(average >= 90 && average <= 100) return `Rata-rata: ${average}
Grade: A`;
if(average >= 80 && average <= 89) return `Rata-rata: ${average}
Grade: B`;
if(average >= 70 && average <= 79) return `Rata-rata: ${average}
Grade: C`;
if(average >= 60 && average <= 69) return `Rata-rata: ${average}
Grade: D`;
return `Rata-rata: ${average}
Grade: E`;     
}

//the object that act as a parameter receiver

const nilaiUn= {
    mtk: 100,
    bahasaIndonesia: 60,
    bahasaInggris: 90,
    ipa: 100
}

//the callback for main function 

mataPelajaranValidation(nilaiUn);