const name = [
  "Abigail", "Alexandra", "Alison",
  "Amanda", "Angela", "Bella",
  "Carol", "Caroline", "Carolyn",
  "Deirdre", "Diana", "Elizabeth",
  "Ella", "Faith", "Olivia", "Penelope"]
  ;
  
  //fungsi utama yang berfungsi menampilkan hasil akhir
  function mainFilteritem(keywords, num, showFilter) {
    try{
        if(typeof(keywords)!=='string') throw 'Input yang dimasukkan bukan bertipe string';
        if(isNaN(num)) throw 'Input batas yang dimasukkan bukan berupa angka';
    }
    catch(err){
        return console.log(err);
    } 

    result = processFilter(keywords, num);
    showFilter(result);    
  }

  function processFilter(keywords, num){

    let strLowerKeywords = keywords.toLowerCase();
    let result = name.filter((name) => name.toLowerCase().indexOf(strLowerKeywords) !== -1);
    return result = result.slice(0, num);

  }

  function showFilter(print){
    console.log(print);
  }

  mainFilteritem('an', 6, showFilter);
  mainFilteritem('An', 4, showFilter);
