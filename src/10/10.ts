import {user} from "../08-associative_array/08";

export type UserType = {
    name:string
    hair:number
    address:{city:string,house?:number}
}
export type LaptoopType = {
    title:string
}
export type UserWithLaptopType = UserType & {
    laptop:LaptoopType
}

export type UserWithBooksType = UserType & {
    books:string[]
}
export type WithCompaniesType =  {
    companies:{title:string,id:number}[]
}
export function MakeHair (u:UserType,power:number) {
    const copy = {
        ...u,
        hair:u.hair / power
    }
    copy.hair = copy.hair/power
    return copy
}

export function moveUser (u:UserWithLaptopType,city:string) {

    return {
        ...u,
        address:{
            ...u.address,
            city:city
        }
    }

    // const copy = {
    //     ...u,
    // }
    // copy.address = {
    //     ...copy.address,
    //     city:city
    // }
    //
    // return copy
}
export function moveUserToOtherHouse (u:UserWithLaptopType & UserWithBooksType,house:number) {

    return {
        ...u,
        address: {
            ...u.address,
            house: house
        }
    }
}
export function upgradeUserLaptop (u:UserWithLaptopType,laptop:string) {

    return {
        ...u,
        laptop: {
            ...u.laptop,
            title: laptop
        }
    }
}

export function addNewBooksToUser (u:UserWithLaptopType & UserWithBooksType,newBooks:string[]) {

    return {
        ...u,
        books: [...u.books,newBooks[0],newBooks[1]]
    }
}

export function updateBook (u:UserWithLaptopType & UserWithBooksType,oldBook:string , newBook:string) {
    return {
        ...u,
        books: u.books.map(b =>(b === oldBook) ?  newBook : b)
    }

    // return {
    //     ...u,
    //     books: u.books.map(b => {
    //         if(b === oldBook) {
    //             return newBook
    //         } else {
    //             return b
    //         }
    //
    //     })
    // }
    // return {
    //     ...u,
    //     books: u.books.map(b => {
    //         if(b === oldBook) return newBook
    //          else return b
    //     })
    // }

}
export function removeBook (u:UserWithLaptopType & UserWithBooksType, removedBook:string) {
    return {
        ...u,
        books: u.books.filter(b => b !== removedBook)
    }
}

export function updateCompanyTitle (u:UserWithLaptopType & WithCompaniesType, idCompany:number,titleCompany:string) {
    return {
        ...u,
        companies: u.companies.map(c => c.id === idCompany
            ? {...c,title:titleCompany}
            : c)
    }
}

export const  updateCompanyTitle2 =  (
    companies:{[key:string] : {id:number,title:string}[]},
    username:string,
    companyId:number,
    newTitle:string) => {
    let companyCopy = {...companies}
    companyCopy[username] = companyCopy[username].map(c => c.id === companyId ?
        {...c,title: newTitle} : c )


    return companyCopy
}

