/* 
    3.	Buatlah fungsi yang memiliki parameter nilaiAwal (number) dan nilaiAkhir (number), serta dataArray (array). 
        Fungsi tersebut memiliki validasi nilaiAwal < nilaiAkhir dan jumlah data dalam dataArray harus lebih dari 5.
        Fungsi tersebut akan mencari data didalam dataArray yang memiliki nilai diantara nilaiAwal dan nilaiAkhir, mengurutkan hasil pencarian dan menampilkannya ke layar/console.

*/

function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray){

    try{
        if(nilaiAwal > nilaiAkhir) throw 'Nilai akhir harus lebih besar dari nilai awal';
        if(dataArray.length < 5) throw 'jumlah angka dalam dataArray harus lebih dari 5';

        let result = dataArray.filter(function(num){
            return  num < nilaiAkhir && num > nilaiAwal;
        })
        if(result == false) throw 'Nilai tidak di temukan'
        let data = result.sort((a,b) => a-b)
        console.log(data)
    }catch(err){
        console.log(err)
    }
    
}


seleksiNilai(5, 20 , [2, 25, 4, 14, 17, 30, 8])
seleksiNilai(15, 3 , [2, 25, 4, 14, 17, 30, 8])
seleksiNilai(5, 17 , [2, 25, 4])
seleksiNilai(5, 17 , [2, 25, 4, 1, 30, 18])





