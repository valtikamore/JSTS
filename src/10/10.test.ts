import {
    addNewBooksToUser,
    MakeHair,
    moveUser,
    moveUserToOtherHouse, removeBook, updateBook, updateCompanyTitle,
    updateCompanyTitle2,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType,
    WithCompaniesType
} from '../10/10'




test('reference type test',()=>{
    let user:UserType = {
        name:'Valentine',
        hair:32,
        address:{
            city:'Minsk'
        }
    }
    const cutUser = MakeHair(user,2)
    expect(cutUser.hair).toBe(16)
    expect(user.hair).toBe(16)
    expect(cutUser.address).toBe(user.address)
})
test(' change address',()=>{
    let user:UserWithLaptopType = {
        name:'Valentine',
        hair:32,
        address:{
            city:'Minsk',
            house:12
        },
        laptop:{
            title:'zenbook'
        }
    }

    const movedUser = moveUser(user,'Kiev')


    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(movedUser.address.city).toBe('Kiev')
})

test('upgrade laptop',() => {
    let user:UserWithLaptopType = {
        name:'Valentine',
        hair:32,
        address:{
            city:'Minsk',
            house:12
        },
        laptop:{
            title:'zenbook'
        }
    }

    const userCopy = upgradeUserLaptop(user,'Macboock')


    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).not.toBe(userCopy.laptop)
    expect(userCopy.laptop.title).toBe('Macboock')
    expect(user.laptop.title).toBe('zenbook')
})
test('upgrade laptop',() => {
    let user:UserWithLaptopType & UserWithBooksType = {
        name:'Valentine',
        hair:32,
        address:{
            city:'Minsk',
            house:12
        },
        laptop:{
            title:'zenbook'
        },
        books:['css','html','react','js']
    }

    const userCopy = moveUserToOtherHouse(user,99)


    expect(user).not.toBe(userCopy)
    expect(user.books).toBe(userCopy.books)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).not.toBe(userCopy.address)
    expect(userCopy.address.house).toBe(99)

})
test('add new books to user',() => {
    let user:UserWithLaptopType & UserWithBooksType = {
        name:'Valentine',
        hair:32,
        address:{
            city:'Minsk',
            house:12
        },
        laptop:{
            title:'zenbook'
        },
        books:['css','html','react','js']
    }

    const userCopy = addNewBooksToUser(user,['ts','rest API'])


    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[4]).toBe('ts')
    expect(userCopy.books[5]).toBe('rest API')

})

test('update js to ts ',() => {
    let user:UserWithLaptopType & UserWithBooksType = {
        name:'Valentine',
        hair:32,
        address:{
            city:'Minsk',
            house:12
        },
        laptop:{
            title:'zenbook'
        },
        books:['css','html','react','js']
    }

    const userCopy = updateBook(user,'js','ts')


    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[3]).toBe('ts')
    expect(userCopy.books.length).toBe(3)
})

test('remove js ',() => {
    let user:UserWithLaptopType & UserWithBooksType = {
        name:'Valentine',
        hair:32,
        address:{
            city:'Minsk',
            house:12
        },
        laptop:{
            title:'zenbook'
        },
        books:['css','html','react','js']
    }

    const userCopy = removeBook(user,'js')


    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe('react')
    expect(userCopy.books.length).toBe(3)
})


test('update company name  ',() => {
    let user:UserWithLaptopType & WithCompaniesType  = {
        name:'Valentine',
        hair:32,
        address:{
            city:'Minsk',
            house:12
        },
        laptop:{
            title:'zenbook'
        },
        companies:[{id:1,title:'Епам'},{id:2,title:'it-inc'}]
    }

        const userCopy = updateCompanyTitle(user,1,'Epam')

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.companies).not.toBe(userCopy.companies)
    expect(userCopy.companies[0].title).toBe('Epam')

})

test('update company ',() => {

    let companies = {
        'Valentine' : [{id:1,title:'Епам'},{id:2,title:'it-inc'}],
        'Natasha' : [{id:1,title:'Coffee'},{id:2,title:'School'}]
    }

    const copy = updateCompanyTitle2(companies,'Valentine',1,'Epam')

    expect(copy['Valentine']).not.toBe(companies['Valentine'])
    expect(copy['Natasha']).toBe(companies['Natasha'])
    expect(copy['Valentine'][0].title).toBe('Epam')

})