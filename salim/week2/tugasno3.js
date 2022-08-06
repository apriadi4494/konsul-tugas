function check(nilaiAwal, nilaiAkhir, dataArray){

    try{
        
        validator(nilaiAwal, nilaiAkhir, dataArray);
        const result = selectionData(nilaiAwal, nilaiAkhir, dataArray);
        if(result == false) throw 'Element nilai yang di cari tidak ditemukan';
        const data = result.sort((a,b) => a-b);
        return console.log(data);

    }catch(err){
        return console.log(`\n${err}\n`);
    };
}

function validator(nilaiAwal, nilaiAkhir, dataArray){

    for(let i = 0; i < dataArray.length; i++){
        if(typeof(dataArray[i])!=='number') throw 'Semua nilai tidak boleh mengandung string';
    };

    if(typeof(nilaiAwal) !== 'number') throw 'Semua nilai tidak boleh mengandung string';
    if(typeof(nilaiAkhir) !== 'number') throw 'Semua nilai tidak boleh mengandung string';
    if(nilaiAwal > nilaiAkhir) throw 'Nilai akhir harus lebih besar dari nilai awal';
    if(typeof(dataArray) !== 'object') throw 'data yang dimasukkan harus berupa ARRAY!'
    if(dataArray.length < 6) throw 'Jumlah angka dalam dataArray harus lebih dari 5';
     
}

function selectionData(nilaiAwal, nilaiAkhir, dataArray){
    const resultOfMeasure = dataArray.filter(function(num){
     return  num < nilaiAkhir && num > nilaiAwal;    
     });
     return resultOfMeasure;
 }

check(5, 100, [1, 4, 3, '102', 140, 160]);          //Jika element tidak ditemukan 
check(100, 5, [76, 9, 45, 32, 90, 80]);             //Jika nilaiAwal > nilaiAKhir
check(5, 100, [76, 9, 45, 32, 90]);                 //Jika data kurang dari 6
check('5', 100, [76, 9, 45, 32, 90, 80]);           //Jika nilaiAwal bernilai String
check(5, '100', [76, 9, 45, 32, 90, 80]);           //Jika nilaiAkhir bernilai String
check(5, 100, 5);                                   //Jika yang user inputkan pada dataArray bukan Array
check(5, 100, [76, 9, 45, 32, 90, 'hai']);          //Jika dataArray memiliki setidaknya satu nilai String
check(5, 100, ['hai', 9, 45, 32, 90, 'hai']);       //Jika dataArray memiliki lebih dari satu nilai String
check(5, 100, [1, 9, 45, 4, 90, 80]);               //Jika element ditemukan