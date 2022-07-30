const printSegitiga = 5;

    if(printSegitiga===Number(printSegitiga))
    {
        let result = [];
        for (let i = printSegitiga ; i > 0; i--)
        {
            for (let j = 1 ; j <= i; j++)
            {
                result += j;
            }
            result += '\n';  
        } 
        console.log(result);
    }else{
        console.log('Inputan yang anda masukkan bukanlah sebuah Angka');
    }