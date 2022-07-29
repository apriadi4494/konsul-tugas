
//a.	Ubahlah data  tersebut menggunakan spread operator menjadi: 
        // name: nama anda
        // email: email anda
        // hobby: hobi anda


let data = {

    id        : 1,
    name      : "Leanne Graham",
    username  : "Bret",
    email     : "Sincere@april.biz",
    address   : {
                    street   : "Kulas Light",
                    suite    : "Apt. 556",
                    city     : "Gwenborough",
                    zipcode  : "92998-3874",
                },
    phone     : "1-770-736-8031 x56442",
    website   : "hildegard.org",
    
    }


    
let dataTambahan = {

    ...data,
    name  : 'Abdus Salim',
    hobby : 'learn to code',
    email : 'abdussalimsan@gmail.com',
    
};

console.log(dataTambahan);

//b. Ambilah data “street dan city” tersebut menggunakan destructuring

let {street,city} = data.address;

console.log(`${street} ${street}`)