/* 
    3.	Buatlah program yang memiliki satu variabel dengan nama “printSegitiga” yg berisi tipe data number yang menghasilkan output segitiga terbalik yang berisi angka
*/


let printTriangle = 6
if(Number(printTriangle)){
    let str = "";
    for(let i = printTriangle; i > 0; i--){
        for(let j = 1; j < i ; j++){
            str += j;
            str += " ";
        }
        str += "\n"
    }
    console.log(str)
}else{
    console.log("Data harus Number")
}

// let printTriangle = 6;

// if(Number(printTriangle)){
//     let str = "";
//     for(let i = printTriangle; i > 0; i--){
//         for(let j = i; j > 0; j--){
//             str += j;
//         }
//         str += "\n"
//     }
//     console.log(str)
// }

