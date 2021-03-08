export let user = {
    '0' : 'Valentine',
    '1' : 'Natasha',
    '2' : 'Valera',
    '3' : 'Katya',
    '4' : 'Dima',
}


let user1 = {id:105000,name:'Egor'}
// users[user1.id] = user1

export  const usersArray = [
     {id:101,name:'Valentine'},
     {id:222,name:'Natasha'},
     {id:333,name:'Valera'},
     {id:111,name:'Katya'},
     {id:222,name:'Dima'},
]
const usersArrayCopy = [...usersArray,user]