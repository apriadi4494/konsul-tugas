function SeleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
  try {
    if (nilaiAwal === "") {
      throw "Nilai awal kosong";
    } else if (isNaN(nilaiAwal)) {
      throw "Nilai awal harus berupa Angka";
    } else if (nilaiAkhir === "") {
      throw "Nilai akhir kosong";
    } else if (isNaN(nilaiAkhir)) {
      throw "Nilai akhir harus berupa Angka";
    } else if (nilaiAkhir < nilaiAwal) {
      throw "Nilai akhir harus lebih besar dari nilai awal";
    }

    nilaiAwal = Number(nilaiAwal);
    nilaiAkhir = Number(nilaiAkhir);
    cekValidasi(dataArray);
    dataArrayHitung(nilaiAwal, nilaiAkhir, dataArray);
  } catch (error) {
    console.log(error);
  }
}

function cekValidasi(dataArray) {
  if (dataArray === "") {
    console.log("Angka dalam dataArray Kosong");
  } else if (dataArray.length < 5)
    throw "Jumlah angka dalam dataArray harus lebih dari 5";

  for (let i = 0; i < dataArray.length; i++) {
    if (isNaN(dataArray[i])) {
      console.log("Nilai dalam dataArray harus berupa Angka");
    } else if (dataArray[i] === "") {
      console.log("Nilai dalam dataArray ada yang kosong");
    }
  }
}

function dataArrayHitung(nilaiAwal, nilaiAkhir, dataArray) {
  dataFilter = dataArray.filter(
    (nilaiArray) => nilaiArray >= nilaiAwal && nilaiArray <= nilaiAkhir
  );

  //console.log(`data sebelum di sort = ${dataFilter}`);

  dataHasilSort = dataFilter.sort((a, b) => a - b);

  //console.log(`Lihat nilai dataHasilSort = ${dataHasilSort}`);

  if (dataHasilSort != "") {
    console.log(dataHasilSort);
  } else {
    console.log(`Nilai tidak ditemukan`);
  }
}

SeleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]);
SeleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8]);
SeleksiNilai(5, 17, [2, 25, 4]);
SeleksiNilai(5, 17, [2, 25, 4, 1, 30, 18]);
