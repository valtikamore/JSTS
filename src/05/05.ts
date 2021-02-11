export type ManType = {
    name:string
    age:number
}
const people: Array<ManType> = [
    {name:'Valentine Kalchevski',age:24},
    {name:'Natalia Minina',age:21},
    {name:'Misha Circle',age:60},
]
const transform = (man:ManType) => ({
    stack:['css,html','js','tdd','react'],
    firstName:man.name.split(' ')[0],
    lastName:man.name.split(' ')[1]
})
const dev = people.map(transform)
const dev4 = people.map(man => ({
    stack:['css,html','js','tdd','react'],
    firstName:man.name.split(' ')[0],
    lastName:man.name.split(' ')[1]
}))


let messages = people.map(man => `Hello ${man.name.split(' ')[0]} welcome to it-incubator`)
export const createGreetingMessage = (people:Array<ManType>) => {
    return people.map(man => `Hello ${man.name.split(' ')[0]} welcome to it-incubator`)
}