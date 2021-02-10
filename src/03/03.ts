import {student, StudentType} from "../02/02";
import {buildingsType, CityType, housesType} from "./03_02.test";

const sum = (a:number,b:number) => a+b

const result = sum(sum(1,2) , sum(2,3))


export const addSkill = (student:StudentType,skill:string) => {
    student.stackTechnologies.push({
        id:new Date().getTime(),
        title:skill
    });
};
export const makeStudentPassive = (s:StudentType) => {
    s.isActive = false
};

export const doesStudentLiveInCity = (s:StudentType ,cityName:string ) => {
    return s.address.city === cityName
};
export const addMoneyToBudget = (building:buildingsType , budget: number) => {
    building.budget += budget;
};
export const repairHouse = (housesType: housesType) => {
    housesType.repaired = true;
}
export function toFireStaff(building: buildingsType, number: number){
    building.staffCount +=number
}
export function toHireStaff(building: buildingsType, number: number){
    building.staffCount -=number
}
export const CreateGreetingMessage = (city: CityType) => {
    return `Hello ${city.title} citizens.I want that you are happy. All ${city.citizenNumber} citizens`
}