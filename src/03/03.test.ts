import {StudentType} from "../02/02";
import {addSkill, doesStudentLiveInCity, makeStudentPassive} from "./03";


let student:StudentType;

beforeEach(()=> {
    student = {
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
});
test ('new tech skill should be added to student', () => {
    expect(student.stackTechnologies.length).toBe(4);

    addSkill(student,'Javascript');

    expect(student.stackTechnologies.length).toBe(5);
    expect(student.stackTechnologies[4].title).toBe('Javascript');
    expect(student.stackTechnologies[4].id).toBeDefined();
});
test ('student should be made active', () => {
    expect(student.isActive).toBe(true);

    makeStudentPassive(student);

    expect(student.isActive).toBe(false);
});

test ('does student live in city?', () => {
    let result1 = doesStudentLiveInCity(student,'Moscow');
    let result2 = doesStudentLiveInCity(student,'Minsk');

    expect(result1).toBe(false);
    expect(result2).toBe(true);
});