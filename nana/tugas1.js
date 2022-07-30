
/* 
    1.	Buat variabel dengan nama biodata dan tipe data object dengan value dan tipe data  sebagai berikut:
    ●	name (string)
    ●	age(number)
    ●	hobbies (array) minimal 3 elements
    ●	IsMaried (boolean)
    ●	schoolList (Array of Object) with key name, yearIn, yearOut, and major (if any, if no set “null” ) minimal 3 elements
    ●	skills (Array of Object) with key skillName and level (beginner, advanced, expert) minimal 2 elements
    ●	interestInCoding (Boolean)
*/



let biodata = {
    name: 'Taryana',
    age: 19,
    hobbies: ['nonton anime', 'coding', 'main game'],
    isMarried: false,
    schoolList: [
        {
            name: 'SDN Sukra Wetan 3',
            yearIn: 2010,
            yearOur: 2016,
            major: null
        },
        {
            name: 'SMPN 1 Sukra',
            yearIn: 2016,
            yearOur: 2019,
            major: null
        },
        {
            name: 'SMAN 1 Kandanghaur',
            yearIn: 2019,
            yearOur: 2022,
            major: 'Mipa'
        }
    ],
    skills: [
        {
            skillName: 'Javascript',
            level: 'beginner'
        },
        {
            skillName: 'HTML, CSS',
            level: 'beginner'
        }
    ],
    interestInCoding: true
}

console.log(biodata.schoolList[0].name)
const {name} = biodata.schoolList[2]
console.log(name)