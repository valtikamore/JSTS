import {addMoneyToBudget, CreateGreetingMessage, repairHouse, toFireStaff, toHireStaff} from "./03";

export type buildingsType = {
    type:string
    budget:number
    staffCount:number
    address:buildingAddressType
}
export type buildingAddressType = {
    street:buildingStreetType
}
export type buildingStreetType = {
    title:string
}
export type housesType = {
    id?:number
    buildedAt:number
    repaired:boolean
    address:addressType
}
export type addressType = {
    number:number
    street:streetType
}
export type streetType = {
    title:string
}
export type CityType  = {
    title:string
    houses:Array<housesType>
    governmentBuildings:Array<buildingsType>
    citizenNumber:number
}

let city:CityType;

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {
                buildedAt: 2012, repaired: false,
                address: {number: 100, street: {title: 'White street'}}
            },
            {
                buildedAt: 2008, repaired: false,
                address: {number: 100, street: {title: 'Happy street'}}
            },
            {
                buildedAt: 2020, repaired: false,
                address: {number: 101, street: {title: 'Happy street'}}
            },
        ],
        governmentBuildings: [
            {
                type: 'HOSPITAL',
                budget: 2e5,
                staffCount: 2e2,
                address: {
                    street: {
                        title: 'Central Str'
                    }
                }
            },
            {
                type: 'FIRE-STATION',
                budget: 5e5,
                staffCount: 1e3,
                address: {
                    street: {
                        title: 'South Str'
                    }
                }
            }],
        citizenNumber:1e6
    }
})
test('Budget should be changed for HOSPITAL', () => {
    addMoneyToBudget(city.governmentBuildings[0], 1e5);

    expect(city.governmentBuildings[0].budget).toBe(3e5);

})
test('Budget should be changed for FIRE-STATION', () => {
    addMoneyToBudget(city.governmentBuildings[1],-1e5);

    expect(city.governmentBuildings[1].budget).toBe(4e5);

})
test('Houses should be repaired', () => {
    repairHouse(city.houses[1]);

    expect(city.houses[1].repaired).toBeTruthy();

})
test('Staff should be increased', () => {
    toFireStaff(city.governmentBuildings[0], 20);


    expect(city.governmentBuildings[0].staffCount).toBe(220);

})
test('Staff should be increased', () => {
    toHireStaff(city.governmentBuildings[0], 20);


    expect(city.governmentBuildings[0].staffCount).toBe(180);
})
test('greeting', () => {
    const message = CreateGreetingMessage(city);

    expect(message).toBe('Hello New York citizens.I want that you are happy. All 1000000 citizens');
})



