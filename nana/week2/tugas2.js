
/* 
    2.	Buatlah program searching nama yang dapat dibatasi jumlah outputnya yang 
    menerapkan  callback function dengan data sebagai berikut:
*/
let names = [
    "Abigail", "Alexandra", "Alison",
    "Ammanda", "Angela", "Bella",
    "Carol", "Caroline", "Carolyn",
    "Deirdre", "Diana", "Elizabeth",
    "Ella", "Faith", "Olivia", "Penelope"
]
  function search(str,num, callback) {
      
      try{
          validasiInput(str)
          validasiNum(num)
          callback(str,num, tampilkan)
          
        }catch(err){
            console.log(err)
        }
  }
  function tampilkanHasil(str, num, callback) {
      let result = names.filter((name) => name.toLowerCase().indexOf(str.toLowerCase()) !== -1);
      result = result.slice(0, num);
      if(result == ""){
          console.log(`Nilai tidak ditemukan`)
          return
        }else if(result.length < num){
            console.log (`Jumlah data yang sesuai hanya ${result.length}`)
        }
    callback(result)
  }
  function validasiInput(str){
    if(str == "") throw `input tidak boleh kosong`;
    if(Number(str)) throw `input tidak boleh number`

  }
  function validasiNum(num){
    if(num == '') throw `batas tidak boleh kosong`;
    if(!Number(num)) throw `batas harus berupa string`
  }
  function tampilkan(result){
    console.log(result)
  }

  search('^%', 6, tampilkanHasil);
