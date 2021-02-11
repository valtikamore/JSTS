import {createGreetingMessage, ManType} from "./05";

let people: Array<ManType> = [
]

beforeEach( () => {
    people = [
        {name:'Valentine Kalchevski',age:24},
        {name:'Natalia Minina',age:21},
        {name:'Misha Circle',age:60},
    ]
})
test('Should get array of greeting messages', () => {
    let messages = createGreetingMessage(people)
    expect(messages.length).toBe(3)
    expect(messages[0]).toBe('Hello Valentine welcome to it-incubator')
    expect(messages[1]).toBe('Hello Natalia welcome to it-incubator')
    expect(messages[2]).toBe('Hello Misha welcome to it-incubator')
})