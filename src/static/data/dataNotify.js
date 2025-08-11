const isEvenDay = new Date().getDate() % 2 === 0;

export const staffPerson = [
    /*{ name: 'markov', fullName: 'Василий М.', userName: '@haltandcatch', selected: true, },*/
    { name: 'meshkov', fullName: 'Александр Мешков', userName: '@okmeshkov', selected: true, },
    { name: 'zalygin', fullName: 'Михаил Залыгин', userName: '@mishanyazal', selected: true, },
    /*{ name: 'balamutin', fullName: 'Анатолий Баламутин', userName: '@dezm0d', selected: true, },*/
    { name: 'grigoriev', fullName: 'Владимир Григорьев', userName: '@Lorenzo_Ruiz', selected: true, },
    { name: 'katukhov', fullName: 'Илья Катухов', userName: '@ikatukhov', selected: isEvenDay, },
    { name: 'suprun', fullName: 'Иван Супрун', userName: '@lacronn', selected: !isEvenDay, },
    // { name: 'vorobiev', fullName: 'Павел Воробьёв', userName: '@crpt_vorobiev', selected: isEvenDay, },
]

export const dataNotify = {
    notifyOps: [
        /*{
            alwaysSelected: true,
            selected: true,
            name: 'markov',
            fullName: 'Василий Марков',
            userName: '@haltandcatch'
        },*/
        {
            alwaysSelected: true,
            selected: true,
            name: 'markmeshkovov',
            fullName: 'Александр Мешков',
            userName: '@okmeshkov'
        },
        {
            alwaysSelected: true,
            selected: true,
            name: 'zalygin',
            fullName: 'Михаил Залыгин',
            userName: '@mishanyazal'
        },
        /*{
            alwaysSelected: true,
            selected: true,
            name: 'balamutin',
            fullName: 'Анатолий Баламутин',
            userName: '@dezm0d'
        },*/
         {
            alwaysSelected: true,
            selected: true,
            name: 'grigoriev',
            fullName: 'Владимир Григорьев',
            userName: '@Lorenzo_Ruiz'
        },
        {
            alwaysSelected: false,
            selected: false,
            even: true,
            name: 'katukhov',
            fullName: 'Илья Катухов',
            userName: '@ikatukhov'
        },
        {
            alwaysSelected: false,
            selected: false,
            even: false,
            name: 'suprun',
            fullName: 'Иван Супрун',
            userName: '@lacronn'
        },
       /*{
            alwaysSelected: false,
            selected: false,
            even: false,
            name: 'vorobiev',
            fullName: 'Павел Воробьёв',
            userName: '@crpt_vorobiev'
        },*/
    ],

    notifyStaff: [
        /*{
            alwaysSelected: true,
            selected: true,
            name: 'balamutin',
            fullName: 'Анатолий Баламутин',
            userName: '@dezm0d',
        },*/
        {
            alwaysSelected: true,
            selected: true,
            name: 'grigoriev',
            fullName: 'Владимир Григорьев',
            userName: '@Lorenzo_Ruiz',
        },
        {
            alwaysSelected: false,
            selected: isEvenDay,
            even: true,
            name: 'katukhov',
            fullName: 'Илья Катухов',
            userName: '@ikatukhov'
        },
        {
            alwaysSelected: false,
            selected: isEvenDay,
            even: false,
            name: 'suprun',
            fullName: 'Иван Супрун',
            userName: '@lacronn'
        },
        /*{
            alwaysSelected: false,
            selected: isEvenDay,
            even: false,
            name: 'vorobiev',
            fullName: 'Павел Воробьёв',
            userName: '@crpt_vorobiev'
        },*/
    ],
}
