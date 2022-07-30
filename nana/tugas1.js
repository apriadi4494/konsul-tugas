const biodata = {
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
const { name } = biodata.schoolList[2]
console.log(name)