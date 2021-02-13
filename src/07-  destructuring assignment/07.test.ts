import { ManType } from "./destructuring"



let props:ManType

beforeEach(() => {
    props = {
        name:'Valentine',
        age:24,
        lessons:[{title:'1'},{title:'2'},{title:'3',name:'react'}],
        address: {
            street: {
                title: 'Golybeva'
            }
        }
    }
})
test('', ()=> {


    // const age = props.age
    // const name = props.name

    const {age,lessons} = props

    const a = props.age
    const l = props.lessons

    expect(age).toBe(24)
    expect(lessons.length).toBe(3)


    expect(a).toBe(24)
})
test('bla bla ', ()=> {
    const [value1,value2] = props.lessons
    expect(value1.title).toBe('1')
    expect(value2.title).toBe('2')

})
test('bla bla bla ', ()=> {
    const [ls1, ,...restValue] = props.lessons
    expect(ls1.title).toBe('1')
    expect(restValue.length).toBe(1)
    expect(restValue[0]).toStrictEqual({title:'3',name:'react'})

})