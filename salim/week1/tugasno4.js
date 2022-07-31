//a. Change the data using spread operator to: 
        // name: your name
        // email: your email
        // hobby: your hobby
const data = {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address:{
                street: 'Kulas Light',
                suite: 'Apt. 556',
                city: 'Gwenborough',
                zipcode: '92998-3874',
            },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
};
const dataMerge = {
    ...data,
    name: 'Abdus Salim',
    hobby: 'learn to code',
    email: 'abdussalimsan@gmail.com',
};
console.log(dataMerge);

//b. Pick the data “street and city” using destructuring
const {street,city} = data.address;
console.log(`${street}\n${city}`);