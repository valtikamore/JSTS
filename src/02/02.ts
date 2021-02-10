
type StudentHomeType = {
    homeNumber:number
    appartmentsNumber:number
}
type StudentAddressType = {
    city: string
    street: string
    home:StudentHomeType
}
type StudentTechnologiesType = {
    id:number
    title:string
}
export type  StudentType = {
    id:number
    name:string
    age:number
    isActive:boolean
    address:StudentAddressType
    stackTechnologies:Array<StudentTechnologiesType>
}

export const student : StudentType= {
    id:1,
    name: 'Valentine',
    age: 24,
    isActive:true,
    address: {
        city: 'Minsk',
        street: 'Golubeva',
        home: {
            homeNumber: 25,
            appartmentsNumber: 222
        }
    },
    stackTechnologies: [
        {id: 1, title: 'Html'},
        {id: 2, title: 'Javascript'},
        {id: 3, title: 'React'},
        {id: 4, title: 'Angular'}
    ]
};
