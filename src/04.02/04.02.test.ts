import {CityType} from "../03/03_02.test";
import {demolishHousesOnTheStreet, getBuildingsWithStaffCountGreaterThen, getHousesOnTheStreet} from "./04.02";

let city:CityType
beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {
                id:1,buildedAt: 2012, repaired: false,
                address: {number: 100, street: {title: 'White street'}}
            },
            {
                id:2,buildedAt: 2008, repaired: false,
                address: {number: 100, street: {title: 'Happy street'}}
            },
            {
                id:3,buildedAt: 2020, repaired: false,
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

test('Houses should be destroyed', () => {
    demolishHousesOnTheStreet(city,'Happy street')
    expect(city.houses.length).toBe(1)
    expect(city.houses[0].id).toBe(1)
})
test('building with correct staff count', () => {

    let buildings = getBuildingsWithStaffCountGreaterThen(city.governmentBuildings, 500)
    expect(buildings.length).toBe(1)
    expect(buildings[0].type).toBe('FIRE-STATION')
})
