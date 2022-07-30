const printTriangle = 6
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