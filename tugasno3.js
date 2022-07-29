
    const printSegitiga = 5;

    let result = '';

    if(Number(printSegitiga)){
        for (let i = 5 ; i > 0; i--) {
        
            for (let j = i ; j > 0; j--) {
    
                result += j;
                
            }
            
            result += '\n';
            
        }
    
        console.log(result);
    }
    else{
        console.log("bukan angka")
    }
