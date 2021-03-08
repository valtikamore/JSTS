

function icreaseAge(u:UserType){
    u.age++
}
 type UserType= {
    name:string
     age:number
 }
test('big test',() => {
    let user:UserType = {
        name:'Valentine',
        age:24,
    }
    icreaseAge(user)

    expect(user.age).toBe(25)
    const superman = user
    superman.age = 1000
    expect(user.age).toBe(1000)
})
test('array test',() => {
    let users= [
        {
            name:'Valentine',
            age:24,
        },
        {
            name:'Valentine',
            age:24,
        },
    ]

    let admins = users
    admins.push({name:'Polina',age:5})

    expect(users[2]).toEqual({name:'Polina',age:5})


})
test('count test',() => {
    let usersCount = 100

    let adminsCount = usersCount

    adminsCount++





})
type UserAddressType= {
    name:string
    age:number
    address:{title:string}
}
test('Nesting test',() => {
    const address = {
        title:'Minsk'
    }

    let user:UserAddressType = {
        name:'Valentine',
        age:24,
        address: address
    }
    // let addR = user.address

    let user2:UserAddressType = {
        name:'Valentine',
        age:24,
        address:address
    }
    address.title = 'Minsk - city'

    expect(user.address).toBe(user2.address)
    expect(user.address.title).toBe('Minsk - city')

})
test('array reference  test',() => {
    const address = {
        title:'Minsk'
    }

    let user:UserAddressType = {
        name:'Valentine',
        age:24,
        address: address
    }
    // let addR = user.address

    let user2:UserAddressType = {
        name:'Valentine',
        age:24,
        address:address
    }

    const users = [user , user2 , { name:'Misha',age:3, address: address}]

    address.title = 'Minsk - city'

    expect(user.address).toBe(user2.address)
    expect(user.address.title).toBe('Minsk - city')

})

