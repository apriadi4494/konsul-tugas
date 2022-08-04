var nama = [
  "Abigail",
  "Alexandra",
  "Alison",
  "Amanda",
  "Angela",
  "Bella",
  "Carol",
  "Caroline",
  "Carolyn",
  "Deirdre",
  "Diana",
  "Elizabeth",
  "Ella",
  "Faith",
  "Olivia",
  "Penelope",
];

function cariItem(input, Output, callbackData) {
  try {
    if (input == "") {
      console.log("Data Search Kosong");
    } else if (!isNaN(input)) {
      console.log("Data Search Harus String");
    }
    validasiOutput(Output);
    MencariNama(input, Output, callbackData);
  } catch (error) {
    console.log(error);
  }
}

function validasiOutput(Output) {
  if (Output == "") {
    console.log("Data Output Kosong");
  } else if (isNaN(Output)) {
    console.log("Data Output Harus Number");
  }
  Output = Number(Output);

  // console.log(`Cek number = ${Output}`);
}

function MencariNama(input, Output, callback) {
  //  console.log(`Cek Input masuk ? ${input}`);

  filter = input.toLowerCase();

  datadalamElement = [];

  nama.map((element) => {
    const isidalamElement = element.toLowerCase();
    //console.log(isidalamElement.indexOf(filter));
    if (isidalamElement.indexOf(filter) != -1) {
      datadalamElement.push(element);
      // console.log(datadalamElement.push(element));
    }
  });

  result = datadalamElement.slice(0, Output);
  //  console.log(`Cek Callback = ${result}`);
  if (result == "") {
    console.log(`Data ${input} tidak dapat ditemukan`);
  } else {
    callback(result);
  }
}

function callbackData(result) {
  console.log(result);
}

cariItem("ll", 1, callbackData);
