import {user,  usersArray} from "./08"

type usersType = {
    [key:string]:{id:number,name:string}
}
export let users:usersType


beforeEach( () => {
      users = {
        '101' : {id:101,name:'Valentine'},
        '222' : {id:222,name:'Natasha'},
        '333' : {id:333,name:'Valera'},
        '111' : {id:111,name:'Katya'},
        '2222' : {id:222,name:'Dima'},
    }
})
test('should update all users', () => {
    users['222'].name = 'Natalia'
    expect(users['222'].name).toBe('Natalia')

})
test('should update all users', () => {
    delete users['222']
    expect(users['222']).toBeUndefined()

})
// test('sdsd', () => {
//     let userKeys = Object.keys(user)
//     let userValues = Object.values(user)
//     let findUserId222 = usersArray.find(f => f.id === 222)
//
//     // expect(user[0]).toBe('Super Valentine')
//     expect(userKeys).toStrictEqual(['0','1','2','3','4'])
//
//     // expect(userValues[0]).toBe('Super Valentine')
//     expect(findUserId222).toStrictEqual( {id:222,name:'Natasha'})
// })
